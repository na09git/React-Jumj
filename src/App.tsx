import { Grid, Show, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

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
        <GridItem area="nav">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="nav">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
