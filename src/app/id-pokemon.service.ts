import { Injectable } from '@angular/core';
import {Observable, observable} from 'rxjs';
import {Pokemon} from './pokemon';
import {HttpClient} from '@angular/common/http';

export interface MyObserver {

  updtate(id: string);
}

@Injectable({
  providedIn: 'root'
})
export class IdPokemonService {

   id: string;
   observer: MyObserver;

  constructor() {
  }

  setId(id: string){
    this.id = id;
    if (this.observer != null){
      this.observer.updtate(id);
    }

  }

}
