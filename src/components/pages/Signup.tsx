import Illustration from "../UI/organisms/Illustration";
import Header from "../UI/organisms/Header";
import SignupForm from "../UI/organisms/SignupForm";

function App() {
  return (
    <main className="flex">
      <div className="w-full bg-white lg:w-[30%] flex flex-col justify-center items-center px-5 lg:px-12 md:px-16 sm:px-10 pt-28 pb-20 text-center">
        <Header />
        <SignupForm />
      </div>
      <Illustration />
    </main>
  );
}

export default App;
