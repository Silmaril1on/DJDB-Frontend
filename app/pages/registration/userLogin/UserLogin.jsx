"use client";
import { useLogin } from "@/app/hooks/useLogin";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/app/components/uicomponents/Button";
import LoginHeader from "./LoginHeader";
import ErrorMsg from "@/app/components/ErrorMsg";
import LogoBeat from "@/app/components/uicomponents/LogoBeat";
import Link from "next/link";

const UserLogin = () => {
  const { login, loading, error } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await login(email, password);
      if (success) {
        router.push("/");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <section className="flex items-center z-10 overflow-hidden justify-evenly flex-col py-10 h-screen absolute inset-0 bg-black">
      <LogoBeat />
      <form className="form-container" onSubmit={handleSubmit}>
        <LoginHeader />
        <div className="space-y-3">
          <input
            className="input-green"
            type="email"
            id="email"
            name="email"
            autoComplete="true"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input-green"
            type="password"
            id="password"
            name="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link href="/resetpassword">
          <span className="hover-white font-primary hover:underline ">
            Trouble Signing In?{" "}
          </span>
        </Link>
        <Button type="submit" className="green-btn" disabled={loading}>
          {loading ? "Logging in..." : "Log in"}
        </Button>
        <ErrorMsg error={error} />
      </form>
    </section>
  );
};

export default UserLogin;
