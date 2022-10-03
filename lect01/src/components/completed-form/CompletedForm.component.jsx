import "./CompletedForm.styles.css";
import { ruNamedFields as ruData } from "../../data/form.data";

const CompletedForm = (props) => {
  const { personInformation, setFormStatus } = props;

  const handleShowForm = () => {
    setFormStatus(false);
  };

  return (
    <div className="completedForm">
      {Object.entries(personInformation).map((el) => {
        return (
          <div className="fieldsContainer" key={el[0]}>
            <div className="fieldName">{ruData[el[0]]}</div>
            <div className="fieldValue">{el[1]}</div>
          </div>
        );
      })}
      <button onClick={handleShowForm}>Отменить</button>
    </div>
  );
};
export default CompletedForm;
