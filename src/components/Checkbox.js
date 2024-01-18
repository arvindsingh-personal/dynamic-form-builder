import {
  Button,
  Card,
  Checkbox,
  Col,
  Flex,
  Input,
  Radio,
  Row,
  Space,
} from "antd";
import React, { useState } from "react";

const CheckBox = () => {
  const [checkboxField, setCheckboxField] = useState({
    label: "Label",
    name: "",
  });
  const [options, setOptions] = useState([
    {
      label: "Option",
      value: "Value",
    },
  ]);

  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    setCheckboxField({ ...checkboxField, [name]: value });
  };

  const handleOptionChange = (recievedIndex, e) => {
    const { name, value } = e.target;
    setOptions((prevOptions) =>
      prevOptions?.map((option, index) =>
        index === recievedIndex ? { ...option, [name]: value } : option
      )
    );
  };

  console.log(options);

  const addOption = () => {
    setOptions([...options, { label: "Option", value: "Value" }]);
  };

  const removeOption = (recievedIndex) => {
    setOptions((prevOptions) =>
      prevOptions.filter((_, index) => index !== recievedIndex)
    );
  };

  return (
    <Card
      title="Checkbox"
      bordered={false}
      style={{ width: 300, backgroundColor: "#dedfe0" }}
    >
      <Input
        value={checkboxField?.label}
        name="label"
        onChange={handleCheckboxChange}
      />
      <Input
        value={checkboxField?.name}
        placeholder="Name"
        name="name"
        onChange={handleCheckboxChange}
      />
      <Checkbox.Group style={{ width: "100%" }}>
        <Space direction="vertical">
          {options?.map((option, index) => (
            <Checkbox value={option?.value}>{option?.label}</Checkbox>
          ))}
        </Space>
      </Checkbox.Group>
      {options?.map((option, index) => (
        <Flex gap={"small"} key={index}>
          <Input
            value={option?.label}
            name="label"
            onChange={(e) => handleOptionChange(index, e)}
          />
          <Input
            value={option?.value}
            name="value"
            onChange={(e) => handleOptionChange(index, e)}
          />
          <Button onClick={addOption}>+</Button>

          {index > 0 && <Button onClick={() => removeOption(index)}>-</Button>}
        </Flex>
      ))}
    </Card>
  );
};

export default CheckBox;
