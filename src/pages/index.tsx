import Head from "next/head";
import MainLayout from "../layouts/main/mainLayout";
import MainContainer from "../modules/main/container/mainContainer";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Main</title>
      </Head>
      <MainLayout>
        <MainContainer />
      </MainLayout>
    </>
  );
};

export default HomePage;
