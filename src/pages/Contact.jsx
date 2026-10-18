export const Contact = () => {
    return(
         <div className="flex justify-center items-center min-h-screen bg-[#fafafa] p-4 md:p-8 text-[#333333]">
      
     
      <div className="w-full max-w-xl bg-white p-6 md:p-10 rounded-lg shadow-sm">
        
        {/* Header Section */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
            contact us
          </h2>
          <p className="text-xs md:text-sm text-gray-500 font-medium">
            Get in touch with us. We are always here to help you.
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-5 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
          
          {/* Full Name Input */}
          <div>
            <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Full Name"
              className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded focus:outline-none focus:border-red-600 transition-colors text-xs md:text-sm placeholder-gray-400"
            />
          </div>

          {/* Email Address Input */}
          <div>
            <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Abc@Thapa.Com"
              className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded focus:outline-none focus:border-red-600 transition-colors text-xs md:text-sm placeholder-gray-400"
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="We Are Always Here To Help You."
              className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded focus:outline-none focus:border-red-600 transition-colors text-xs md:text-sm placeholder-gray-400 resize-y"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#b30006] text-white font-medium text-xs tracking-wide py-3 px-6 rounded shadow hover:bg-red-800 transition-colors cursor-pointer"
            >
              Send Message
            </button>
          </div>

        </form>
      </div>
    </div>
    )
}