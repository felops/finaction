import React, { Component } from 'react';
import Transaction from './Transaction';
import TransactionStore from '../store/TransactionStore';

export default class Content extends Component {
  render() {
    return (
      <div>
        <h3 style={{marginTop: 0 + 'px'}}>{this.props.title}</h3>
        <Transaction></Transaction>
      </div>
    );
  }
}
