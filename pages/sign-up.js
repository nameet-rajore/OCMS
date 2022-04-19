import React, { useRef, useState } from 'react';
import useFetchData from '../hooks/use-fetch-data';
import { authActions } from '../src/store';
import SignUpForm from '../components/SignUp/SignUpForm';
import { useDispatch, useSelector } from 'react-redux';

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
        console.log(token);
        if (confirmPasswordInputRef.current.value !== passwordInputRef.current.value) {
            setPasswordMatch(false);
        }
        else {
            setPasswordMatch(true);
            fetchData(
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAIYdOdtdRO9KZvWL7ZKs2OEYFmmadg-ko',
                'POST',
                {
                    email: emailInputRef.current.value,
                    password: passwordInputRef.current.value,
                    returnSecureToken: true
                },
            ).then(() => {
                if (!!apiData) {
                    dispatch(authActions.setToken(apiData.idToken));
                    navigate('/', { replace: true });
                }
            })


        }
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

    return (
        <SignUpForm {...props} />
    )
}

export default SignUp