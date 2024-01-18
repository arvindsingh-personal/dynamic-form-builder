import { Card, Input } from "antd";
import React, { useState } from "react";

const Button = () => {
  const [buttonField, setButtonField] = useState({
    type: "primary",
    value: "Submit",
    name: "",
  });

  const handleButtonChange = (e) => {
    const { name, value } = e.target;
    setButtonField({ ...buttonField, [name]: value });
  };

  return (
    <Card
      title="Button"
      bordered={false}
      style={{ width: 300, backgroundColor: "#dedfe0" }}
    >
      <Input
        value={buttonField?.type}
        name="type"
        placeholder="Button Type"
        onChange={handleButtonChange}
      />
      <Input
        value="Submit"
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
    </Card>
  );
};

export default Button;
