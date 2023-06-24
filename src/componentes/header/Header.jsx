import React from 'react'
import styles from './HeaderStyles.module.css'
import Card from '../card/Card'

export default function Header() {
  return (
    <div className={styles.headerContainer}>
        <Card />
    </div>
  )
}
