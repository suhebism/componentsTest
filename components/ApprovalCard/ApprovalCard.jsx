import React, { Children } from 'react'
import styles from '../../styles/Home.module.css';

const ApprovalCard = (props) => {
  return (
    <div className={styles.card}>
        <div  >{props.children}</div>
        <div className={styles.btns}>
            <button>Approve</button>
            <button>Decline</button>
        </div>
    </div>
  )
}

export default ApprovalCard