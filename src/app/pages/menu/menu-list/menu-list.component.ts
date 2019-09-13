import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.interface';
import { Popup } from 'src/app/shared/components/popup/popup.class';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {


  menus: Menu[] = [
    {
      id: 1,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 2,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 3,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 4,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 5,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 6,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 1,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 2,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 3,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 4,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 5,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 6,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 1,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 2,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 3,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 4,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 5,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 6,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 1,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 2,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 3,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 4,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 5,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 6,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 1,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 2,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 3,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 4,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 5,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 6,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 1,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 2,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 3,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 4,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 5,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    },
    {
      id: 6,
      name: 'Tapsilog',
      description: 'Tapa + Itlog + Sinangag',
      price: 50, photo: './assets/images/bg1.jpg',
    }
  ];
  selectedMenu: Menu;

  constructor() { }

  ngOnInit() {
  }

  selectMenu(menu: Menu) {
    this.selectedMenu = menu;

    this.viewMenu();
  }

  private viewMenu() {
    // this.menuPopup.title = this.selectedMenu.name;
    // this.menuPopup.open();
  }
}

