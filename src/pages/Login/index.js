import React, {useState} from 'react'

import api from '../../services/api';
import logobarco from '../../assets/barco.svg';
import jsonWebTokenService from 'jsonwebtoken'


export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const resp = await api.post('/login', { email, password })
        const {token}=resp.data;
        console.log(token)
    }

    async function saveJwt (jwt) {
        try {
          if (jwt) {
            const decodedJwt = jsonWebTokenService.decode(jwt)
            await this.localforage.setItem('jwt_usuario', jwt)
            await this.localforage.setItem('dados_usuario', decodedJwt)
            return true
          }
        } catch (err) {
            if (err instanceof jsonWebTokenService.JsonWebTokenError) return false
            throw err
        }
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