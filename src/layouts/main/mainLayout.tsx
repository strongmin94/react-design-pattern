import { ReactNode } from "react";
import Header from "../header/haeder";
import styles from "./mainLayout.module.css";

interface IProps {
  isHideHeader?: boolean;
  isHideFooter?: boolean;
  children: ReactNode;
}

const MainLayout = ({ isHideHeader, isHideFooter, children }: IProps) => {
  return (
    <div className={styles.container}>
      {!isHideHeader && <Header />}
      <main className={styles.contentsWrapper}>{children}</main>
    </div>
  );
};

export default MainLayout;
