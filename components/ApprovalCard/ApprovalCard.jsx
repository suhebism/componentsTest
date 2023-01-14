import React, { Children } from 'react'
import Card from '../Card'
import styles from '../../styles/Home.module.css';


const ApprovalCard = ({
   title,
   info,
   onApprove,
   onDecline,
  approveText = 'Approve',
  declineText = 'Decline'
}) => {
  return (
    <Card>
        <div className={styles.title}>{title}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.btns}>
            <button onClick={onApprove}>{approveText}</button>
            <button onClick={onDecline}>{declineText}</button>
        </div>
    <Card/>
  )
}

export default ApprovalCard
