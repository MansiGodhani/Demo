import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../../services/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  empForm:FormGroup;
  errMessage:boolean=false;

  constructor(private empService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(){
    this.empForm = new FormGroup({
      EmpId:new FormControl('',[Validators.required]),
      Name: new FormControl('',[Validators.required]),
      EmpCode: new FormControl('',[Validators.required]),
      Salary: new FormControl('',[Validators.required])
    });
  }
  submit(){
    console.log('Form Submitted..', this.empForm.value);
    this.empService.addEmp(this.empForm.value).subscribe(res=>{
      console.log(res);
      this.router.navigate(['']);
    },error => {
      console.log(error);
      this.errMessage = true;
    })

  }

}
