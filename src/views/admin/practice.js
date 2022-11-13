import React from 'react'
import { useState } from 'react'
import { Hospitals } from './hospitals'
import Table from './Table'
import Mapp from './Map'
import "./practice.css"
function Practice() {
  const [query, setQuery] = useState("")
  const [filterData, setData] = useState("")
  //console.log(query)


  const search = (data) => {
    let k = data.filter(item => item.HospitalName.toLowerCase().includes(query.toLowerCase()) || item.facilities.toLowerCase().includes(query.toLowerCase()));
    // setData(k);
    return k;
  }
  return (
    <div className='container'>
      <div className='search-bar'>
        <input
          type="text"
          className="search"
          placeholder='search..'
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <Mapp data={search(Hospitals)} />
      <Table data={search(Hospitals)} />
      

    </div>
  )
}

export default Practice