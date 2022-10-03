import { useState } from "react";
import InputField from "../text-fields/InputField.component";
import TextArea from "../text-fields/TextArea.component";
import "./Form.styles.css";
import { defaultFormFields, statusFormFields } from "../../data/form.data";
import { useEffect } from "react";
import { useCallback } from "react";

const Form = (props) => {
  const { setFormStatus, setPersonInformation } = props;
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [formFieldsValidStatus, setFormFieldsValidStatus] =
    useState(statusFormFields);
  const [showFormFieldsStatus, setShowFormFieldsStatus] = useState(false);

  const {
    fname,
    lname,
    bdate,
    phone,
    site,
    aboutYourself,
    techStack,
    lastProject,
  } = formFields;

  useEffect(() => {
    setShowFormFieldsStatus(false);
  }, [formFields]);

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

      // setFormFieldsValidStatus(statusFormFields);
      setShowFormFieldsStatus(true);

      if (Object.values(formFieldsValidStatus).every((el) => el === true)) {
        setFormStatus(true);
        setPersonInformation(handleObjectTrimmer(formFields));
      }
    },
    [formFields, formFieldsValidStatus, setFormStatus, setPersonInformation]
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

  return (
    <form className="form">
      <InputField
        label="Имя"
        value={fname}
        name="fname"
        onChange={handleChange}
        setFormFieldsValidStatus={setFormFieldsValidStatus}
        setFormFields={setFormFields}
        showFormFieldsStatus={showFormFieldsStatus}
        status={formFieldsValidStatus.fname}
      />
      <InputField
        label="Фамилия"
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
        label="Дата рождения"
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
        label="Телефон"
        placeholder="Телефон"
        type="phone"
        value={phone}
        name="phone"
        onChange={handleChange}
        setFormFieldsValidStatus={setFormFieldsValidStatus}
        showFormFieldsStatus={showFormFieldsStatus}
        status={formFieldsValidStatus.phone}
      />
      <InputField
        label="Сайт"
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
        // setFormFieldsValidStatus={setFormFieldsValidStatus}
        // status={formFieldsValidStatus.aboutYourself}
      />
      <TextArea
        label="Стек технологий"
        placeholder="Стек технологий"
        value={techStack}
        name="techStack"
        onChange={handleChange}
        // setFormFieldsValidStatus={setFormFieldsValidStatus}
        // status={formFieldsValidStatus.techStack}
      />
      <TextArea
        label="Описание последнего проекта"
        placeholder="Описание последнего проекта"
        value={lastProject}
        name="lastProject"
        onChange={handleChange}
        // setFormFieldsValidStatus={setFormFieldsValidStatus}
        // status={formFieldsValidStatus.lastProject}
      />

      <input type={"button"} onClick={handleSubmit} value="Сохранить" />
      <input type={"button"} onClick={handleClear} value="Отменить" />
    </form>
  );
};

export default Form;
