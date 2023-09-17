import Button from "../../components/Button";
import Form from "../../components/Form";
import { FormEvent, FormEventHandler, useEffect, useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email);
    };
    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@test.domain" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="your password here" id="password" name="password" />
                {/* <button type="submit">Login</button> */}
                <Button text="Login" />
            </form>
            <button> Don't Have an account? Register here.</button>
        </>
    );
}