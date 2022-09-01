import LinearStepper from "./LinearStepper";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";

function App() {
  return (
    <>
      <CssBaseline />
      <Container component={Box} p={10}>
        <Paper component={Box} p={20}>
        
       
          <LinearStepper />
        </Paper>
      </Container>
    </>
  );
}

export default App;
