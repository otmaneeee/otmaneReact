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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    switch (e.target.name) {
      case textInputProps.name.email:
        setEmail(e.target.value);
        break;
      case textInputProps.name.password:
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>Login</h1>
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
      <h3>Email : {email}</h3>
      <h3>Password : {password}</h3>
    </div>
  );
};

export default Login;
