import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import Title from '../components/Title'
import "../styles/sections/About.scss"
import {HiLightBulb} from 'react-icons/hi'
import {BsCalendarFill} from 'react-icons/bs'
import {BiSupport} from 'react-icons/bi'
import {SiGooglemessages} from 'react-icons/si'

function About() {
    return (
        <div className="about-container">  
                  <div className="container">
                      <div className="details">
                          <Title title="Sobre mim" color="blue" />
                            <p>Eu acredito em mundo onde o acesso a informação é a chave para a mudança</p>
                            <p>Por meio da tecnologia vou tentar ajudar o maximo de pessoas possiveis ao seu mundo digital!</p>
                            <Button content="Porque Caramelo Web?" />
                      </div>
                      <div className="cards">
                        <Card title="Inovações" logo={<HiLightBulb />} />
                      </div>
                  </div>
        </div>
    )
}

export default About
