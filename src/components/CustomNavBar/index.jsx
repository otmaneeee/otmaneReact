import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { customNavBarProps } from "../../constants";
import CustomNavLink from "./CustomNavLink";
import Logo from "./Logo";
import { logoProps } from "../../constants";
const index = ({
  bg = customNavBarProps.default.background,
  variant = customNavBarProps.default.variant,
  navHome = customNavBarProps.default.navHome,
  className = customNavBarProps.default.className,
  links = customNavBarProps.default.options,
  logo = <Logo {...logoProps.avengers}/>,
}) => {
  return (
    <Navbar bg={bg} variant={variant}>
      <Container>
        <Navbar.Brand href={navHome}>{logo}</Navbar.Brand>
        <Nav className={className}>
          {links.map(item=> <CustomNavLink link={item.link} text={item.text}/>)}
        </Nav>
      </Container>
    </Navbar> 
  );
};

export default index;
