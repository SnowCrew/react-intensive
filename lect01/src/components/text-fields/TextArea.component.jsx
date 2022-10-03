import { useEffect, useState } from "react";
import "./InputFields.css";

const TextArea = (props) => {
  const { label, placeholder = label, value, ...otherProps } = props;

  const [countCharacters, setCountCharacters] = useState(0);

  useEffect(() => {
    setCountCharacters(value.length);
  }, [value]);

  return (
    <div className="text-area-container">
      <label>{label}</label>
      <textarea
        className="text-area"
        resize="none"
        rows={"7"}
        maxLength="600"
        cols={"50"}
        placeholder={placeholder}
        value={value}
        {...otherProps}
      ></textarea>
      <label className="textAreaInfo">
        Осталось {countCharacters}/600 символов
      </label>
    </div>
  );
};
export default TextArea;
