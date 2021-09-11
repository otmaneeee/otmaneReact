import Dropdown from "react-bootstrap/Dropdown";
import { dropdownProps } from "../../constants";
import DropdownItem from "./DropdownItems";
const index = (props) => {
  const {variant,id,text,menu} = props;
  return (
    <Dropdown>
      <Dropdown.Toggle variant={variant} id={id}>
        {text}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {menu.map(item=> <DropdownItem link={item.link} option={item.action}/>)}
      </Dropdown.Menu>
    </Dropdown>
  );
};
index.defaultProps = {
  ...dropdownProps.defaults
}
export default index;
