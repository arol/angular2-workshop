import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Pokemon } from '../pokemon.model'

const POKEDEX_BASE_URL = 'http://pokeapi.co/api/v2/';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class PokedexService {

  private pokemons: Pokemon[] = [];

  /**
   * Creates a new NameListService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor() {}

  getPokemons(){
    return this.pokemons;
  }

  addPokemon(pokemon:Pokemon){
    this.pokemons.push(pokemon);
    console.log(this.pokemons);
  }

  removePokemon(pokemon: Pokemon){
    this.pokemons.splice(this.pokemons.indexOf(pokemon), 1);
  }

  isAlreadyAdded(pokemon:Pokemon){
    return this.pokemons.find((element) => {
      return element.name === pokemon.name;
    });
  }

}
