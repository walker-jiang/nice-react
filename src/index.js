import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { HashRouter } from "react-router-dom";
import Paper from 'material-ui/Paper';

import Layout from './container/layout';
import Content from './container/layout/content';
import Login from './container/login/login';
const styles = {
  display:'flex',
  flexDirection:'column',
  // border: '4px solid red',
  height: '100vh'
}
const App = () => (
    <MuiThemeProvider>
       <Paper style={styles}  >
         <HashRouter>
           <Login />
         </HashRouter>
       </Paper>
   </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
