import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderPokeCards = () => {
    return this.props.pokemon.map((pokemon) => <PokemonCard key={pokemon.name} name={pokemon.name} hp={pokemon.hp} sprites={pokemon.sprites}/>)
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderPokeCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
