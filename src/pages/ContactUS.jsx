import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

export default function ContactUs() {

const [loading, setLoading] = useState(false);
const [showSuccess, setShowSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.target);

    formData.append(
      "access_key",
      "8b135234-1e93-4c41-bb0e-d33ac05b20be"
    );

  try {
  const response = await fetch(
    "https://api.web3forms.com/submit",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  if (data.success) {
    e.target.reset();

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  } else {
    alert(data.message || "Failed to send message");
  }

} catch (error) {
  alert("Something went wrong. Please try again.");
} finally {
  setLoading(false);
}
};  
  return (
    <div className="bg-[#f5f5f5] min-h-screen text-black overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative bg-black text-white overflow-hidden">

        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0">

          <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] bg-white/5 rounded-full blur-3xl"></div>

          <div className="absolute bottom-[-120px] left-[-120px] w-[350px] h-[350px] bg-gray-500/10 rounded-full blur-3xl"></div>

        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-36">

          <div className="max-w-4xl">

            <p className="uppercase tracking-[5px] text-gray-400 text-xs md:text-sm font-medium mb-6">
              GymSword Support Center
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[1] tracking-tight">
              Contact
              <span className="block text-gray-400 mt-2">
                GymSword
              </span>
            </h1>

            <p className="mt-10 text-gray-300 text-base md:text-xl leading-8 max-w-2xl">
              Questions about your orders, returns, collaborations,
              memberships, or GymSword products? Our support team
              is always ready to help you.
            </p>

          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">

          {/* LEFT SIDE */}
          <div>

            <p className="uppercase tracking-[4px] text-gray-500 text-sm font-semibold mb-4">
              Get In Touch
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Let’s Build
              <br />
              Something Great.
            </h2>

            <p className="text-gray-600 leading-8 text-lg mb-12 max-w-xl">
              We’re committed to delivering premium support and
              helping you with everything related to GymSword.
            </p>

            {/* INFO CARDS */}
            <div className="space-y-5">

              {/* EMAIL */}
              <div className="group bg-white border border-gray-200 rounded-[28px] p-7 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

                <div className="flex items-start gap-5">

                  <div className="bg-black text-white p-4 rounded-2xl group-hover:scale-110 transition duration-300">
                    <Mail size={24} />
                  </div>

                  <div>
                    <h3 className="font-bold text-2xl mb-2">
                      Email Support
                    </h3>

                    <p className="text-gray-700 text-lg">
                      support@gymsword.com
                    </p>

                    <p className="text-gray-500 mt-2 leading-7">
                      Our team replies within 24 hours.
                    </p>
                  </div>

                </div>
              </div>

              {/* PHONE */}
              <div className="group bg-white border border-gray-200 rounded-[28px] p-7 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

                <div className="flex items-start gap-5">

                  <div className="bg-black text-white p-4 rounded-2xl group-hover:scale-110 transition duration-300">
                    <Phone size={24} />
                  </div>

                  <div>
                    <h3 className="font-bold text-2xl mb-2">
                      Phone Number
                    </h3>

                    <p className="text-gray-700 text-lg">
                      +91 98765 43210
                    </p>

                    <p className="text-gray-500 mt-2 leading-7">
                      Monday - Saturday | 10 AM - 7 PM
                    </p>
                  </div>

                </div>
              </div>

              {/* LOCATION */}
              <div className="group bg-white border border-gray-200 rounded-[28px] p-7 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

                <div className="flex items-start gap-5">

                  <div className="bg-black text-white p-4 rounded-2xl group-hover:scale-110 transition duration-300">
                    <MapPin size={24} />
                  </div>

                  <div>
                    <h3 className="font-bold text-2xl mb-2">
                      Office Address
                    </h3>

                    <p className="text-gray-700 text-lg leading-8">
                      GymSword Pvt Ltd
                      <br />
                      New Delhi, India
                    </p>
                  </div>

                </div>
              </div>

              {/* HOURS */}
              <div className="group bg-white border border-gray-200 rounded-[28px] p-7 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

                <div className="flex items-start gap-5">

                  <div className="bg-black text-white p-4 rounded-2xl group-hover:scale-110 transition duration-300">
                    <Clock size={24} />
                  </div>

                  <div>
                    <h3 className="font-bold text-2xl mb-2">
                      Working Hours
                    </h3>

                    <p className="text-gray-700 text-lg leading-8">
                      Monday - Saturday
                      <br />
                      10:00 AM - 7:00 PM
                    </p>
                  </div>

                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
      <div>

  <div className="bg-white border border-gray-200 rounded-[36px] p-8 md:p-12 shadow-2xl">

    <p className="uppercase tracking-[4px] text-gray-500 text-sm font-semibold mb-4">
      Send Message
    </p>

    <h2 className="text-4xl md:text-5xl font-black leading-tight mb-10">
      Contact Form
    </h2>

   {showSuccess && (
  <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">

    <div className="bg-white rounded-[32px] shadow-2xl max-w-lg w-full p-10 text-center animate-[fadeIn_0.3s_ease]">

      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
        <span className="text-green-600 text-5xl">✓</span>
      </div>

      <h2 className="text-4xl font-black mb-4">
        Thank You!
      </h2>

      <p className="text-gray-600 text-lg leading-8">
        Thank you for contacting GymSword.
        <br />
        We have received your message and
        will contact you soon.
      </p>

    </div>

  </div>
)}

      <form
        onSubmit={handleSubmit}
        className="space-y-7"
      >

        {/* NAME */}
        <div>
          <label className="block text-sm font-semibold mb-3">
            Full Name
          </label>

          <input
            type="text"
            name="fullName"
            required
            placeholder="Enter your full name"
            className="w-full border border-gray-300 bg-[#fafafa] rounded-2xl px-6 py-4 text-lg outline-none focus:border-black"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="block text-sm font-semibold mb-3">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email address"
            className="w-full border border-gray-300 bg-[#fafafa] rounded-2xl px-6 py-4 text-lg outline-none focus:border-black"
          />
        </div>

        {/* PHONE */}
        <div>
          <label className="block text-sm font-semibold mb-3">
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            required
            placeholder="Enter your phone number"
            className="w-full border border-gray-300 bg-[#fafafa] rounded-2xl px-6 py-4 text-lg outline-none focus:border-black"
          />
        </div>

        {/* SUBJECT */}
        <div>
          <label className="block text-sm font-semibold mb-3">
            Subject
          </label>

          <input
            type="text"
            name="subject"
            required
            placeholder="Enter message subject"
            className="w-full border border-gray-300 bg-[#fafafa] rounded-2xl px-6 py-4 text-lg outline-none focus:border-black"
          />
        </div>

        {/* MESSAGE */}
        <div>
          <label className="block text-sm font-semibold mb-3">
            Message
          </label>

          <textarea
            rows="6"
            name="message"
            required
            placeholder="Write your message..."
            className="w-full border border-gray-300 bg-[#fafafa] rounded-2xl px-6 py-4 text-lg outline-none focus:border-black resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black hover:bg-zinc-800 text-white py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-xl"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send size={20} />
            </>
          )}
        </button>

      </form>



    {/* SOCIALS */}
    <div className="mt-12">

      <p className="text-sm uppercase tracking-[3px] text-gray-500 font-semibold mb-5">
        Follow GymSword
      </p>

      <div className="flex gap-4">

        {/* Put your Instagram/Facebook/Twitter code here unchanged */}

      </div>

    </div>

  </div>

</div>

        </div>

      </section>

    </div>
  );
}