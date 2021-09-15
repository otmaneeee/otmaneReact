import Form from "react-bootstrap/Form";
import { textInputProps } from "../../constants";
const index = ({
  type = textInputProps.type.defaut,
  placeholder = textInputProps.placeholder.defaut,
  label = textInputProps.label.defaut,
  onChange,
  name=textInputProps.name.defaut,
  value,
}) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </Form.Group>
    </Form>
  );
};

export default index;
