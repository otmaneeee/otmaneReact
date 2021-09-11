import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { textInputProps , bootstrapButtonVariant ,buttonTexts } from '../../constants';
import "./Login.css";

const Login = () => {
    return(
        <div id="hey">
            <h1>Login</h1>
            <br></br>
            <br></br>
            <CustomInput
        type={textInputProps.type.email}
        placeholder={textInputProps.placeholder.email}
        label={textInputProps.label.email}
      />
      <br></br>
      <br></br>
      <CustomInput
        type={textInputProps.type.password}
        placeholder={textInputProps.placeholder.password}
        label={textInputProps.label.password}
      />
      <br></br>
      <br></br>
      <CustomButton color={bootstrapButtonVariant.primary} text={buttonTexts.connection}/>
      <br></br>
      <br></br>
      <CustomButton color={bootstrapButtonVariant.danger} text={buttonTexts.mdpForgotten}/>
        </div>
    ) 
}

export default Login;