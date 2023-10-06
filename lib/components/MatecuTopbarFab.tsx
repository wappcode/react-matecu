import React from "react";
import styles from "./MatecuTopbarFab.module.scss";

export interface MatecuTopbarFabProps {
  children?: React.ReactNode[] | React.ReactNode;
  display?: boolean;
  mobileStyle?: boolean;
}

const MatecuTopbarFab: React.FunctionComponent<MatecuTopbarFabProps> = (
  props
) => {
  const { children, display, mobileStyle } = props;
  const displayValue = display ?? true;
  const mobileStyleClass = mobileStyle ? styles["mobile-style"] : "";

  return (
    <>
      {displayValue && (
        <div
          className={`matecu-topbar-fab ${styles["matecu-topbar-fab"]} ${mobileStyleClass}`}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default MatecuTopbarFab;
