import React, { useState, useEffect } from 'react';
import api from '../services/api'
import { Card, Avatar } from 'antd';
import { black } from 'material-ui/styles/colors';
const { Meta } = Card;


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
        <Card className="veiculos"
            title={"Veículos"}
            headStyle={{ fontSize: 20 }}
            extra={<a href="/Home" style={
                { fontSize: 25, color: black, borderStyle: 'solid', borderWidth: 1, borderRadius:15, paddingLeft: 10, paddingRight: 10 ,backgroundColor:'#93e893'}
            }>+</a>}
            style={{ backgroundColor: '#c0e8c0', borderRadius: 15 }}>
            {vehicles.map(vehicle => (
                <Card key={vehicle.id}
                    style={{ marginBottom: 10 }}
                    hoverable={true}
                >
                    <Meta
                        avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title={vehicle.name}
                        description={vehicle.description}
                    />
                </Card>
            ))}
        </Card>
    )
}

export default ListVeiculos