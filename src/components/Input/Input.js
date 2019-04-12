import React, { Component } from 'react';

export default class Input extends Component {
  state = {
    textInput: '',
  };

  onChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    let classes = '';

    switch (this.props.inputClasses) {
      case 'small':
        classes = 'small';
        break;
      case 'large':
        classes = 'large';
        break;
      case 'disabled':
        classes = 'disabled';
        break;
      case 'error':
        classes = 'error';
        break;
      default:
        classes = '';
    }

    return (
      <div className={`input ${classes}`}>
        <input
          name='textInput'
          type={this.props.inputType}
          value={this.state.textInput}
          onChange={this.onChange}
          onKeyDown={this.props.onKeyStrike}
        />
        <span className='icon'>{this.props.inputIcon()}</span>
      </div>
    );
  }
}
