import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces';
import { Ricky } from '../interfaces/ricky';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }


  getPokemon( id: number ):Observable<Pokemon> {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${ id }`);
  }

  getRicky():Observable<Ricky> {
    return this.http.get<Ricky>(`https://rickandmortyapi.com/api/character`);
  }
}
