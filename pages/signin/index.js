import React from 'react'

function SignIn() {
  return (
    <section className="bg-gray-50 ">
    <div className="flex flex-col items-center  px-6 pt-[100px] mx-auto md:h-screen">
      <a
        href="#"
        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
      >
        HealthOs Commerce
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
            Login into your account
          </h1>
          <form className="space-y-4 md:space-y-6" action="/api/signin" method="post">
            <div>
              <label
                for="phone"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                placeholder="+880......"
                required=""
              />
            </div>

            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                required=""
              />
            </div>



            <button
              type="submit"
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Sign In
            </button>
            <p className="text-sm font-light text-gray-500 ">
              Got no account?{" "}
              <a
                href="/signup"
                className="font-medium text-primary-600 hover:underline "
              >
                signup here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SignIn
