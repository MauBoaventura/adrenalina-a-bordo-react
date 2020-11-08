import React, { useState, useEffect } from 'react';
import api from '../services/api'
import imgClose from '../assets/close.svg'
import imgEdit from '../assets/edit.svg'
import imgAdd from '../assets/add.svg'

function ListVeiculos() {
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        async function loadAll() {
            let resp = await api.get('/vehicle')
            // console.log(resp.data)
            setVehicles(resp.data)

        }
        loadAll()
    }, [])

    return (
        <div className="veiculos">
            <strong>
                Veículos
        </strong>
            <img className='add' src={imgAdd} alt="Adicionar"></img>
            <ul className="list-veiculos">
                {vehicles.map(vehicle => (
                    <li key={vehicle.id}>
                        <header>
                            <label>
                                {vehicle.name}
                            </label>
                            <div>
                                <a href='/'>
                                    <img className='edit' src={imgEdit} alt="Editar"></img>
                                </a>
                                <a href='/'>
                                    <img className='close' src={imgClose} alt="Fechar"></img>
                                </a>
                            </div>
                        </header>
                        <label>
                            Descricao:
                        {vehicle.description}
                        </label>
                        <div>
                            Capacidade: {vehicle.capacity}
                        </div>
                    </li>
                ))}

            </ul>
        </div>

    )
}

export default ListVeiculos