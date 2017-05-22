'use strict';

pokemonApp.component('pokemonDetail', {

    controller: function PokemonDetailCtrl($routeParams, PokemonsService) {
        var ctrl = this;
        ctrl.pokemonLoaded = false;

        ctrl.pokemon = PokemonsService.get({
            pokemonId: $routeParams['pokemonId']
        }, function(successResult) {
            // Окей!
            ctrl.notfoundError = false;
            ctrl.pokemonLoaded = true;

            ctrl.activeTab = 1;
            ctrl.disableControlTab = true;
        }, function(errorResult) {
            // Не окей..
            ctrl.notfoundError = true;
            ctrl.pokemonLoaded = true;


        });

        ctrl.pokemon.$promise.then(function(result) {
            //$scope.pokemonLoaded = true;
        });

        ctrl.deletePokemon = function(pokemonId) {

            ctrl.pokemon.$delete({
                pokemonId: pokemonId
            }, function(successResult) {
                // Окей!
                ctrl.deletionSuccess = true;
            }, function(errorResult) {
                // Не окей..
                ctrl.deletionError = true;
            });

        }

    },

    templateUrl: './src/PokemonDetail/PokemonDetail.html'

});
