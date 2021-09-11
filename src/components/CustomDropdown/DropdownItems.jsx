import DropdownItem from "react-bootstrap/esm/DropdownItem"
import { Dropdown } from "react-bootstrap";
const DropdownItems = ({link,option}) => <Dropdown.Item href={link}>{option}</Dropdown.Item>

export default DropdownItems;