import { Component, OnInit } from '@angular/core';
import { APIPokemonServiceService } from '../apipokemon-service.service';
import { element } from 'protractor';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  id: string = '';

  name:string='';
  listId = [];
  click:boolean=false;
  constructor(private service:APIPokemonServiceService) { }

  valider(event: any) {


    var pok=this.service.getPokemon(parseInt(this.id)+1);
  //  console.log(pok);
    this.click=true;
  }

  ngOnInit() {

    this.service.getListe().subscribe(res => {
      res.results.forEach((element , index) => {
          this.listId.push({
            id: index,
            name: element.name
          });        
      });
      
      //console.log(res.results);
    });

  }

}
