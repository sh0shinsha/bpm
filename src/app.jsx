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

  render() {

    const changeLocation = (location) => {
      this.setState({
        location: location,
        showInput: true
      });
    };

    return (
      <div>
        <form onSubmit={this.handleSubmit} className={this.state.showInput ? '' : 'hidden'}>
          <label>
            Change <strong>{this.state.location.toUpperCase()}</strong> Value
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <div className="row">
          <h1 onClick={() => changeLocation('a')}>A =</h1>
          <h1>{store.get('a')}</h1>
        </div>
        
        <div className="row">
          <h1 onClick={() => changeLocation('b')}>B =</h1>
          <h1>{store.get('b')}</h1>
        </div>

        <div className="row">
          <h1 onClick={() => changeLocation('c')}>C =</h1>
          <h1>{store.get('c')}</h1>
        </div>
        
      </div>
      
    );
  }
}