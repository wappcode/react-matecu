import React from "react";
import styles from "./MatecuTopbarTitle.module.scss";
export interface MatecuTopbarTitleProps {
  display?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}

const MatecuTopbarTitle: React.FunctionComponent<MatecuTopbarTitleProps> = (
  props
) => {
  const { display, children } = props;
  const displayValue = display ?? true;
  if (!displayValue) {
    return <></>;
  }
  return (
    <div className={`matecu-topbar-title ${styles["matecu-topbar-title"]}`}>
      {children}
    </div>
  );
};

export default MatecuTopbarTitle;
