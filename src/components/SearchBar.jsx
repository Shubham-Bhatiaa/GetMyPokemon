import React from 'react'

const SearchBar = ({formData, setFormData}) => {
  return (
    <>
    <form>
        <input type="text" placeholder='Search Pokemon' className='bg-white shadow-xl px-7 py-4 rounded-lg text-xl font-bold border-b-6 outline-none my-4' value={formData} onChange={(e)=> setFormData(e.target.value)} />
    </form>
    </>
  )
}

export default SearchBar