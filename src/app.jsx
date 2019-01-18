import React from 'react';
import {store} from './localStore.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      location: '',
      showInput: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    store.set(this.state.location, this.state.value);
    this.setState({
      value: '',
      location: '',
      showInput: false
    })
    render();
  }

  changeLocation(location) {
    this.setState({
      location: location,
      showInput: true
    });
  };

  render() {

    return (
      <div>
        
        <form onSubmit={this.handleSubmit} className={this.state.showInput ? '' : 'hidden'}>
          <label>
            Change <strong>{this.state.location.toUpperCase()}</strong> Value
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <h1 onClick={() => this.changeLocation('a')}>A = {store.get('a')}</h1>
        <h1 onClick={() => this.changeLocation('b')}>B = {store.get('b')}</h1>
        <h1 onClick={() => this.changeLocation('c')}>C = {store.get('c')}</h1>
      
      </div>
      
    );
  }
}