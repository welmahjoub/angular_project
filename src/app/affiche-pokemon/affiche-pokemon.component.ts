import { Component, OnInit,Input } from '@angular/core';
import { APIPokemonServiceService } from '../apipokemon-service.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-affiche-pokemon',
  templateUrl: './affiche-pokemon.component.html',
  styleUrls: ['./affiche-pokemon.component.css']
})
export class AffichePokemonComponent implements OnInit {
  @Input() idPokemon :string;
  pok:Pokemon;

  constructor(private service:APIPokemonServiceService) {
   // pok=new Pokemon("","");
  }

  ngOnInit() {

    console.log(this.idPokemon);
    this.service.getPokemon(this.idPokemon).subscribe(res =>{
      //this.pok.idPokemon=this.idPokemon;
      //this.pok.namePokemon=res.name;
        this.pok =new Pokemon(this.idPokemon,res.name);
    });

  }

}
