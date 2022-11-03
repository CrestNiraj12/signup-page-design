import Button from "../atoms/Button";
import Checkbox from "../atoms/Checkbox";
import Link from "../atoms/Link";
import Text from "../atoms/Text";
import InputGroup from "../molecules/InputGroup";

export default function SignupForm() {
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <InputGroup
        type="text"
        name="name"
        value=""
        onChange={() => null}
        label="Full Name"
        placeholder="John Kevine"
      />
      <InputGroup
        type="email"
        name="email"
        value=""
        onChange={() => null}
        label="Email Address"
        placeholder="example@gmail.com"
      />
      <InputGroup
        type="text"
        name="username"
        value=""
        onChange={() => null}
        label="Username"
        placeholder="johnkevine4362"
      />
      <InputGroup
        type="password"
        name="password"
        value=""
        onChange={() => null}
        label="Password"
        placeholder="whatisthis"
      />
      <div className="flex my-3 items-start">
        <Checkbox className="mt-1" />
        <Text className="text-left ml-2 text-sm text-[#030229]">
          By creating an account you agree to the{" "}
          <span>
            <Link href="/">terms of use</Link>
          </span>{" "}
          and our{" "}
          <span>
            <Link href="/">privacy policy.</Link>
          </span>
        </Text>
      </div>
      <Button
        className="my-5 text-white bg-[#3767B1] hover:bg-[#214275]"
        hasIcon={false}
        onClick={() => null}
      >
        Create account
      </Button>
      <Text className="w-full text-center mt-3">
        Already have an account?{" "}
        <span>
          <Link href="/">Log in</Link>
        </span>
      </Text>
    </div>
  );
}
