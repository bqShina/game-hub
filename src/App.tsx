import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { useColorMode } from "./components/ui/color-mode";
import { useEffect } from "react";

function App() {
  const isLg = useBreakpointValue({ base: false, lg: true });

  const { setColorMode } = useColorMode();
  useEffect(() => {
    setColorMode("dark");
  }, []);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show when={isLg}>
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
