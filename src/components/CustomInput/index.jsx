import Form from "react-bootstrap/Form";
import { textInputProps } from "../../constants";
const index = ({
  type = textInputProps.type.defaut,
  placeholder = textInputProps.placeholder.defaut,
  label = textInputProps.label.defaut,
  onChange,
}) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
      </Form.Group>
    </Form>
  );
};

export default index;
