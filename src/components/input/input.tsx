import { HTMLInputTypeAttribute, useCallback, useRef } from "react";
import styles from "./input.module.css";

interface IProps {
  type?: HTMLInputTypeAttribute;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  isHideClearButton?: boolean;
  autoFocus?: boolean;
}

const Input = ({
  type = "text",
  value,
  onChange,
  placeholder,
  isHideClearButton,
  autoFocus,
}: IProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const onClear = useCallback(() => {
    onChange("");
    ref.current?.focus();
  }, []);

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        ref={ref}
        type={type}
        value={value}
        onChange={({ target: { value } }) => onChange(value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
      />
      {!isHideClearButton && value && (
        <button className={styles.clearButton} type={"button"} onClick={onClear}>
          x
        </button>
      )}
    </div>
  );
};

export default Input;
