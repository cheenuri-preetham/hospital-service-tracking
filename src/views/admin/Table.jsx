import React from 'react'
import './table.css'

const Table=({data})=> {
  return (
    <table id="customers">
        <tbody>
            <tr>
                {/* <th>Name</th> */}
                <th>Hospital name</th>
                <th>Opening time</th>
                <th>Closing time</th>
                <th>Hospital location</th>
                {/* <th>Availability</th> */}
                <th>Facilities</th>
                <th>Helpline Number</th>
                <th>directions</th>
            </tr>
            {
               data.map((item)=>(
                <tr key={item.HospitalName}>
                    <td>{item.HospitalName}</td>
                    <td>{item.openingtime}</td>
                    <td>{item.closingtime}</td>
                    <td>{item.hospitalLoc}</td>
                    {/* <td>{item.serviceavialability}</td> */}
                    <td>{item.facilities}</td>
                    <td>{item.helplinenumber}</td>
                    <td><a href={item.directionlink}>directions path</a></td>
                </tr>
               )) 
            }
        </tbody>
    </table>
  )
}

export default Table