import { Component } from "react";
import "./InputFields.css";

export default class InputField extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, placeholder, type = "text", refs, autocomplete } = this.props;
    return (
      <div className="input-container">
        <label>{name}</label>
        <input
          className="text-input"
          placeholder={placeholder}
          type={type}
          autoComplete={autocomplete}
          ref={refs}
        ></input>
      </div>
    );
  }
}
