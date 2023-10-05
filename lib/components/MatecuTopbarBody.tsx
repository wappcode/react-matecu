import React from "react";
import styles from "./MatecuTopbarBody.module.scss";
interface MatecuTopbarBodyProps {
  children?: React.ReactNode | React.ReactNode[];
}
const MatecuTopbarBody: React.FunctionComponent<MatecuTopbarBodyProps> = (
  props
) => {
  const { children } = props;

  return (
    <div className={`matecu-topbar-body ${styles["matecu-topbar-body"]}`}>
      {children}
    </div>
  );
};

export default MatecuTopbarBody;
