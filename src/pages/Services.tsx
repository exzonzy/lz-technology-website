const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: [
        "Responsive design for all devices",
        "SEO-optimized architecture", 
        "Fast loading performance",
        "Custom CMS integration",
        "E-commerce solutions",
        "Progressive web apps (PWA)"
      ]
    },
    {
      title: "Software Development",
      description: "Tailored software solutions to meet your unique business needs",
      features: [
        "Custom enterprise applications",
        "Legacy system modernization",
        "API development & integration", 
        "Database design & optimization",
        "Microservices architecture",
        "Agile development process"
      ]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      features: [
        "Cloud migration strategy",
        "AWS, Azure, GCP deployment",
        "Infrastructure as Code (IaC)",
        "Auto-scaling & load balancing", 
        "Disaster recovery planning",
        "Cost optimization analysis"
      ]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      features: [
        "Security audits & assessments",
        "Penetration testing",
        "Data encryption services",
        "Compliance consulting (GDPR, HIPAA)",
        "Security monitoring 24/7",
        "Incident response planning"
      ]
    },
    {
      title: "Digital Marketing", 
      description: "Data-driven marketing strategies to grow your online presence",
      features: [
        "SEO & content marketing",
        "Social media management",
        "Pay-per-click (PPC) campaigns",
        "Email marketing automation", 
        "Analytics & reporting",
        "Conversion rate optimization"
      ]
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      features: [
        "iOS & Android development",
        "React Native & Flutter",
        "Mobile UI/UX design",
        "App store optimization",
        "Push notifications", 
        "Offline functionality"
      ]
    }
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

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to drive your business forward with cutting-edge technology and expert support.
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-1">•</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-2xl font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-600 font-medium">Image</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;