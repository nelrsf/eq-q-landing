import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  toggle(element: any, link: any) {
    element.classList.toggle('show');
    link.classList.toggle('hide');
  }
}



