import React, { useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  TextField,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const [submit, setSubmit] = useState(false);

  const nameHandler = (e) => {
    setFullName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const numberHandler = (e) => {
    setNumber(e.target.value);
  };
  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // saving data to firebase
    axios
      .post(
        "https://gym-data-1a030-default-rtdb.firebaseio.com/registerations.json",
        {
          FullName: fullName,
          Email: email,
          Number: number,
          Message: message,
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setFullName("");
    setEmail("");
    setNumber("");
    setMessage("");
    setSubmit(true);
  };

  return (
    <Card
      style={{
        maxWidth: "650px",
        margin: "4rem auto",
        padding: "4rem 1rem",
      }}
    >
      <CardContent>
        <Typography variant="h3">Sign Up</Typography>
        <form onSubmit={submitHandler}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <TextField
                value={fullName}
                onChange={nameHandler}
                label="Full Name"
                placeholder="Enter Your Full Name"
                variant="filled"
                fullWidth
                required
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                value={email}
                onChange={emailHandler}
                label="Email"
                placeholder="Enter Your Email"
                variant="filled"
                fullWidth
                required
                type="email"
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                value={number}
                onChange={numberHandler}
                label="Phone Number"
                placeholder="Enter Your Phone Number"
                variant="filled"
                fullWidth
                required
                type="number"
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                value={message}
                onChange={messageHandler}
                label="Enter Your Goals"
                placeholder="Enter Your Goals Here"
                multiline
                rows={4}
                variant="filled"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                style={{ background: "var(--color-red)" }}
              >
                Submit
              </Button>
            </Grid>

            {submit && (
              <Typography variant="h6" className="submit-msg font_base">
                You Have Been Registered!
              </Typography>
            )}
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default Form;
