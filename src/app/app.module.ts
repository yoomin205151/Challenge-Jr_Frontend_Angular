import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// imports AngularMaterial
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import { CoberturasComponent } from './pages/coberturas/coberturas.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';


import { PolizascoberturasComponent } from './pages/polizascoberturas/polizascoberturas.component';
import { EditcreateModalComponent } from './component/dialog/coberturaDialog/editcreate-modal/editcreate-modal.component';
import { DeleteModalComponent } from './component/dialog/coberturaDialog/delete-modal/delete-modal.component';
import { PolizacoberturaCreateEditModalComponent } from './component/dialog/polizacoberturaDialog/polizacobertura-create-edit-modal/polizacobertura-create-edit-modal.component';
import { PolizacoberturaDeleteModalComponent } from './component/dialog/polizacoberturaDialog/polizacobertura-delete-modal/polizacobertura-delete-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    CoberturasComponent,
    PolizascoberturasComponent,
    EditcreateModalComponent,
    DeleteModalComponent,
    PolizacoberturaCreateEditModalComponent,
    PolizacoberturaDeleteModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
