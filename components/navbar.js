import { useState } from 'react'
import Image from 'next/image'
import samsungLogo from '../public/samsung.svg'
import { CaretRight, List, MagnifyingGlass, ShoppingCart, User, X } from 'phosphor-react'
export default function Navbar({}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='flex justify-between items-center py-3 px-4'>
        <Image alt='' src={samsungLogo} />
        <div className='flex gap-3'>
          <button>
            <MagnifyingGlass size={28} />
          </button>
          <button>
            <ShoppingCart size={28} />
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            <List size={28} />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className='absolute inset-0 bg-black/80'>
          <div className='absolute inset-y-0 right-0 bg-white w-5/6 p-4 flex flex-col'>
            <button className='flex justify-end' onClick={() => setIsOpen(!isOpen)}>
              <X size={28} />
            </button>
            <button className='flex justify-between items-center my-3 hover:font-bold'>
              Mobile
              <CaretRight size={20} />
            </button>
            <button className='flex justify-between items-center my-3 hover:font-bold'>
              TV & Audio
              <CaretRight size={20} />
            </button>
            <button className='flex justify-between items-center my-3 hover:font-bold'>
              Appliances
              <CaretRight size={20} />
            </button>
            <button className='flex justify-between items-center my-3 hover:font-bold'>
              Computing
              <CaretRight size={20} />
            </button>
            <button className='flex justify-between items-center my-3 hover:font-bold'>
              Displays
              <CaretRight size={20} />
            </button>
            <button className='flex justify-between items-center my-3 hover:font-bold'>
              Offers
              <CaretRight size={20} />
            </button>
            <button className='flex items-center my-3 hover:font-bold'>
              #YouMake
            </button>
            <button className='flex items-center my-3 hover:font-bold'>
              Discover Samsung Event
            </button>
            <hr />
            <button className='flex justify-between items-center my-3 hover:font-bold'>
              Explore
              <CaretRight size={20} />
            </button>
            <button className='flex justify-between items-center my-3 hover:font-bold'>
              Support
              <CaretRight size={20} />
            </button>
            <button className='flex justify-between items-center my-3 hover:font-bold'>
              For Business
              <CaretRight size={20} />
            </button>
            <hr />
            <button className='flex gap-2 items-center my-3'>
              <User size={32} />
              Sign in/Create Account
            </button>
            <button className='flex justify-between items-center my-3'>
              Why Create an Account
            </button>
            <button className='flex justify-between items-center my-3'>
              Track your orders
            </button>
          </div>
        </div>
      )}
    </>
  )
}
  