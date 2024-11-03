'use client'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import Link from 'next/link'
import PulsatingButton from "../components/ui/pulsating-button";
export default function LandingPage() {
  return (
    <div className="h-screen border-[25px] border-double border-[#f6eb7f]  flex flex-col items-center justify-center  bg-white text-center">
     
     <div className='flex justify-center h-fit  w-full  items-center text-2xl font-bold'>
     
     <Dialog >
      <DialogTrigger asChild>
      <p className='cursor-pointer relative translate-x-[-113px]'>ABOUT US</p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] flex flex-col justify-evenly items-center text-center">
        <DialogHeader>
          <DialogTitle className='text-4xl font-bold'>ABOUT US</DialogTitle>
        
        </DialogHeader>

        <DialogDescription className='text-2xl font-bold text-black'>
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
    </Dialog><Dialog>
      <DialogTrigger asChild>
      <p className='cursor-pointer relative translate-x-[138px]'>CONTACT US</p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] flex flex-col justify-evenly items-center text-center">
        <DialogHeader>
          <DialogTitle className='text-4xl font-bold'>CONTACT US</DialogTitle>
        
        </DialogHeader>

        <DialogDescription className='text-3xl font-bold text-black'>
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
      <div className="w-full  flex flex-col items-center gap-4">
        {/* Banner */}
        <div className="w-full border-[6px] border-[#f6eb7f] bg-[#4cd681]  rounded-lg shadow-lg">
          <div className="w-64 h-25 mx-auto bg-white rounded-full flex items-center justify-center">
            <Image
            src={'/ifunding.jpg'}
            width={256}
            height={256}
            alt="iFunding"
            />
          </div>
        </div>
        {/* <Link
          href="#"
          className="   bg-[#fdd017]  border-[9px] border-red-500 text-white text-3xl font-bold py-6 px-12 rounded-full shadow-lg hover:bg-[#e5bc15] transition duration-300"
        >
          TO APPLY FOR FUNDING CLICK HERE NOW
        </Link> */}
<Link href={'https://form.jotform.com/johnmoshe_johnmoshe905/iFundingApplication'}>
<PulsatingButton className='text-white text-2xl font-bold py-4 px-10  shadow-lg'>TO APPLY FOR FUNDING NOW CLICK HERE</PulsatingButton>

</Link>        
        <p className="text-2xl font-bold text-black">
          5 MINUTES EASY SIMPLE QUICK APPLICATION
        </p>

        {/* Main content */}
        <h1 className="text-3xl h-fit font-bold text-red-500">
          iFUNDING IS ONE OF THE LARGEST FUNDING COMPANIES IN THE U.S.A TODAY
        </h1>

        <h2 className="text-2xl font-bold text-black">
          WE WILL GET YOU THE FUNDING THAT YOU NEED TODAY!
        </h2>
       <div className='flex flex-col  items-center justify-center'>
       <h2 className="text-2xl font-bold text-black">
          HOW DOES IT WORK?
        </h2>

       

        {/* CTA Button */}
       

        <p className="text-2xl font-bold text-black">
          AS SOON AS YOU APPLY, WE WILL WORK ON IT QUICKLY AND GET BACK WITH YOU AS SOON AS POSSIBLE TODAY
        </p>
       </div>

        <p className="text-2xl font-semibold relative translate-y-[-15px] text-black">
        <span className='text-red-500 text-5xl'>⚜</span>     IF YOU HAVE ANY QUESTIONS PLEASE DON&#39;T HESITATE TO CONTACT US      <span className='text-red-500 text-5xl'>⚜</span>
        </p>
      </div>

      <style jsx>{`
        @keyframes slowFade {
          0%, 100% { opacity: 1; }    /* Fully visible at start and end */
          50% { opacity: 0.5; }       /* Fade to 50% opacity */
        }

        .slow-fade {
          animation: slowFade 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}