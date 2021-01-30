import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { loading, coaktails } = useGlobalContext()

  if (loading) {
    return <Loading />
  }

  if (coaktails.length < 1) {
    return <h2 className='section-title'>Pencarian tidak di temukan</h2>
  }
  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {coaktails.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default CocktailList
