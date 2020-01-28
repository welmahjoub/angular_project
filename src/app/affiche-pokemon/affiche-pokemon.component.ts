import { Component, OnInit,Input } from '@angular/core';
import { APIPokemonServiceService } from '../apipokemon-service.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-affiche-pokemon',
  templateUrl: './affiche-pokemon.component.html',
  styleUrls: ['./affiche-pokemon.component.css']
})
export class AffichePokemonComponent implements OnInit {
  @Input() idPokemon :number;
  pok:Pokemon;
  
  constructor(private service:APIPokemonServiceService) { 
   
  }

  ngOnInit() {

    console.log(this.idPokemon);
    this.service.getPokemon(this.idPokemon+1).subscribe(res => this.pok =res);
    
  }

}
