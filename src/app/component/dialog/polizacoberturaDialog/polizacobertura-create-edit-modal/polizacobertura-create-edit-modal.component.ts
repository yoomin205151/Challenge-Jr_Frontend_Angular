import { Component, OnInit, Inject } from '@angular/core';

import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Polizascoberturas } from 'src/app/interface/polizascoberturas';
import { PolizascoberturaDATAService } from 'src/app/services/polizascobertura/polizascobertura-data.service';
import { PolizasDATAService } from 'src/app/services/polizas/polizas-data.service';
import { Polizas } from 'src/app/interface/polizas';
import { Coberturas } from 'src/app/interface/coberturas';
import { CoberturasDATAService } from 'src/app/services/coberturas/coberturas-data.service';

@Component({
  selector: 'app-polizacobertura-create-edit-modal',
  templateUrl: './polizacobertura-create-edit-modal.component.html',
  styleUrls: ['./polizacobertura-create-edit-modal.component.css']
})
export class PolizacoberturaCreateEditModalComponent implements OnInit {

  formPolizaCobertura: FormGroup;
  tittleAction: string = "Nuevo";
  buttonAction: string = "Guardar";
  listPolizaCobertura: Polizascoberturas[] = [];
  listPoliza: Polizas[] = [];
  listCobertura: Coberturas[] = [];

  constructor(
    private dialogReference:MatDialogRef<PolizacoberturaCreateEditModalComponent>, 
    private fb:FormBuilder, 
    private snackBar:MatSnackBar, 
    private polizaCoberturaService:PolizascoberturaDATAService,
    private polizaService:PolizasDATAService,
    private coberturaService:CoberturasDATAService,
    @Inject(MAT_DIALOG_DATA)public dataPolizaCobertura: Polizascoberturas) {

      this.formPolizaCobertura = this.fb.group({
        polizaId:[ ,Validators.required ],
        coberturaId:[ ,Validators.required ],
        montoAsegurado:[ ,Validators.required ]
      })

      this.polizaService.getList().subscribe({
        next:(data)=>{
          this.listPoliza = data;
        },error:(e)=>{
          console.log(e);
        }
      })

      this.coberturaService.getList().subscribe({
        next:(data)=>{
          this.listCobertura = data;
        },error:(e)=>{
          console.log(e);
        }
      })

      this.polizaCoberturaService.getList().subscribe({
        next:(data)=>{
          this.listPolizaCobertura = data;
        },error:(e)=>{
          console.log(e);
        }
      })

    }
    
    openAlert(message: string, action: string) {
      this.snackBar.open(message, action,{
        horizontalPosition:"end",
        verticalPosition:"top",
        duration:3000
      });
    }

    
    addEditPolizaCobertura(){
      console.log(this.formPolizaCobertura)
      console.log(this.formPolizaCobertura.value)
  
      const model : Polizascoberturas ={
        id: 0,
        polizaId: this.formPolizaCobertura.value.polizaId,
        coberturaId: this.formPolizaCobertura.value.coberturaId,
        montoAsegurado: this.formPolizaCobertura.value.montoAsegurado
      }
  
      if (this.dataPolizaCobertura == null) {
        
        this.polizaCoberturaService.add(model).subscribe({
          next:(data)=>{
            this.openAlert("La polizacobertura fue creada", "Listo");
            this.dialogReference.close("creado");
          },error:(e)=>{
            console.log("errror al crear polizacobertura en el servicio" + e.message);
            this.openAlert("No se pudo crear la polizacobertura", "Error");
            this.dialogReference.close();
          }
        })
  
      }else{
  
        this.polizaCoberturaService.update(this.dataPolizaCobertura.id, model).subscribe({
          next:(data)=>{
            this.openAlert("La cobertua fue editado correctamente", "Listo");
            this.dialogReference.close("editado");
          },error:(e)=>{
            console.log("errror al editar la cobertura en el servicio" + e.message);
            this.openAlert("No se pudo editar la cobertura", "Error");
            this.dialogReference.close();
          }
        })
  
      }
   
    }

    ngOnInit(): void {
      if (this.dataPolizaCobertura) {
        this.formPolizaCobertura.patchValue({
          polizaId: this.dataPolizaCobertura.polizaId,
          coberturaId: this.dataPolizaCobertura.coberturaId,
          montoAsegurado: this.dataPolizaCobertura.montoAsegurado
        });
        this.tittleAction = "Editar"; 
        this.buttonAction = "Actualizar"; 
      } else {
        this.tittleAction = "Nuevo"; 
        this.buttonAction = "Guardar"; 
      }
    }
    

}
