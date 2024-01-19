import { PlusCircleFilled } from "@ant-design/icons";
import { Button, Col, Divider, Flex } from "antd";
import React, { useContext } from "react";
import { ButtonText, FormFieldsComponent } from "../utils/constants";
import FormContext from "../utils/FormContext";

const SideBard = () => {
  const { fields, setFields } = useContext(FormContext);

  const handleClick = (type) => {
    setFields([...fields, FormFieldsComponent[type]]);
  };

  return (
    <Col span={6}>
      <Flex vertical={"vertical"}>
        {ButtonText.map((field, i) => (
          <Button
            key={i}
            type="text"
            icon={<PlusCircleFilled />}
            style={{
              width: "40%",
              margin: "10px",
            }}
            onClick={() => handleClick(field?.type)}
          >
            {field?.name}
          </Button>
        ))}
        <Divider type="vertical" />
      </Flex>
    </Col>
  );
};

export default SideBard;
