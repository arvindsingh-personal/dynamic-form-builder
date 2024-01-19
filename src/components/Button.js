import { Button, Card, Flex, Form, Input } from "antd";
import React, { useContext, useEffect, useState } from "react";
import FormContext from "../utils/FormContext";
import { CloseSquareOutlined } from "@ant-design/icons";

const ButtonComponent = ({ serialNum }) => {
  const { fields, setFields, formFields, setFormFields } =
    useContext(FormContext);
  const [buttonField, setButtonField] = useState({
    type: "primary",
    value: "Submit",
    name: "",
  });

  const handleButtonChange = (e) => {
    const { name, value } = e.target;
    setButtonField({ ...buttonField, [name]: value });
  };

  const BtnElement = (
    <Form.Item>
      <Button
        type={buttonField?.type}
        htmlType="submit"
        style={{ marginLeft: "50px" }}
      >
        {buttonField?.value}
      </Button>
    </Form.Item>
  );

  useEffect(() => {
    setFormFields([...formFields, BtnElement]);
  }, []);

  useEffect(() => {
    setFormFields((prevState) => [
      ...prevState.slice(0, serialNum),
      BtnElement,
      ...prevState.slice(serialNum + 1),
    ]);
  }, [buttonField]);

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
      title="Button"
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
          value={buttonField?.type}
          name="type"
          placeholder="Button Type"
          onChange={handleButtonChange}
        />
        <Input
          value={buttonField?.value}
          name="value"
          placeholder="Value"
          onChange={handleButtonChange}
        />
        <Input
          value={buttonField?.name}
          name="name"
          placeholder="Name"
          onChange={handleButtonChange}
        />
      </Flex>
    </Card>
  );
};

export default ButtonComponent;
