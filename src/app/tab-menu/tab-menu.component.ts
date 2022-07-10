import { Component, OnInit } from '@angular/core';
import {MegaMenuItem,MenuItem} from 'primeng/api';


@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent implements OnInit {

  constructor() { }

  items: MegaMenuItem[];


    ngOnInit() {
        this.items = [
            {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/Home']},
            {label: 'List Games', icon: 'pi pi-fw pi-list', routerLink: ['/Games']},
            {label: 'Add Game', icon: 'pi pi-fw pi-pencil', routerLink: ['/Add-Game']},

        ];

    }

}
