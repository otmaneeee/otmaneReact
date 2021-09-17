import CustomCard from "../../components/CustomCard";
import CustomButton from "../../components/CustomButton";
import CustomNavBar from "../../components/CustomNavBar";
import {
  bootstrapButtonVariant,
  buttonTexts,
  cardProps,
  navLinks,
} from "../../constants";

const bigThree = () => {
  return (
    <div>
      <CustomCard />
      <CustomCard {...cardProps.cap} />
      <CustomCard {...cardProps.thor} />
      <CustomCard {...cardProps.hulk} />
      <CustomCard {...cardProps.blackWidow} />
      <CustomCard {...cardProps.hawkeye} />
      <CustomCard {...cardProps.warMachine} />
      <CustomCard {...cardProps.Wanda} />
      <CustomCard {...cardProps.spiderMan} />
      
    </div>
  );
};
export default bigThree;
