//hexagon frame component

import React from 'react'
import styles from '../HexagonImage.module.css'

const HGFrame = ({ imageUrl }) => {
  return (
    <div className={styles.hexagonContainer}>
      <svg
        width='217'
        height='178'
        viewBox='0 0 217 178'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={styles.hexagon}
      >
        <defs>
          <clipPath id='hexagon-clip'>
            <path d='M54 0H163L217 89L163 178H54L0 89L54 0Z' />
          </clipPath>
        </defs>
        <image
          href={imageUrl}
          width='217'
          height='178'
          clipPath='url(#hexagon-clip)'
          className={styles.image}
        />
      </svg>
    </div>
  )
}

export default HGFrame
