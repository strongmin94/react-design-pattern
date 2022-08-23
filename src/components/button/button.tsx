import styles from "./button.module.css";

interface IProps {
  type?: "button" | "submit" | "reset";
  title: string;
  onClick: () => void;
}

const Button = ({ type = "button", title, onClick }: IProps) => {
  return (
    <button type={type} className={styles.container} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
