import Image from 'next/image'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen border-[25px] border-double border-[#f6eb7f] flex flex-col items-center justify-between p-1 bg-white text-center">
     
     <div className='flex justify-between w-full  items-center text-3xl font-bold'>
      <p>ABOUT US</p>
      <p > &ensp;&ensp;&ensp; CONTACT US    </p>
      <p>COMING SOON</p>
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
        <Link
          href="#"
          className="bg-[#fdd017] animate-pulse border-[9px] border-red-500 text-white text-3xl font-bold py-6 px-12 rounded-full shadow-lg hover:bg-[#e5bc15] transition duration-300"
        >
          TO APPLY FOR FUNDING CLICK HERE NOW
        </Link>
        <p className="text-3xl font-bold text-black">
          5 MINUTES EASY SIMPLE QUICK APPLICATION
        </p>

        {/* Main content */}
        <h1 className="text-4xl font-bold text-red-500">
          iFUNDING IS ONE OF THE LARGEST FUNDING COMPANIES IN THE U.S.A TODAY
        </h1>

        <h2 className="text-3xl font-semibold text-black">
          WE WILL GET YOU THE FUNDING THAT YOU NEED TODAY!
        </h2>
       <div className='flex flex-col items-center justify-center'>
       <h2 className="text-3xl font-semibold text-black">
          HOW DOES IT WORK?
        </h2>

       

        {/* CTA Button */}
       

        <p className="text-3xl font-semibold text-black">
          AS SOON AS YOU APPLY, WE WILL WORK ON IT QUICKLY AND GET BACK WITH YOU AS SOON AS POSSIBLE TODAY
        </p>
       </div>

        <p className="text-3xl font-semibold text-black">
        <span className='text-red-500 text-6xl'>⚜</span>     IF YOU HAVE ANY QUESTIONS PLEASE DON'T HESITATE TO CONTACT US      <span className='text-red-500 text-6xl'>⚜</span>
        </p>
      </div>
    </div>
  )
}