import { useState } from "react";
import InputField from "../text-fields/InputField.component";
import TextArea from "../text-fields/TextArea.component";
import "./Form.styles.css";
import {
  defaultFormFields,
  statusFormFields,
  correctFieldsForTest,
} from "../../data/form.data";
import { useCallback } from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { PersonsContex } from "../../context/PersonsContext.context";

const Form = (props) => {
  const [, setContext] = useContext(PersonsContex);
  const { setFormStatus, setPersonInformation, formStatus } = props;
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [formFieldsValidStatus, setFormFieldsValidStatus] =
    useState(statusFormFields);
  const [showFormFieldsStatus, setShowFormFieldsStatus] = useState(false);

  const {
    fname,
    lname,
    bdate,
    tel,
    site,
    aboutYourself,
    techStack,
    lastProject,
  } = formFields;

  const handleObjectTrimmer = (obj) => {
    const newObj = {};
    for (let keys in obj) {
      newObj[keys] = obj[keys].trim();
    }
    return newObj;
  };

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      setFormFieldsValidStatus(statusFormFields);
      setShowFormFieldsStatus(true);

      if (Object.values(formFieldsValidStatus).every((el) => el === true)) {
        setPersonInformation(handleObjectTrimmer(formFields));
        setContext(handleObjectTrimmer(formFields));
        setFormStatus(true);
      } else {
        window.scrollTo(0, 0);
      }
    },
    [
      formFields,
      formFieldsValidStatus,
      setContext,
      setFormStatus,
      setPersonInformation,
    ]
  );

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;

      setFormFieldsValidStatus({ ...formFieldsValidStatus, [name]: true });
      setFormFields({ ...formFields, [name]: value });
    },
    [formFields, formFieldsValidStatus]
  );

  const handleClear = useCallback(
    (event) => {
      event.preventDefault();
      setFormFields(defaultFormFields);
      setFormFieldsValidStatus(statusFormFields);
      setShowFormFieldsStatus(false);
      props.setFormStatus(false);
    },
    [props]
  );

  const handleCorrectData = (event) => {
    event.preventDefault();
    setFormFields(correctFieldsForTest);
  };

  return (
    <form className="form">
      <InputField
        label="Имя*"
        placeholder="Имя"
        value={fname}
        name="fname"
        onChange={handleChange}
        setFormFieldsValidStatus={setFormFieldsValidStatus}
        setFormFields={setFormFields}
        showFormFieldsStatus={showFormFieldsStatus}
        status={formFieldsValidStatus.fname}
      />
      <InputField
        label="Фамилия*"
        placeholder="Фамилия"
        value={lname}
        name="lname"
        onChange={handleChange}
        setFormFieldsValidStatus={setFormFieldsValidStatus}
        setFormFields={setFormFields}
        showFormFieldsStatus={showFormFieldsStatus}
        status={formFieldsValidStatus.lname}
      />
      <InputField
        label="Дата рождения*"
        placeholder="Дата рождения"
        type="date"
        value={bdate}
        name="bdate"
        onChange={handleChange}
        setFormFieldsValidStatus={setFormFieldsValidStatus}
        showFormFieldsStatus={showFormFieldsStatus}
        status={formFieldsValidStatus.bdate}
      />
      <InputField
        label="Телефон*"
        placeholder="Телефон"
        type="tel"
        value={tel}
        name="tel"
        onChange={handleChange}
        setFormFields={setFormFields}
        setFormFieldsValidStatus={setFormFieldsValidStatus}
        showFormFieldsStatus={showFormFieldsStatus}
        status={formFieldsValidStatus.tel}
      />
      <InputField
        label="Сайт*"
        placeholder="Сайт"
        type="url"
        value={site}
        name="site"
        onChange={handleChange}
        setFormFieldsValidStatus={setFormFieldsValidStatus}
        showFormFieldsStatus={showFormFieldsStatus}
        status={formFieldsValidStatus.site}
      />

      <TextArea
        label="О себе"
        placeholder="О себе"
        value={aboutYourself}
        name="aboutYourself"
        onChange={handleChange}
      />
      <TextArea
        label="Стек технологий"
        placeholder="Стек технологий"
        value={techStack}
        name="techStack"
        onChange={handleChange}
      />
      <TextArea
        label="Описание последнего проекта"
        placeholder="Описание последнего проекта"
        value={lastProject}
        name="lastProject"
        onChange={handleChange}
      />

      {formStatus ? <Navigate to="/completed-form" /> : null}
      {
        <input
          className="btn"
          type={"button"}
          onClick={handleSubmit}
          value="Сохранить"
        />
      }
      <input
        className="btn"
        type={"button"}
        onClick={handleClear}
        value="Отменить"
      />
      <button className="btn" onClick={handleCorrectData}>
        Fill with correct data
      </button>
    </form>
  );
};

export default Form;
