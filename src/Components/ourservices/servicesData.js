import scamimg from '../../assets/scamimg.avif'
import discount from '../../assets/discount.jpg'
import ratings from '../../assets/ratings.jpg'
import ridematch from '../../assets/ridematch.jpg'
import bookride1 from '../../assets/bookride1.jpeg'


const servicesData = [
    {
      id: 1,
      title: 'Ride Matching',
      description: 'Efficiently match passengers with similar origins and destinations.',
      details: 'Your system can match passengers traveling in the same direction or to nearby destinations, ensuring efficient use of vehicle capacity.',
      image: ridematch, // Replace with actual image path
    },
    {
      id: 2,
      title: 'Real-Time Booking',
      description: 'Book rides instantly or schedule them in advance.',
      details: 'Allow customers to book rides instantly or schedule them in advance, providing flexibility according to their travel needs.',
      image: bookride1, // Replace with actual image path
    },
    {
      id: 3,
      title: 'Special Discounts',
      description: 'Special Discounts for our customers.',
      details: 'We offer special discounts for our repeated customers who book rides frequently through or website',
      image: discount, // Replace with actual image path
    },
    {
        id:4,
        title: 'Safety Measures',
        description : 'Your Safety is our priority',
        details: 'Implement safety measures such as driver background checks, real-time GPS tracking, and emergency contact options for passengers.',
        image: scamimg,
    },
    {
        id:5,
        title: 'User Reviews and Ratings',
        description : 'Customer feedback is most valuable for us.',
        details: 'Enable passengers to rate drivers and provide feedback, ensuring accountability and maintaining service quality.',
        image: ratings,
    }
    // Add more services as needed
  ];
  
  export default servicesData;
  