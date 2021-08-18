import { toUpperCase } from "./utils/stringUtils";
import { STATIC_HELLO } from "./constants";
import CustomButton from "./components/CustomButton";
import { bootstrapButtonVariant, buttonTexts } from "./constants";
import CustomInput from "./components/CustomInput";
import { textInputProps } from "./constants";
import Category from "./containers/category/category";
const App = () => {
  return (
    <div>
      <Category />
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
