import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import "./App.css";

function App() {
  const boxStyles = { border: "0px solid black", p: "4px" };
  return (
    <Container disableGutters>
      <Grid>
        <Grid item xs={2}>
          <Box sx={boxStyles}>
            <Typography variant="h4" component="h1" gutterBottom>
              <Button variant="outlined">CSS Style Editor</Button>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box sx={boxStyles}></Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
