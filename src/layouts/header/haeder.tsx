import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <Link href={"/"} passHref>
        <a>메인</a>
      </Link>
      <Link href={"/signin"} passHref>
        <a>로그인</a>
      </Link>
    </header>
  );
};

export default Header;
