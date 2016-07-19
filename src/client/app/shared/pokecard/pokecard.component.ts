import { Component, Input } from '@angular/core';
import {MdButton} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';

import {
  Pokemon,
  PokedexService
} from '../index';

/**
 * This class represents the lazy loaded PokecardComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'pokecard',
  templateUrl: 'pokecard.component.html',
  styleUrls: ['pokecard.component.css'],
  directives: [
    MdButton,
    MD_INPUT_DIRECTIVES,
    MD_CARD_DIRECTIVES]
})
export class PokecardComponent {
  @Input()
    pokemon: Pokemon;

  constructor(public pokedexService: PokedexService){};

  /**
   * Add a pokemon to the pokedex
   */
  addPokemonToPokedex(pokemon:Pokemon){
    this.pokedexService.addPokemon(pokemon);
  }

  /**
   * Removes a pokemon from the pokedex
   */
  removePokemonFromPokedex(pokemon: Pokemon){
    this.pokedexService.removePokemon(pokemon);
  }
}
