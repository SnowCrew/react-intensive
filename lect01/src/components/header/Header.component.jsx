import { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name } = this.props;
    return (
      <div className="header">
        <h1>{name}</h1>
      </div>
    );
  }
}
