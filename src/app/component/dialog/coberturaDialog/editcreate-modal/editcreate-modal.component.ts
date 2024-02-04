import { Component, OnInit, Inject } from '@angular/core';

import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Coberturas } from 'src/app/interface/coberturas';
import { CoberturasDATAService } from 'src/app/services/coberturas/coberturas-data.service';

@Component({
  selector: 'app-editcreate-modal',
  templateUrl: './editcreate-modal.component.html',
  styleUrls: ['./editcreate-modal.component.css']
})
export class EditcreateModalComponent implements OnInit {

  formCobertura: FormGroup;
  tittleAction: string = "Nuevo";
  buttonAction: string = "Guardar";
  listCobertura: Coberturas[] = []; 

  constructor(
    private dialogReference:MatDialogRef<EditcreateModalComponent>, 
    private fb:FormBuilder, 
    private snackBar:MatSnackBar, 
    private coberturaService:CoberturasDATAService,
    @Inject(MAT_DIALOG_DATA)public dataCobertura: Coberturas) {

      this.formCobertura = this.fb.group({
        nombre:[ ,Validators.required ],
        responsabilidadCivil:[false],
        destruccionTotalAccidentes:[false],
        cristalesLaterales:[false],
        lunetasParabrisas:[false],
        cerraduras:[false]
      })

      this.coberturaService.getList().subscribe({
        next:(data)=>{
          this.listCobertura = data;
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

  addEditCobertura(){
    console.log(this.formCobertura)
    console.log(this.formCobertura.value)

    const model : Coberturas ={
      id: 0,
      nombre: this.formCobertura.value.nombre,
      responsabilidadCivil: this.formCobertura.value.responsabilidadCivil,
      destruccionTotalAccidentes: this.formCobertura.value.destruccionTotalAccidentes,
      cristalesLaterales: this.formCobertura.value.cristalesLaterales,
      lunetasParabrisas: this.formCobertura.value.lunetasParabrisas,
      cerraduras: this.formCobertura.value.cerraduras
    }

    if (this.dataCobertura == null) {
      
      this.coberturaService.add(model).subscribe({
        next:(data)=>{
          this.openAlert("La cobertua fue creada", "Listo");
          this.dialogReference.close("creado");
        },error:(e)=>{
          console.log("errror al crear cobertura en el servicio" + e.message);
          this.openAlert("No se pudo crear la cobertura", "Error");
          this.dialogReference.close();
        }
      })

    }else{

      this.coberturaService.update(this.dataCobertura.id, model).subscribe({
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
    if (this.dataCobertura) {
      this.formCobertura.patchValue({
        nombre: this.dataCobertura.nombre,
        responsabilidadCivil: this.dataCobertura.responsabilidadCivil,
        destruccionTotalAccidentes: this.dataCobertura.destruccionTotalAccidentes,
        cristalesLaterales: this.dataCobertura.cristalesLaterales,
        lunetasParabrisas: this.dataCobertura.lunetasParabrisas,
        cerraduras: this.dataCobertura.cerraduras
      })
      this.tittleAction = "Editar";
      this.buttonAction = "Actualizar";
    }else{
      this.tittleAction = "Nuevo"; 
      this.buttonAction = "Guardar"; 
    }

  
  }

}
