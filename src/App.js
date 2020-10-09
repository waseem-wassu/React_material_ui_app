import React from 'react';
import "./App.css";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import ButtonAppBar from "./NavBar";

const useStyles = makeStyles((theme) => ({

  paper: {
    width:400,
    margin: '0 auto',
    marginTop:'130px',
    textAlign: 'center',
    padding: 16
  },
  Input : {
    width:"95%",
    marginBottom: 10
  }
}));


function App() {
  const classes = useStyles();

    return (
      <div className={classes.root}>
         <ButtonAppBar />
          <Paper elevation={3} className={classes.paper} >
              <h1>Login</h1>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField  label="Enter Email" className={classes.Input} />
                <TextField  label="Enter Password" className={classes.Input} />
                  <Button variant="contained" color="primary">
                      Login
                  </Button>
              </form>
          </Paper>
        </div>
    );
}

export default App;
