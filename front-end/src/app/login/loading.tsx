import React from 'react';
import "./loading.css"
import { FaPesoSign } from "react-icons/fa6";

const loading = () => {
    return (

        <div className="initial-loading">
            <div className="initial-spinner">
                <div className="initial-icon">
                    <FaPesoSign />
                </div>
            </div>
        </div>
    )
}

export default loading