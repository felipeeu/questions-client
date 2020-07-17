import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import DeleteQuestionMutation from "./mutations/DeleteQuestionMutation";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function DeleteConfirmation({
  questionId,
  payload,
  setPayload,
  setDeleteModalOpen
}) {
  const classes = useStyles();

  const deleteQuestion = () => {
    DeleteQuestionMutation(questionId, () => {
      setPayload(
        payload && payload.filter(question => question.id !== questionId)
      );
      setDeleteModalOpen(false);
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Tem certeza que deseja excluir essa questão ?
        </Typography>
        <form className={classes.form} noValidate>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={deleteQuestion}
          >
            Deletar
          </Button>
        </form>
      </div>
    </Container>
  );
}
