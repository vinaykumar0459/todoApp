import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo2',
  templateUrl: './todo2.component.html',
  styleUrls: ['./todo2.component.scss']
})
export class Todo2Component implements OnInit {
  categoryText: string;
  allData: any[] = [];
  constructor(private appService: AppService, private router: Router) {

  }

  ngOnInit() {
  }
  public onSubmitCategory() {
    this.allData = this.appService.onAddCategory(this.categoryText);
    this.categoryText = "";
  }

  public deleteCategory(data, i: any) {
    this.appService.deleteCategory(i);
    alert(data.categoryName + ' is deleted');
    this.router.navigate(['/todo2']);
  }

}
