import React from 'react';
import Dlogo from '../Assets/icon-logo.c444a238.svg';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';

export default function Menu(){
    return (
        <header className="App-header">
            <img src={Dlogo} className="App-logo" alt="logo" />
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About me</li>
                    <li>Projects</li>
                    <li>Contact me</li>
                </ul>
                <ul>
                    <li><FaGithub /></li>
                    <li><FaLinkedinIn /></li>
                    <li><FaDiscord /></li>
                </ul>
            </nav>
        </header>
    )
}