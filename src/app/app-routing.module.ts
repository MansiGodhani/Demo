import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from "./components/employee/employee.component";
import {AddEmployeeComponent} from "./components/add-employee/add-employee.component";
import {EditEmployeeComponent} from "./components/edit-employee/edit-employee.component";

const routes: Routes = [
  { path:'', component:EmployeeComponent},
  { path:'addEmployees', component:AddEmployeeComponent},
  { path:'employees/edit/:id', component:EditEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
