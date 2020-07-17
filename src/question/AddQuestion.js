import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CreateQuestionMutation from "../mutations/CreateQuestionMutation";
import {useModalStyles} from "../StyleMui/ModalStyle"

export default function AddQuestion({ payload, setPayload, setModalOpen }) {
  const classes = useModalStyles();
  const [state, setState] = React.useState({ topic: "", body: "", answer: "" });

  const createQuestion = () => {
    const { topic, body, answer } = state;
    CreateQuestionMutation(topic, body, answer, () => {
      setPayload(payload.concat([state]));
      setModalOpen(false);
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Crie aqui sua questão 
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container justify="center" spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="topic"
                variant="outlined"
                required
                id="topic"
                label="Assunto"
                autoFocus
                onChange={e => setState({ ...state, topic: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                multiline
                rows={6}
                required
                fullWidth
                id="body"
                label="Pergunta"
                name="body"
                autoComplete="body"
                onChange={e => setState({ ...state, body: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                multiline
                rows={6}
                required
                fullWidth
                id="answer"
                label="Resposta"
                name="answer"
                autoComplete="answer"
                onChange={e => setState({ ...state, answer: e.target.value })}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={createQuestion}
          >
            Criar
          </Button>
        </form>
      </div>
    </Container>
  );
}
