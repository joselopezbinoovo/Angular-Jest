import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../interfaces';
import { Ricky } from '../interfaces/ricky';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-charizard',
  templateUrl: './charizard.component.html',
  styleUrls: ['./charizard.component.scss']
})
export class CharizardComponent implements OnInit {
  public charizard?: Pokemon;
  public ricky:Ricky[]=[];

  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
 /*    this.pokemonService.getPokemon(1)
    .subscribe( pokemon => {
      this.charizard = pokemon;
    }); */
    this.get()
  }

  get(){
    this.pokemonService.getRicky().subscribe((resp:any)=> {
      this.ricky = resp.results
      console.log(this.ricky)
    })
  }


}
