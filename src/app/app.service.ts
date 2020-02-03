import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

export interface Todo {
    id: number;
    categoryName: number;
    items: any[];
}

@Injectable()
export class AppService {
    allData: any[] = [];
    itemsData: any[] = [];
    selectedCategory: any;
    categoryID: any;
    addNewCategoryObj: any;

    getCategories(): any {
        return this.allData
    }
    getItems(categoryID) {
        return this.allData[categoryID].items;
    }
    onAddCategory(category) {
        this.addNewCategoryObj = {};
        if (this.allData !== null && this.allData.length !== 0) {
            let last: any = this.allData[this.allData.length - 1];
            this.categoryID = last.id + 1;
        } else {
            this.categoryID = 0;
        }
        this.addNewCategoryObj = {
            id: this.categoryID,
            categoryName: category,
            items: []
        }
        this.allData.push(this.addNewCategoryObj);
        console.log(this.allData)
        return this.allData;
    }
    onAddItem(index, item) {
        let obj = {
            itemName: item,
            isChecked: false
        }
        this.allData[index].items.push(obj);
    }
    deleteItem(selectedCatIndex, i) {
        this.allData[selectedCatIndex].items.splice(i, 1);
    }
    deleteCategory(i: any) {
        this.allData.splice(i, 1);
    }
}