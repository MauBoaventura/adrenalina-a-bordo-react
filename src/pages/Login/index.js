import React, { useState } from 'react'

import api from '../../services/api';
import { login } from '../../services/auth';
import logobarco from '../../assets/barco.svg';
import jsonWebTokenService from 'jsonwebtoken'


export default function Login({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const resp = await api.post('/login', { email, password })
            const { token } = resp.data;
            console.log(token)
            login(token)
        } catch (error) {
            console.log(error)
        }
        history.push('/home')
    }

    return (
        < >
            <img className='logo' src={logobarco} alt="logo" />
            <div className="content">
                <form onSubmit={handleSubmit}>
                    <input
                        id='email'
                        type="email"
                        placeholder='E-mail'
                        value={email}
                        onChange={e => { setEmail(e.target.value) }}
                    />
                    <input
                        id='password'
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={e => { setPassword(e.target.value) }}
                    />
                    <button type='submit'>Entrar</button>
                </form>
            </div>
        </>
    );
}