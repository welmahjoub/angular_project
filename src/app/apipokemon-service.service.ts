import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIPokemonServiceService {

  constructor(private httpService: HttpClient) { }

  getListe():Observable<any>
  {
    return this.httpService.get('https://pokeapi.co/api/v2/pokemon/');
  }

  getPokemon(poke:any):Observable<any>{
    return this.httpService.get('https://pokeapi.co/api/v2/pokemon/'+poke);
    //return this.httpService.get('https://pokeapi.co/api/v2/pokemon/1/');
  }
}
