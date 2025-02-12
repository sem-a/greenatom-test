import React from "react";
import styles from './index.module.css'

type ContainerType = {
  children: React.ReactNode;
};

export const Container: React.FC<ContainerType> = ({children}) => {
  return <div className={styles.container}>{children}</div>;
};
