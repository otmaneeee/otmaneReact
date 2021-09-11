import CustomDropdown from "../../components/CustomDropdown";
import { dropdownProps } from "../../constants";

const DropDowns = () => {
  return (
    <div>
      <CustomDropdown />
      <br></br>
      <br></br>
      <CustomDropdown
        variant={dropdownProps.avengers.variant}
        id={dropdownProps.avengers.id}
        text={dropdownProps.avengers.text}
        menu={dropdownProps.avengers.menu}
      />
      <br></br>
      <br></br>
      <CustomDropdown {...dropdownProps.villain} />
    </div>
  );
};

export default DropDowns;
