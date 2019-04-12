import React, { Component } from 'react';
import Input from './components/Input/Input';
import arrow from './components/Input/arrow-down';

class App extends Component {
  state = {
    element: '',
    keyStrikes: 0,
  };

  onKeyStrike = () => {
    this.setState(prevState => prevState.keyStrikes++);
  };

  getEventSource = id => {
    this.setState({ elementId: id });
  };

  render() {
    return (
      <div className='app'>
        <div className='block'>
          <Input
            inputClasses='small'
            inputType='text'
            inputIcon={arrow}
            onKeyStrike={this.onKeyStrike}
          />
          <Input
            inputClasses=''
            inputType='text'
            inputIcon={arrow}
            onKeyStrike={this.onKeyStrike}
          />
          <Input
            inputClasses='large'
            inputType='text'
            inputIcon={arrow}
            onKeyStrike={this.onKeyStrike}
          />
          <Input
            inputClasses='error'
            inputType='text'
            inputIcon={arrow}
            onKeyStrike={this.onKeyStrike}
          />
          <Input
            inputClasses='disabled'
            inputType='text'
            inputIcon={arrow}
            onKeyStrike={this.onKeyStrike}
          />
        </div>
        <div className='block'>
          <div className='events-info'>
            <p className='info'>ID: {this.state.element}</p>
            <p className='info'>Нажато: {this.state.keyStrikes} раз</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
