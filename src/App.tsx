import { Provider as ReduxProvider } from "react-redux";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Store from "./state/store";
import Routes from "./routes";

const App = () => {
  return (
    <>
      <ReduxProvider store={Store}>
        <Routes />
      </ReduxProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
      />
    </>
  );
};

export default App;
