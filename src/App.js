import React, { useState } from 'react';
import './App.css';
import api from './services/api';
import logobarco from './assets/barco.svg';

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const resp = await api.post('/login', { email, password })
        const {token}=resp.data;
        console.log(token)
    }
    return (
        <div className="container" >
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
        </div>
    );
}

export default App;