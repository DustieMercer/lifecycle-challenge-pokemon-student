import React, { Component, useEffect } from 'react'
import './PokeFetch.css';

class PokeFetch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokeInfo: '',
      pokeSprite: '',
      pokeName: '',
      timer: 10,
      pokeShow: false,
    }
  }

fetchPokemon() {
  let min = Math.ceil(1);
  let max = Math.floor(152);
  let pokeNum = Math.floor(Math.random() * (max - min) + min);
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`, {
    method: 'GET'
  }).then(res => res.json())
    .then(res => {
      setInterval(() => this.countdown(),1000)
      this.setState({
        pokeInfo: res,
        pokeSprite: res.sprites.front_default,
        pokeName: res.species.name,
        pokeShow: false,
        timer: 10,
      })
    })
    .catch((err) => console.log(err))
}

countdown = () => { 
  const newTime = this.state.timer - 1;
  if (newTime < 0) {
  this.setState ({ pokeShow: true })
  clearInterval(newTime)
  } else {this.setState ({timer: this.state.timer - 1}) }
}

render() {
    return (
      <div className={'wrapper'}>
        <button 
        className={'start'} 
        onClick={() => 
        this.fetchPokemon()        
        }>
          Start!
        </button>
        <h1 className={'timer'} >Timer Display { this.state.timer } </h1>
        <div className={'pokeWrap'}>


          { this.state.pokeShow == false ? <img className={'pokeImg'} src={this.state.pokeSprite} /> :
          <img className={'showPokeImg'} src={this.state.pokeSprite} />}
          

          {this.state.pokeShow == true ? <h1 className={'pokeName'}>{this.state.pokeName}</h1> : ""}


        </div>
      </div>
    )
  }
}

export default PokeFetch;