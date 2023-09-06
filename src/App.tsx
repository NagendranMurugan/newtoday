
import Fream from './assets/Fream.png';
import NewFream from './assets/NewFream.png';
import Logo from './assets/Logo.png';
import Lastlogo from './assets/Lastlogo.png';
import Div1 from './assets/Div1.png';
import Div2 from './assets/Div2.png';
import Div3 from './assets/Div3.png';
import Green from './assets/Green.png'
import Footer from './Footer';

const App = () => {

  const openWhatsApp = () => {
    const formattedPhoneNumber = encodeURIComponent(7418857157);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${formattedPhoneNumber}`;
    window.open(whatsappUrl);
  };
  return (
    <div class='font-Rubik w-full h-full'>
      <div class='bg-gradient-to-r w-full from-[#000000] to-[#DF3585] p-4'>
        <div class='w-full lg:flex justify-between items-center'>
          <div class='ml-12'>
            <img class='' src={Logo} alt='/' />
          </div>
          <div class='flex justify-center gap-4 lg:mr-10'>
            <div>
              <button class='text-base text-[#FFC727] border-2 border-yellow-300 w-24 lg:w-[190.47px] rounded-3xl font-normal my-6 mx-auto md:mx-0 py-3'>Login</button>
            </div>
            <div>
              <button class='bg-[#FFC727] text-base text-[#7634BF] w-24 lg:w-[190.47px] rounded-3xl font-normal my-6 mx-auto md:mx-0 py-3'>SignUp</button>
            </div>
          </div>
        </div>
        <div class='lg:flex justify-between items-center w-full '>
          <div class='ml-10'>
            <div class='text-[#FFFFFF] flex text-7xl lg:text-8xl font-bold font-Rubik m-p-10'>A way to</div>
            <br></br>
            <h2 class='text-[#FFFFFF] text-7xl lg:text-8xl font-bold'>track your</h2>
            <br></br>
            <h3 class='text-[#FFC727] text-7xl lg:text-8xl font-bold'>Plots</h3>
            <br></br>
            <h6 class='text-[#FFFFFF] text-lg font-normal'>The easy way to stay on top of your<br></br>competitors, no matter where you are.</h6>
            <button class='bg-[#7634BF] text-base text-white w-[190.47px] rounded-3xl font-normal my-6 mx-auto md:mx-0 py-3'>Download Now</button>
          </div>
          <div class=''>
            <img class='w-[500px] mx-auto my-4' src={Fream} alt='/' />
          </div>
        </div>
        <div class="fixed bottom-0 right-0 m-20 ">
          <div class='' onClick={openWhatsApp}>
            <img class='w-16' src={Green} alt='/' />
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

      <div class='lg:flex justify-around items-center bg-[#F3F5F6]'>
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
          <h6 class='text-[#374151] text-base font-normal'>Change the status of your plots to either "Available," "Advance Paid,"<br></br> or "Sold out." Updates will be automatically generated.</h6>
        </div>
      </div>
      <div class=''>
        <div class='h-[309] bg-black p-5 flex flex-col lg:flex-row gap-2 justify-around items-center'>
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
            <h6 class='text-[#FFFFFF] text-base font-light'>There's no better time to take control of your Plots. With Bookmyplots <br></br>
              powerful categorization and visualization tools you'll actually stick to <br></br>your budget.</h6>
            <div class='flex gap-4'>
              <div>
                <button class='bg-[#7634BF] text-base text-white w-[190.47px] rounded-3xl font-normal my-6 mx-auto md:mx-0 py-3'>Google Play</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};
export default App;