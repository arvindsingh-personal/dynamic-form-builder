import { Button, Card, Checkbox, Flex, Form, Input, Space } from "antd";
import React, { useCallback, useContext, useEffect, useState } from "react";
import FormContext from "../utils/FormContext";
import { CloseSquareOutlined } from "@ant-design/icons";

const CheckBox = ({ serialNum }) => {
  const {
    fields,
    setFields,
    formFields,
    setFormFields,
    formData,
    setFormData,
  } = useContext(FormContext);
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
  const [checked, setChecked] = useState(false);

  const handleRequired = (e) => {
    setChecked(e.target.checked);
  };

  const handleFormCheckboxChange = (value) => {
    if (value?.length) {
      setFormData((prevState) => ({
        ...prevState,
        [checkboxField?.name]: value,
      }));
    } else {
      const updatedObject = Object.fromEntries(
        Object.entries(formData).filter(([key]) => key !== checkboxField?.name)
      );
      setFormData(updatedObject);
    }
  };

  const CheckboxElement = useCallback(() => {
    return (
      <Form.Item
        label={checkboxField?.label}
        name={checkboxField?.name}
        rules={[{ required: checked, message: "Please enter a value!" }]}
      >
        <Space direction="vertical">
          <Checkbox.Group
            options={options}
            onChange={handleFormCheckboxChange}
          />
        </Space>
      </Form.Item>
    );
  }, [[checkboxField, options, checked]]);

  useEffect(() => {
    setFormFields((prevState) => [
      ...prevState.slice(0, serialNum),
      CheckboxElement,
      ...prevState.slice(serialNum + 1),
    ]);
  }, [checkboxField, options, checked]);

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

  return (
    <Card
      title="Checkbox"
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

export default CheckBox;
