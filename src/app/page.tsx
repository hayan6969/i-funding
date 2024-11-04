'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import PulsatingButton from '@/components/ui/pulsating-button'

export default function LandingPage() {
  return (
    <div className="h-screen w-screen border-[3vmin] border-double border-[#f6eb7f] flex flex-col items-center justify-between p-[2vmin] bg-white text-center overflow-hidden">
      <div className='relative flex justify-between w-full items-center text-[2.5vmin] sm:text-[3vmin] font-bold mb-[1vmin]'>
        <Dialog>
          <DialogTrigger asChild>
            <p className='cursor-pointer absolute left-[calc(48%-30vmin)]'>ABOUT US</p>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] flex flex-col justify-evenly items-center text-center">
            <DialogHeader>
              <DialogTitle className='text-[4vmin] font-bold'>ABOUT US</DialogTitle>
            </DialogHeader>
            <DialogDescription className='text-[2.5vmin] font-bold text-black'>
              <p>YN888ENTERPRISE INC</p>
              <p>iFUNDING888.COM</p>
              <p>JOHN MOSHE, CEO AND FOUNDER</p>
              <p>WHO WE ARE</p>
              <p>YN888ENTERPRISE INC iFUNDING888.COM</p>
              <p>iFUNDING IS ONE OF THE LARGEST FUNDING COMPANIES IN THE U.S.A TODAY</p>
              <p>WE HAVE ACCESS TO OVER 3 BILLION DOLLARS IN WORKING CAPITAL AVAILABLE TO YOU</p>
              <p>WE WORK HARD TO ENSURE THAT YOU WILL GET THE FUNDING THAT YOU NEED TODAY</p>
              <p>YOU WILL GET THE FUNDING THAT YOU NEED QUICKLY</p>
              <p>YOU MAY APPLY NOW FOR ALL THE FUNDING THAT YOU NEED FOR YOUR BUSINESS TODAY</p>
            </DialogDescription>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <p className='cursor-pointer absolute right-[calc(47%-30vmin)]'>CONTACT US</p>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] flex flex-col justify-evenly items-center text-center">
            <DialogHeader>
              <DialogTitle className='text-[4vmin] font-bold'>CONTACT US</DialogTitle>
            </DialogHeader>
            <DialogDescription className='text-[2.5vmin] font-bold text-black'>
              <p>YN888ENTERPRISE INC</p>
              <p>JOHN MOSHE, CEO</p>
              <p>FUNDING SPECIALIST</p>
              <p className='text-blue-600'>IFUNDING888.COM</p>
              <p>JOHN@IFUNDING888.COM</p>
              <p>1-305-330-0815</p>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="flex-grow flex flex-col items-center justify-center gap-[2.5vmin] w-full">
        <div className="w-full h-[20vmin] border-[0.8vmin] border-[#f6eb7f] bg-[#4cd681] rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
          <div className="h-full aspect-[3/1] flex items-center justify-center">
            <Image
              src='/ifunding.jpg'
              width={600}
              height={200}
              alt="iFunding"
              className="h-full w-auto object-cover object-center"
            />
          </div>
        </div>
        
        <Link href='https://form.jotform.com/johnmoshe_johnmoshe905/iFundingApplication'>
          {/* <button className="bg-[#fdd017] border-[0.8vmin] border-red-500 text-white text-[3vmin] font-bold py-[2vmin] px-[3vmin] rounded-full shadow-lg hover:bg-[#e5bc15] transition duration-300 animate-pulse">
            TO APPLY FOR FUNDING NOW CLICK HERE
          </button> */}
          <PulsatingButton className='font-bold'>
            TO APPLY FOR FUNDING NOW CLICK HERE
          </PulsatingButton>
        </Link>
        
        <p className="text-[2.8vmin] font-bold text-black">
          5 MINUTES EASY SIMPLE QUICK APPLICATION
        </p>

        <h1 className="text-[3.2vmin] font-bold text-red-500 text-center px-[2vmin]">
          iFUNDING IS ONE OF THE LARGEST FUNDING COMPANIES IN THE U.S.A TODAY
        </h1>

        <h2 className="text-[2.8vmin] font-bold text-black">
          WE WILL GET YOU THE FUNDING THAT YOU NEED TODAY!
        </h2>
        
        <div className='flex flex-col items-center justify-center'>
          <h2 className="text-[2.8vmin] font-bold text-black">
            HOW DOES IT WORK?
          </h2>

          <p className="text-[2.5vmin] font-bold text-black text-center px-[2vmin]">
            AS SOON AS YOU APPLY, WE WILL WORK ON IT QUICKLY AND GET BACK WITH YOU AS SOON AS POSSIBLE TODAY
          </p>
        </div>
      </div>

      <p className="text-[2.5vmin] font-bold text-black text-center px-[2vmin]">
        <span className='text-red-500 text-[4vmin]'>⚜</span>
        IF YOU HAVE ANY QUESTIONS PLEASE DON&#39;T HESITATE TO CONTACT US
        <span className='text-red-500 text-[4vmin]'>⚜</span>
      </p>

      <style jsx>{`
        @keyframes slowFade {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .slow-fade {
          animation: slowFade 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}