import { useCallback } from "react";
import { useState, useEffect } from "react";
import "./InputFields.css";

const InputField = (props) => {
  const [validError, setValidError] = useState("");

  const {
    label,
    value,
    name,
    status,
    field,
    placeholder = label,
    type = "text",
    showFormFieldsStatus,
    setFormFieldsValidStatus,
    ...otherProps
  } = props;

  const trimmedValue = value.trim();

  const handleValidation = useCallback(
    (type) => {
      if (trimmedValue.length === 0) {
        setValidError("Поле пустое. Заполните пожалуйста");
        return;
      }
      if (type === "text") {
        if (trimmedValue.length > 0) {
          setFormFieldsValidStatus((prev) => ({ ...prev, [name]: true }));
          return;
        }
      }
      if (type === "phone") {
        const regex = /^\d-\d{4}-\d{2}-\d{2}$/g;
        if (regex.test(trimmedValue) === false) {
          setValidError("Пожалуйста, введите телефон в формате X-XXXX-XX-XX");
          return;
        } else {
          setFormFieldsValidStatus((prev) => ({ ...prev, [name]: true }));
          return;
        }
      }
      if (type === "url") {
        const regex = /^https:\/\/*/g;
        if (regex.test(trimmedValue) === false) {
          setValidError("Пожалуйста, введите сайт, начиная с https://");
          return;
        } else {
          setFormFieldsValidStatus((prev) => ({ ...prev, [name]: true }));
          return;
        }
      }
      if (type === "date") {
        const regex = /^\d{4}-\d{2}-\d{2}$/g;
        if (regex.test(trimmedValue) === false) {
          setValidError("Пожалуйста, введите дату в формте XX.XX.XXXX");
          return;
        } else if (status !== true) {
          setFormFieldsValidStatus((prev) => ({ ...prev, [name]: true }));
          return;
        }
      }
    },
    [trimmedValue, setFormFieldsValidStatus, name, status]
  );

  useEffect(() => {
    handleValidation(type);
  }, [showFormFieldsStatus, value, status, handleValidation, type]);

  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        className="text-input"
        name={name}
        value={value}
        placeholder={placeholder}
        type={type}
        maxLength={80}
        required
        {...otherProps}
      />
      {showFormFieldsStatus === true && status === false ? (
        <label className="inputInfo">{validError}</label>
      ) : null}
    </div>
  );
};

export default InputField;
