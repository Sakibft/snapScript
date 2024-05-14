 import im from '../../assets/q.svg'

const Faq = () => {
  return (
    <div className="container mx-auto mb-20">
          <div className="flex justify-center flex-col items-center">
        <h1 className="text-center mt-16   text-4xl font-semibold mb-3">
         
      Common Question
        </h1>
   
      </div>
      {/* question */}
      <div className=" grid lg:grid-cols-2 w-full ">
        <div>
       <img className='ml-10 w-[75%]' src={im} alt="" />
        </div>
      <div className='  w-full space-y-1 mt-3'>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
          What topics do you cover in your blogs <span className='text-[#F50057] text-2xl font-bold'>?</span>
          </div>
          <div className="collapse-content">
            <p className='text-gray-500 '>We cover a wide range of topics including technology, science, education, lifestyle, and more.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
          How can I submit a guest post<span className='text-[#F50057] text-2xl font-bold'> ?</span>
          </div>
          <div className="collapse-content">
          <p className='text-gray-500 '>Please reach out to us via email with your guest post proposal, and we ll review it for consideration.

</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
          Can I request a specific topic for a future blog post<span className='text-[#F50057] text-2xl font-bold'> ?</span>
          </div>
          <div className="collapse-content">
            <p className='text-gray-500 '>Absolutely! Feel free to send us your topic suggestions via email or through our contact form.

</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
          Do you offer advertising opportunities on your website?<span className='text-[#F50057] text-2xl font-bold'> ?</span>
          </div>
          <div className="collapse-content">
            <p  className='text-gray-500 '>Yes, we offer various advertising opportunities. Please contact us for more information.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
          Can I share your blog posts on social media<span className='text-[#F50057] text-2xl font-bold'> ?</span>
          </div>
          <div className="collapse-content">
            <p className='text-gray-500 '> Absolutely! We encourage you to share our blog posts on social media to spread knowledge and information.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Faq;