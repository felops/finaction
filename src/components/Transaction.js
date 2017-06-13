import React, { Component } from 'react';
import TransactionStore from '../store/TransactionStore';

export default class Transaction extends Component {
  constructor() {
    super();
    this.state = {
      transactions: TransactionStore.getAll()
    }
  }

  componentWillMount() {
    TransactionStore.on("update", () => {
      this.setState({
        transactions: TransactionStore.getAll()
      });
    });
  }

  render() {
    const TransactionComponents = this.state.transactions.map((transaction) => {
      return  <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.date}</td>
                <td>{transaction.value}</td>
              </tr>;
    });

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {TransactionComponents}
        </tbody>
      </table>
    );
  }
}
