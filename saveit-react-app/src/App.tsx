import React from 'react';
import MyForm from "./components/MyForm";
import { CssBaseline } from '@mui/material'


function App() {
  return (
      <React.Fragment>
          <CssBaseline />
          <div>
              <h1>Enter Youtube Url</h1>
              <MyForm />
          </div>
      </React.Fragment>
  );
}

export default App;
