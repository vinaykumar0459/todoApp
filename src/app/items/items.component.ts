import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { AppService } from '../app.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items: any[] = [];
  itemText: string;
  cateogryHead: string;
  alldata: any;
  sub: any;
  activeCatIndex: any;
  constructor(private route: ActivatedRoute, private appService: AppService, private router: Router) {
  }

  ngOnInit() {
    this.alldata = this.appService.getCategories();
    this.sub = this.route.url.subscribe(url => {
      this.activeCatIndex = this.route.snapshot.paramMap.get("id");
      let activeCategory = this.alldata.filter(x => x.id == this.activeCatIndex);
      this.cateogryHead = activeCategory[0].categoryName;
      try {
        this.items = this.appService.getItems(this.activeCatIndex);
      } catch {
        this.router.navigate(["/todo2"]);
      }
    });
  }
  public onSubmitItems() {
    this.appService.onAddItem(this.activeCatIndex, this.itemText);
    this.itemText = "";
  }
  public delete(item, i) {
    this.appService.deleteItem(this.activeCatIndex, i)
    alert(item.itemName + ' is deleted');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
