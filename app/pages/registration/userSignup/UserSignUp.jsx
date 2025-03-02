"use client";
import { useState } from "react";
import { useSignUp } from "@/app/hooks/useSignUp";
import { useRouter } from "next/navigation";
import { setError } from "@/app/features/modalSlice";
import { useDispatch } from "react-redux";
import Button from "@/app/components/uicomponents/Button";
import SignUpHeader from "./SignUpHeader";
import ErrorMsg from "@/app/components/ErrorMsg";
import Spinner from "@/app/components/Spinner";
import LogoBeat from "@/app/components/uicomponents/LogoBeat";

const UserSignUp = () => {
  const dispatch = useDispatch();
  const { signup, loading, error } = useSignUp();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        dispatch(setError("Password Mismatch"));
        return;
      }
      dispatch(setError(null));
      const success = await signup(email, username, password);
      if (success) {
        router.push("/");
      }
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  return (
    <section className="flex items-center overflow-hidden justify-evenly flex-col py-10 h-screen absolute inset-0 bg-black">
      <LogoBeat />
      <form onSubmit={handleSubmit} className="form-container">
        <SignUpHeader />
        <div className="space-y-3 lg:w-[25%]">
          <input
            className="input-green"
            type="email"
            id="email"
            name="email"
            autoComplete="true"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input-green"
            type="text"
            id="username"
            autoComplete="true"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="input-green"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="input-green"
            type="password"
            id="confirm-password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <Button className="green-btn" type="submit" disabled={loading}>
          {loading ? <Spinner /> : "Sign Up"}
        </Button>
        <ErrorMsg error={error} />
      </form>
    </section>
  );
};

export default UserSignUp;
