import { Form } from "react-router-dom"


export const contactData = async({ request }) => {
   try {
    const response = await request.formData();
    const data = Object.fromEntries(response);

  
    console.log(data);
    return data;
    
   } catch (error) {

     console.log(error)
   }
}

export const Contact = () => {
    return(
          <>

<section className="w-full bg-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
  <div className="mx-auto w-full max-w-6xl">

    {/* Section Header */}
    <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
      <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
        Contact Us
      </span>

      <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
        Let's Start a Conversation
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
        Have a question or need assistance? Send us a message.
        We're always here to help you.
      </p>
    </div>

    {/* Centered Contact Card */}
    <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-stretch overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-200/50 md:grid-cols-2">

      {/* Left: Contact Form */}
      <div className="flex min-w-0 flex-col justify-center p-6 sm:p-8 lg:p-10">

        <div className="mb-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Send us a Message
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Fill out the form below and we'll get back to you.
          </p>
        </div>

        <Form method="POST" action="/contact" className="w-full space-y-5">

          {/* Full Name */}
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Full Name <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              name="username"
              id="username"
              required
              autoComplete="name"
              maxLength={100}
              placeholder="Enter your full name"
              className="block min-h-12 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition duration-200 placeholder:text-gray-400 hover:border-gray-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Email Address <span className="text-red-500">*</span>
            </label>

            <input
              type="email"
              name="email"
              id="email"
              required
              autoComplete="email"
              maxLength={254}
              placeholder="you@example.com"
              className="block min-h-12 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition duration-200 placeholder:text-gray-400 hover:border-gray-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Your Message <span className="text-red-500">*</span>
            </label>

            <textarea
              name="message"
              id="message"
              rows={5}
              required
              maxLength={5000}
              placeholder="Tell us how we can help..."
              className="block w-full resize-y rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm leading-6 text-gray-900 outline-none transition duration-200 placeholder:text-gray-400 hover:border-gray-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition duration-200 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600/30 active:scale-[0.99]"
          >
            Send Message

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="size-5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17 17 7M7 7h10v10"
              />
            </svg>
          </button>

          <p className="text-center text-xs leading-5 text-gray-500">
            Your information will only be used to respond to your inquiry.
          </p>

        </Form>
      </div>

      {/* Right: Image Panel */}
      <div className="relative flex min-h-80 flex-col items-center justify-center overflow-hidden bg-blue-50 p-6 text-center sm:p-10 md:min-h-full">

        {/* Decorative Background */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-blue-100/80 blur-2xl"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -bottom-20 -left-16 size-64 rounded-full bg-indigo-100/70 blur-2xl"
          aria-hidden="true"
        />

        {/* Image and Content */}
        <div className="relative mx-auto flex w-full max-w-md flex-col items-center justify-center">

          <img
            src="/contact.png"
            alt="Get in touch with our team"
            loading="lazy"
            decoding="async"
            className="mx-auto h-auto max-h-[380px] w-full object-contain"
          />

          <div className="mt-6 max-w-sm text-center">
            <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
              We're Here for You
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
              Whether you have a question, feedback, or need support,
              we'd love to hear from you.
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

     </>
    )
}