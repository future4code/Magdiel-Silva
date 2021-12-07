import { Router } from "./route/Router";
import { GlobalStyle } from "./pages/Styled";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <div>
      <CssBaseline/>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
