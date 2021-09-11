import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import {
  textInputProps,
  bootstrapButtonVariant,
  buttonTexts,
} from "../../constants";
import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
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
    </div>
  );
};

export default Login;
