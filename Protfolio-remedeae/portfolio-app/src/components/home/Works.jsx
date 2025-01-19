import { useEffect } from 'react';
import bhromaonEx from '../../assets/bhromaon-example.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Works() {
    const navToBhromaon = useNavigate();

    function handleRedirectBhromaon() {

        navToBhromaon('/bhromaon');
    }

    return (
        <div className="works">
            <h2>Works</h2>
            <div className="works__bhromaon">
                <img src={bhromaonEx} alt="Bhromaon" />
                <div>
                    <p>The Bhoromaon project was a challenge presented to me as a Tech for Women student. We where assigned a figma design
                        and instructed to recrate it as a resposive design in 12 hours from first to last commit.
                    </p>
                    <button onClick={handleRedirectBhromaon}>See the full design here</button>
                </div>
            </div>
        </div>
    )
}

export default Works;