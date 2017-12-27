import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { AngularMaterialImporterModule } from '../angular-material-importer/angular-material-importer.module'

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialImporterModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule { }
