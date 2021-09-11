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
      <CustomNavBar links={navLinks} />
      <CustomCard />
      <CustomCard {...cardProps.cap} />
      <CustomCard {...cardProps.thor} />
    </div>
  );
};
export default bigThree;
