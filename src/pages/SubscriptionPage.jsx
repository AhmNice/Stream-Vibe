import React, { useRef, useState } from 'react'
import Navbar from '../assets/components/Navbar'
import PricingCard from '../assets/components/PricingCard'
import Footer from '../assets/components/Footer'

const plans = {
    "monthly": [
      {
        "id": "basic_monthly",
        "name": "Basic",
        "price": 9.99,
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
const SubscriptionPage = () => {
    const [billing_circle, setBilling_circle] = useState('monthly')
    const selectedPlan = billing_circle ==='monthly' ? plans.monthly : plans.yearly
    const switchPlan = (billing_circle, refDiv)=>{
        setBilling_circle(billing_circle)
        planRef.current.classList.remove('active')
        planRef2.current.classList.remove('active')
        refDiv.current.classList.add('active');
    }
    const planRef = useRef(null)
    const planRef2 = useRef(null)
    return (
    <section className='lg:w-screen h-full'>
        <section className='w-full'>
            <div className="w-screen lg:w-screen">
                <Navbar />
            </div>
        </section>
        <section className="lg:py-14 lg:p-0 lg:flex lg:gap-8 gap-4 px-8 lg:px-20  w-full flex-col">
           <div className="flex justify-between lg:gap-16 lg:items-center lg:flex-row flex-col gap-2 h-max">
            <div className="flex gap-4 flex-col">
                <p className="text-3xl text-white Manrope-Bold">
                Choose the plan that's right for you
                </p>
                <p className='Manrope-Regular text-sm  text-gray-400'>Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
            </div>
            <div className="planSwitcher w-max flex gap-4 text-gray-400 justify-between rounded-md Manrope-Regular text-sm w-80 p-2 ">
                    <div ref={planRef} onClick={()=> switchPlan('monthly',planRef)} className='cursor-pointer p-3 px-5 text-center active rounded-sm'>Monthly</div>
                    <div ref={planRef2} onClick={()=> switchPlan('yearly',planRef2)} className='cursor-pointer p-3 px-5 text-center rounded-sm'>Yearly</div>
            </div>
           </div>

           <div className="pricingListings py-4 flex lg:flex-row flex-col gap-4">
                {selectedPlan.map((plan,index)=>(
                    <PricingCard key={index} type={plan.name} description={plan.content} price={plan.price} billing_circle={billing_circle}/>
                ))}
            </div>
        </section>
        <section className='lg:py-14 px-8 lg:px-20 lg: flex gap-8 flex-col'>
                <div className="flex flex-col gap-4">
                    <p className='text-white text-3xl Manrope-Bold'>Compare our plans and find the right one for you</p>
                    <p className="Manrope-Regular text-sm text-gray-400">StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.</p>
                </div>
                <div className='overflow-hidden rounded-lg border border-gray-500 w-full'>
                    <table className='w-full text-gray-300  border-collapse'>
                       {/* table head */}
                        <thead>
                            <tr className='border '>
                                <th className='border first:rounded-t-lg last:rounded-b-lg text-left p-4  text-gray-400 Manrope-SemiBold'>Features</th>
                                {selectedPlan.map((plan)=>(
                                    <th key={plan.id} className='border  Manrope-SemiBold p-4 text-left align-middle'>{plan.name}</th>
                                ))}
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                            {/* price row */}
                            <tr className='border  Manrope-Regular text-sm w-80'>
                                <td className='border  p-4 Manrope-Regular text-sm w-80'>Price</td>
                                {selectedPlan.map((plan)=>(
                                    <td key={plan.id} className='p-4 border  '> {plan.price} </td>
                                ))}
                            </tr>
                            {/* content row */}
                            <tr className="border  Manrope-Regular text-sm w-80">
                                <td className='border  p-4 Manrope-Regular text-sm w-80'>Content</td>
                                {selectedPlan.map((plan)=>(
                                    <td className='border  p-4 Manrope-Regular text-sm w-80 '>{plan.content} </td>
                                ))}
                            </tr>
                            {/* devices row */}
                            <tr className='border  Manrope-Regular text-sm w-80'>
                            <td className='border  p-4 Manrope-Regular text-sm w-80'>Device</td>
                                {selectedPlan.map((plan)=>(
                                     <td className='border  Manrope-Regular text-sm w-80 p-4'>{plan.devices ===1? 'Watch on one device simultaneously': plan.devices===2? 'Watch on two device simultaneously': plan.devices ===4 ? 'Watch on four device simultaneously':null} </td>
                                ))}
                            </tr>
                            {/* freeTrial row */}
                            <tr className='border  Manrope-Regular text-sm w-80'>
                            <td className='border  p-4 Manrope-Regular text-sm w-80'>Free Trial</td>
                                {selectedPlan.map((plan)=>(
                                    <td className='border  Manrope-Regular text-sm w-80 p-4'>{plan.free_trial_days}  days</td>
                                ))}
                            </tr>
                            {/* Features row */}
                           {Object.keys(selectedPlan[0].features).map((feature)=>(
                            <tr key={feature} className='border  Manrope-Regular text-sm w-80'>
                                <td  className='p-4'> {feature.replace('_',' ')}</td>
                                {selectedPlan.map((plan)=>(
                                    <td key={plan.id} className='p-4 border '>
                                        {typeof plan.features[feature] === 'boolean'?
                                        (plan.features[feature] ? 'Yes': 'No'):
                                        plan.features[feature]}
                                    </td>
                                ))}
                            </tr>
                           ))}
                        </tbody>
                    </table>
                </div>
        </section>
<section>
    <Footer/>
</section>
    </section>
  )
}

export default SubscriptionPage