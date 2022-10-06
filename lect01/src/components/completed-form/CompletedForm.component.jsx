import "./CompletedForm.styles.css";
import { ruNamedFields as ruData } from "../../data/form.data";
import { Link } from "react-router-dom";

const CompletedForm = (props) => {
  const { personInformation } = props;

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
      <Link className="link" to={"/form"} replace>
        Вернуться к форме
      </Link>
      <Link className="link" to={"/"} replace>
        Вернуться на стартовую страницу
      </Link>
    </div>
  );
};
export default CompletedForm;
