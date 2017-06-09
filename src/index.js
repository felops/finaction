import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Container />, document.getElementById('container'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
