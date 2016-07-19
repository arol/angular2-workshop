export class Pokemon {
  id: number;
  name: string;
  image: string;
  url: string;
  height: number;
  weight: number;

  constructor(pokemonInfo:any){
    this.id     = pokemonInfo.id;
    this.name   = pokemonInfo.name;
    this.image  = pokemonInfo.image;
    this.url    = pokemonInfo.url;
    this.height = pokemonInfo.height;
    this.weight = pokemonInfo.weight;

    this.id = this.getId();
    this.image = this.getImageUrl();
  }

  getId(){
    if(!!this.id){
      return this.id;
    }

    return this.parseIdFromUrl();
  }

  getImageUrl(){
    if(!!this.image){
      return this.image;
    }

    return `http://pokedream.com/pokedex/images/sugimori/${this.pad(this.getId(),3)}.jpg`;
  }

  private parseIdFromUrl(){
    let urlParts:string[] = this.url.split('/');
    return parseInt(urlParts[urlParts.length-2]);
  }

  private pad(n:number, len:number) {
    return (new Array(len + 1).join('0') + n).slice(-len);
  }
}
