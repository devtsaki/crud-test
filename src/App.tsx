import { Provider as ReduxProvider } from "react-redux";

import Store from "./state/store";
import Routes from "./routes";

const App = () => {
  return (
    <ReduxProvider store={Store}>
      <Routes />
    </ReduxProvider>
  );
};

export default App;
