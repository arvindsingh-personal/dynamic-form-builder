import { Card, Checkbox, Flex, Form, Input } from "antd";
import React, { useContext, useEffect, useState } from "react";
import FormContext from "../utils/FormContext";
import { CloseSquareOutlined } from "@ant-design/icons";

const EmailComponent = ({ serialNum }) => {
  const {
    fields,
    setFields,
    formFields,
    setFormFields,
    formData,
    setFormData,
  } = useContext(FormContext);
  const [emailField, setEmailField] = useState({
    label: "Label",
    placeholder: "",
    name: "",
    value: "",
  });
  const [checked, setChecked] = useState(false);

  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    setEmailField({ ...emailField, [name]: value });
  };

  const handleFormEmailChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRequired = (e) => {
    setChecked(e.target.checked);
  };

  const EmailElement = (
    <Form.Item
      label={emailField?.label}
      name={emailField?.name}
      rules={[
        { required: checked, message: "Please enter a value!" },
        {
          type: "email",
          message: "The input is not valid E-mail!",
        },
      ]}
    >
      <Input
        name={emailField?.name}
        placeholder={emailField?.placeholder}
        onChange={handleFormEmailChange}
      />
    </Form.Item>
  );

  useEffect(() => {
    setFormFields([...formFields, EmailElement]);
  }, []);

  useEffect(() => {
    setFormFields((prevState) => [
      ...prevState.slice(0, serialNum),
      EmailElement,
      ...prevState.slice(serialNum + 1),
    ]);
  }, [emailField, checked]);

  const handleRemove = () => {
    setFormFields((prevState) =>
      prevState?.filter((_, index) => index !== serialNum)
    );
    setFields((prevState) =>
      prevState?.filter((_, index) => index !== serialNum)
    );
  };

  return (
    <Card
      title="Email Field"
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
          value={emailField?.label}
          name="label"
          onChange={(e) => handleEmailChange(e)}
        />
        <Input
          value={emailField?.placeholder}
          placeholder="Placeholder"
          name="placeholder"
          onChange={handleEmailChange}
        />
        <Input
          value={emailField?.name}
          placeholder="Name"
          name="name"
          onChange={handleEmailChange}
        />
        <Checkbox checked={checked} onClick={handleRequired}>
          Required
        </Checkbox>
      </Flex>
    </Card>
  );
};

export default EmailComponent;
