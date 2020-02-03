import { Component, OnInit } from '@angular/core';
// import { todoList } from './todo';

@Component({
  selector: 'app-todo1',
  templateUrl: './todo1.component.html',
  styleUrls: ['./todo1.component.scss']
})
export class Todo1Component implements OnInit {
  selectedCategory: any[];
  todolist: any;
  categoryText: string;
  itemText: string;
  itemsHead: string;
  allData: any[] = [];
  catID: number;
  itemsData: any;
  constructor() {

  }

  ngOnInit() {
    this.allData = JSON.parse(localStorage.getItem("alldata"));
  }
  public onSubmitCategory() {
    this.todolist = {}
    if (this.allData.length > 0) {
      let last: any = this.allData[this.allData.length - 1];
      this.todolist.id = last.id + 1;
    } else {
      this.todolist.id = 1;
    }
    this.todolist.categoryName = this.categoryText;
    this.todolist.items = [];
    this.allData.push(this.todolist)
    console.log(this.allData)
    this.setLocalStorage();
    this.categoryText = "";
  }
  public categoryClick(data: any, i: number) {
    this.catID = data.id;
    this.itemsHead = data.categoryName;
    let items = this.allData.filter(x => x.id === this.catID);
    this.itemsData = items[0].items;
  }
  public deleteCategory(i: any) {
    this.allData.splice(i, 1);
    this.setLocalStorage();
  }
  public onSubmitItems() {
    this.selectedCategory = this.allData.filter(x => x.id === this.catID)
    // let items = [];
    let obj = {
      itemID: 1,
      itemName: this.itemText,
      isChecked: false
    };
    this.selectedCategory[0].items.push(obj);
    console.log(this.allData, 'allData1');
    this.itemText = "";
    this.setLocalStorage();
  }
  public delete(data, i ) {
    this.itemsData.splice(i, 1);
    alert(data.itemName + ' is deleted');
    this.setLocalStorage();
  }
  public setLocalStorage() {
    localStorage.setItem("alldata", JSON.stringify(this.allData));
  }


}
