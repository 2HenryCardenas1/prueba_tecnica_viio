export default function Login() {
  return (
    <div className="border p-5 w-full md:w-[500px] shadow-md rounded-md flex flex-col gap-5 ">
      <div className="flex flex-col text-left">
        <label htmlFor="email" className="text-left font-bold p-1">
          Email
        </label>
        <input
          className="border-2 border-black text-left p-2 rounded-md"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="flex flex-col text-left">
        <label htmlFor="password" className="text-left font-bold p-1">
          Password
        </label>
        <input
          className="border-2 border-black text-left p-2 rounded-md"
          type="password"
          name="password"
          id="password"
          placeholder="Your password"
        />
      </div>

      <div className="flex justify-between">
        <div className="flex flex-row-reverse gap-3">
          <label htmlFor="remember">Remember me</label>
          <input
            className="border-2 border-black text-left p-2 rounded-md transform scale-150"
            type="checkbox"
            name="remember"
            id="remember"
          />
        </div>
        <div>
          <span>Forgot password?</span>
        </div>
      </div>

      <div className="flex justify-center flex-col gap-3">
        <button className="bg-black text-white p-2 rounded-md w-full font-semibold">
          Log in
        </button>

        <strong className="text-center text-sm mt-2 mb-2">or</strong>

        <button className=" text-black border-2 border-black p-2 rounded-md w-full font-semibold">
          Continue with Google
        </button>
        <button className=" text-black border-2 border-black p-2 rounded-md w-full font-semibold">
          Continue with Facebook
        </button>

        <p>
          Don&apos;t have an account? <strong>Sign up</strong>
        </p>
      </div>
    </div>
  );
}
