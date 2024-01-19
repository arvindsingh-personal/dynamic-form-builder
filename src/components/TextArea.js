import { Button, Card, Checkbox, Flex, Form, Input } from "antd";
import React, { useCallback, useContext, useEffect, useState } from "react";
import FormContext from "../utils/FormContext";
import { CloseSquareOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const TextAreaComponent = ({ serialNum }) => {
  const {
    fields,
    setFields,
    formFields,
    setFormFields,
    formData,
    setFormData,
  } = useContext(FormContext);
  const [textAreaField, setTextAreaField] = useState({
    label: "Label",
    placeholder: "",
    name: "",
    value: "",
  });
  const [checked, setChecked] = useState(false);

  const handleTextAreaChange = (e) => {
    const { name, value } = e.target;
    setTextAreaField({ ...textAreaField, [name]: value });
  };

  const handleFormTextAreaChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRequired = (e) => {
    setChecked(e.target.checked);
  };

  const TextAreaElement = useCallback(() => {
    return (
      <Form.Item
        label={textAreaField?.label}
        name={textAreaField?.name}
        rules={[{ required: checked, message: "Please enter a value!" }]}
      >
        <TextArea
          rows={4}
          name={textAreaField?.name}
          placeholder={textAreaField?.placeholder}
          onChange={handleFormTextAreaChange}
        />
      </Form.Item>
    );
  }, [textAreaField, checked]);

  useEffect(() => {
    setFormFields((prevState) => [
      ...prevState.slice(0, serialNum),
      TextAreaElement,
      ...prevState.slice(serialNum + 1),
    ]);
  }, [textAreaField, checked]);

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
      title="Text Area"
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
          value={textAreaField?.label}
          name="label"
          onChange={(e) => handleTextAreaChange(e)}
        />
        <Input
          value={textAreaField?.placeholder}
          placeholder="Placeholder"
          name="placeholder"
          onChange={handleTextAreaChange}
        />
        <Input
          value={textAreaField?.name}
          placeholder="Name"
          name="name"
          onChange={handleTextAreaChange}
        />
        <Checkbox checked={checked} onClick={handleRequired}>
          Required
        </Checkbox>
      </Flex>
    </Card>
  );
};

export default TextAreaComponent;
