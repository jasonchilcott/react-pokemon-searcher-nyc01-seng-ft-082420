import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokeCollection: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(rsp => rsp.json())
    .then (pokeCollection => this.setState({ pokeCollection: pokeCollection}))
    .catch(e => console.error(e))
  }
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search />
        <br />
        <PokemonCollection pokeCollection = {this.state.pokeCollection}/>
      </Container>
    )
  }
}

export default PokemonPage
