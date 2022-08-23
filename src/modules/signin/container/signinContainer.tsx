import Button from "../../../components/button/button";
import Input from "../../../components/input/input";
import useSigninContainer from "../hooks/useSigninContainer";
import styles from "./signinContainer.module.css";

const SigninContainer = () => {
  const { email, setEmail, password, setPassword, onSignin } = useSigninContainer();

  return (
    <section className={styles.container}>
      <form onSubmit={(event) => event.preventDefault()} className={styles.formWrapper}>
        <Input
          type={"email"}
          value={email}
          onChange={setEmail}
          placeholder="이메일 입력"
          autoFocus
        />
        <Input
          type={"password"}
          value={password}
          onChange={setPassword}
          placeholder="비밀번호 입력"
        />
        <Button type="submit" title="로그인" onClick={onSignin} />
      </form>
    </section>
  );
};

export default SigninContainer;
