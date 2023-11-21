// Page that lets us increase or decrease
// how many Pokemon are on screen
// App components needs to:
//  - Keep track of how many Pokemon to show
//  - Iterate over a single, DRY modular component
//  - Button to increase Pokemon count
//  - Button to decrease Pokemon count

import React from "react";
import Pokemon from "./Pokemon";


class App extends React.Component {
  constructor(){
    super();
  
    // srart with at least one pokemon on screen
    this.state = {
      pokemonCount: 3
    }
  }

  exampleFunction(){
    console.log("hello world, from button click")
  }

  decreasePokemonCount(currentCount){
    if (currentCount > 0 ){
      this.setState({pokemonCount: currentCount - 1 });
    }
  }

  increasePokemonCount(currentCount){
    this.setState({pokemonCount: currentCount + 1 });
  }

  render(){
    return (
      <div>
        <h1>Pokemon Page</h1>
        <button onClick={() => {this.decreasePokemonCount(this.state.pokemonCount)}}>Decrease Pokemon count</button>
        <button onClick={() => {this.increasePokemonCount(this.state.pokemonCount)}}>Increase Pokemon count</button>
        {/* <Pokemon /> */}
        {
          // Array(arraySize).fill(defaultValue).map(() => {return JSW})
          Array(this.state.pokemonCount).fill(null).map((element, index) => <Pokemon key={index}/>)
        }
      </div>
    )
  }
}



export default App;