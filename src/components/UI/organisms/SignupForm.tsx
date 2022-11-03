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
    </div>
  );
}
