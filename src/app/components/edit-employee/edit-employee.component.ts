import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  editForm:FormGroup;
  id:number;
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private empService:EmployeeService
  ) { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      // empId: new FormControl(''),
      Name: new FormControl(''),
      EmpCode: new FormControl(''),
      Salary: new FormControl('')
    });

    this.id = this.route.snapshot.params['id'];
    this.empService.getId(this.id).subscribe((data) => {
      console.log('data in edit form id:',this.id);
      for(let i=0;i<data['length'];i++){
        this.editForm = new FormGroup({
          Name: new FormControl(data[i]['Name']),
          EmpCode: new FormControl(data[i]['EmpCode']),
          Salary: new FormControl(data[i]['Salary'])
        });
      }
    });
  }

  submit(){
    console.log('Form Submitted..', this.editForm.value);
    this.empService.editEmp(this.id, this.editForm.value).subscribe(
      (result) => {
        // console.log("Updated Successfully..",result);
        this.router.navigate([''])
      }
    )
  }

}
