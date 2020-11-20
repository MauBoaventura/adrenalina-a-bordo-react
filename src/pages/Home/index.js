import React, { useEffect } from 'react'    
// import api from '../../services/api'
import VeiculoList from '../../components/VeiculoList'
import AgendamentoList from '../../components/AgendamentoList'
import './styles.css'
// const moment = require('moment')


export default function Home() {
    // const [vehicles, setVehicles] = useState([]);
    // const [trips, setTrips] = useState([]);
    // const [schedulings, setSchedulings] = useState([]);

    useEffect(() => {
        async function loadAll() {
            // let resp = await api.get('/trip')
            // console.log(resp.data)
            // setTrips(resp.data)

            // resp = await api.get('/scheduling')
            // // console.log(resp.data)
            // setSchedulings(resp.data)

            // resp = await api.get('/vehicle')
            // console.log(resp.data)
            // setVehicles(resp.data)

        }
        loadAll()
    }, [])

    return (
        <div className="main" >
            <div className="passeios">
                <strong>
                    Viagens/Passeios
                </strong>
                <ul className="list-passeios">
                    <li>
                        <header>
                            EMOJI - Nome do Veiculo
                        </header>
                        <label>
                            HI:HI - HF:HF
                        </label>
                        <span>
                            06/15
                        </span>
                    </li>
                </ul>
            </div>
            <VeiculoList />
            <AgendamentoList />
            <div className="proximos">
                <strong>
                    Prox. Passeios
                </strong>
                <ul className="list-proximas-viagens">

                </ul>
            </div>

        </div>
    )
}