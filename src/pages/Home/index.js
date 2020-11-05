import React, { useEffect } from 'react'
import api from '../../services/api'
import './styles.css'


export default function Home() {
    useEffect(() => {
        async function loadAll() {
            // await api.get('')
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
            <div className="agendamentos">
                <strong>
                    Agendamento
                </strong>
                <ul className="list-agendamentos">
                    <li>
                        <div className="dia-especifico">
                            <label>
                                Dia especifico: DD/MM/YYYY
                            </label>
                        </div>
                        <div className="hora-agendamento">
                            HI:HI - HF:HF
                        </div>
                    </li>
                    <li>
                        <div className="dia-da-semana">
                            <div>Seg</div>
                            <div>Ter</div>
                            <div>Qua</div>
                            <div>Qui</div>
                            <div>Sex</div>
                            <div>Sab</div>
                            <div>Dom</div>
                        </div>
                        <div className="hora-agendamento">
                            HI:HI - HF:HF
                        </div>
                        <div className="dia-agendamento">
                            DD/MM/YYYY - DD/MM/YYYY
                        </div>
                    </li>
                </ul>
            </div>
            <div className="veiculos">
                <strong>
                    Veiculos
                </strong>
                <ul className="list-veiculos">
                <li>
                        <header>
                            Veiculo
                        </header>
                        <label>
                            Descricao:
                        </label>
                        <span>
                            Capacidade: 05/15
                        </span>
                    </li>
                </ul>
            </div>
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