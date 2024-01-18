import { PlusCircleFilled, PoweroffOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Flex, Row } from "antd";
import React, { useContext, useState } from "react";
import { ButtonText, FormFieldsComponent } from "../utils/constants";
import { FormFields } from "../utils/constants";
import TextField from "./TextField";
import FormContext from "../utils/FormContext";

const baseStyle = {
  width: "50%",
  height: 54,
  marginBottom: "10px",
};

const SideBard = () => {
  const { fields, setFields } = useContext(FormContext);

  const handleClick = (type) => {
    console.log(type);
    setFields([...fields, FormFieldsComponent[type]]);
  };

  // console.log(fields);

  const ComponentOne = () => <div>Component One</div>;
  const ComponentTwo = () => <div>Component Two</div>;
  const ComponentThree = () => <div>Component Three</div>;

  const componentsArray = [ComponentOne, ComponentTwo, ComponentThree];

  return (
    <Col span={4}>
      <Flex vertical={"vertical"}>
        {ButtonText.map((field, i) => (
          <Button
            key={i}
            type="text"
            icon={<PlusCircleFilled />}
            // ghost={true}
            style={{
              width: "40%",
              margin: "10px",
            }}
            onClick={() => handleClick(field?.type)}
          >
            {field?.name}
          </Button>
        ))}
        <Divider orientation="left" plain={true} type="vertical">
          Divider
        </Divider>
      </Flex>
    </Col>
  );
};

export default SideBard;
