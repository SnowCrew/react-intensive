import React, { Component } from 'react';
import './App.css';
import Form from './components/form/form.component';
import Header from './components/header/Header.component';
import { inputs, textFields } from './data/textFields.data';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header name="Создание анкеты" />
        <Form inputs={inputs} textFields={textFields} />
      </div>)
  }

}
export default App;
