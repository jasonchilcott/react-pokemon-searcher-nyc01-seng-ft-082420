import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokeCollection: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(rsp => rsp.json())
    .then (pokeCollection => this.setState({ pokeCollection: pokeCollection}))
    .catch(e => console.error(e))
  }

  addPokemon = pokemon => {
    this.setState({ pokeCollection: [...this.state.pokeCollection, pokemon] })

  }

  searchHandler = e => {
    this.setState({ searchTerm: e.target.value })
  }

  render() {
    const desiredPokemon = this.state.pokeCollection.filter(p => p.name.includes(this.state.searchTerm))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.searchHandler}/>
        <br />
        <PokemonCollection pokemon={desiredPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
