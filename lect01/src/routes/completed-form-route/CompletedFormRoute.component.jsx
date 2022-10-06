import CompletedForm from "../../components/completed-form/CompletedForm.component";
import Header from "../../components/header/Header.component";
import { PersonsContex } from "../../context/PersonsContext.context";
import { useContext } from "react";

const CompletedFormRoute = () => {
  const [context] = useContext(PersonsContex);

  return (
    <>
      <Header name={`${context.fname} ${context.lname}`} />
      <CompletedForm personInformation={context} />
    </>
  );
};

export default CompletedFormRoute;
