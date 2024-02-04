import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Coberturas } from 'src/app/interface/coberturas';


@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  constructor(
    private dialogReference:MatDialogRef<DeleteModalComponent>, 
    @Inject(MAT_DIALOG_DATA)public dataCobertura: Coberturas
  ) { }

  ngOnInit(): void {
  }

  confirmDelete(){
    if (this.dataCobertura) {
      this.dialogReference.close("eliminar");
    }
  }
  

}
