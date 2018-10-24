import { NgModule } from '@angular/core';

import { ListEmployeesComponent } from '../employee/list-employees/list-employees.component';
import { CreateEmployeeComponent } from '../employee/create-employee/create-employee.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes =[
  { path: 'list', component: ListEmployeesComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];



@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
