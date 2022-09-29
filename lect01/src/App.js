import React, { Component, createRef } from 'react';
import './App.css';
import Header from './components/header/Header.component';
import InputField from './components/text-fields/InputField.component';
import TextArea from './components/text-fields/TextArea.component';

class App extends Component {
  constructor(props) {
    super(props);

    this.fname = createRef();
    this.lname = createRef();
    this.bdate = createRef();
    this.phone = createRef();
    this.site = createRef();
    this.aboutYourself = createRef();
    this.techStack = createRef();
    this.lastProject = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(
      `{
        Имя : ${this.fname.current.value},
        Фамилия : ${this.lname.current.value},
        Дата Рождения : ${this.bdate.current.value},
        Телефон : ${this.phone.current.value},
        Сайт : ${this.site.current.value},
        О себе : ${this.aboutYourself.current.value},
        Стек технология: ${this.techStack.current.value},
        Описание последнего проекта : ${this.lastProject.current.value}
      }`)
  }

  handleClear(e) {
    e.preventDefault();
    this.fname.current.value = "";
    this.lname.current.value = "";
    this.bdate.current.value = "";
    this.phone.current.value = "";
    this.site.current.value = "";
    this.aboutYourself.current.value = "";
    this.techStack.current.value = "";
    this.lastProject.current.value = "";
  }

  render() {
    return (
      <form className="App" >
        <Header name="Создание анкеты" />
        <div className='form'>
          <InputField name="Имя" placeholder="Имя" refs={this.fname} />
          <InputField name="Фамилия" placeholder="Фамилия" refs={this.lname} />
          <InputField name="Дата рождения" placeholder="Дата рождения" type="date" refs={this.bdate} />
          <InputField name="Телефон" placeholder="Телефон" type="phone" refs={this.phone} />
          <InputField name="Сайт" placeholder="Сайт" type='url' refs={this.site} />

          <TextArea name="О себе" placeholder="О себе" refs={this.aboutYourself} />
          <TextArea name="Стек технологий" placeholder="Стек технологий" refs={this.techStack} />
          <TextArea name="Описание последнего проекта" placeholder="Описание последнего проекта" refs={this.lastProject} />

          <button onClick={this.handleSubmit}>Сохранить</button>
          <button onClick={this.handleClear}>Отменить</button>
        </div>

      </form>)
  }

}
export default App;