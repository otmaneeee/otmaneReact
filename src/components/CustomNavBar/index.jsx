import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { customNavBarProps } from "../../constants";
import CustomNavLink from "./CustomNavLink";
const index = ({
  bg = customNavBarProps.default.background,
  variant = customNavBarProps.default.variant,
  navHome = customNavBarProps.default.navHome,
  className = customNavBarProps.default.className,
  links = customNavBarProps.default.options,
}) => {
  return (
    <Navbar bg={bg} variant={variant}>
      <Container>
        <Navbar.Brand href={navHome}>Navbar</Navbar.Brand>
        <Nav className={className}>
          {links.map(item=> <CustomNavLink link={item.link} text={item.text}/>)}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default index;
