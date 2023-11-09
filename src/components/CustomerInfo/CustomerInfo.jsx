import { useState } from 'react';

function CustomerInfo() {
    const [Name, setName] = useState('');
    const [Address, setAddress] = useState('');
    const [City, setCity] = useState('');
    const [State, setState] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        console.log(`Adding Customer`, { Name, Address, City, State });

        // TODO - axios request to server to add customer

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
                <button type="submit">
                    Next
                </button>
            </form>
        </section>
    );
}

export default CustomerInfo;