import { Card, Input } from "antd";
import React, { useState } from "react";

const TextField = () => {
  const [textField, setTextField] = useState({
    label: "Label",
    placeholder: "",
    name: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log("name:", name, "value:", value);
    setTextField({ ...textField, [name]: value });
  };
  console.log(textField);

  return (
    <Card
      title="Text Field"
      bordered={false}
      style={{ width: 300, backgroundColor: "#dedfe0" }}
    >
      <Input
        value={textField?.label}
        name="label"
        onChange={(e) => handleInputChange(e)}
      />
      <Input
        value={textField?.placeholder}
        placeholder="Placeholder"
        name="placeholder"
        onChange={handleInputChange}
      />
      <Input
        value={textField?.name}
        placeholder="Name"
        name="name"
        onChange={handleInputChange}
      />
    </Card>
  );
};

export default TextField;
