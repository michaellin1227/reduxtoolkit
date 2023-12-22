import React, { useRef } from 'react'
import { setLogin } from '../store/userSlice';

// useDispatch : 使用redux中定義的functions
import { useDispatch } from "react-redux";

const NotLogin = () => {

    const dispatch = useDispatch();
    const nameRef = useRef();
    const ageRef = useRef();
    const emailRef = useRef();

    const handleLogin = () => {
        const nameValue = nameRef.current.value;
        const ageValue = ageRef.current.value;
        const emailValue = emailRef.current.value;
        dispatch(setLogin({
            name: nameValue,
            age: ageValue,
            email: emailValue,
        }));
    };
    return (
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" placeholder="name" name="name" id="name" ref={nameRef} />
            <br />
            <label htmlFor="age">Age:</label>
            <input type="text" placeholder="age" name="age" id="age" ref={ageRef} />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="text" placeholder="email" name="email" id="email" ref={emailRef} />
            <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default NotLogin