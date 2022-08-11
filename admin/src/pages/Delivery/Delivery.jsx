import React from 'react'
import { Header } from '../../components'
import {AiOutlineSearch} from 'react-icons/ai'
import './Delivery.css'

const Delivery = () => {
  return (
    <div className='delivery m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl' >

     <Header category="Page" title="Delivery" />
     <div className="search">
          <input type="text" placeholder="Search..." />
          <AiOutlineSearch />
        </div>
        <div className=' absolute bg-white dark:bg-[#42464D] p-8 rounded-lg w-96'>
            <img className='deliveyImg' src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1590965645l/53713557._SY475_.jpg" alt="" />
            <div className="yekerut">
            <p>  <span>Name: </span> Melat Kassaye</p>

            <p> <span>Address:</span>  Bole</p>

            <p> <span> Amount:</span> 620 birr</p>
            <p> <span>Phone Number: </span>  +251 963 176 312</p>
            </div>






        </div>
    </div>
  )
}

export default Delivery