import { Grid, Show, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav  " "  main"`,
        lg: `"nav nav " " aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />{" "}
      </GridItem>
      <Show above="lg">
        <GridItem area="nav">aside</GridItem>
      </Show>
      <GridItem area="nav">Main</GridItem>
    </Grid>
  );
}

export default App;
