import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";
import DeleteQuestionMutation from "./mutations/DeleteQuestionMutation";
import { useModalStyles } from "./StyleMui/ModalStyle";

export default function DeleteConfirmation({
  questionId,
  payload,
  setPayload,
  setDeleteModalOpen
}) {
  const classes = useModalStyles();

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
