import React from 'react';
import './App.css';
import logobarco from './assets/barco.svg';

function App() {
    return (
        <div className="container" >
            <img className='logo' src={logobarco} alt="logo" />
            <div className="content">
                <form action="/login">
                    <input type="email" placeholder='E-mail' />
                    <input type="password" placeholder="Senha" />
                    <button type='submit'>Entrar</button>
                </form>
            </div>
        </div>
    );
}

export default App;