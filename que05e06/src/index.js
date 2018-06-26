import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

/** Questao 01*/

function BemVindo(props) {
    return  <h1> ​ Olá mundo​ </h1>;
}


/* Questao 02*/
class Aluno extends React.Component {
    constructor​ (props) {
    super​ (props);
    this.state = {matricula : 1020};
    this.state = {nome : "Tiago"};
    this.state = {nota : 9.5};
}