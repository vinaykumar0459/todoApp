import { Component, OnInit } from '@angular/core';
import { employeeData } from './todo';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  Designations = ['UI Developer', 'Senior UI Developer', 'Team Lead', 'Project Manager'];
  empData: any;
  employeesData: any[] = [];
  isEdit: boolean;
  allData: any[] = [];
  constructor() {
    this.empData = new employeeData;
  }

  ngOnInit() {
    this.employeesData = JSON.parse(localStorage.getItem('employeesDetails') || "[]");
    this.allData = this.employeesData;
  }
  public onSubmit(form: NgForm) {
    let today = new Date();
    if (this.isEdit == true) {
      this.empData.modifiedDate = today;
      let editedData = this.employeesData.filter(x => {
        x.id == this.empData.id;
      });
      console.log(editedData)
      this.employeesData[editedData[0]] = this.empData;
      console.log(this.employeesData, 'employees data')
      this.isEdit = false;
    } else {
      this.empData.createdDate = today;
      if (this.employeesData.length != 0) {
        let last: any = this.employeesData[this.employeesData.length - 1];
        this.empData.id = last.id + 1;
      } else {
        this.empData.id = 1;
      }
      console.log(this.empData)
      this.employeesData.push(this.empData)
    }
    this.setLocalStorage();
    this.empData = new employeeData;
  }
  public edit(data) {
    this.empData = data;
    this.isEdit = true;
  }
  public delete(data, i: any) {
    this.employeesData.splice(i, 1);
    alert('Employee ' + data.empName + ' data is deleted');
    this.setLocalStorage();
  }
  public setLocalStorage() {
    localStorage.setItem('employeesDetails', JSON.stringify(this.employeesData))
  }
  public employeeDesignation(val: any) {
    console.log(val)
    if(val != undefined ) {
     this.employeesData = this.allData.filter(x => x.designation === val)
    } else {
      this.employeesData = this.allData;
    }
    
    console.log(this.employeesData)
  }
}

