import React, { useRef, useState } from 'react';
import ImageCard from '../assets/components/ImageCard';
import BackImage from '../assets/components/BackImage';
import logo from '../assets/images/Abstract Design.png';
import Navbar from '../assets/components/Navbar';
import { IoPlay } from "react-icons/io5";
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from "react-icons/hi2";
import CategoryCard from '../assets/components/CategoryCard';
import Card from '../assets/components/Card';
import SmartPhone from '../assets/images/icons/icon.png';
import Smart from '../assets/images/icons/icon.png';
import Tablet from '../assets/images/icons/frame.png';
import Vr from '../assets/images/icons/icon-4.png';
import Game from '../assets/images/icons/frame-2.png';
import Laptop from '../assets/images/icons/icon-3.png';
import FaqCard from '../assets/components/FaqCard';
import PricingCard from '../assets/components/PricingCard';
import Footer from '../assets/components/Footer';
import SlideControl from '../assets/components/SlideControl';
import FootAds from '../assets/components/FootAds';

const plans = {
  "monthly": [
    {
      "id": "basic_monthly",
      "name": "Basic",
      "price": 9.99,
      "currency": "USD",
      "content": "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
      "devices": 1,
      "free_trial_days": 7,
      "cancel_anytime": true,
      "features": {
        "hdr": false,
        "dolby_atmos": false,
        "ad_free": false,
        "offline_viewing": false,
        "family_sharing": false
      }
    },
    {
      "id": "standard_monthly",
      "name": "Standard",
      "tag": "Popular",
      "price": 12.99,
      "currency": "USD",
      "content": "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
      "devices": 2,
      "free_trial_days": 7,
      "cancel_anytime": true,
      "features": {
        "hdr": true,
        "dolby_atmos": true,
        "ad_free": true,
        "offline_viewing": "Yes, for select titles.",
        "family_sharing": "Yes, up to 5 family members."
      }
    },
    {
      "id": "premium_monthly",
      "name": "Premium",
      "price": 14.99,
      "currency": "USD",
      "content": "Access to the widest selection of movies and shows, including all new releases and offline viewing.",
      "devices": 4,
      "free_trial_days": 7,
      "cancel_anytime": true,
      "features": {
        "hdr": true,
        "dolby_atmos": true,
        "ad_free": true,
        "offline_viewing": "Yes, for all titles.",
        "family_sharing": "Yes, up to 5 family members."
      }
    }
  ],
  "yearly": [
    {
      "id": "basic_yearly",
      "name": "Basic",
      "price": 99.99,
      "currency": "USD",
      "content": "Access to a wide selection of movies and shows, including some new releases.",
      "devices": 1,
      "free_trial_days": 7,
      "cancel_anytime": true,
      "features": {
        "hdr": false,
        "dolby_atmos": false,
        "ad_free": false,
        "offline_viewing": false,
        "family_sharing": false
      }
    },
    {
      "id": "standard_yearly",
      "name": "Standard",
      "tag": "Popular",
      "price": 129.99,
      "currency": "USD",
      "content": "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
      "devices": 2,
      "free_trial_days": 7,
      "cancel_anytime": true,
      "features": {
        "hdr": true,
        "dolby_atmos": true,
        "ad_free": true,
        "offline_viewing": "Yes, for select titles.",
        "family_sharing": "Yes, up to 5 family members."
      }
    },
    {
      "id": "premium_yearly",
      "name": "Premium",
      "price": 149.99,
      "currency": "USD",
      "content": "Access to the widest selection of movies and shows, including all new releases and offline viewing.",
      "devices": 4,
      "free_trial_days": 7,
      "cancel_anytime": true,
      "features": {
        "hdr": true,
        "dolby_atmos": true,
        "ad_free": true,
        "offline_viewing": "Yes, for all titles.",
        "family_sharing": "Yes, up to 5 family members."
      }
    }
  ]
}
const HomePage = () => {
  const pictures = [
    { src: 'src/assets/images/image.png' },
    { src: 'src/assets/images/image-1.png' },
    { src: 'src/assets/images/image-2.png' },
    { src: 'src/assets/images/image-3.png' },
    { src: 'src/assets/images/image-4.png' },
    { src: 'src/assets/images/image-5.png' },
    { src: 'src/assets/images/image-6.png' },
    { src: 'src/assets/images/image-7.png' },
    { src: 'src/assets/images/image-8.png' },
    { src: 'src/assets/images/image-9.png' },
    { src: 'src/assets/images/image-10.png' },
    { src: 'src/assets/images/image-11.png' },
    { src: 'src/assets/images/image-12.png' },
    { src: 'src/assets/images/image-13.png' },
    { src: 'src/assets/images/image-14.png' },
    { src: 'src/assets/images/image-15.png' },
    { src: 'src/assets/images/image-16.png' },
    { src: 'src/assets/images/image-17.png' },
    { src: 'src/assets/images/image-18.png' },
    { src: 'src/assets/images/image-19.png' },
    { src: 'src/assets/images/image-20.png' },
    { src: 'src/assets/images/image-21.png' },
    { src: 'src/assets/images/image-22.png' },
    { src: 'src/assets/images/image-23.png' },
    { src: 'src/assets/images/image-24.png' },
    { src: 'src/assets/images/image-25.png' },
    { src: 'src/assets/images/image-26.png' },
    { src: 'src/assets/images/image-27.png' },
    { src: 'src/assets/images/image-28.png' },
    { src: 'src/assets/images/image-29.png' },
    { src: 'src/assets/images/image-30.png' },
    { src: 'src/assets/images/image-31.png' },
    { src: 'src/assets/images/image-32.png' },
    { src: 'src/assets/images/image-33.png' },
    { src: 'src/assets/images/image-34.png' },
    { src: 'src/assets/images/image-35.png' }
  ];

  const categories = {
    action: {
      title: 'Action',
      images: [
        'src/assets/images/image-33.png',
        'src/assets/images/image-17.png',
        'src/assets/images/image-16.png',
        'src/assets/images/image-20.png',
      ]
    },
    adventure: {
      title: 'Advection',
      images: [
        'src/assets/images/image-6.png',
        'src/assets/images/image-32.png',
        'src/assets/images/image-21.png',
        'src/assets/images/image-14.png',
      ]
    },
    comedy: {
      title: 'Comedy',
      images: [
        'src/assets/images/image-24.png',
        'src/assets/images/image-26.png',
        'src/assets/images/image-5.png',
        'src/assets/images/image-7.png',
      ]
    },
    drama: {
      title: 'Drama',
      images: [
        'src/assets/images/image-4.png',
        'src/assets/images/image-2.png',
        'src/assets/images/image-15.png',
        'src/assets/images/image-17.png',
      ]
    },
    horror: {
      title: 'Horror',
      images: [
        'src/assets/images/image-8.png',
        'src/assets/images/image-11.png',
        'src/assets/images/image-10.png',
        'src/assets/images/image-13.png',
      ]
    }
  };

  const faqs = [
    {
      index: 1,
      question: "What is StreamVibe?",
      answer: "StreamVibe is a streaming platform that offers a wide variety of movies, TV shows, and documentaries on demand. You can watch your favorite content anytime, anywhere."
    },
    {
      index: 2,
      question: "How much does StreamVibe cost?",
      answer: "StreamVibe offers various subscription plans to suit your needs. Visit our pricing page for more details on the available plans and their costs."
    },
    {
      index: 3,
      question: "Can I watch StreamVibe on multiple devices?",
      answer: "Yes, StreamVibe is compatible with a wide range of devices, including smartphones, tablets, smart TVs, gaming consoles, and VR headsets. You can enjoy your favorite content on any of these devices."
    },
    {
      index: 4,
      question: "How do I create a watchlist on StreamVibe?",
      answer: "To create a watchlist, simply log in to your StreamVibe account, browse the content, and click on the 'Add to Watchlist' button for the movies or shows you want to save for later."
    },
    {
      index: 5,
      question: "Is there a free trial available?",
      answer: "Yes, StreamVibe offers a free trial for new users. Sign up today to enjoy a limited period of free access to our content library."
    },
    {
      index: 6,
      question: "How do I cancel my subscription?",
      answer: "To cancel your subscription, log in to your StreamVibe account, go to the 'Account Settings' page, and follow the instructions to cancel your subscription. You can also contact our customer support for assistance."
    },
    {
      index: 7,
      question: "Can I download content for offline viewing?",
      answer: "Yes, StreamVibe allows you to download select movies and TV shows for offline viewing. Look for the download icon on the content you want to save and follow the prompts to download it to your device."
    },
    {
      index: 8,
      question: "How do I contact customer support?",
      answer: "You can contact StreamVibe customer support through our help center on the website. We offer various support options, including live chat, email, and phone support."
    }
  ];



const [billing_circle, setBilling_circle] = useState('monthly')
const selectedPlan = billing_circle === 'monthly'? plans.monthly :plans.yearly;
const switchPlan =(billing_circle,refDiv)=>{
  setBilling_circle(billing_circle)
  yearlyPlanRef.current.classList.remove('active')
  monthlyPlanRef.current.classList.remove('active')
  refDiv.current.classList.add('active')
}
const yearlyPlanRef = useRef(null)
const monthlyPlanRef = useRef(null)
  return (
    <section className='w-full h-full'>
      <section>
        <div className='w-screen lg:w-full h-screen lg:h-full grid grid-cols-3 lg:grid lg:grid-cols-9 place-center lg:gap-2 overflow-hidden'>
          {pictures.map((picture, index) =>
            <ImageCard key={index} image={picture.src} />
          )}
        </div>
        <div className="overlay absolute top-0 left-0 w-full h-screen lg:h-full bg-black ">
          <div className="overlayContent w-full h-full from-gray-500 text-white">
            <Navbar />
            <div className="logo flex justify-center p-10">
              <img src={logo} alt="" className='w-52 lg:w-62' />
            </div>
            <div className="intro flex items-center justify-center flex-col px-10 gap-5">
              <p className=' Manrope-Bold text-center text-3xl lg:text-5xl'>The Best Streaming Experience</p>
              <p className='text-gray-400 text-center text-sm Manrope-Regular '>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
              <div className="cta flex justify-center items-center">
                <button className='bg-red-900 rounded-md Manrope-SemiBold text-white flex items-center gap-2'>
                  <IoPlay />
                  Start Watching Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="categories flex w-screen flex-col  w-full h-3/4 lg:px-20 py-20 gap-8">
        <div className="categoryHead flex lg:justify-between items-center">
          <div className='flex flex-col gap-4 w-full px-8  py-10 lg:px-0'>
            <h3 className='Manrope-Bold text-white text-2xl'>Explore our wide variety of categories</h3>
            <p className='Manrope-Regular text-base text-gray-500 '>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
          </div>
         <SlideControl />
        </div>

        <div className="categoryContainer flex overflow-x-auto space-x-4 lg:grid lg:grid-cols-5 px-8 py-8">
          {Object.keys(categories).map((key) => (
            <CategoryCard key={key} title={categories[key].title} images={categories[key].images} />
          ))}
        </div>
      </section>
      <section>
        <div className="w-screen lg:w-full lg:px-20 py-20">
          <div className='flex flex-col gap-2 px-10 lg:px-0'>
            <h2 className='Manrope-Bold text-2xl text-white'>We Provide you streaming experience across various devices.</h2>
            <p className='text-gray-500 Manrope-Regular'>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
          </div>
          <div className="px-10 lg:px-0 flex flex-col lg:grid lg:grid-cols-3 py-5 gap-5">
            <Card icon={SmartPhone} title={'Smartphones'} text={'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'} />
            <Card icon={Tablet} title={'Tablet'} text={'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'} />
            <Card icon={Smart} title={'Smart'} text={'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'} />
            <Card icon={Laptop} title={'Laptop'} text={'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'} />
            <Card icon={Game} title={'Gaming Console'} text={'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'} />
            <Card icon={Vr} title={'VR Headsets'} text={'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'} />
          </div>
        </div>
      </section>
      <section>
        <div className='flex flex-col lg:px-20 w-screen lg:py-20 gap-6'>
          <div className='flex flex-col gap-2 p-8'>
            <h2 className='Manrope-Bold text-2xl text-white'>Frequently Asked Questions</h2>
            <p className='text-gray-500 Manrope-Regular'>Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
          </div>

          <div className="flex flex-col p-8 lg:grid lg:grid-cols-2 lg:px-6 gap-6">
            {faqs.map((faq) => (
              <FaqCard key={faq.index} index={`0${faq.index}`} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col w-screen lg:py-20 lg:px-20 gap-6">
         <div className="flex justify-between items-center h-max">
         <div className='flex flex-col gap-2 p-8'>
            <h2 className='Manrope-Bold text-2xl text-white'>Choose the plan that's right for you</h2>
            <p className='text-gray-500 Manrope-Regular'>Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
          </div>
          <div className="planSwitcher  flex gap-4 text-gray-400 justify-between rounded-md Manrope-Regular p-2 ">
                    <div ref={monthlyPlanRef} onClick={()=> switchPlan('monthly',monthlyPlanRef)} className='p-3 px-5 text-center active rounded-sm'>Monthly</div>
                    <div ref={yearlyPlanRef} onClick={()=> switchPlan('yearly',yearlyPlanRef)} className='p-3 px-5 text-center rounded-sm'>Yearly</div>
            </div>
         </div>
          <div className="pricingListings flex gap-4">
                {selectedPlan.map((plan,index)=>(
                    <PricingCard key={index} type={plan.name} description={plan.content} price={plan.price} billing_circle={billing_circle}/>
                ))}
            </div>
        </div>
      </section>
      <section>
        <FootAds  pictures={pictures}/>
      </section>
      <Footer />
    </section>
  );
}

export default HomePage;