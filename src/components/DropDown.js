import { Button, Card, Flex, Input, Select, Space } from "antd";
import React from "react";

const DropDown = () => {
  return (
    <Card
      title="Select"
      bordered={false}
      style={{ width: 300, backgroundColor: "#dedfe0" }}
    >
      <Input value="Label" />
      <Input placeholder="Name" />
      <Space wrap>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          allowClear
          options={[{ value: "lucy", label: "Lucy" }]}
        />
      </Space>
      <Flex gap={"small"}>
        <Input value="Option" />
        <Input value="value" />
        <Button>+</Button>
      </Flex>
    </Card>
  );
};

export default DropDown;
