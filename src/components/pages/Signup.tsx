import Illustration from "../UI/organisms/Illustration";
import Header from "../UI/organisms/Header";
import SignupForm from "../UI/organisms/SignupForm";

function App() {
  return (
    <main className="flex">
      <div className="w-[25%] flex flex-col justify-center items-center mx-20 my-10 text-center">
        <Header />
        <SignupForm />
      </div>
      <Illustration />
    </main>
  );
}

export default App;
