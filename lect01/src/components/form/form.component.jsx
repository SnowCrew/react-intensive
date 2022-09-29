import { createRef } from "react";
import { Component } from "react";
import "./InputFields.css";

export default class Form extends Component {
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

    this.handleInputTypesCheck = this.handleInputTypesCheck.bind(this);
    this.handleInputAutocompleteCheck =
      this.handleInputAutocompleteCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
    // this.handleRequireCheck = this.handleRequireCheck.bind(this);
  }
  handleInputTypesCheck(name) {
    switch (name) {
      case "phone":
        return "tel";
      case "bdate":
        return "date";
      default:
        break;
    }
  }

  handleInputAutocompleteCheck(name) {
    switch (name) {
      case "fname":
        return "given-name";
      case "lname":
        return "family-name";
      default:
        break;
    }
  }
  handleRefCheck(name) {
    switch (name) {
      case "fname":
        return this.fname;
      case "lname":
        return this.lname;
      case "bdate":
        return this.bdate;
      case "phone":
        return this.phone;
      case "site":
        return this.site;
      case "aboutYourself":
        return this.aboutYourself;
      case "techStack":
        return this.techStack;
      case "lastProject":
        return this.lastProject;
      default:
        break;
    }
  }
  // handleRequireCheck(name) {
  //   switch (name) {
  //     case "fname":
  //       return true;
  //     case "lname":
  //       return true;
  //     case "phone":
  //       return true;
  //     default:
  //       return false;
  //   }
  // }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.fname.current.value);
    alert(
      `{
        Имя : ${this.fname.current.value},
        Фамилия : ${this.lname.current.value},
        Дата Рождения : ${this.bdate.current.value},
        Телефон : ${this.phone.current.value},
        Сайт : ${this.site.current.value},
        О себе : ${this.aboutYourself.current.value},
        Стек технологий: ${this.techStack.current.value},
        Описание последнего проекта : ${this.lastProject.current.value}
      }`
    );
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
    const { inputs, textFields } = this.props;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        {Object.entries(inputs).map((el) => {
          return (
            <div className="input-container" key={el[0]}>
              <label>{el[1]}</label>
              <input
                name={el[1]}
                className="text-input"
                placeholder={el[1]}
                type={this.handleInputTypesCheck(el[0])}
                autoComplete={this.handleInputAutocompleteCheck(el[0])}
                ref={this.handleRefCheck(el[0])}
                // required={this.handleRequireCheck(el[0])}
              ></input>
            </div>
          );
        })}

        {Object.entries(textFields).map((el) => {
          return (
            <div className="text-area-container" key={el[1]}>
              <label key={el[0] + "textArea"}>{el[1]}</label>
              <textarea
                key={el[1] + "textArea"}
                className="text-area"
                resize="none"
                rows={"7"}
                maxLength="500"
                cols={"50"}
                placeholder={el[1]}
                ref={this.handleRefCheck(el[0])}
              ></textarea>
            </div>
          );
        })}

        <input type={"submit"} value="Сохранить" />
        <input type={"button"} value="Отменить" onClick={this.handleClear} />
      </form>
    );
  }
}
