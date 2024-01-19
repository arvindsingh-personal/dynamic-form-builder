import React from "react";
import { Layout, Flex } from "antd";

const { Header } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  fontSize: "25px",
  fontWeight: "bold",
  lineHeight: "64px",
  backgroundColor: "#001529",
};

const HeaderComponent = () => {
  return <Header style={headerStyle}>Dynamic Form Builder</Header>;
};

export default HeaderComponent;
