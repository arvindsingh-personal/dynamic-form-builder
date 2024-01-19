import { Col } from "antd";
import React, { useContext } from "react";
import FormContext from "../utils/FormContext";

const FormMaker = () => {
  const { fields } = useContext(FormContext);

  return (
    <Col span={8}>
      {fields?.map((Component, index) => (
        <Component serialNum={index} key={index} />
      ))}
    </Col>
  );
};

export default FormMaker;
