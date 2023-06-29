import React from 'react';
import styles from './Modal.module.css'

const Modal = ({setModal}) => {

    const handleClose = () => {
        setModal(false);
    }

    return (
        <div className={styles.modalContainer}>
            <div className={styles.modal}>
                <span className={styles.span} onClick={handleClose}>&times;</span>
                <h2>Un poco sobre mi...</h2>
                <p>Soy una persona proactiva, autodidacta y comprometida.
                    Me gusta afrontar nuevos desafíos.
                    Mi objetivo es especializarme en Desarrollo FrontEnd, aumentando mi nivel y conocimiento constantemente.
                    Me gusta mucho el trabajo en equipo, creo que es muy enriquecedor a nivel personal y profesional. 
                </p>
            </div>
        </div>
    );
}

export default Modal