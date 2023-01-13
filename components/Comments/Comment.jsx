
import React from 'react'
import Image from 'next/image'
import hero from '../../assets/pic.jpg';
import styles from '../../styles/Home.module.css'

const comment = (props) => {
  return (
    <div>
      <Image src={props.imgUrl} alt='' width={250} height={200}/>
      <div className={styles.cardName}><h4>{props.name}</h4><p>{props.time}</p></div>
    </div>
  )
}

export default comment
