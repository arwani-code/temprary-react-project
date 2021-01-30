import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')

  const handleChange = () => {
    setSearchTerm(searchValue.current.value)
  }

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section className='section search' onSubmit={handleSubmit}>
      <form className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>Search your favorit cocktail</label>
          <input
            type='text'
            id='name'
            autoComplete='off'
            ref={searchValue}
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
