import React, { useEffect, useRef, useState } from 'react';
import useFetchData from '../hooks/use-fetch-data';
import { authActions } from '../src/store';
import SignUpForm from '../components/SignUp/SignUpForm';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/UI/Header';
import Router from 'next/router';

const SignUp = () => {

    const passwordInputRef = useRef();
    const emailInputRef = useRef();
    const confirmPasswordInputRef = useRef();
    const token = useSelector(state=>state.token);

    
    const [passwordMatch, setPasswordMatch] = useState(true);

    const dispatch = useDispatch();

    const { isLoading, apiData, serverError, fetchData } = useFetchData();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(authActions.setLogin(true));
        Router.push('/');
    }

    const props = {
        passwordInputRef,
        emailInputRef,
        submitHandler,
        isLoading,
        passwordMatch,
        confirmPasswordInputRef,
        apiData,
        serverError,
    }

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("isLoggedIn"))) {
            Router.push('/')
        }
    });

    return (
        <>
        <Header/>
        <SignUpForm {...props} />
        </>
    )
}

export default SignUp