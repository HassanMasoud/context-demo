import React, { Component } from "react";
import { LanguageContext } from "./contexts/LanguageContext";
import {
  Avatar,
  Button,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Checkbox,
  Input,
  InputLabel,
  Paper,
  Typography,
  MenuItem,
  Select,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/FormStyles";

class Form extends Component {
  static contextType = LanguageContext;

  render() {
    const { language, changeLanguage } = this.context;
    const { classes } = this.props;

    const words = {
      english: {
        signIn: "Sign In",
        email: "Email",
        password: "Password",
        rememberMe: "Remember Me",
      },
      french: {
        signIn: "Se Connecter",
        email: "Adresse Electronique",
        password: "Mot De Passe",
        rememberMe: "Souviens-toi De Moi",
      },
      spanish: {
        signIn: "Registrarse",
        email: "Correo Electronico",
        password: "Contrasena",
        rememberMe: "Recuerdame",
      },
    };

    const { signIn, email, password, rememberMe } = words[language];
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5">{signIn}</Typography>
          <Select value={language} onChange={changeLanguage}>
            <MenuItem value="english">English</MenuItem>
            <MenuItem value="french">French</MenuItem>
            <MenuItem value="spanish">Spanish</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">{email}</InputLabel>
              <Input id="email" name="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">{password}</InputLabel>
              <Input id="password" name="password" autoFocus />
            </FormControl>
            <FormControlLabel
              label={rememberMe}
              control={<Checkbox color="primary" />}
            />
            <Button
              className={classes.submit}
              variant="contained"
              type="submit"
              fullWidth
              color="primary"
            >
              {signIn}
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Form);
