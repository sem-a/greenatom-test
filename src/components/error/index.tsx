import React from "react";
import { Alert } from "antd";

type ErrorType = {
  message: string;
};

const Error: React.FC<ErrorType> = ({ message }) => {
  if (!message) return null;

  return <Alert message={`Ошибка: ${message}`} type="error" showIcon />;
};

export default Error;
