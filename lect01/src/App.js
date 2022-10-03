import { useState } from 'react';
import './App.css';
import Form from './components/form/Form.component';
import Header from './components/header/Header.component';

const App = () => {
  const [formStatus, setFormStatus] = useState(false);

  return (
    <div className="App" >
      <Header name="Создание анкеты" />
      <Form setFormStatus={setFormStatus} />
    </div>)
}
export default App;
