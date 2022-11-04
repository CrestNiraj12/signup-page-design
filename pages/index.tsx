import Illustration from "../components/organisms/Illustration";
import Header from "../components/organisms/Header";
import SignupForm from "../components/organisms/SignupForm";
import Head from "next/head";

function App() {
  return (
    <>
      <Head>
        <title>Signup Page</title>
      </Head>
      <main className="flex">
        <div className="w-full bg-white lg:w-[30%] flex flex-col justify-center items-center px-5 lg:px-12 md:px-16 sm:px-10 pt-28 pb-20 text-center">
          <Header />
          <SignupForm />
        </div>
        <Illustration />
      </main>
    </>
  );
}

export default App;
