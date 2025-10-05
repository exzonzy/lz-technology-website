const About = () => {
  const values = [
    "Excellence in every project delivery",
    "Client-focused approach", 
    "Cutting-edge technology expertise",
    "Transparent communication",
    "Scalable & sustainable solutions",
    "Continuous innovation"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Professional IT Solutions for Modern Businesses
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About LZ Technology Solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Who We Are - Left Side */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Who We Are
              </h3>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  LZ Technology Solutions Inc. is a full-service IT company dedicated to providing 
                  innovative technology solutions for businesses of all sizes. With years of 
                  industry experience, we specialize in transforming complex challenges into elegant, 
                  efficient solutions.
                </p>
                <p>
                  Our team of expert developers, designers, and consultants work collaboratively 
                  to deliver high-quality products and services that exceed expectations and drive 
                  measurable results.
                </p>
                <p>
                  We believe in building long-term partnerships with our clients, understanding 
                  their unique needs, and delivering tailored solutions that help them achieve their 
                  business objectives.
                </p>
              </div>
            </div>

            {/* Our Values - Right Side */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Our Values
              </h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-cyan-50 p-2 rounded-lg mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;