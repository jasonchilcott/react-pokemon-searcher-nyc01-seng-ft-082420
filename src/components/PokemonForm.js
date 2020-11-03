import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  constructor() {
    super()
    this.state = this.getInitialState()
  }


  getInitialState = () => ({name: '', hp: '', frontUrl: '', backUrl: ''})

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    const { name, hp, frontUrl, backUrl } = this.state
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name,
        hp,
        sprites: {
          front: frontUrl,
          back: backUrl
        }

      })
    })
    .then(rsp => rsp.json())
    .then(pokemon => this.props.addPokemon(pokemon))
    .catch(error => console.error(error))
    this.setState(this.getInitialState())
  }



  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.submitHandler}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.changeHandler}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.changeHandler}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.changeHandler}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.changeHandler}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
