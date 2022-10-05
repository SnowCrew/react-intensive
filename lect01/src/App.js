import { useState } from 'react';
import './App.css';
import CompletedForm from './components/completed-form/CompletedForm.component';
import Form from './components/form/Form.component';
import Header from './components/header/Header.component';

const App = () => {
  const [formStatus, setFormStatus] = useState(false);
  const [personInformation, setPersonInformation] = useState('');


  return (
    <div className="App" >
      {formStatus
        ? <Header name={`${personInformation.fname} ${personInformation.lname}`} />
        : <Header name="Создание анкеты" />}

      {formStatus
        ? <CompletedForm personInformation={personInformation} setFormStatus={setFormStatus} />
        : <Form setFormStatus={setFormStatus} setPersonInformation={setPersonInformation} />}
    </div>)
}
export default App;
