import Image from 'next/image'
import React from 'react'
import { 
  
  BeakerIcon,
  ChevronDownIcon,
  HomeIcon, 
  MagnifyingGlassIcon, 
  Bars4Icon
} from '@heroicons/react/24/solid'

import { 
  BellIcon,
  ChatBubbleOvalLeftIcon,
  GlobeEuropeAfricaIcon,
  PlusIcon,
  SparklesIcon,
  MegaphoneIcon,
  VideoCameraIcon, 
} from '@heroicons/react/24/outline'

import { signIn , signOut, useSession } from "next-auth/react"



function Header() {
   const{ data:session } = useSession();
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-small ">
            <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
                <Image 
                 objectFit="contain"
                 src="/reddit-logo.png" 
                 layout="fill" 
                 alt="logo"
                 
                />
       
      
            </div>
             <div className='flex items-center mx-7 xl:min-w-[300px]'>
                  <HomeIcon className=' h-5 w-5  '/>
                  <p className='ml-2 hidden flex-1 lg:inline'> Home </p>
                  <ChevronDownIcon className=' item-center h-5 w-5'/>
             </div>
            
            {/*search box */}
             
            <form className="flex flex-1 item-center space-x-2 
              rounded-sm border-gray-200 bg-gray-100 px-3 py-3">
                <MagnifyingGlassIcon className= "h-6 w-6  text-gray-400" />
                <input className=" flex-1 bg-transparent outline-none  " type="text" placeholder="Search" />
                <button type="submit" hidden />
            </form>

            <div className="mx-5 hidden items-center space-x-2
             text-gray-500 lg:inline-flex ">

              <SparklesIcon className="icon" />
              <GlobeEuropeAfricaIcon className="icon" />
              <VideoCameraIcon className="icon" />

              <hr className="h-10 border border-gray-100" />

              <ChatBubbleOvalLeftIcon className="icon" />
              <BellIcon className="icon" />
              <PlusIcon className="icon" />
              <MegaphoneIcon className="icon" />

            </div>

            <div className="ml-5 flex items-center lg:hidden">
              <Bars4Icon className="icon" />
            </div>
 
              {/*sign in/out */}
            {session ? (            
            <div 
             onClick={() => signOut()}
             className="hidden lg:flex  items-center space-x-2 border-gray-100 p-2
             cursor-pointer">
              <div className="relative h-5 w-5 flex-shrink-0 ">
                  <Image  
                   objectFit="contain"                 
                   src="https://www.clipartmax.com/png/middle/134-1346141_reddit-logo-svg-png-icon-free-download-reddit-icon.png" 
                   layout="fill" 
                   alt="logo"
                  />

              </div>
              <div className="flex-1 text-xs">
                <p className ='truncate'>{session?.user?.name}</p>
               <p className="text-gray-400">Sign Out</p>
              </div>
              </div>

            ) : (          
            <div 
             onClick={() => signIn()}
             className="hidden lg:flex  items-center space-x-2 border-gray-100 p-2
             cursor-pointer">
              <div className="relative h-5 w-5 flex-shrink-0 ">
                  <Image  
                   objectFit="contain"                 
                   src="https://www.clipartmax.com/png/middle/134-1346141_reddit-logo-svg-png-icon-free-download-reddit-icon.png" 
                   layout="fill" 
                   alt="logo"
                  />

              </div>
              <p className="text-gray-400">Sign In</p>
              </div>
            )}

    </div>
    
  )
}

export default Header
