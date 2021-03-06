import Button from "react-bootstrap/Button";
import { buttonTexts } from "../../constants";
const index = (props) => {
  return (
    <Button variant={props.color} onClick={props.onClick}>
      {props.text}
    </Button>
  );
};
index.defaultProps = {
  text: buttonTexts.success,
};
export default index;
