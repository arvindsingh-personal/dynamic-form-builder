import { Button, Card, Checkbox, Flex, Form, Input, Radio, Space } from "antd";
import React, { useCallback, useContext, useEffect, useState } from "react";
import FormContext from "../utils/FormContext";
import { CloseSquareOutlined } from "@ant-design/icons";

const RadioButton = ({ serialNum }) => {
  const {
    fields,
    setFields,
    formFields,
    setFormFields,
    formData,
    setFormData,
  } = useContext(FormContext);
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
  const [checked, setChecked] = useState(false);

  const handleRequired = (e) => {
    setChecked(e.target.checked);
  };

  const handleFormRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const SelectElement = useCallback(() => {
    return (
      <Form.Item
        label={radioField?.label}
        name={radioField?.name}
        rules={[{ required: checked, message: "Please enter a value!" }]}
      >
        <Radio.Group onChange={handleFormRadioChange} name={radioField?.name}>
          <Space direction="vertical">
            {options?.map((option, index) => (
              <Radio value={option?.value}>{option?.label}</Radio>
            ))}
          </Space>
        </Radio.Group>
      </Form.Item>
    );
  }, [radioField, options, checked]);

  useEffect(() => {
    setFormFields((prevState) => [
      ...prevState.slice(0, serialNum),
      SelectElement,
      ...prevState.slice(serialNum + 1),
    ]);
  }, [radioField, options, checked]);

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

  const addOption = () => {
    setOptions([...options, { label: "Option", value: "Value" }]);
  };

  const removeOption = (recievedIndex) => {
    setOptions((prevOptions) =>
      prevOptions.filter((_, index) => index !== recievedIndex)
    );
  };

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
      title="Radio Button"
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

            {index > 0 && (
              <Button onClick={() => removeOption(index)}>-</Button>
            )}
          </Flex>
        ))}
        <Checkbox checked={checked} onClick={handleRequired}>
          Required
        </Checkbox>
      </Flex>
    </Card>
  );
};

export default RadioButton;
