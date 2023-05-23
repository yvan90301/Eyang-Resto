import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  constructor(private  route: ActivatedRoute){}

  ngOnInit():void {
    const id  =  this.route.snapshot.paramMap.get('id');
    console.log('id', id)
  }
}
