import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public title= 'MENU';

  public plats: any[] = [
    {
      id: 1,
      nom: 'BBH',
      prix: 250,
      restaurant: 'CHEZ MARTIN',
      image: 'assets/BBH.jpg'
    },
    {
      id: 2,
      nom: 'Crepes',
      prix: 300,
      restaurant: 'CLAIRE CREPES',
      image: 'assets/crepes.jpeg'
    },
    {
      id: 3,
      nom: 'poulet + plantains',
      prix: 1000,
      restaurant: 'CHEZ MARTIN',
      image: 'assets/poulet.jpg'
    }
  ];
  public platfilter= 'mot'
}
