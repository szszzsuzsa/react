import React from "react";
import { useState } from "react";

const Subscription = () => {

    const url = 'api/hotels/subscribe'
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [response, setResponse] = useState(null)
    const [form, setForm] = useState(true)


    const submitForm = () => {
        setIsLoading(true)
        setForm(false)
        fetch(url, {
            method: "POST",
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json",
            },
            body: JSON.stringify(email)
        })
            .then((resp) => setResponse(true))
            .catch((err) => setResponse(false))
            .finally(() => setTimeout(setIsLoading(false), 5000))
    }

    return (
        <div>
            {isLoading === false && form === true ?
                <div class="form">
                    <h3> Subscribe to our newsletter </h3>
                    <input value={email}
                        onChange={(e) => setEmail(e.target.value)} type="email" />
                    <button
                        onClick={submitForm}
                        disabled={!(email.includes('@') && email.includes('.'))}>Submit</button>

                    {response === false ? <p>Oops, something happened</p> : response === true ? <p>Subscribed</p> : ''}
                    </div> : <p>Loading</p>}
        </div>
    )
}

export default Subscription;