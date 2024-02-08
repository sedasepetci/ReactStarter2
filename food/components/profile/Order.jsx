import React from 'react'
import Title from '../ui/Title'

const Order = () => {
  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5" >
    <Title addClass="text-[40px]">Orders</Title>
 
   
    <div className='md:min-h-[calc(100vh_-_433px)] overflow-x-auto w-full mt-5'> 
            <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
                <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                    <tr>
                        <th scope="col" className="py-3 px-6">ID</th>
                        <th scope="col" className="py-3 px-6">ADRESS</th>
                        <th scope="col" className="py-3 px-6">DATE</th>
                        <th scope="col" className="py-3 px-6">TOTAL</th>
                        <th scope="col" className="py-3 px-6">STATUS</th>
                    </tr>
                </thead>
                <tbody>
              <tr className=" bg-secondary border-gray-700 hover:bg-primary transition-all">
               <td className="py-4 px-6 whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
               
                <span>6767467438...</span>
               </td>
               <td className="py-4 px-6 whitespace-nowrap hover:text-white">
               İstanbul
               </td>
               <td className="py-4 px-6 whitespace-nowrap hover:text-white">12.01.2024</td>
               <td className="py-4 px-6 whitespace-nowrap hover:text-white">$20</td>
               <td className="py-4 px-6 whitespace-nowrap hover:text-white">preparing</td>
              </tr>
                </tbody>
            </table>
            </div>
  </div>
   
  )
}

export default Order