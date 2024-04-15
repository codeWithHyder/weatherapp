import React, { useState } from 'react'
// import { useContext } from 'react'
// import App from '../App';

const Header = ({weatherData, setFilteredData}) => {
    // const [data, setData] = useState(null);
    // const valueFromContext = useContext(App);
    !weatherData?console.log('loading...'): console.log('data from weatherdatacopy',weatherData)
    let filteredData={};
  const handleChange = (event)=>{
    const searchTerm = event.target.value;
    filteredData=weatherData.filter((dataItem)=>dataItem.name.toLowerCase().includes(searchTerm.toLowerCase()))
    console.log('filtered data', filteredData)
    // setData(filteredData)
    setFilteredData(filteredData)
  };
  
//   if (!valueFromContext) {
//     return (
//       <div className="flex justify-center items-center h-20">
//         <p>Loading...</p>
//       </div>
//     );
//   }

  return (
    <div className='flex flex-col  h-auto p-2 md:flex-row justify-between'>
      <div className='font-bolder md:text-orange-600 text-lg'>Weather<span className='font-2xl text-amber-400'>App</span></div>
      <div className='text-left'>
        <input type='search' onChange={handleChange} placeholder='Search...' className='p-2 mr-2 border-2 bg-orange-100'/>
        {/* <input type="submit"  value="search" className='bg-zinc-400 rounded-md px-3 py-2' /> */}
      </div>
    </div>
  )
}

export default Header
