import React, { useState } from 'react';
import { usePaystackPayment } from 'react-paystack';
import './App.css';



function Pay() {
    const [email, setEmail] = useState('')
    const [amount, setAmount] = useState('')

    const handleEmailChange = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const handleAmountChange = (e) => {
        e.preventDefault()
        setAmount(e.target.value)
    }

    const config = {
        reference: (new Date()).getTime().toString(),
        email,
        amount: parseInt(amount) * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: 'pk_live_b40cac0125398892c2494a53f906babaf07371f7',
    };

    // you can call this function anything
    const onSuccess = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
    };

    // you can call this function anything
    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
    }

    const PaystackHookExample = () => {
        const initializePayment = usePaystackPayment(config);
        return (
            <div className='pt-3' >
                <button onClick={(e) => {
                    e.preventDefault()
                    initializePayment(onSuccess, onClose)
                }}>Pay</button>
            </div>
        );
    };
    return (
        <div className="px-auto pt-5 align-items-center d-flex">
            <div className=" border rounded py-5 flex-column container-fluid bg-dark">

                <form>
                    <p>Secured and Powered by Paystack</p>
                    <div className="col-12 col-lg-6">
                        <label htmlFor="user_email">
                            Email Address
                        </label>
                    </div>
                    <div className="col-12 col-lg-6">
                        <input
                            id="user_email"
                            type="email"
                            name="user_email"
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="col-12 col-lg-6 pt-3">
                        <label htmlFor="user_amount">
                            Amount in Nigerian Naira
                        </label>
                    </div>
                    <div className="col-12 col-lg-6">
                        <input
                            id="user_amount"
                            type="number"
                            min={50}
                            name="user_amount"
                            onChange={handleAmountChange}
                        />
                    </div>
                    <PaystackHookExample />
                </form>
            </div>
        </div>
    )
}

export default Pay;