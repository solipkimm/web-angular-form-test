import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() id!: number;
  @Input() firstName!: string;
  @Input() lastName!: string;

  constructor() { 
  }

  ngOnInit(): void {
  }

  fullName(): string {
    if (this.firstName && this.lastName){
      return this.firstName + " " + this.lastName;
    } else {
      return "";
    }
}

  email(): string {
    if (this.firstName && this.lastName){
      let regexp: RegExp=/[A-Za-z]/;
      let lastNameChar = "";
  
      for (let i = 0; i < this.lastName.length; i++){
        let char = this.lastName.slice(i, i+1);
        if (char.match(regexp)){
          lastNameChar += char
        }
      }
  
      return this.firstName.slice(0, 1).toLowerCase() + lastNameChar.slice(0, 5).toLowerCase() + "@web422.com";
    } else {
      return "";
    }
  } 
}
