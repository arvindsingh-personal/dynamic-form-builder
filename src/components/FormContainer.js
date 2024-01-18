import React, { useState } from "react";
import SideBard from "./SideBard";
import FormMaker from "./FormMaker";
import { Divider, Row } from "antd";
import FormContext from "../utils/FormContext";

const FormContainer = () => {
  const [fields, setFields] = useState([]);

  return (
    <FormContext.Provider value={{ fields, setFields }}>
      <Row>
        <SideBard />
        <FormMaker />
      </Row>
    </FormContext.Provider>
  );
};

export default FormContainer;
