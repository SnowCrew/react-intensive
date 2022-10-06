import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home.component';
import CompletedFormRoute from './routes/completed-form-route/CompletedFormRoute.component';
import FormRoute from './routes/form-route/FormRoute.component';
import { PersonsContex } from './context/PersonsContext.context';
import { defaultFormFields } from "../src/data/form.data";


const App = () => {
  const [formStatus, setFormStatus] = useState(false);
  const [personInformation, setPersonInformation] = useState(defaultFormFields);

  return (
    <div className="App" >
      <PersonsContex.Provider value={[personInformation, setPersonInformation]} >
        <Routes>
          <Route index element={<Home />} />
          {/* gh pages starting page is /react-intensive */}
          <Route path='react-intensive' element={<Home />} />
          <Route path='form' element={<FormRoute setFormStatus={setFormStatus} setPersonInformation={setPersonInformation} formStatus={formStatus} personInformation={personInformation} />} name="Создание анкеты" />
          <Route path='completed-form' element={<CompletedFormRoute personInformation={personInformation} setFormStatus={setFormStatus} />} />
        </Routes>
      </PersonsContex.Provider>
    </div>)
};
export default App;
