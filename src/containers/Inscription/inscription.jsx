import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import {
  buttonTexts,
  bootstrapButtonVariant,
  textInputProps,
} from "../../constants";
import "./inscription.css";


const Inscription = () => {
  return (
    <div className="insc">
      <h1>Inscription</h1>
      <CustomInput
        label={textInputProps.label.firstName}
        placeholder={textInputProps.placeholder.firstName}
      />
      <CustomInput
        label={textInputProps.label.lastName}
        placeholder={textInputProps.placeholder.lastName}
      />
      <CustomInput
        label={textInputProps.label.email}
        placeholder={textInputProps.placeholder.email}
        type={textInputProps.type.email}
      />
      <CustomInput
        label={textInputProps.label.password}
        placeholder={textInputProps.placeholder.password}
        type={textInputProps.type.password}
      />
      <CustomInput
        label={textInputProps.label.confirmPassword}
        placeholder={textInputProps.placeholder.confirmPassword}
        type={textInputProps.type.password}
      />
      <CustomButton text={buttonTexts.inscription} color={bootstrapButtonVariant.primary}/>
    </div>
  );
};

export default Inscription;
