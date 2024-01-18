import { Button, Card, Flex, Input, Radio, Space } from "antd";
import React, { useState } from "react";

const RadioButton = () => {
  const [radioField, setRadioField] = useState({
    label: "Label",
    name: "",
  });
  const [options, setOptions] = useState([
    {
      label: "Option",
      value: "Value",
    },
  ]);

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setRadioField({ ...radioField, [name]: value });
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
      title="Radio Button"
      bordered={false}
      style={{ width: 300, backgroundColor: "#dedfe0" }}
    >
      <Input
        value={radioField?.label}
        name="label"
        onChange={handleRadioChange}
      />
      <Input
        value={radioField?.name}
        placeholder="Name"
        name="name"
        onChange={handleRadioChange}
      />
      <Radio.Group>
        <Space direction="vertical">
          {options?.map((option, index) => (
            <Radio value={option?.value}>{option?.label}</Radio>
          ))}
        </Space>
      </Radio.Group>

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

export default RadioButton;
