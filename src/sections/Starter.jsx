import React from 'react'
import WorkImage from '../assets/work.svg'
import Button from '../components/Button'
import "../styles/sections/Starter.scss"
import { GoPlay } from 'react-icons/go';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Navbar from '../components/NavBar';

function Starter() {
    return (
        <div className="main-container">
            <Navbar />
            
            <div className="container">
                <div className="content">
                    <h1>
                        Fornecemos as soluções ideiais para o seu negócio
                    </h1>
                    <p>
                        Websites, Aplicativos Web e Mobile exatamente do jeito que voçe imagina! Provemos alta qualidade em tecnologia.
                    </p>
                    <div className="button-container">
                        <Button content="Assista ao video" icon={<GoPlay />} color="pink" />
                        <Button content="Marque uma reunião" icon={<HiOutlineArrowNarrowRight />} color="blue" />
                    </div>
                    </div>
                    <div className="image">
                        <img src={WorkImage} alt="imagem de trabalho" />
                    </div>
            </div>
        </div>
    )
}

export default Starter
