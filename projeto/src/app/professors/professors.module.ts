import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProfessorComponent } from './add-professor/add-professor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AddProfessorComponent],
  exports: [AddProfessorComponent]
})
export class ProfessorsModule { }
