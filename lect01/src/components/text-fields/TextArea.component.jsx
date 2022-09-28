import { Component } from "react";
import "./InputFields.css";

export default class TextArea extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, placeholder, refs } = this.props;
    return (
      <div className="text-area-container">
        <label>{name}</label>
        <textarea
          className="text-area"
          resize="none"
          placeholder={placeholder}
          rows={"7"}
          maxLength="500"
          cols={"50"}
          ref={refs}
        ></textarea>
      </div>
    );
  }
}
