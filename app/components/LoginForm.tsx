"use client";
import { useState } from "react";
import Image from "next/image";
import { checkEmail, checkPassword } from "../utils";

export default function LoginForm() {
  const [uiState, setUiState] = useState<{
    showEmail: boolean;
    showEmailError: string | null;
    showPassword: boolean;
    showPasswordError: string | null;
  }>({
    showEmail: true,
    showEmailError: null,
    showPassword: false,
    showPasswordError: null,
  });

  const [loginForm, setLoginForm] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  function updateEmail(e: React.ChangeEvent<HTMLInputElement>) {
    if (checkEmail(e.target.value)) {
      setLoginForm({ ...loginForm, email: e.target.value });
      setUiState({ ...uiState, showEmailError: null });
    } else {
      setUiState({ ...uiState, showEmailError: "Please enter a valid email" });
    }
  }

  function updatePassword(e: React.ChangeEvent<HTMLInputElement>) {
    if (checkPassword(e.target.value)) {
      setLoginForm({ ...loginForm, password: e.target.value });
      setUiState({ ...uiState, showPasswordError: null });
    } else {
      setUiState({
        ...uiState,
        showPasswordError: "Please enter a valid password",
      });
    }
  }

  function handleLogin() {
    // TODO: implement login
  }

  return (
    <div className="flex items-center mx-auto w-full ">
      <div className="m-auto w-max min-w-1/2 bg-white px-4 py-16 rounded">
        <div className="mb-12">
          <Image
            src="/icons/home.svg"
            width={128}
            height={128}
            alt="Home logo"
          />
          <h2 className="text-2xl font-medium mb-4">Let's start your day!</h2>
          <p className="opacity-70">Login or signup below</p>
        </div>

        <div className="flex flex-col">
          {uiState.showEmail && (
            <>
              <label htmlFor="email" className="mb-2 font-medium text-lg">
                Email
              </label>
              <input
                name="email"
                type="email"
                defaultValue={loginForm.email}
                onChange={updateEmail}
                placeholder="test@mail.de"
                className="mb-4 p-2 rounded-xl border border-gray-300 hover:border-gray-400 focus:outline-none focus:border-gray-500 focus:ring-2"
              />
              {uiState.showEmailError && (
                <p className="text-red-600 text-sm mb-2">
                  {uiState.showEmailError}
                </p>
              )}
              {loginForm.email && loginForm.email !== "" && (
                <button
                  onClick={() => {
                    setUiState({
                      ...uiState,
                      showEmail: false,
                      showPassword: true,
                    });
                  }}
                  className="self-end text-white bg-black hover:bg-gray-900 rounded-xl p-2 min-w-1/4"
                >
                  Continue
                </button>
              )}
            </>
          )}

          {uiState.showPassword && (
            <>
              <label htmlFor="password" className="mb-2 font-medium text-lg">
                Password
              </label>
              <input
                name="password"
                type="password"
                defaultValue={loginForm.password}
                onChange={updatePassword}
                placeholder="yourpassword"
                className="mb-4 p-2 rounded-xl border border-gray-300 hover:border-gray-400 focus:outline-none focus:border-gray-500 focus:ring-2"
              />
              {uiState.showPasswordError && (
                <p className="text-red-600 text-sm mb-2">
                  {uiState.showPasswordError}
                </p>
              )}
              {loginForm.email && loginForm.email !== "" && (
                <div className="flex justify-between ">
                  <button
                    onClick={() => {
                      setUiState({
                        ...uiState,
                        showEmail: true,
                        showPassword: false,
                      });
                    }}
                    className="self-end text-white bg-black hover:bg-gray-900 rounded-xl p-2 min-w-1/4"
                  >
                    Back
                  </button>

                  <button
                    onClick={handleLogin}
                    className="self-end text-white bg-black hover:bg-gray-900 rounded-xl p-2 min-w-1/4"
                  >
                    Login
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
