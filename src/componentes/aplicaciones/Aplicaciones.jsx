import React from 'react';
import styles from './Aplicaciones.module.css'
import { IconBrandGithub } from '@tabler/icons-react'

const Aplicaciones = (props) => {

    return (
        <div className={styles.aplicacionesContainer}>
            
            <div className={styles.gifContainer}>
                <div className={styles.imagenContainer}>
                    <img src={props.imagenSrc} alt={props.imagenAlt} className={styles.imagen}/>
                </div>
                <div className={styles.tituloContainer}>
                    <h2 className={styles.titulo}>{props.titulo}</h2>
                </div>
            </div>
            <div className={styles.qrContainer}>
                <h3>Android</h3>
                <img src={props.qrAndroid} alt={props.imagenAlt} className={styles.qrAndroid}/>
                <h3>Ios</h3>
                <img src={props.qrIos} alt={props.imagenAlt} className={styles.qrIos}/>
                <a href={props.enlace1} target="_blank">
                    <IconBrandGithub className={styles.icono} size={40}/>
                </a>
            </div>
        </div>
    )
}

export default Aplicaciones;