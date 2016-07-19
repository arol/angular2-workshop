import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Pokemon } from '../pokemon.model'

const POKEDEX_BASE_URL = 'http://pokeapi.co/api/v2/';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class PokemonRegistryService {
  registry: Pokemon[];

  /**
   * Creates a new NameListService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {}

  /**
   * Returns an Observable for the HTTP GET request for a list of pokemon.
   * @return {string[]} The Observable for the HTTP request.
   */
  getPokemons(): Observable<Pokemon[]> {
    // In order to avoid multiple calls to the API
    if(!!this.registry) return Observable.create((observer:any) => {
      observer.next(this.registry);
      observer.complete();
    });

    return this.http.get(POKEDEX_BASE_URL + `pokemon/?limit=150`)
                    .map(data => {
                      var result = this.extractData(data);
                      this.registry = result;
                      return result;
                    })
                    .catch(this.handleError);
  }

  /**
   * Returns an Observable for the HTTP GET request for a single Pokemon.
   * @return {string[]} The Observable for the HTTP request.
   */
  getPokemon(name:string): Observable<Pokemon> {
    return this.http.get(POKEDEX_BASE_URL + `api/v2/pokemon/${name}`)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

  /**
   * Extract reponse data
   */
  private extractData(res: Response){
    let body = res.json();
    return body.results || {};
  }

  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
