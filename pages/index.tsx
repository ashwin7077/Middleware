"use client";

import { useState } from "react";
import styles from "./Login.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    // Replace this alert with real login logic
    alert(`Welcome back, ${email}!`);
  };

  return (
    <main className={styles.container} role="main" aria-label="Login Portal">
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <h1 className={styles.title}>Secure Login</h1>

        <label htmlFor="email" className={styles.label}>
          Email Address
        </label>
        <input
          id="email"
          type="email"
          className={styles.input}
          placeholder="your.email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-describedby="emailHelp"
        />
        
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          id="password"
          type="password"
          className={styles.input}
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" className={styles.button}>
          Log In
        </button>

        <a href="#" className={styles.forgot}>
          Forgot Password?
        </a>
      </form>
    </main>
  );
}
