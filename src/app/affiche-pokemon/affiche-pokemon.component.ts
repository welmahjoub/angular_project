import { Component, OnInit, Input } from '@angular/core';
import { APIPokemonServiceService } from '../apipokemon-service.service';
import { Pokemon } from '../pokemon';
import {IdPokemonService, MyObserver} from '../id-pokemon.service';

@Component({
  selector: 'app-affiche-pokemon',
  templateUrl: './affiche-pokemon.component.html',
  styleUrls: ['./affiche-pokemon.component.css']
})
export class AffichePokemonComponent implements OnInit, MyObserver {
  @Input() idPokemon: string;
  pok: Pokemon;

  constructor(private service: APIPokemonServiceService, private idPokService: IdPokemonService) {
    this.pok = new Pokemon('', '');
    this.idPokService.observer = this;

  }

  ngOnInit() {

    console.log(this.idPokemon);
    this.getPoke();

  }

  getPoke():void {
    this.service.getPokemon(this.idPokemon).subscribe(res => {
    // this.pok.idPokemon=this.idPokemon;
    // this.pok.namePokemon=res.name;
    this.pok = new Pokemon(this.idPokemon, res.name);
  });
  }

  updtate(id: string) {
    console.log("hiiii");
    this.idPokemon=id;
    this.getPoke();
  }

}
