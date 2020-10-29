import React from 'react'
import CardDiv from './CardDiv.js'
import Form from './Form.js'
import './App.css'

let fakeCard = {person: 'Raul', gift: 'Baby Fever Antidote', price: '$1500', image:'https://www.giotti.net/wp-content/uploads/2020/05/present.png'}
let fakeCard2 = {person: 'Jaden', gift: 'Jordan Off-Whites', price: '$2000', image:'https://stockx-360.imgix.net//Air-Jordan-4-Retro-Off-White-Sail-W/Images/Air-Jordan-4-Retro-Off-White-Sail-W/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1603481985&w=1000'}

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      cards: [fakeCard, fakeCard2]
    }
  }

  addNewCard=(info) =>{
    console.log(info)
    this.setState({cards: [...this.state.cards, info]})
  }

  removeGiftCard = (info) =>{
    console.log('info:', info.person)
    this.setState({cards: this.state.cards.filter(card => (
      card.person != info.person && card.gift != info.gift

    ))})
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 class='title'>
            HOLIDAY SHOPPING LIST
        </h1>
        </header>
        <Form addNewCard={this.addNewCard}/>
        <br></br>
        <CardDiv 
          cards={this.state.cards}
          removeGiftCard = {this.removeGiftCard}
        />
      </div>
    );
  }
}

export default App;
