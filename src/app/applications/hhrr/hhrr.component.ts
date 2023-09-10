import { Component } from '@angular/core';

@Component({
  selector: 'app-hhrr',
  templateUrl: './hhrr.component.html',
  styleUrls: ['./hhrr.component.css']
})
export class HhrrComponent {


  toggle(element: any, link: any) {
    element.classList.toggle('show');
    link.classList.toggle('hide');
  }

}
