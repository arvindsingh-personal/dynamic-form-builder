import React, { useEffect, useState } from "react";
import { Flex, Modal, Typography } from "antd";

const { Text } = Typography;

const FormModal = ({ isModalOpen, setIsModalOpen }) => {
  const [data, setData] = useState({});

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("formConfig"));
    setData(localStorageData);
  }, []);

  return (
    <Modal
      title="Form Data"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Flex gap="large" vertical>
        {Object.entries(data)?.map((data, index) => (
          <Flex gap="middle" key={index}>
            {data?.map((innerData, i) => (
              <Text key={i} strong>
                {typeof innerData === "string"
                  ? innerData
                      ?.split("_")
                      ?.map(
                        (word) =>
                          word?.charAt(0)?.toUpperCase() + word?.slice(1)
                      )
                      .join(" ")
                  : typeof innerData === "number"
                  ? innerData
                  : innerData?.map((word) => word)?.join(", ")}
              </Text>
            ))}
          </Flex>
        ))}
      </Flex>
      <Flex gap="middle" vertical></Flex>
    </Modal>
  );
};

export default FormModal;
