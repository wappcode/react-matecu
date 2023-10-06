import React from "react";

export interface MatecuTopbarHeaderColumnProps {
  children?: React.ReactNode[] | React.ReactNode | undefined;
}

const MatecuTopbarHeaderColumn: React.FunctionComponent<
  MatecuTopbarHeaderColumnProps
> = (props) => {
  const { children } = props;
  return <>{children}</>;
};

export default MatecuTopbarHeaderColumn;
