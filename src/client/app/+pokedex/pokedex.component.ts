import { Component } from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

import { ROUTER_DIRECTIVES } from '@angular/router';

import {
  Pokemon,
  PokecardComponent,
  PokedexService,
  SearchPipe
} from '../shared/index'

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  directives: [PokecardComponent, ROUTER_DIRECTIVES],
  pipes: [SearchPipe]
})
export class AboutComponent {

  constructor(public pokedexService: PokedexService){ };



}
