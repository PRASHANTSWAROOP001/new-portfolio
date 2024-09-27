import React from 'react';
import {ChevronLeft, ChevronRight, Slash} from "lucide-react"

import {Button} from "../components/ui/button"

function Project() {
  return (
    <div className='w-full min-h-screen'>

      <section className='w-full py-10'>
        <div>
           <h1 className='text-center text-3xl text-gray-400'> Here, You Can Know A Little Bit More About My Self.  <br />
            As A Developer. See My Experince.</h1>
        </div>

        <div className='flex items-center justify-center py-8 '>

          <Button className='rounded-full'> Download Resume </Button>

        </div>

      </section>


      

    </div>
  )
}

export default Project;
