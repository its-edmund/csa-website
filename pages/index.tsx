import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  const [email, setEmail] = useState("");

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        {/* <div className='bg-gradient-to-r from-yellow-500 to-red-500 h-auto'>
          <div className='flex-row'>
            <svg className='absolute left-10 top-10' width="460" height="380" viewBox="0 0 540 474" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_i)">
              <path fillRule="evenodd" clipRule="evenodd" d="M246.839 1.07462C313.815 7.40129 356.13 64.2938 402.841 112.707C459.958 171.905 551.054 222.419 538.897 303.776C526.428 387.215 430.79 425.49 351.709 454.881C283.437 480.255 209.825 481.842 144.07 450.518C77.9409 419.016 26.8706 362.428 8.68353 291.473C-10.1229 218.102 0.882505 137.842 48.913 79.275C96.2401 21.566 172.536 -5.94412 246.839 1.07462Z" fill="#F8F8F8"/>
              </g>
              <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="540" height="474">
              <path fillRule="evenodd" clipRule="evenodd" d="M246.839 1.07462C313.815 7.40129 356.13 64.2938 402.841 112.707C459.958 171.905 551.054 222.419 538.897 303.776C526.428 387.215 430.79 425.49 351.709 454.881C283.437 480.255 209.825 481.842 144.07 450.518C77.9409 419.016 26.8706 362.428 8.68353 291.473C-10.1229 218.102 0.882505 137.842 48.913 79.275C96.2401 21.566 172.536 -5.94412 246.839 1.07462Z" fill="#F8F8F8"/>
              </mask>
              <g mask="url(#mask0)">
              <rect x="7.67244" y="5.11496" width="468.873" height="468.873" fill="url(#pattern0)"/>
              </g>
              <defs>
              <filter id="filter0_i" x="0" y="0" width="540" height="473.974" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="25"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.968627 0 0 0 0 0.576471 0 0 0 0 0.364706 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
              </filter>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlinkHref="#image0" transform="scale(0.000555556)"/>
              </pattern>
              <image id="image0" width="1800" height="1800" href="/pandragon-wave.png"></image>
              </defs>
            </svg>  
          </div>
          <div className='flex-initial flex-column w-1/2 absolute top-1/4 right-10'>
            <h1 className='mb-5 text-7xl font-bold text-white'>
              Welcome to Chinese Student Association!
            </h1>
            <p className='text-white text-xl mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium lorem neque varius euismod mi mauris egestas adipiscing morbi. Leo hac mi eu, sed vulputate velit duis. Sit fusce odio scelerisque dolor convallis ultrices.</p>
            <div className='flex-row'>
              <input value={email} onChange={(e) => {
                setEmail(e.target.value);
              }} type='text' placeholder='Email' className='py-2 rounded-lg px-4 w-8/12'/>
              <button className='text-white bg-green-400 py-2 px-4 ml-5 rounded-lg font-bold'>Sign Up For CSA</button>
            </div>
          </div>
          <svg className='w-full bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs>
                <linearGradient id="Gradient1">
                  <stop stopColor='#F59E0B' offset="0%"/>
                  <stop stopColor="#EF4444" offset="100%"/>
                </linearGradient>
            </defs>
            <path fill='url(#Gradient1)' fillOpacity="1" d="M0,96L60,96C120,96,240,96,360,85.3C480,75,600,53,720,58.7C840,64,960,96,1080,106.7C1200,117,1320,107,1380,101.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
        </div> */}
        <div className="pt-24 bg-gradient-to-r from-yellow-500 to-red-500">
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left animate-wiggle origin-bottom">
              <svg className='w-full md:w-4/5 z-50' width="460" height="380" viewBox="0 0 540 474" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_i)">
                <path fillRule="evenodd" clipRule="evenodd" d="M246.839 1.07462C313.815 7.40129 356.13 64.2938 402.841 112.707C459.958 171.905 551.054 222.419 538.897 303.776C526.428 387.215 430.79 425.49 351.709 454.881C283.437 480.255 209.825 481.842 144.07 450.518C77.9409 419.016 26.8706 362.428 8.68353 291.473C-10.1229 218.102 0.882505 137.842 48.913 79.275C96.2401 21.566 172.536 -5.94412 246.839 1.07462Z" fill="#F8F8F8"/>
                </g>
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="540" height="474">
                <path fillRule="evenodd" clipRule="evenodd" d="M246.839 1.07462C313.815 7.40129 356.13 64.2938 402.841 112.707C459.958 171.905 551.054 222.419 538.897 303.776C526.428 387.215 430.79 425.49 351.709 454.881C283.437 480.255 209.825 481.842 144.07 450.518C77.9409 419.016 26.8706 362.428 8.68353 291.473C-10.1229 218.102 0.882505 137.842 48.913 79.275C96.2401 21.566 172.536 -5.94412 246.839 1.07462Z" fill="#F8F8F8"/>
                </mask>
                <g mask="url(#mask0)">
                <rect x="7.67244" y="5.11496" width="468.873" height="468.873" fill="url(#pattern0)"/>
                </g>
                <defs>
                <filter id="filter0_i" x="0" y="0" width="540" height="473.974" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="25"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.968627 0 0 0 0 0.576471 0 0 0 0 0.364706 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                </filter>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0" transform="scale(0.000555556)"/>
                </pattern>
                <image id="image0" width="1800" height="1800" href="/pandragon-wave.png"></image>
                </defs>
              </svg>  
            </div>
            <div className="w-full md:w-3/5 py-6 text-white">
              <h1 className="my-4 text-6xl font-bold leading-tight">
                Welcome To Chinese Student Association!
              </h1>
              <p className="leading-normal text-lg mb-8">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium lorem neque varius euismod mi mauris egestas adipiscing morbi. Leo hac mi eu, sed vulputate velit duis. Sit fusce odio scelerisque dolor convallis ultrices.
              </p>
              <input type='email' placeholder='Email' className='text-black px-8 py-3 rounded-full w-9/12 mr-5 shadow-lg'/>
              <button className="mx-auto lg:mx-0 bg-green-400 text-white font-bold rounded-full my-2 py-3 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Subscribe
              </button>
            </div>
          </div>
        </div>
          <svg className='w-full bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs>
                <linearGradient id="Gradient1">
                  <stop stopColor='#F59E0B' offset="0%"/>
                  <stop stopColor="#EF4444" offset="100%"/>
                </linearGradient>
            </defs>
            <path fill='url(#Gradient1)' fillOpacity="1" d="M0,96L60,96C120,96,240,96,360,85.3C480,75,600,53,720,58.7C840,64,960,96,1080,106.7C1200,117,1320,107,1380,101.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Home
