import React from "react";
import styles from "./MatecuTopbarHeaderRow.module.scss";

export interface MatecuTopbarHeaderRowProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  display?: boolean;
  leftColumn?: React.JSX.Element;
  rightColumn?: React.JSX.Element;
}

const MatecuTopbarHeaderRow: React.FunctionComponent<
  MatecuTopbarHeaderRowProps
> = (props) => {
  const { display, leftColumn, rightColumn } = props;

  const displayValue = display ?? true;
  const lefColumnContent = leftColumn ?? "";
  const rightColumnContent = rightColumn ?? "";
  return (
    <>
      {displayValue && (
        <div
          className={`matecu-topbar-header-row ${styles["matecu-topbar-header-row"]}`}
        >
          <div
            className={`matecu-topbar-header-row__column matecu-topbar-header-row__column--left ${styles["matecu-topbar-header-row__column"]} ${styles["matecu-topbar-header-row__column--left"]}`}
          >
            {lefColumnContent}
          </div>

          <div
            className={`matecu-topbar-header-row__column matecu-topbar-header-row__column--right ${styles["matecu-topbar-header-row__column"]} ${styles["matecu-topbar-header-row__column--right"]}`}
          >
            {rightColumnContent}
          </div>
        </div>
      )}
    </>
  );
};

export default MatecuTopbarHeaderRow;
