import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { Button } from '@smooth-ui/core-sc';

const Buttons = styled(Button)`
	display: flex;
	margin: 1rem;
	font-size: 2.5rem;
	border-radius: 0.5rem;
	border: 0.3rem solid;
	border-color: ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.colors.secondaryDark};
	background-color: ${({ theme }) => theme.colors.light};
	transition: 0.5s ease-in-out;
`;
const Message = styled.div`
	text-align: center;
	margin: 5rem 60rem;
	font-size: 2.5rem;
	border-radius: 0.5rem;
	border: 0.3rem solid;
	border-color: ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.colors.secondaryDark};
	background-color: ${({ theme }) => theme.colors.light};
`;

export const TestUser = () => {
	const [message, setMessage] = useState('');
	const history = useHistory();
	const baseUrl = 'https://wunderlist7.herokuapp.com/api';

	const userLogin = () => {
		axios
			.post(baseUrl + '/login', {
				email: 'test@tester.com',
				password: 'password'
			})
			.then(res => {
				setMessage('User Login Success');
				localStorage.setItem('AUTH_TOKEN', res.data.payload);
			})
			.catch(err => {
				setMessage(err.response.data.error.message);
			});
	};

	const registerUser = () => {
		axios
			.post(baseUrl + '/register', {
				email: 'test@tester.com',
				password: 'password'
			})
			.then(res => {
				console.log(res.data);
				setMessage('Register User Success');
			})
			.catch(err => {
				setMessage(err.response.data.error.message);
			});
	};

	const invalidLoginPswd = () => {
		axios
			.post(baseUrl + '/login', {
				email: 'test@tester.com',
				password: 'wrongPswdTryAgain'
			})
			.then(res => {
				console.log(res.data);
				setMessage('Invalid Password. Try Again');
			})
			.catch(err => {
				setMessage(err.response.data.error.message);
			});
	};

	const tokenStatus = () => {
		setMessage(
			localStorage.getItem('AUTH_TOKEN') || localStorage.getItem('USER_ID')
				? 'Token Exists'
				: 'No Token'
		);
	};

	const deleteToken = () => {
		localStorage.removeItem('AUTH_TOKEN');
		localStorage.removeItem('USER_ID');
		setMessage('Token Deleted');
	};

	const goToPrivateUrl = () => {
		history.push('/tasks');
	};

	return (
		<div>
			<Buttons onClick={userLogin}>Test User Login</Buttons>
			<Buttons onClick={registerUser}>Test User Register</Buttons>
			<Buttons onClick={invalidLoginPswd}>
				Test User Login - Invalid Password
			</Buttons>
			<Buttons onClick={tokenStatus}>Token Status</Buttons>
			<Buttons onClick={deleteToken}>Delete Token</Buttons>
			<Buttons onClick={goToPrivateUrl}>Go To Private URL</Buttons>
			<Message>{message}</Message>
		</div>
	);
};
