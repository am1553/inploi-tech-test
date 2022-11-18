import React from 'react'
import Header from '../../components/Header/Header'
import styles from './Main.module.css'
function Main() {
  return (
    <div className={`${styles["main_bg_gradient"]} h-screen`}>
      <Header />
    </div>
  )
}

export default Main