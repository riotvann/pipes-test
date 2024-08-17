import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            route: ''
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            route: '/numbers'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            route: '/uncommon'
          },
        ]
      },


      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Custom Pipes',
            icon: 'pi pi-cog',
            route: '/custom'
          }
        ]
      }

      // { label: 'New', icon: 'pi pi-fw pi-plus' },
      // { label: 'Open', icon: 'pi pi-fw pi-download' },
      // { label: 'Undo', icon: 'pi pi-fw pi-refresh' }
    ]
  }
}
