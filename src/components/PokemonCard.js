import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  clickHandler = () => {
    console.log(this.props.sprites)
    this.setState((prevState) => ({clicked: !prevState.clicked}))


  }
  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img src={!this.state.clicked ? this.props.sprites.front : this.props.sprites.back} alt={this.props.name} onClick={this.clickHandler}/>
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
