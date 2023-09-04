import type { Component } from 'solid-js';
import Fream from './assets/Fream.png';
import NewFream from './assets/NewFream.png';
import Logo from './assets/Logo.png';
import Lastlogo from './assets/Lastlogo.png'
import Div1 from './assets/Div1.png'
import Div2 from './assets/Div2.png'
import Div3 from './assets/Div3.png'
const App: Component = () => {
  return (
    <div class='font-Rubik'>
      <div class='bg-gradient-to-r from-[#000000] to-[#DF3585] p-4'>
      <div class='lg:flex justify-around'>
            <div>
                <img class='' src={Logo} alt='/' />
              </div>
              <div class='flex gap-4'>
                <div>
                  <button class=' text-base text-[#FFC727] w-[190.47px] rounded-3xl font-normal my-6 mx-auto md:mx-0 py-3'>Login</button>
                </div>
                <div>
                  <button class='bg-[#FFC727] text-base text-[#7634BF] w-[190.47px] rounded-3xl font-normal my-6 mx-auto md:mx-0 py-3'>SignUp</button>
                </div>
              </div>
            </div>
        <div class='flex'>

          <div class='lg:flex justify-around items-center w-full '>
            <div class=''>
              <div class='text-[#FFFFFF] flex text-8xl font-bold font-Rubik m-p-10'>A way to</div>
              <br></br>
              <h2 class='text-[#FFFFFF] text-8xl font-bold'>track your</h2>
              <br></br>
              <h3 class='text-[#FFC727] text-8xl font-bold'>Plots</h3>
              <br></br>
              <h6 class='text-[#FFFFFF] text-lg font-normal'>The easy way to stay on top of your<br></br>competitors, no matter where you are.</h6>
              <button class='bg-[#7634BF] text-base text-white w-[190.47px] rounded-3xl font-normal my-6 mx-auto md:mx-0 py-3'>Download Now</button>
            </div>
            <div class=''>
              <img class='w-[500px] mx-auto my-4' src={Fream} alt='/' />
            </div>
          </div>
        </div>
      </div>

      <div class='lg:flex justify-around items-center'>
        <div class=''>
          <img class='w-[500px] mx-auto my-4' src={Div1} alt='/' />
        </div>
        <div class=''>
          <p class='text-[#9333ea] text-xl font-normal'>#1</p>
          <h1 class='text-[#000000] text-6xl font-bold'>Your all Plots in</h1>
          <br></br>
          <h2 class='text-[#7634BF] text-6xl font-bold'> One place</h2>
          <br></br>
          <h6 class='text-[#374151] text-base font-normal'>Here are all the plots presented in a single place. We will also keep  <br></br>track of the number of people who have viewed the plots. You can <br></br> share them on all platforms.</h6>
        </div>
      </div>

      <div class='lg:flex justify-around items-center'>
        <div class=''>
          <p class='text-[#9333ea] text-xl font-normal'>#2</p>
          <div class='text-[#000000] flex text-6xl font-bold'><p>Get</p><p class='text-[#7634BF]'>Enquiry</p></div>
          <br></br>
          <h2 class='text-[#000000] text-6xl font-bold'>Directly from</h2>
          <br></br>
          <h3 class='text-[#000000] text-6xl font-bold'>Customers</h3>
          <br></br>
          <h6 class='text-[#374151] text-base font-normal'>Plots: Available, Advance Paid, or Sold Out. Directly interact with <br></br> customers for updates, leads, and follow-ups.</h6>
        </div>

        <div class=''>
          <img class='w-[500px] mx-auto my-4' src={Div2} alt='/' />
        </div>
      </div>

      <div class='lg:flex justify-around items-center'>
        <div class=''>
          <img class='w-[500px] mx-auto my-4' src={Div3} alt='/' />
        </div>
        <div class=''>
          <p class='text-[#9333ea] text-xl font-normal'>#3</p>
          <h1 class='text-[#000000] text-6xl font-bold'>Manage Plots</h1>
          <br></br>
          <h2 class='text-[#7634BF] text-6xl font-bold'>anywhere</h2>
          <br></br>
          <h6 class='text-[#374151] text-base font-normal'>Change the status of your plots to either "Available," "Advance Paid,"<br></br> or "Sold out." Updates will be automatically generated.</h6>
        </div>
      </div>
      <div class=''>
        <div class='h-[full] bg-[#161616] lg:flex justify-around items-center'>
          <div class='text-[#FFFFFF]'>
            <h1 class='text-6xl  font-bold'>15</h1>
            <p class='text-xl font-normal'>Team members</p>
          </div>
          <div class='text-[#FFFFFF]'>
            <h1 class='text-6xl  font-bold'>230K</h1>
            <p class='text-xl font-normal'>Happy users</p>
          </div>
          <div class='text-[#FFFFFF]'>
            <h1 class='text-6xl  font-bold'>340+</h1>
            <p class='text-xl font-normal'>Supported lenders</p>
          </div>
        </div>
      </div>

      <div class='bg-gradient-to-r to-[#000000] from-[#DF3585] p-4'>
        <div class='lg:flex justify-around items-center'>
          <div class=''>
            <img class='w-[500px] mx-auto my-4' src={NewFream} alt='/' />
          </div>
          <div class=''>
            <h1 class='text-[#FFFFFF] text-6xl font-bold'>What are you</h1>
            <br></br>
            <h2 class='text-[#FFFFFF] text-6xl font-bold'>waiting for?</h2>
            <br></br>
            <h6 class='text-[#FFFFFF] text-base font-light'>There's no better time to take control of your Plots. With Bookmyplots <br></br>
              powerful categorization and visualization tools you'll actually stick to <br></br>your budget.</h6>
            <div class='flex gap-4'>
              <div>
                <button class='bg-[#7634BF] text-base text-white w-[190.47px] rounded-3xl font-normal my-6 mx-auto md:mx-0 py-3'>Google Play</button>
              </div>
              <div>
                <button class='bg-[#E03584] text-base text-white w-[190.47px] rounded-3xl font-normal my-6 mx-auto md:mx-0 py-3'>App Store</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='bg-[#FFFFFF] p-4 '>
        <div class='flex flex-col justify-center'>
          <div class='flex justify-items: start;'>
            <div class='text-2xl text-[#263238] font-bold top-80px left-80px'>
              <img class='' src={Lastlogo} alt='/' />
            </div>
          </div>
          <div class='lg:flex justify-around items-center'>
            <div class='flex flex-col justify-center'>
              <h1 class='text-[#000000] text-xl font-normal'>Manage your Plots easy.</h1>
              <br></br>
              <p class=' text-[#000000] text-base font-light'>Privacy policy</p>
              <h6 class='text-[#000000] text-base font-light'>Terms & Conditions</h6>
              <br></br>
              <div class='flex justify-around'>
                <div class=' flex w-10'>
                  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="facebook"><path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"></path></svg>
                </div>
                <div class=' flex w-10'>
                  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="instagram"><path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path></svg>
                </div>
                <div class=' flex w-10'>
                  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="twitter"><path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"></path></svg>
                </div>
              </div>
            </div>
            <div class='flex flex-col justify-center'>
              <h1 class='text-[#000000] text-xl font-bold'>Subscribe to our newsletter</h1>
              <br></br>
              <div class="mb-4">
                <label class="block text-gray-800 text-base font-light mb-2" for="Email address">
                  Email address
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Your email address" type="text-sm font-light" placeholder="Your email address" />
              </div>
              <br></br>
              <button class='bg-[#7634BF] text-base text-white w-[133.47px] rounded-2xl font-normal my-6 mx-auto md:mx-0 py-4'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default App;
