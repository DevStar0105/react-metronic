/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const FavoritesPage: React.FC = () => {
  return (
    <>
      <div style={{display: 'grid', placeItems: 'center', marginTop: '30vh', fontSize: '2rem'}}>
        <i className='bi bi-exclamation-circle' style={{fontSize: '2rem'}}></i>You don't have favorites at this moment.
      </div>
    </>
  )
}

export {FavoritesPage}