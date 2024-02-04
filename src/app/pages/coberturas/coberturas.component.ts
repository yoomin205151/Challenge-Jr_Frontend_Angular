import {AfterViewInit, ViewChild, Component, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Coberturas } from 'src/app/interface/coberturas';
import { CoberturasDATAService } from 'src/app/services/coberturas/coberturas-data.service';
import {MatDialog} from '@angular/material/dialog';
import { EditcreateModalComponent } from '../../component/dialog/coberturaDialog/editcreate-modal/editcreate-modal.component';
import { DeleteModalComponent } from '../../component/dialog/coberturaDialog/delete-modal/delete-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-coberturas',
  templateUrl: './coberturas.component.html',
  styleUrls: ['./coberturas.component.css']
})
export class CoberturasComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['Id', 'Nombre', 'ResponsabilidadCivil', 'DestruccionTotalAccidentes', 'CristalesLaterales', 'LunetasParabrisas', 'Cerraduras', 'Acciones'];
  dataSource = new MatTableDataSource<Coberturas>();

  constructor(private cobertura:CoberturasDATAService, public dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.viewCobertura();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewCobertura(){
    this.cobertura.getList().subscribe({
      next:(dataResponse)=>{
        console.log(dataResponse);
        this.dataSource.data = dataResponse;
      },error:(e)=>{
        console.log(e);
      }
    })
  }

  openDialog() {
    this.dialog.open(EditcreateModalComponent,{
      disableClose:true,
      width:"350px"
    }).afterClosed().subscribe(result => {
      if (result == "creado") {
        this.viewCobertura();
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

  openEditDialog(dataCobertura:Coberturas) {
    this.dialog.open(EditcreateModalComponent,{
      disableClose:true,
      width:"350px",
      data: dataCobertura 
    }).afterClosed().subscribe(result => {
      if (result == "editado") {
        this.viewCobertura();
      }
    });
  }

  openDeleteDialog(dataCobertura:Coberturas){
    this.dialog.open(DeleteModalComponent,{
      disableClose:true,
      data: dataCobertura 
    }).afterClosed().subscribe(result => {
      if (result == "eliminar") {
        
        this.cobertura.delete(dataCobertura.id).subscribe({
          next:(data)=>{
            this.openAlert("La cobertura fue eliminado","Listo");
            this.viewCobertura();
          },error:(e)=>{
            {console.log(e)}
          }
        })        
      }
    });
  }

}

