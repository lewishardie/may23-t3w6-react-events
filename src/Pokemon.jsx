import React from "react";

export default class Pokemon extends React.Component {
    constructor(){
        super();

        this.state = {
            pokemonData: {}
        }
    }

    async componentDidMount() {
        let randomPokemonNumber = Math.floor(Math.random() * 1017) + 1;
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonNumber}`);
        let data = await response.json();

        this.setState({pokemonData: data});
    }
    
    render() {
        return this.state.pokemonData.name ?
            (
                <div>
                    <h1>{this.state.pokemonData.name}</h1>
                    <img src={this.state.pokemonData.sprites.front_default} alt="Pokemon random"/>
                </div>
            )
            :
            (
                <div>
                    <h1>Still loading Pokemon data...</h1>
                </div>
            )
    }
}

