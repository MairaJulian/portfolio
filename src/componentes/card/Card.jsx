import React, { useState } from 'react'
import styles from './CardStyles.module.css'
import imagenFoto from '../../imagenes/imagen13.png'
import arcoiris from '../../imagenes/arcoiris.png'
import foco from '../../imagenes/foco.png'
import laptop from '../../imagenes/laptop.jpeg'
import cv from '../../imagenes/CV/cv.pdf'
import { IconBrandWhatsapp, IconBrandLinkedin, IconBrandGithub, IconFileCv } from '@tabler/icons-react'
import Modal from '../modal/Modal'

export default function Card() {

  const telefono = "+5492645045367"
  const mensaje = "Hola Maira, me gustaría ponerme en contacto con vos"
  const urlWhatsApp = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`

  const [modal, setModal] = useState(false)

  const handleClick = () => {
    setModal(true);
  };

  return (
    <div className={styles.pizarra}>
      <div className={styles.fotoContainer}>
          <img src={imagenFoto} className={styles.foto} alt="Foto"/>
          
      </div>
      <div className={styles.tecladoContainer}>
        <img src={laptop} className={styles.teclado} alt="Laptop"/>
      </div>
      <div className={styles.nombreContainer}>
        <h2 className={styles.nombre}>Hola! Soy Maira Julián</h2>
      </div>
      <div className={styles.githubContainer}>
        <a href='https://github.com/MairaJulian' target="_blank">
          <IconBrandGithub className={styles.github}/>
        </a>
      </div>
      <div className={styles.linkedinContainer}>
        <a href='https://www.linkedin.com/in/maira-julian-768a001b0/' target="_blank">
          <IconBrandLinkedin className={styles.linkedin}/>
        </a>
      </div>
      <div className={styles.whatsappContainer}>
        <a href={urlWhatsApp} target="_blank" rel="noopener noreferrer">
          <IconBrandWhatsapp className={styles.whatsapp}/>
        </a>
      </div>
      <div className={styles.cvContainer}>
        <a href={cv} target="_blank">
          <IconFileCv className={styles.cv}/>
        </a>
      </div>
      <div className={styles.focoContainer}>
        <img  src={foco} className={styles.foco} alt="Foco" onClick={handleClick}/>
        {modal && <Modal setModal={setModal} className={styles.modal}/>}
      </div>
    </div>
  )
}
