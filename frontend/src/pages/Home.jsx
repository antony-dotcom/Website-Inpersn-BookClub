import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Coffee, MapPin, Star, CheckCircle2, MessageCircle, Calendar, Award, Shield, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import SEO from '../components/SEO';

const Home = () => {
  const [activeCity, setActiveCity] = useState('bangalore');

  const cities = [
    { id: 'bangalore', name: 'Bangalore' },
    { id: 'mumbai', name: 'Mumbai' },
    { id: 'delhi', name: 'Delhi' },
    { id: 'gurgaon', name: 'Gurgaon' },
    { id: 'noida', name: 'Noida' },
    { id: 'pune', name: 'Pune' },
    { id: 'chennai', name: 'Chennai' },
    { id: 'kolkata', name: 'Kolkata' },
    { id: 'hyderabad', name: 'Hyderabad' }
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Curated for Thinkers',
      description: '50+ non-fiction titles chosen for depth. Business. Psychology. Philosophy. Books that matter.'
    },
    {
      icon: Users,
      title: 'Small by Design',
      description: 'Four people per table. Not big groups. Not online threads. Just intimate, meaningful conversation.'
    },
    {
      icon: Calendar,
      title: 'Structured & Predictable',
      description: 'Clear timelines. Simple voting. No confusion. You always know what happens next.'
    },
    {
      icon: MapPin,
      title: 'Real Cafés, Real People',
      description: 'Meet at actual coffee shops in your city. Face-to-face. No screens between you.'
    },
    {
      icon: MessageCircle,
      title: 'Coordinate Before You Meet',
      description: 'Brief chat to align on location and time. Then save the real talk for the table.'
    },
    {
      icon: Award,
      title: 'Invite Thoughtful Friends',
      description: 'Share with people who read seriously. Earn credits when they join their first table.'
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Browse Curated Books',
      description: 'Explore 50+ thoughtfully selected non-fiction titles. Pick books that make you think.',
      icon: BookOpen
    },
    {
      step: '02',
      title: 'Tables Form Automatically',
      description: 'When 8 readers express interest in the same book, everyone gets notified. 24 hours to decide.',
      icon: Users
    },
    {
      step: '03',
      title: 'Confirm Your Spot',
      description: 'Pay ₹99 to commit. First 4 who pay get in. No flakes. No chaos.',
      icon: CheckCircle2
    },
    {
      step: '04',
      title: 'Vote & Coordinate',
      description: 'Choose your café and time together. Simple voting. Clear decisions.',
      icon: Calendar
    },
    {
      step: '05',
      title: 'Show Up & Discuss',
      description: 'Meet at the café. Four people who chose the same book. Real conversations.',
      icon: Coffee
    },
    {
      step: '06',
      title: 'Keep Reading, Keep Meeting',
      description: 'Rate your experience. Join more tables. Build meaningful connections through books.',
      icon: Star
    }
  ];

  const benefits = [
    {
      title: 'In-Person > Online',
      description: 'Real faces. Real voices. Real connection. Not another virtual meeting or WhatsApp group.'
    },
    {
      title: 'Small Groups > Big Events',
      description: 'Four people means everyone speaks. Everyone listens. No one gets lost in the crowd.'
    },
    {
      title: 'Serious Readers Only',
      description: 'Non-fiction attracts thinkers. Our curation elevates quality. You meet people who actually finish books.'
    },
    {
      title: 'No Flakes, No Chaos',
      description: '₹99 commitment means everyone shows up. Clear structure means no confusion. Just good conversations.'
    }
  ];

  const testimonials = [
    {
      quote: 'Finally, a way to meet people who actually read! The discussions are always engaging and I\'ve made real friends.',
      author: 'Priya S.',
      location: 'Bangalore'
    },
    {
      quote: 'The ₹99 commitment fee is genius—everyone shows up prepared and the conversations are amazing.',
      author: 'Rahul M.',
      location: 'Mumbai'
    },
    {
      quote: 'I\'ve read more books in 3 months with InPersn than I did all last year!',
      author: 'Anjali K.',
      location: 'Delhi NCR'
    }
  ];

  const faqs = [
    {
      question: 'How does the matching process work?',
      answer: 'When you express interest in a book, we track how many people in your city are interested. Once 8 people express interest, everyone gets notified and has 24 hours to pay ₹99. The first 4 people to pay secure their spots at the table. Once 4 people have paid, the table is locked and confirmed.'
    },
    {
      question: 'What happens if less than 4 people pay within 24 hours?',
      answer: 'If a table doesn\'t reach 4 paid members within the 24-hour window, it gets cancelled and everyone who paid receives a full refund. You can then express interest in other books that are forming tables.'
    },
    {
      question: 'Can I suggest a book that\'s not in your library?',
      answer: 'Currently, we curate our collection to ensure quality discussions. However, we regularly add new titles based on member feedback. You can submit suggestions through the app!'
    },
    {
      question: 'Is it safe to meet strangers?',
      answer: 'Safety is our priority. All meetups happen in public café locations, users are verified, and we have a rating system. You can also check member profiles before confirming your spot.'
    },
    {
      question: 'How do I earn referral credits?',
      answer: 'Share your unique referral code with friends. When they join their first book club and complete the meetup, you both earn credits that can be used toward future book clubs.'
    },
    {
      question: 'What if I can\'t finish the book in time?',
      answer: 'We recommend joining tables that vote for meetup dates giving you enough reading time. However, it\'s okay if you don\'t finish—partial reads can still lead to great discussions!'
    }
  ];

  return (
    <div className="landing-page">
      <SEO />
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo-section">
              <img src="https://customer-assets.emergentagent.com/job_5ea04f82-beca-491a-aa96-dd9485c3cd96/artifacts/a7lp2bjw_App%20Icon.png" alt="InPersn BookClub" className="logo" />
              <span className="logo-text">InPersn BookClub</span>
            </div>
            <nav className="nav-links">
              <a href="#how-it-works">How It Works</a>
              <a href="#features">Features</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#faq">FAQ</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src="https://images.unsplash.com/photo-1761472693476-98f3a00568b5" alt="Book community" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Real Conversations<br />
              for People Who Read<br />
              to Think.
            </h1>
            <p className="hero-subtitle">
              Meet thoughtful readers in small groups. Discuss books you actually finished. Deep conversations, over coffee.
            </p>
            <div className="hero-cta">
              <Button 
                className="cta-primary" 
                onClick={() => window.open('https://survey.qwary.com/f/AABuyQ?identifier=S_wSzSPnasH9Wc_FT15X0J1BuEcPl5gIzl1vEqdrvL4', '_blank')}
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on App Store" className="store-badge" />
              </Button>
              <Button 
                className="cta-secondary"
                onClick={() => window.open('https://survey.qwary.com/f/AABuyQ?identifier=S_wSzSPnasH9Wc_FT15X0J1BuEcPl5gIzl1vEqdrvL4', '_blank')}
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="store-badge" />
              </Button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Curated Books</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4</span>
                <span className="stat-label">Readers per Table</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">₹99</span>
                <span className="stat-label">Per Meetup</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">Simple. Structured. Reliable. Join your first table in 6 steps.</p>
          </div>
          <div className="steps-grid">
            {howItWorks.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="step-card">
                  <div className="step-number">{step.step}</div>
                  <div className="step-icon">
                    <Icon size={32} />
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why InPersn Works</h2>
            <p className="section-subtitle">Small groups. Real people. Thoughtful discussions.</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    <Icon size={28} />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits with Image */}
      <section className="benefits-section">
        <div className="container">
          <div className="benefits-content">
            <div className="benefits-left">
              <h2 className="section-title">Reading with Depth Deserves Conversations with Depth</h2>
              <div className="benefits-list">
                {benefits.map((benefit, index) => (
                  <div key={index} className="benefit-item">
                    <CheckCircle2 className="benefit-icon" size={24} />
                    <div>
                      <h3 className="benefit-title">{benefit.title}</h3>
                      <p className="benefit-description">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="benefits-right">
              <img src="https://images.unsplash.com/photo-1760351561007-526f5353cc76" alt="Book discussion" className="benefits-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Readers Say</h2>
            <p className="section-subtitle">Real experiences from our community</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="#C4A962" stroke="#C4A962" />
                  ))}
                </div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <span className="author-name">{testimonial.author}</span>
                  <span className="author-location">{testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing-section">
        <div className="container">
          <div className="pricing-content">
            <div className="pricing-header">
              <h2 className="section-title">Simple Pricing</h2>
              <p className="section-subtitle">Browse free. Join for ₹99. No subscriptions. No surprises.</p>
            </div>
            <div className="pricing-details">
              <div className="pricing-item">
                <CheckCircle2 className="pricing-icon" size={24} />
                <span>Browse books: <strong>FREE</strong></span>
              </div>
              <div className="pricing-item">
                <CheckCircle2 className="pricing-icon" size={24} />
                <span>Express interest: <strong>FREE</strong></span>
              </div>
              <div className="pricing-item">
                <CheckCircle2 className="pricing-icon" size={24} />
                <span>Secure your spot: <strong>₹99 per book club</strong></span>
              </div>
              <div className="pricing-item">
                <CheckCircle2 className="pricing-icon" size={24} />
                <span>Referral rewards: <strong>Earn credits</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Coverage */}
      <section className="cities-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Where We Meet</h2>
            <p className="section-subtitle">9 cities. Growing steadily, not rapidly.</p>
          </div>
          <div className="cities-grid">
            {cities.map((city) => (
              <div 
                key={city.id} 
                className={`city-card ${activeCity === city.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveCity(city.id)}
              >
                <MapPin size={32} />
                <h3>{city.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Questions?</h2>
            <p className="section-subtitle">Clear answers. No jargon.</p>
          </div>
          <div className="faq-content">
            <Accordion type="single" collapsible className="faq-accordion">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-content">
            <h2 className="final-cta-title">Start Your First Table</h2>
            <p className="final-cta-subtitle">Meet people who chose the same book as you.</p>
            <div className="final-cta-buttons">
              <Button 
                className="cta-primary"
                onClick={() => window.open('https://survey.qwary.com/f/AABuyQ?identifier=S_wSzSPnasH9Wc_FT15X0J1BuEcPl5gIzl1vEqdrvL4', '_blank')}
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on App Store" className="store-badge" />
              </Button>
              <Button 
                className="cta-secondary"
                onClick={() => window.open('https://survey.qwary.com/f/AABuyQ?identifier=S_wSzSPnasH9Wc_FT15X0J1BuEcPl5gIzl1vEqdrvL4', '_blank')}
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="store-badge" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-logo">
                <img src="https://customer-assets.emergentagent.com/job_5ea04f82-beca-491a-aa96-dd9485c3cd96/artifacts/a7lp2bjw_App%20Icon.png" alt="InPersn BookClub" className="footer-logo-img" />
                <span className="footer-logo-text">InPersn BookClub</span>
              </div>
              <p className="footer-tagline">Building communities through books</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <a href="#how-it-works">How It Works</a>
                <a href="#features">Features</a>
                <a href="#faq">FAQ</a>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
              </div>
              <div className="footer-column">
                <h4>Support</h4>
                <a href="mailto:support@inpersn.club">support@inpersn.club</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 InPersn BookClub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;