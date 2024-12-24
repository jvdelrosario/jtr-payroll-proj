import React from 'react'
import "./loading.css"
const page = async () => {
    await new Promise((resolve) => setTimeout(resolve, 7000));
    return (

        <center>
            <div>Your page content</div>
        </center>
    )
}

export default page