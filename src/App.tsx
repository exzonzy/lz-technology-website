import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle countdown for success page
  useEffect(() => {
    if (showSuccess && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (showSuccess && countdown === 0) {
      setShowSuccess(false);
      setCountdown(5); // Reset for next time
    }
  }, [showSuccess, countdown]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });
      
      if (response.ok) {
        setShowSuccess(true);
        setCountdown(5);
        form.reset();
      } else {
        console.error('Form submission failed:', response.status, response.statusText);
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success page component
  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center">
        <div className="text-center p-8 max-w-2xl mx-4">
          <div className="text-6xl md:text-8xl text-green-500 mb-6">✓</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">Message Sent Successfully!</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
            Thank you for contacting LZ Technology Solutions. We have received your message and will get back to you as soon as possible.
          </p>
          <div className="text-gray-400 mb-6">
            Redirecting to homepage in {countdown} seconds...
          </div>
          <button
            onClick={() => setShowSuccess(false)}
            className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors font-semibold"
          >
            Back to Homepage
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen w-screen bg-white text-black overflow-x-hidden m-0 p-0">
      {/* Simple Header */}
      <header className="bg-gray-900 text-white w-screen">
        <div className="w-screen px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">LZ Technology</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>
          {/* Mobile menu button */}
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 sm:py-16 md:py-20 lg:py-24 w-screen">
        <div className="w-screen px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Technology Solutions for Modern Businesses
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-300 max-w-5xl mx-auto leading-relaxed px-2 sm:px-4">
            We deliver cutting-edge technology services that drive innovation, efficiency, and growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-4">
            <a href="#services" className="bg-cyan-500 text-white px-6 sm:px-7 md:px-8 py-3 sm:py-4 rounded-lg hover:bg-cyan-600 transition-colors text-sm sm:text-base font-semibold text-center scroll-smooth">
              Explore Services
            </a>
            <a href="#contact" className="border border-gray-400 text-white px-6 sm:px-7 md:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors text-sm sm:text-base font-semibold text-center scroll-smooth">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 w-screen">
        <div className="w-screen px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Our Services</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-2 sm:px-4">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
            {/* Web Development */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Web Development</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Custom websites and web applications built with modern technologies</p>
              <ul className="text-xs sm:text-sm text-gray-500 space-y-1 sm:space-y-2">
                <li>• Responsive design for all devices</li>
                <li>• SEO-optimized architecture</li>
                <li>• Fast loading performance</li>
                <li>• Custom CMS integration</li>
              </ul>
            </div>

            {/* Software Development */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Software Development</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Tailored software solutions to meet your unique business needs</p>
              <ul className="text-xs sm:text-sm text-gray-500 space-y-1 sm:space-y-2">
                <li>• Custom application development</li>
                <li>• API development and integration</li>
                <li>• Database design and optimization</li>
                <li>• Legacy system modernization</li>
              </ul>
            </div>

            {/* Cloud Solutions */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow md:col-span-2 xl:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Cloud Solutions</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Scalable cloud infrastructure and migration services</p>
              <ul className="text-xs sm:text-sm text-gray-500 space-y-1 sm:space-y-2">
                <li>• Cloud migration and deployment</li>
                <li>• Infrastructure as Code</li>
                <li>• DevOps and CI/CD pipelines</li>
                <li>• Cloud security and monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white w-screen">
        <div className="w-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">About LZ Technology Solutions</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 md:mb-12 leading-relaxed px-2 sm:px-4">
              We are a forward-thinking technology company dedicated to delivering innovative solutions that empower businesses to thrive in the digital age. With years of experience and a passion for excellence, we transform complex challenges into streamlined, efficient solutions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-600 mb-2">50+</div>
                <div className="text-sm md:text-base text-gray-700">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-600 mb-2">25+</div>
                <div className="text-sm md:text-base text-gray-700">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-600 mb-2">5+</div>
                <div className="text-sm md:text-base text-gray-700">Years Experience</div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 md:p-8 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Excellence</h4>
                  <p className="text-gray-600 text-sm md:text-base">We strive for perfection in every project, ensuring the highest quality deliverables.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Innovation</h4>
                  <p className="text-gray-600 text-sm md:text-base">We embrace cutting-edge technologies to provide forward-thinking solutions.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Collaboration</h4>
                  <p className="text-gray-600 text-sm md:text-base">We work closely with our clients to understand and exceed their expectations.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Reliability</h4>
                  <p className="text-gray-600 text-sm md:text-base">Our clients can count on us for consistent, dependable service and support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-900 text-white w-screen">
        <div className="w-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Get In Touch</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 px-2 sm:px-4">
                Ready to transform your business with cutting-edge technology? Let's discuss your project.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              {/* Contact Info */}
              <div className="px-4">
                <h3 className="text-xl md:text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm md:text-base">Address</h4>
                      <p className="text-gray-300 text-sm md:text-base">Veliko Tarnovo, Bulgaria</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm md:text-base">Email</h4>
                      <p className="text-gray-300 text-sm md:text-base">yordanovkristian@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm md:text-base">Phone</h4>
                      <p className="text-gray-300 text-sm md:text-base">+359 877 650 591</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="px-4">
                <h3 className="text-xl md:text-2xl font-bold mb-6">Send us a Message</h3>
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true" 
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-6"
                >
                  {/* Hidden field for Netlify - REQUIRED for JavaScript submissions */}
                  <input type="hidden" name="form-name" value="contact" />
                  {/* Honeypot field for spam protection */}
                  <input type="hidden" name="bot-field" />
                  
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      name="message"
                      placeholder="Your Message"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-sm md:text-base"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-cyan-500 text-white px-6 md:px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors font-semibold text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 sm:py-10 md:py-12 w-screen">
        <div className="w-screen px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">LZ Technology</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Empowering businesses with innovative technology solutions for the digital future.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm md:text-base">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Software Development</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Cloud Solutions</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm md:text-base">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm md:text-base">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/kristian-yordanov-43139a78/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400">
            <p className="text-sm md:text-base">&copy; 2025 LZ Technology Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
