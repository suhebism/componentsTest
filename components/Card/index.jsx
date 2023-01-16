import React from 'react';
import Image from 'next/image';
import Button from '../Button'
import styles from '../../styles/Card.module.css'
const index = ({
    headline='Head Text',
    imgSrc,
    description
}) => {
  return (
    <>
        <div className={styles.card}>
            <h1 className={styles.card_title}>{headline}</h1>
            <Image className={styles.card_image} width={200} height={150} alt='image' src={imgSrc}/>
            <p>{description}</p>
            <div className={styles.btn}>
            <Button onApprove='Approve'/>
            <Button onDeny='Deny'/>
            </div>
            <Button title='Done'/>
        </div>
    </>
  )
}

export default index
