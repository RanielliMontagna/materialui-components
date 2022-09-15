import { ThemeProvider } from "@emotion/react";
import {
  StyledEngineProvider,
  ThemeProvider as ThemeProviderMui,
} from "@mui/material";
import { Routes } from "./routes/routes";
import { GlobalStyles } from "./styles/global.styles";
import theme from "./styles/theme";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProviderMui theme={theme}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Routes />
        </ThemeProvider>
      </ThemeProviderMui>
    </StyledEngineProvider>
  );
}

export default App;
