import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component'
import { EmployeeFormComponent } from './employee-form/employee-form.component'

const routes: Routes = [
  { path: "employeeForm", component: EmployeeFormComponent},
  { path: "", redirectTo: '/employeeForm', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
