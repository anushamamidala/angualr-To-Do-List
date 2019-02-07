import { Component, OnInit } from '@angular/core';

import { ToDoItemsList } from '../../Shared/Models/toDoItemsList';
import { ToDoItemsStatus } from '../../Shared/Models/toDoItemsStatus';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  itemName: string;
  itemsList: ToDoItemsList[] = [];
  doneItemList: ToDoItemsList[] = [];
  itemListStatus: ToDoItemsStatus[] = [];
  checked: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  onClickAddItem() {
    let item = new ToDoItemsList();
    item.itemName = this.itemName;
    this.itemsList.push(item);
    this.itemName = undefined;
  }

  onChangeInChecked(index, item) {
    this.itemsList[index].checked = !item.checked;
    if (this.itemsList[index].checked) {
      let doneItem = new ToDoItemsList();
      doneItem = this.itemsList[index];
      this.doneItemList.push(doneItem);
    }
  }

  onDeleteItem(index) {
    this.itemsList.splice(index, 1);
  }
}
