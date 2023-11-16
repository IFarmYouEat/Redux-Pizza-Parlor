import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Admin () {

    let [orderList, setOrderList] = useState([]);

    useEffect(() => {
        console.log('First load of useEffect in Admin');
        getOrders();
    }, []);

    const getOrders = () => {
        axios({
            method: 'GET',
            url: '/api/order'
        }).then((response) => {
            setOrderList(response.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <p>You are in Admin.</p>
            {/* {JSON.stringify(orderList)} */}
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Time Order Placed</td>
                        <td>Type</td>
                        <td>Cost</td>
                    </tr>
                </thead>
                <tbody>
                    {orderList.map(order => (
                        <tr key={order.id}>
                            <td>{order.customer_name}</td>
                            <td>{order.time}</td>
                            <td>{order.type}</td>
                            <td>{order.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Admin;