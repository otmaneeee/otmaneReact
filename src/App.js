import { toUpperCase } from "./utils/stringUtils";
import { cardProps, STATIC_HELLO } from "./constants";
import CustomButton from "./components/CustomButton";
import { bootstrapButtonVariant, buttonTexts } from "./constants";
import CustomInput from "./components/CustomInput";
import { textInputProps } from "./constants";
import Inscription from "./containers/Inscription/inscription";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ToDo from "./containers/ToDoList";
import CustomNavBar from "./components/CustomNavBar";
import { navLinks, logoProps, dropdownProps } from "./constants";
import Logo from "./components/CustomNavBar/Logo";
import CustomCard from "./components/CustomCard";
import BigThree from "./containers/Avengers/bigThree";
import CustomDropdown from "./components/CustomDropdown";
import DropDowns from "./containers/Dropdowns/Dropdowns";
import Categorie from "./containers/Categorie/Categorie";
import Login from "./containers/Login/Login";
import BasicToDoList from "./containers/ToDoList/BasicToDoList";
const App = () => {
  return (
    <div>
      <BasicToDoList/>
    {/* <Router>
      <Switch>
          <Route path="/login">
            <div style={{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"}}>
              <Login />
            </div>
            
          </Route>
          <Route path="/inscription">
          <div style={{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"}}>
              <Inscription />
            </div>
          </Route>
          <Route path="/">
            <BigThree />
          </Route>
        </Switch>
    </Router> */}
  );
      {/* <Categorie/> */}
      {/* <DropDowns/> */}
      {/* <BigThree/> */}
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
