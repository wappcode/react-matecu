import React, { useRef } from "react";
import styles from "./MatecuTopbarLayout.module.scss";

interface MatecuTopbarLayoutProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  firstRow: React.JSX.Element;
  secondRow?: React.JSX.Element;
  body?: React.JSX.Element;
  prominent?: boolean;
}

const MatecuTopbarLayout: React.FunctionComponent<MatecuTopbarLayoutProps> = (
  props
) => {
  const { firstRow, secondRow, body, prominent } = props;
  const classes: string[] = [];
  const scrolled = false;
  const layoutElement = useRef(null);
  const bodyElement = useRef(null);

  if (prominent) {
    classes.push(styles["prominent"]);
  }
  if (scrolled) {
    classes.push(styles["scrolled"]);
  }

  return (
    <>
      <div
        className={`matecu-topbar-layout ${
          styles["matecu-topbar-layout"]
        } ${classes.join(" ")}`}
        ref={layoutElement}
      >
        <div
          className={`matecu-topbar-layout__bar ${styles["matecu-topbar-layout__bar"]} `}
        >
          {firstRow ?? ""} {secondRow ?? ""}
        </div>
        <div
          className={`matecu-topbar-layout__body ${styles["matecu-topbar-layout__body"]}`}
          ref={bodyElement}
        >
          {body ? body : ""}
        </div>
      </div>
    </>
  );
};

export default MatecuTopbarLayout;
