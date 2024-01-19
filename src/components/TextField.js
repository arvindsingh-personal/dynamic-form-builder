import { Button, Card, Checkbox, Flex, Form, Input } from "antd";
import React, { useCallback, useContext, useEffect, useState } from "react";
import FormContext from "../utils/FormContext";
import { CloseSquareOutlined } from "@ant-design/icons";

const TextField = ({ serialNum }) => {
  const {
    fields,
    setFields,
    formFields,
    setFormFields,
    formData,
    setFormData,
  } = useContext(FormContext);
  const [textField, setTextField] = useState({
    label: "Label",
    placeholder: "",
    name: "",
    value: "",
  });
  const [checked, setChecked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTextField({ ...textField, [name]: value });
  };

  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRequired = (e) => {
    setChecked(e.target.checked);
  };

  const InputElement = useCallback(() => {
    return (
      <Form.Item
        name={textField?.name}
        label={textField?.label}
        rules={[{ required: checked, message: "Please enter a value!" }]}
      >
        <Input
          name={textField?.name}
          placeholder={textField?.placeholder}
          onChange={handleFormInputChange}
        />
      </Form.Item>
    );
  }, [textField, checked]);

  useEffect(() => {
    setFormFields((prevState) => [
      ...prevState.slice(0, serialNum),
      InputElement,
      ...prevState.slice(serialNum + 1),
    ]);
  }, [textField, checked]);

  const handleRemove = () => {
    setFormFields((prevState) =>
      prevState?.filter((_, index) => index !== serialNum)
    );
    setFields((prevState) =>
      prevState?.filter((_, index) => index !== serialNum)
    );
  };

  console.log("formFields: ", formFields, "fields: ", fields);

  return (
    <Card
      title="Text Field"
      bordered={false}
      style={{
        width: 350,
        margin: "10px",
        backgroundColor: "#dedfe0",
      }}
      extra={
        <CloseSquareOutlined
          style={{ fontSize: "24px", cursor: "pointer" }}
          onClick={handleRemove}
        />
      }
    >
      <Flex gap="middle" vertical>
        <Input
          value={textField?.label}
          name="label"
          onChange={(e) => handleInputChange(e)}
        />
        <Input
          value={textField?.placeholder}
          placeholder="Placeholder"
          name="placeholder"
          onChange={handleInputChange}
        />
        <Input
          value={textField?.name}
          placeholder="Name"
          name="name"
          onChange={handleInputChange}
        />
        <Checkbox checked={checked} onClick={handleRequired}>
          Required
        </Checkbox>
      </Flex>
    </Card>
  );
};

export default TextField;
