import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  id: string = '';
  listId = [
    {
      value: 1,
      name:"Bulbizarre"
    },
    {
      value: 2,
      name:"Herbizarre"
    },
    {
      value: 3,
      name:"Florizarre"
    },
    {
      value: 4,
      name:"Salamèche"
    },
    {
      value: 5,
      name:"mahjoub"
    },
    {
      value: 6,
      name:"Reptincel"
    },
    {
      value: 7,
      name:"yoyo"
    },
   
]

  constructor() { }

  valider(event: any) {
    console.log(this.id)
  }

  ngOnInit() {
  }

}
