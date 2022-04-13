import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../services/employee.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  empList:any;
  constructor(
    private modalService: NgbModal,
    private empService:EmployeeService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.empService.getEmpList().subscribe((data) => {
      console.log('employee List', data);
      this.empList = data;
    });
  }

  editEmp(id){
    console.log('click edit employee');
    this.empService.getId(id).subscribe((data) => {
      console.log(id,data);
      // this.users=user;
      // console.log('pass data',this.customers);
      this.router.navigate([`employees/edit/${id}`]);
    });
  }

  deleteEmp(content,id){
    console.log('click delete employee');
    this.modalService.open(content).result.then((result) => {
      console.log('click yes for delete', result);
      this.empService.deleteEmp(id).subscribe(res=>{
        this.getList();
        console.log(res);
      })
    }, (err) => {
      console.log('reason', err);
    });
  }
}
