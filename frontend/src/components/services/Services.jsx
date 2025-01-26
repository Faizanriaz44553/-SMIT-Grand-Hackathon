import React from 'react'

const Services = () => {
    const services = [
        {
            title: '',
            description: 'Description for Service 1',
            image: 'image1.jpg'
        },
        {
            title: '',
            description: 'Description for Service 1',
            image: 'image1.jpg'
        },
        {
            title: '',
            description: 'Description for Service 1',
            image: 'image1.jpg'
        },
        {
            title: '',
            description: 'Description for Service 1',
            image: 'image1.jpg'
        },
    ]
  return (
    <div>
      {
        services.map((service, index) => (
          <div key={index} className="col-md-4">
            <div className="service-item">
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Services
