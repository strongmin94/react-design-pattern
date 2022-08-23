import { useCallback, useState } from "react";

const useSigninContainer = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSignin = useCallback(() => {
    alert(`Email: ${email}\nPassword: ${password}`);
  }, [email, password]);

  return {
    email,
    setEmail,
    password,
    setPassword,
    onSignin,
  };
};

export default useSigninContainer;
