import React, { Component } from 'react'
import Cardlist from './Components/Card-list/Cardlist'
import './App.css'
import { SearchBox } from './Components/SearchBox/SearchBox-component'

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      monsters: [
      ],
      searchField: ''
    }
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then(json => this.setState({monsters: json}))
  }

  render() {
    const {monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className='App'>
        <SearchBox onChange={e => this.setState({searchField: e.target.value})} placeholder='search monsters' />

       <Cardlist monsters={filteredMonsters}>
          
       </Cardlist>
        
      </div>
    )
  }
}

