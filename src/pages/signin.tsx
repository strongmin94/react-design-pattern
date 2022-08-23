import Head from "next/head";
import MainLayout from "../layouts/main/mainLayout";
import SigninContainer from "../modules/signin/container/signinContainer";

const SigninPage = () => {
  return (
    <>
      <Head>
        <title>로그인</title>
      </Head>
      <MainLayout>
        <SigninContainer />
      </MainLayout>
    </>
  );
};

export default SigninPage;
