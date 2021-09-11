import CustomButton from "../../components/CustomButton";
import React,{useState} from "react";
import CustomInput from "../../components/CustomInput";
const Categorie = () => {
    const [counter , setCounter] = useState(10);
    const [name , setName] = useState("");
    const handleClick = () => {
        setCounter(counter + 2);
    }
    const handleChange = (e) => {
        setName(e.target.value);
    }
  return (
    <div >
      <CustomButton onClick={handleClick} text={'increase'} />
      <h2>{counter}</h2>
      <CustomInput onChange={handleChange} />
      <h2>{name}</h2>
    </div>
  );
};

export default Categorie;
