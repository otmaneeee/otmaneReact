import { toUpperCase } from "./utils/stringUtils";
import { STATIC_HELLO } from "./constants";
const App = () => {
  return <div>{toUpperCase(STATIC_HELLO)}</div>;
};

export default App;
