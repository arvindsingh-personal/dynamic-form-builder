import { Button, Card, Checkbox, Flex, Form, Input, Select, Space } from "antd";
import React, { useContext, useEffect, useState } from "react";
import FormContext from "../utils/FormContext";

const { Option } = Select;

const ConditionalDropDown = ({ serialNum }) => {
  const { formFields, setFormFields, formData, setFormData } =
    useContext(FormContext);
  const [selectBoxField, setSelectBoxField] = useState({
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
  const [innerBtn, setInnerBtn] = useState(false);

  const handleFormSelectBoxChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      [selectBoxField?.name]: value,
    }));
  };

  const handleRequired = (e) => {
    setChecked(e.target.checked);
  };

  const SelectElement = (
    <Form.Item
      label={selectBoxField?.label}
      name={selectBoxField?.name}
      rules={[{ required: checked, message: "Please enter a value!" }]}
    >
      <Select
        placeholder="Select an option"
        onChange={handleFormSelectBoxChange}
      >
        {options?.map((option) => (
          <Option value={option?.value}>{option?.label}</Option>
        ))}
      </Select>
    </Form.Item>
  );

  useEffect(() => {
    setFormFields([...formFields, SelectElement]);
  }, []);

  useEffect(() => {
    setFormFields((prevState) => [
      ...prevState.slice(0, serialNum),
      SelectElement,
      ...prevState.slice(serialNum + 1),
    ]);
  }, [selectBoxField, options, checked]);

  const handleSelectBoxChange = (e) => {
    const { name, value } = e.target;
    setSelectBoxField({ ...selectBoxField, [name]: value });
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

  const handleInnerClick = () => {
    setInnerBtn(!innerBtn);
  };

  return (
    <Card
      title="Select"
      bordered={false}
      style={{
        width: 350,
        margin: "10px",
        backgroundColor: "#dedfe0",
        backgroundColor: "#dedfe0",
      }}
    >
      <Flex gap="middle" vertical>
        <Input
          value={selectBoxField?.label}
          name="label"
          onChange={handleSelectBoxChange}
        />
        <Input
          value={selectBoxField?.name}
          placeholder="Name"
          name="name"
          onChange={handleSelectBoxChange}
        />
        <Space wrap>
          <Select
            defaultValue={options[0]?.label}
            style={{ width: 120 }}
            allowClear
            options={options}
          />
        </Space>
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
        <Button
          type="primary"
          style={{ width: "100px" }}
          onClick={handleInnerClick}
        >
          Inner Field
        </Button>
        {innerBtn && (
          <Flex gap="middle" vertical>
            <Input />
            <Input />
            <Input />
          </Flex>
        )}
        <Checkbox checked={checked} onClick={handleRequired}>
          Required
        </Checkbox>
      </Flex>
    </Card>
  );
};

export default ConditionalDropDown;
