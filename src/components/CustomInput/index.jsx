import Form from "react-bootstrap/Form";
import { textInputProps } from "../../constants";
const index = ({
  type = textInputProps.type.defaut,
  placeholder = textInputProps.placeholder.defaut,
  label = textInputProps.label.defaut,
}) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{label}</Form.Label>
        <Form.Control type={type} placeholder={placeholder} />
      </Form.Group>
    </Form>
  );
};

export default index;
