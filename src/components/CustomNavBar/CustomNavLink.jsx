import Nav from "react-bootstrap/Nav";

const CustomNavLink = ({ link, text }) => (
  <Nav.Link href={link}>{text}</Nav.Link>
);

export default CustomNavLink;
