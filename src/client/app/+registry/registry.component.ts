import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import {MdButton} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';

import {
  Pokemon,
  PokedexService,
  PokemonRegistryService,
  SearchPipe,
  PokecardComponent
} from '../shared/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [
    PokecardComponent,
    REACTIVE_FORM_DIRECTIVES,
    MdButton,
    MD_INPUT_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_LIST_DIRECTIVES],
  pipes: [ SearchPipe ]
})
export class RegistryComponent implements OnInit {

  pokemons: Pokemon[];
  errorMessage: any;

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(
    public pokedexService: PokedexService,
    public pokemonRegistryService: PokemonRegistryService
  ) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getPokemons();
  }

  /**
   * Handle the nameListService observable
   */
  getPokemons() {
    this.pokemonRegistryService.getPokemons()
                     .subscribe(
                       pokemons => {
                         this.pokemons = [];
                         for(let pokemon of pokemons){
                           this.pokemons.push(new Pokemon(pokemon));
                         }
                       },
                       error =>  this.errorMessage = <any>error
                       );
  }

  // /**
  //  * Add a pokemon to the pokedex
  //  */
  // addPokemonToPokedex(pokemon:Pokemon){
  //   this.pokedexService.addPokemon(pokemon);
  // }
}
