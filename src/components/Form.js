import React, { useContext, useState } from "react";
import { Button, Col, Form, Input, message } from "antd";
import FormContext from "../utils/FormContext";
import FormModal from "./FormModal";

const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const FormComponent = () => {
  const [form] = Form.useForm();

  const { formFields, formData } = useContext(FormContext);
  const [configButton, setConfigButton] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onFinish = (values) => {
    message.success("Form submitted successfully!");
    localStorage.setItem("formConfig", JSON.stringify(formData));
    setConfigButton(true);
  };

  const onFinishFailed = (errorInfo) => {
    message.error("Form submission failed. Please check the form fields.");
  };

  return (
    <>
      {formFields?.length ? (
        <Col span={10}>
          <div
            style={{
              border: "2px solid black",
              margin: "5px 3px",
              padding: "5px 0",
            }}
          >
            <Form
              name="myForm"
              form={form}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
              layout="horizontal"
              style={{ maxWidth: 600 }}
              scrollToFirstError
            >
              {formFields?.map((Field) => (
                <>{Field()}</>
              ))}
            </Form>
          </div>
          {configButton && (
            <>
              <Button type="primary" onClick={() => setIsModalOpen(true)}>
                Load Form Configuration
              </Button>
              <FormModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
            </>
          )}
        </Col>
      ) : (
        <></>
      )}
    </>
  );
};

export default FormComponent;
