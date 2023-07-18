import React from 'react';
import styles from './Proyecto.module.css'
import { IconBrandGithub, IconWorld } from '@tabler/icons-react'

const Proyecto = (props) => {

    return (
        <div className={styles.proyectoContainer}>
            <div className={styles.imagenContainer}>
                <figure className={styles.card}>
                    <img src={props.imagenSrc} alt={props.imagenAlt} className={styles.imagen}/>
                </figure>
            </div>
            <div className={styles.tituloContainer}>
                <h2 className={styles.titulo}>{props.titulo}</h2>
                <div className={styles.navegacionContainer}>
                    <a href={props.enlace1} target="_blank">
                        <IconBrandGithub className={styles.icono} size={40}/>
                    </a>
                    <a href={props.enlace2} target="_blank">
                        <IconWorld className={styles.icono} size={40} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Proyecto;