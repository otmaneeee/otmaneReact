import {Link} from "react-router-dom";

const CustomNavLink = ({ link, text }) => (
  <Link to={link}>{text}</Link> 
);

export default CustomNavLink;
