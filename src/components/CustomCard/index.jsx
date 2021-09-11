import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { cardProps } from "../../constants";
import CustomButton from "../CustomButton";
import { bootstrapButtonVariant, buttonTexts } from "../../constants";
import "./index.css";
const index = ({
  width = cardProps.default.width,
  variant = cardProps.default.variant,
  src = cardProps.default.src,
  title = cardProps.default.title,
  text = cardProps.default.text,
  button = <CustomButton color={bootstrapButtonVariant.danger} text={buttonTexts.danger}/>
}) => {
  return (
    <div className="spaced">
        <Card style={{ width: { width } }}>
      <Card.Img variant={variant} src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
         {button}
      </Card.Body>
    </Card>
    </div>
  );
};

export default index;
