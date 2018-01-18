import { Component, OnInit } from '@angular/core';

import { Professor } from '../professors.model';

@Component({
  selector: 'app-add-professor',
  templateUrl: './add-professor.component.html',
  styleUrls: ['./add-professor.component.css']
})

export class AddProfessorComponent implements OnInit {

  siap: any;
  name: any;
  nickname: any;

  professor = new Professor(123, "rola", "ro");

  constructor() { }

  ngOnInit() {  }

  onSubmit() { }
  
}
