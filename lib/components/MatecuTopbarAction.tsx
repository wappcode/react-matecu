import React from "react";
import styles from "./MatecuTopbarAction.module.scss";
export interface MatecuTopbarActionProps {
  children?: React.ReactNode[] | React.ReactNode | undefined;
}

const MatecuTopbarAction: React.FunctionComponent<MatecuTopbarActionProps> = (
  props
) => {
  const { children } = props;
  return (
    <div className={`matecu-topbar-action ${styles["matecu-topbar-action"]}`}>
      {children}
    </div>
  );
};

export default MatecuTopbarAction;
