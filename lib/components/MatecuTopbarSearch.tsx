import React, { useEffect, useRef } from "react";
import { useState } from "react";
import styles from "./MatecuTopbarSearch.module.scss";

export interface MatecuTopbarSearchProps {
  display?: boolean;
  mobileStyle?: boolean;
  searchIcon?: React.ReactNode;
  clearIcon?: React.ReactNode;
  placeholder?: string;
  value?: string;
  delyValueChanges?: number; // Miliseconds
  valueChangesHandler?: (value: string) => void;
}
const MatecuTopbarSearch: React.FunctionComponent<MatecuTopbarSearchProps> = (
  props
) => {
  let { value } = props;
  const {
    display,
    mobileStyle,
    searchIcon,
    clearIcon,
    placeholder,
    delyValueChanges,
    valueChangesHandler,
  } = props;

  let timeoutInstance: any = null;
  const inputElement = useRef<HTMLInputElement>(null);
  const [activeMobileSearch, setActiveMobileSearch] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const [searchValue, setSearchValue] = useState(value ?? "");
  const time = delyValueChanges ?? 300;
  const calculateHasValue = (value?: string) => {
    return typeof value === "string" && value.trim().length > 0;
  };
  const valueChanges = () => {
    if (timeoutInstance) {
      clearTimeout(timeoutInstance);
    }
    timeoutInstance = setTimeout(() => {
      if (typeof valueChangesHandler === "function") {
        const value = inputElement.current?.value ?? "";
        valueChangesHandler(value);
        setSearchValue(value);
      }
    }, time);
  };
  const toggleActiveSearch = () => {
    setActiveMobileSearch((prev) => !prev);
  };
  const clearSearch = () => {
    if (typeof valueChangesHandler === "function") {
      valueChangesHandler("");
      setSearchValue("");
    }
    value = "";
    setActiveMobileSearch(false);
  };

  const displayValue = display ?? true;
  const placeholderValue = placeholder ?? "";
  const mobileStyleClass = mobileStyle ? styles["mobile-style"] : "";
  const activeSearchClass = activeMobileSearch ? styles["active-mobile"] : "";

  useEffect(() => {
    const hasVal = calculateHasValue(searchValue);
    value = searchValue;
    setHasValue(hasVal);
    if (inputElement.current) {
      inputElement.current.value = searchValue;
    }
  }, [searchValue]);

  if (!displayValue) {
    return <></>;
  }

  return (
    <>
      <button
        className={`matecu-topbar-search-mobile-only ${styles["matecu-topbar-search-mobile-only"]} ${mobileStyleClass}`}
        onClick={toggleActiveSearch}
      >
        {searchIcon || (
          <span className={`material-symbols-outlined`}> search </span>
        )}
      </button>
      <div
        className={`matecu-topbar-search ${styles["matecu-topbar-search"]} ${mobileStyleClass} ${activeSearchClass}`}
      >
        <span
          className={`matecu-topbar-search__icon matecu-topbar-search__icon--search ${styles["matecu-topbar-search__icon"]} ${styles["matecu-topbar-search__icon--search"]}`}
        >
          {searchIcon || (
            <span className="material-symbols-outlined"> search </span>
          )}
        </span>
        {(hasValue || mobileStyle) && (
          <button
            className={`matecu-topbar-search__icon matecu-topbar-search__icon--clear ${styles["matecu-topbar-search__icon"]} ${styles["matecu-topbar-search__icon--clear"]} `}
            onClick={clearSearch}
          >
            {clearIcon || (
              <span className={`material-symbols-outlined`}> close </span>
            )}
          </button>
        )}

        <input
          type="text"
          placeholder={placeholderValue}
          ref={inputElement}
          onChange={valueChanges}
        />
      </div>
    </>
  );
};

export default MatecuTopbarSearch;
