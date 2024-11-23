import { Button } from '@/components/page'
import Image from 'next/image'
import React from 'react'
import { cuate } from '../../../../../public/images/page'

export const NoBooking = () => {
  return (
    <>
    <div
      className="flex flex-col justify-center space-y-5 items-center mx-auto mt-20"
      
    >
      <h1 className="font-Sans text-primary text-3xl text-center font-bold   ">
        No booking yet!
      </h1>
      <h1 className="font-Sans text-primary text text-center ">
        Start your first luxury adventure NOW
      </h1>
      <Button className=" mt-10 w-[340px]">Back to Home</Button>
      <Image src={cuate} alt="netCon" />
    </div>
  </>
  )
}

export default NoBooking
