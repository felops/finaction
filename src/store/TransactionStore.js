import { EventEmitter } from 'events';

class TransactionStore extends EventEmitter {
  constructor() {
    super()
    this.transactions = [
      {
        id: 1852092,
        date: Date(2017, 6, 15),
        value: 50
      },
      {
        id: 1859006,
        date: Date(2017, 6, 3),
        value: 50
      },
      {
        id: 1963900,
        date: Date(2017, 6, 8),
        value: 50
      }
    ];
  }

  create(value) {
    this.transactions.push(
      {
        id: Date.now(),
        date: Date(),
        value
      }
    );

    this.emit("update");
  }

  getAll() {
    return this.transactions;
  }
}

const transactionStore = new TransactionStore;
export default transactionStore;
