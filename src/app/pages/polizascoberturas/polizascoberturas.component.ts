import {AfterViewInit, ViewChild, Component, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Polizascoberturas } from 'src/app/interface/polizascoberturas';
import { PolizascoberturaDATAService } from 'src/app/services/polizascobertura/polizascobertura-data.service';
import {MatDialog} from '@angular/material/dialog';
import { PolizacoberturaCreateEditModalComponent } from 'src/app/component/dialog/polizacoberturaDialog/polizacobertura-create-edit-modal/polizacobertura-create-edit-modal.component';
import { PolizacoberturaDeleteModalComponent } from 'src/app/component/dialog/polizacoberturaDialog/polizacobertura-delete-modal/polizacobertura-delete-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-polizascoberturas',
  templateUrl: './polizascoberturas.component.html',
  styleUrls: ['./polizascoberturas.component.css']
})
export class PolizascoberturasComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['Id', 'Poliza', 'Cobertura', 'MontoAsegurado', 'Acciones'];
  dataSource = new MatTableDataSource<Polizascoberturas>();

  constructor(private polizCobertura:PolizascoberturaDATAService, public dialog: MatDialog, private snackBar: MatSnackBar) { }


  ngOnInit(): void {
    this.viewPolizaCobertura();
    this.dataSource.filterPredicate = this.customFilterPredicate();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  customFilterPredicate(): (data: any, filter: string) => boolean {
    const filterFunction = function(data: any, filter: string): boolean {
      const searchTerms = filter.split(' ');
      return searchTerms.every(term =>
        data.poliza.nombre.toLowerCase().includes(term.toLowerCase()) ||
        data.cobertura.nombre.toLowerCase().includes(term.toLowerCase()) ||
        data.montoAsegurado.toString().toLowerCase().includes(term.toLowerCase())
      );
    };
    return filterFunction;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }  

  viewPolizaCobertura(){
    this.polizCobertura.getList().subscribe({
      next:(dataResponse)=>{
        console.log(dataResponse);
        this.dataSource.data = dataResponse;
      },error:(e)=>{
        console.log(e);
      }
    })
  }

  openDialog() {
    this.dialog.open(PolizacoberturaCreateEditModalComponent,{
      disableClose:true,
      width:"350px",
      data: null
    }).afterClosed().subscribe(result => {
      if (result == "creado") {
        this.viewPolizaCobertura();
      }
    });
  }

  openEditDialog(dataPolizaCobertura:Polizascoberturas) {
    this.dialog.open(PolizacoberturaCreateEditModalComponent,{
      disableClose:true,
      width:"350px",
      data: dataPolizaCobertura 
    }).afterClosed().subscribe(result => {
      if (result == "editado") {
        this.viewPolizaCobertura();
      }
    });
  }

  openAlert(message: string, action: string) {
    this.snackBar.open(message, action,{
      horizontalPosition:"end",
      verticalPosition:"top",
      duration:3000
    });
  }

  openDeleteDialog(dataPolizaCobertura:Polizascoberturas){
    this.dialog.open(PolizacoberturaDeleteModalComponent,{
      disableClose:true,
      data: dataPolizaCobertura 
    }).afterClosed().subscribe(result => {
      if (result == "eliminar") {        
        this.polizCobertura.delete(dataPolizaCobertura.id).subscribe({
          next:(data)=>{
            this.openAlert("PolizaCobertura fue eliminado","Listo");
            this.viewPolizaCobertura();
          },error:(e)=>{
            {console.log(e)}
          }
        })        
      }
    });
  }

}
