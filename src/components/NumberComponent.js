import { Card, Checkbox, Flex, Form, Input, InputNumber } from "antd";
import React, { useCallback, useContext, useEffect, useState } from "react";
import FormContext from "../utils/FormContext";
import { CloseSquareOutlined } from "@ant-design/icons";

const NumberComponent = ({ serialNum }) => {
  const { fields, setFields, formFields, setFormFields, setFormData } =
    useContext(FormContext);
  const [numberField, setNumberField] = useState({
    label: "Label",
    placeholder: "",
    length: "",
    name: "",
    type: "",
    value: "",
  });
  const [checked, setChecked] = useState(false);

  const handleNumberChange = (e) => {
    const { name, value } = e.target;
    setNumberField({ ...numberField, [name]: value });
    // }
  };

  const handleFormNumberChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      [numberField?.name]: value,
    }));
  };
  const handleRequired = (e) => {
    setChecked(e.target.checked);
  };

  const NumberElement = useCallback(() => {
    return (
      <Form.Item
        label={numberField?.label}
        name={numberField?.name}
        rules={[
          { required: checked, message: "Please enter a value!" },
          {
            type: numberField?.type.toLowerCase(),
            message: "Enter only numbers",
          },
        ]}
      >
        <InputNumber
          name={numberField?.name}
          placeholder={numberField?.placeholder}
          onChange={handleFormNumberChange}
          maxLength={numberField?.length}
          style={{ width: "100%" }}
        />
      </Form.Item>
    );
  }, [numberField, checked]);

  useEffect(() => {
    setFormFields((prevState) => [
      ...prevState.slice(0, serialNum),
      NumberElement,
      ...prevState.slice(serialNum + 1),
    ]);
  }, [numberField, checked]);

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
      title="Number Field"
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
          value={numberField?.label}
          name="label"
          onChange={(e) => handleNumberChange(e)}
        />
        <Input
          value={numberField?.placeholder}
          placeholder="Placeholder"
          name="placeholder"
          onChange={handleNumberChange}
        />
        <Input
          value={numberField?.name}
          placeholder="Name"
          name="name"
          onChange={handleNumberChange}
        />
        <Input
          placeholder="Number or String"
          name="type"
          onChange={handleNumberChange}
        />
        <Input
          type="number"
          placeholder="Required Length"
          name="length"
          onChange={handleNumberChange}
        />
        <Checkbox checked={checked} onClick={handleRequired}>
          Required
        </Checkbox>
      </Flex>
    </Card>
  );
};

export default NumberComponent;
