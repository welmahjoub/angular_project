import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';
import {map} from 'rxjs/operators';

export interface IPokemons{
    results : IPokemon[];
}
export interface IPokemon{
  name?: string;
  url ?: string;

}

export interface Pokedex {
  abilities:                Ability[];
  base_experience:          number;
  forms:                    Species[];
  game_indices:             GameIndex[];
  height:                   number;
  held_items:               any[];
  id:                       number;
  is_default:               boolean;
  location_area_encounters: string;
  moves:                    Move[];
  name:                     string;
  order:                    number;
  species:                  Species;
  sprites:                  Sprites;
  stats:                    Stat[];
  types:                    Type[];
  weight:                   number;
}

export interface Ability {
  ability:   Species;
  is_hidden: boolean;
  slot:      number;
}

export interface Species {
  name: string;
  url:  string;
}

export interface GameIndex {
  game_index: number;
  version:    Species;
}

export interface Move {
  move:                  Species;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at:  number;
  move_learn_method: Species;
  version_group:     Species;
}

export interface Sprites {
  back_default:       string;
  back_female:        null;
  back_shiny:         string;
  back_shiny_female:  null;
  front_default:      string;
  front_female:       null;
  front_shiny:        string;
  front_shiny_female: null;
}

export interface Stat {
  base_stat: number;
  effort:    number;
  stat:      Species;
}

export interface Type {
  slot: number;
  type: Species;
}


@Injectable({
  providedIn: 'root'
})
export class APIPokemonServiceService {

  constructor(private httpService: HttpClient) { }

  getListe():Observable<IPokemons>
  {
    return this.httpService.get<IPokemons>('https://pokeapi.co/api/v2/pokemon/');
  }

  getPokemon(poke:any):Observable<Pokemon>{

    return this.httpService.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/'+poke);
    //return this.httpService.get('https://pokeapi.co/api/v2/pokemon/1/');
  }

  /*getPokemon(poke:any):Observable<Pokemon>{
     return this.httpService.get<Pokedex>('https://pokeapi.co/api/v2/pokemon/'+poke).pipe( map((res :Pokedex) =>
      {
        console.log(res.name);
        let p = new Pokemon();
        p.namePokemon=res.name;
        p.idPokemon=poke;
        console.log(p);
        return p;
      } )
     )
  }*/

}
