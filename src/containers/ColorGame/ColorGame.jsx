import CustomButton from "../../components/CustomButton/index";
import Circle from "../../components/circle/index";
import { buttonTexts, bootstrapButtonVariant } from "../../constants";
const ColorGame = () => {
  return (
    <div>
      <Circle />
      <CustomButton color={bootstrapButtonVariant.danger} text={"red"} />
      <CustomButton color={bootstrapButtonVariant.primary} text={"blue"} />
      <CustomButton color={bootstrapButtonVariant.success} text={"green"} />
    </div>
  );
};

export default ColorGame;
