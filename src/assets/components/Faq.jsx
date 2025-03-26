import React from 'react'
import FaqCard from './FaqCard';

const Faq = () => {
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
  return (
    <div className='flex flex-col  w-full lg:w-full gap-6'>
          <div className='flex flex-col  lg:justify-between lg:items-center lg:flex-row gap-2 '>
            <div className='flex flex-col gap-2'>
                <h2 className='Manrope-Bold text-2xl text-white'>Frequently Asked Questions</h2>
                <p className='text-gray-500 Manrope-Regular text-sm'>Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
            </div>
            <div>
                <button className='rounded-md bg-red px-5 Manrope-Regular text-white'>Ask a Question</button>
            </div>
          </div>

          <div className="flex flex-col  lg:grid lg:grid-cols-2 lg:px-6 gap-6 w-full">
            {faqs.map((faq) => (
              <FaqCard key={faq.index} index={`0${faq.index}`} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
  )
}

export default Faq