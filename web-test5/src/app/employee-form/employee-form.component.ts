import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from "@angular/forms";
import { EmployeeComponent } from '../employee/employee.component'

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  formId!: number;
  formFirstName!: string;
  formLastName!: string;

  constructor() { 
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log("submit", form.value)
  }
}
