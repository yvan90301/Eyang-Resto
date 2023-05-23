import { Component } from '@angular/core';
import { IPlats } from './list';
import { PlatserviceService } from '../services/platservice.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public title= 'MENU';
  public errMsg: string | undefined;
  // public plats=[];

  public plats: IPlats[] = [
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
  // public plats: IPlats[]=[];

  constructor(private platservice: PlatserviceService){}

  ngOnInit(){
    // this.platservice.getPlats().subscribe({
    //   next:plats => this.plats= plats,
    //   error: err=>this.errMsg = err
    // })
  }
  
}
