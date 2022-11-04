import Illustration from "../UI/organisms/Illustration";
import Header from "../UI/organisms/Header";
import SignupForm from "../UI/organisms/SignupForm";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../config";
import { getAuth } from "firebase/auth";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

function App() {
  return (
    <main className="flex">
      <div className="w-full bg-white lg:w-[30%] flex flex-col justify-center items-center px-5 sm:px-20 pt-28 pb-20 text-center">
        <Header />
        <SignupForm />
      </div>
      <Illustration />
    </main>
  );
}

export default App;
