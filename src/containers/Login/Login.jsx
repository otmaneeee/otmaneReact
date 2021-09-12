import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import {
  textInputProps,
  bootstrapButtonVariant,
  buttonTexts,
} from "../../constants";
import React, { useState } from "react";
import "./Login.css";
import { authUser,messageAuth } from "../../constants";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error,setError] = useState(false);
  const handleChange = (e) => {
    switch (e.target.name) {
      case textInputProps.name.email:
        setCredentials({
          email: e.target.value,
          password: credentials.password,
        });
        break;
      case textInputProps.name.password:
        setCredentials({ ...credentials, password: e.target.value });
        break;
      default:
        break;
    }
  };
  const handleClick = () => {
       if((credentials.email !== authUser.email) || (credentials.password !== authUser.password) ){
         setError(true);
       }
       else{
         setError(false);
       }
  }

  return (
    <div>
      <h1 id="title">Welcome To My Login</h1>
      <br></br>
      <br></br>
      <CustomInput
        type={textInputProps.type.email}
        placeholder={textInputProps.placeholder.email}
        label={textInputProps.label.email}
        onChange={handleChange}
        name={textInputProps.name.email}
      />
      <br></br>
      <br></br>
      <CustomInput
        type={textInputProps.type.password}
        placeholder={textInputProps.placeholder.password}
        label={textInputProps.label.password}
        onChange={handleChange}
        name={textInputProps.name.password}
      />
      <br></br>
      <br></br>
      <section className="btnContainer">
        <CustomButton
          color={bootstrapButtonVariant.primary}
          text={buttonTexts.connection}
          onClick={handleClick}
        />
        <CustomButton
          color={bootstrapButtonVariant.danger}
          text={buttonTexts.mdpForgotten}
        />
      </section>
      <br></br>
      <br></br>
      <h1>Informations</h1>
      <h3>Email : {credentials.email}</h3>
      <h3>Password : {credentials.password}</h3>
      <br></br>
      <h1>Resultat :</h1>
      {error?<h3 style={{color:"red"}}>{messageAuth.error}</h3>:<h3 style={{color:"green"}}>{messageAuth.success}</h3>}
    </div>
  );
};

export default Login;
