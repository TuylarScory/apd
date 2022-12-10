import React from 'react';
import './Loadingindicator.css'

export default function LoadingIndicator(props) {
    return (
        <div className="loading-indicator">
            <h1 className='loading_text'>Loading</h1> 
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
    );
}