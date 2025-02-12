import React from "react";
import { Spin } from "antd";
import styles from "./index.module.css";

export const Loading = () => {
  return (
    <div className={styles.loading}>
      <Spin />
    </div>
  );
};
