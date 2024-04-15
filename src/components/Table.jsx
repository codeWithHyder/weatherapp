import React from 'react'
import { Link } from 'react-router-dom'


const Table = ({data}) => {
   console.log('data in table component after search', data) 
   
  return (
    <div>
     <table className='mx-auto bg-slate-500 w-screen h-screen border-2'>
                <thead>
                    <tr className='bg-zinc-500 h-10'>
                        <th className='ml-2'>Name</th>
                        <th className='ml-2'>Country</th>
                        <th className='ml-2'>Timezone</th>
                        <th className='ml-2'>CountryCode</th>
                    </tr>
                </thead>
                <tbody className='bg-red-500'>
                    {data? (
                        data.map((forecast, index) => (
                            <tr key={index} className=' even:bg-green-400  odd:bg-red-400'>
                                <td className='ml-2 text-center'><Link to={`/weather/${forecast.geoname_id}`}>{forecast.name}</Link></td>
                                <td className='ml-2 text-center'>{forecast.cou_name_en}</td>
                                <td className='ml-20 text-center'>{forecast.timezone}</td>
                                <td className='ml-2 text-center'>{forecast.country_code}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">Data loading...</td>
                        </tr>
                    )}
                </tbody>
            </table>
    </div>
  )
}

export default Table
