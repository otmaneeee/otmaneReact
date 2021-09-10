import { toUpperCase } from "./utils/stringUtils";
import { STATIC_HELLO } from "./constants";
import CustomButton from "./components/CustomButton";
import { bootstrapButtonVariant, buttonTexts } from "./constants";
import CustomInput from "./components/CustomInput";
import { textInputProps } from "./constants";
import Category from "./containers/category/category";
import Inscription from "./containers/Inscription/inscription";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ToDo from "./containers/ToDoList";
import CustomNavBar from "./components/CustomNavBar";
import { navLinks } from "./constants";
const App = () => {
  return (
    <div>
      <CustomNavBar links={navLinks}/>
      {/* <ToDo/> */}
    {/* <Router>
      <Switch>
          <Route path="/login">
            <Category />
          </Route>
          <Route path="/inscription">
            <Inscription />
          </Route>
          <Route path="/">
            <Category />
          </Route>
        </Switch>
      </Router> */}
      {/* <CustomButton
        color={bootstrapButtonVariant.success}
        text={buttonTexts.success}
      />{" "}
      <br></br>
      <br></br>
      <CustomButton
        color={bootstrapButtonVariant.outlineWarning}
        text={buttonTexts.outlineWarning}
      />
      <br></br>
      <br></br>
      <CustomButton
        color={bootstrapButtonVariant.danger}
      />
      <br></br>
      <br></br>
      <CustomButton
        color={bootstrapButtonVariant.success}
      /> */}
      </div>
  );
};
export default App;
