import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Polizascoberturas } from 'src/app/interface/polizascoberturas';

@Component({
  selector: 'app-polizacobertura-delete-modal',
  templateUrl: './polizacobertura-delete-modal.component.html',
  styleUrls: ['./polizacobertura-delete-modal.component.css']
})
export class PolizacoberturaDeleteModalComponent implements OnInit {

  constructor(
    private dialogReference:MatDialogRef<PolizacoberturaDeleteModalComponent>, 
    @Inject(MAT_DIALOG_DATA)public dataPolizaCobertura: Polizascoberturas
  ) { }

  ngOnInit(): void {
  }

  confirmDelete(){
    if (this.dataPolizaCobertura) {
      this.dialogReference.close("eliminar");
    }
  }

}
