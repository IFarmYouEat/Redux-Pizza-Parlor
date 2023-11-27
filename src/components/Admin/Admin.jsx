import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Admin.css'

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
        <div id='container-div'>
            <h1>Admin Panel</h1>
            <div id='table-div'>
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
        </div>
    )
}

export default Admin;