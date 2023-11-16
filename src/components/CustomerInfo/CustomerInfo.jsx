import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

function CustomerInfo() {
    const [Name, setName] = useState('');
    const [Address, setAddress] = useState('');
    const [City, setCity] = useState('');
    const [State, setState] = useState('');
    const [ZipCode, setZipCode] = useState('');
    // const [Pickup, setPickup] = useState('');

    const [Delivery, setDelivery] = useState('');

    const dispatch = useDispatch();

    const history = useHistory();


    const handleSubmit = event => {
        event.preventDefault();

        console.log(`Adding Customer`, { Name, Address, City, State, ZipCode, Delivery });

        let action = {
            type: 'SET_CUSTOMER_INFO',
            payload: {
                name: Name, address: Address,
                city: City, state: State, zip: ZipCode,
                type: Delivery
            }
        }
        dispatch(action);

        history.push("/checkout");

    };

    return (
        <section>
            <h2>Customer</h2>
            <form onSubmit={handleSubmit} className="add-customer-form">
                <input
                    required
                    placeholder="Name"
                    value={Name}
                    onChange={(event) => setName(event.target.value)}
                />

                <input
                    required
                    placeholder="Address"
                    value={Address}
                    onChange={(event) => setAddress(event.target.value)}
                />

                <input
                    required
                    placeholder="City"
                    value={City}
                    onChange={(event) => setCity(event.target.value)}
                />

                <input
                    required
                    placeholder="State"
                    value={State}
                    onChange={(event) => setState(event.target.value)}
                />
                <input
                    required
                    placeholder="ZipCode"
                    value={ZipCode}
                    onChange={(event) => setZipCode(event.target.value)}
                />

                <input
                    type="radio"
                    name="delivery"
                    value="pickup"
                    onChange={(event) => setDelivery(event.target.value)}/>
                Pickup 

                <input
                    type="radio"
                    name="delivery"
                    value="delivery"
                    onChange={(event) => setDelivery(event.target.value)}/>
                Delivery

                <button 
                    type="submit">
                    Next
                </button>
              
            </form>
        </section>
    );
}

export default CustomerInfo;