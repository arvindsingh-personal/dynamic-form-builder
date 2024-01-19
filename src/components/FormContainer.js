import React, { useState } from "react";
import SideBard from "./SideBard";
import FormMaker from "./FormMaker";
import { Layout, Row } from "antd";
import FormContext from "../utils/FormContext";
import FormComponent from "./Form";
import HeaderComponent from "./Header";

const FormContainer = () => {
  const [fields, setFields] = useState([]);
  const [formFields, setFormFields] = useState([]);
  const [formData, setFormData] = useState({});

  return (
    <FormContext.Provider
      value={{
        fields,
        setFields,
        formFields,
        setFormFields,
        formData,
        setFormData,
      }}
    >
      <Layout>
        <HeaderComponent />
        <Row>
          <SideBard />
          <FormMaker />
          <FormComponent />
        </Row>
      </Layout>
    </FormContext.Provider>
  );
};

export default FormContainer;
