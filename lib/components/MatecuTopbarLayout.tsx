import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
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
  mobileStyle?: boolean;
  mobileWidth?: number;
  resizeHandler?: (width: number) => void;
}

const MatecuTopbarLayout = forwardRef(
  (props: MatecuTopbarLayoutProps, ref): React.ReactNode => {
    const {
      firstRow,
      secondRow,
      body,
      prominent,
      mobileStyle,
      mobileWidth,
      resizeHandler,
    } = props;
    const classes: string[] = [];
    const [scrolled, setScrolled] = useState(false);
    const layoutElement = useRef<HTMLDivElement | null>(null);
    const bodyElement = useRef<HTMLDivElement | null>(null);
    let mobileStyleValue = mobileStyle ?? false;
    const mobileWidthValue = mobileWidth ?? 768;
    const spyScroll = (scrollabe: HTMLElement) => {
      if (!scrollabe) {
        return;
      }
      const maxScrollHeight = scrollabe.scrollHeight;
      const scrollableHeight = scrollabe.clientHeight;
      if (scrollableHeight > maxScrollHeight) {
        return;
      }
      const scrollPosition = scrollabe.scrollTop;
      const scrolled = scrollPosition > 20;
      setScrolled(scrolled);
    };

    useImperativeHandle(ref, () => ({
      scrollTop() {
        if (!bodyElement.current) {
          return;
        }
        bodyElement.current.scroll({
          top: 0,
          behavior: "smooth",
        });
      },
    }));

    useEffect(() => {
      const resizeObserver = new ResizeObserver(() => {
        const width = layoutElement?.current?.clientWidth;
        if (!width) {
          return;
        }
        mobileStyleValue = width <= mobileWidthValue;
        if (typeof resizeHandler === "function") {
          resizeHandler(width);
        }
      });
      bodyElement?.current?.addEventListener("scroll", () => {
        spyScroll(bodyElement.current!);
      });
      resizeObserver.observe(layoutElement.current!);
      return () => {
        bodyElement.current!.removeEventListener("scroll", () => {});
        resizeObserver.disconnect();
      };
    });

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
  }
);

export default MatecuTopbarLayout;
