export interface PokemonList {
    count:    number;
    next:     null;
    previous: null;
    results:  Pokemon[];
}

export interface Pokemon {
    name: string;
    url:  string;
}
