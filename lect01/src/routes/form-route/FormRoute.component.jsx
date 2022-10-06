import { useState } from "react";
import Form from "../../components/form/Form.component";
import Header from "../../components/header/Header.component";

const FormRoute = (props) => {
  const [formStatus, setFormStatus] = useState(false);
  const [personInformation, setPersonInformation] = useState("");

  return (
    <>
      <Header name="Создание анкеты" />
      <Form
        formStatus={formStatus}
        setFormStatus={setFormStatus}
        setPersonInformation={setPersonInformation}
        personInformation={personInformation}
      />
    </>
  );
};

export default FormRoute;
