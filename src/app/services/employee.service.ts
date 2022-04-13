import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const baseUrl = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http:HttpClient) { }

  //list emp
  getEmpList(){
    return this.http.get(baseUrl + 'api/employees/list');
  }

  //get id
  getId(id){
    return this.http.get(baseUrl + `api/employees/id/${id}`);
  }

  //Add Employee
  addEmp(emp){
    return this.http.post(baseUrl+'api/employees/add', emp)
  }

  // Edit Emp
  editEmp(id,emp){
    return this.http.put(baseUrl+ `api/employees/edit/${id}`, emp)
  }

  //delete emp
  deleteEmp(id){
    return this.http.delete(baseUrl+`api/employees/delete/${id}`);
  }
}
