import { Col, Row } from "antd";
import React, { useContext } from "react";
import TextField from "./TextField";
import RadioButton from "./RadioButton";
import CheckBox from "./Checkbox";
import DropDown from "./DropDown";
import Button from "./Button";
import FormContext from "../utils/FormContext";

const FormMaker = () => {
  const { fields, setFields } = useContext(FormContext);

  return (
    <Col span={8}>
      <div>FormMaker</div>
      {fields?.map((Component, index) => (
        <Component key={index} />
      ))}
      {/* <TextField />
      <RadioButton />
      <CheckBox />
      <DropDown />
      <Button /> */}
    </Col>
  );
};

export default FormMaker;
