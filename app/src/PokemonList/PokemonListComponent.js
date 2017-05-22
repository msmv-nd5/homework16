'use strict';

pokemonApp.component('pokemonList', {

    controller: function PokemonListCtrl(PokemonsService, $mdToast) {

        this.pokemons = PokemonsService.query();

    },

    templateUrl: './src/PokemonList/PokemonList.html'

});
