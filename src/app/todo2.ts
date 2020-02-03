export interface IPosts {
    id: number;
    categoryName: string;
    items: [ {
        id: number,
        itemName: string,
        isChecked: boolean;
    }];
}