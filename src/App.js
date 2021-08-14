import { toUpperCase } from "./utils/stringUtils";
import { STATIC_HELLO } from "./constants";
import CustomButton from "./components/CustomButton";
import { bootstrapButtonVariant, buttonTexts } from "./constants";
import CustomInput from "./components/CustomInput";
import { textInputProps } from "./constants";
const App = () => {
  return (
    <div>
      <CustomInput
        type={textInputProps.type.email}
        placeholder={textInputProps.placeholder.email}
        label={textInputProps.label.email}
      />
      <CustomInput 
         type={textInputProps.type.password}
         placeholder={textInputProps.placeholder.password}
         label={textInputProps.label.password}
      />
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
