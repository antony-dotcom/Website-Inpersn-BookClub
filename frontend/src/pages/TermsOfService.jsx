import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const TermsOfService = () => {
  return (
    <div className="legal-page">
      <SEO 
        title="Terms of Service - InPersn BookClub"
        description="InPersn BookClub Terms of Service. Read our terms and conditions for using the book club service."
        url="https://inpersn.club/terms"
      />
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo-section">
              <img src="https://customer-assets.emergentagent.com/job_5ea04f82-beca-491a-aa96-dd9485c3cd96/artifacts/a7lp2bjw_App%20Icon.png" alt="InPersn BookClub" className="logo" />
              <span className="logo-text">InPersn BookClub</span>
            </Link>
            <nav className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="legal-content">
        <div className="container">
          <div className="legal-wrapper">
            <h1>Terms of Service</h1>
            <p className="last-updated">Last Updated: November 24, 2025</p>

            <div className="intro-section">
              <p>Welcome to InPersn BookClub! These Terms of Service ("Terms") govern your use of our mobile application and services. By signing up and using InPersn BookClub, you agree to these Terms.</p>
            </div>

            <section>
              <h2>1. Service Description</h2>
              <p>InPersn BookClub connects book lovers for in-person reading discussions. Our service facilitates:</p>
              <ul>
                <li>Book selection and interest expression</li>
                <li>Table formation (groups of 4 readers)</li>
                <li>Payment processing for meetup participation</li>
                <li>Voting for meetup locations and times</li>
                <li>Group chat and communication</li>
                <li>Check-in and rating systems</li>
                <li>Referral rewards program</li>
              </ul>
            </section>

            <section>
              <h2>2. User Eligibility</h2>
              <p>You must be at least 18 years old to use InPersn BookClub. By creating an account, you represent that you meet this age requirement and that all information you provide is accurate and complete.</p>
            </section>

            <section>
              <h2>3. Account Registration</h2>
              <ul>
                <li>You must provide accurate information (name, email, phone, city)</li>
                <li>You are responsible for maintaining account security</li>
                <li>One account per person</li>
                <li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
              </ul>
            </section>

            <section>
              <h2>4. Payment Terms</h2>
              
              <h3>Payment Window:</h3>
              <p>When a table reaches 8 interested readers, a 24-hour payment window opens. The first 4 people to pay secure their spots.</p>
              
              <h3>Payment Amount:</h3>
              <p>₹99 per meetup (subject to change)</p>
              
              <h3>Payment Processing:</h3>
              <p>All payments are processed securely through Razorpay. We do not store your payment card details.</p>
              
              <h3>Refund Policy:</h3>
              <ul>
                <li>Full refund if table doesn't reach 4 paid members within 24 hours</li>
                <li>No refunds after table is confirmed (4 members paid)</li>
                <li>Exceptional circumstances considered on case-by-case basis</li>
              </ul>
              
              <h3>Credits:</h3>
              <p>Referral credits can be used for future bookings. Credits are non-transferable and have no cash value.</p>
            </section>

            <section>
              <h2>5. Meetup Participation</h2>
              <ul>
                <li>You commit to attending the meetup you paid for</li>
                <li>Check-in is available 15 minutes before the scheduled time</li>
                <li>Respectful behavior is mandatory</li>
                <li>Failure to attend without notice may affect your account standing</li>
                <li>Meetup locations are public spaces (cafés) – follow venue rules</li>
              </ul>
            </section>

            <section>
              <h2>6. User Conduct</h2>
              <p>You agree NOT to:</p>
              <ul>
                <li>Harass, abuse, or harm other users</li>
                <li>Share inappropriate content in chats</li>
                <li>Use the service for any illegal purposes</li>
                <li>Create fake accounts or manipulate the system</li>
                <li>Share false information in ratings</li>
                <li>Spam or solicit other users</li>
              </ul>
            </section>

            <section>
              <h2>7. Rating System</h2>
              <ul>
                <li>Rate members honestly and constructively</li>
                <li>Ratings help maintain community quality</li>
                <li>False or malicious ratings may result in account suspension</li>
                <li>We reserve the right to remove inappropriate ratings</li>
              </ul>
            </section>

            <section>
              <h2>8. Intellectual Property</h2>
              <p>All content, features, and functionality of InPersn BookClub are owned by us and are protected by copyright, trademark, and other intellectual property laws.</p>
            </section>

            <section>
              <h2>9. Disclaimer of Warranties</h2>
              <p>InPersn BookClub is provided "as is" without warranties of any kind. We do not guarantee:</p>
              <ul>
                <li>Uninterrupted or error-free service</li>
                <li>That meetups will occur as scheduled (dependent on users)</li>
                <li>The behavior of other users</li>
                <li>The quality of discussions</li>
              </ul>
            </section>

            <section>
              <h2>10. Limitation of Liability</h2>
              <p>InPersn BookClub is a platform connecting users. We are not responsible for:</p>
              <ul>
                <li>Actions or behavior of other users</li>
                <li>Issues at meetup venues</li>
                <li>Personal disputes between members</li>
                <li>Loss or damage at meetups</li>
              </ul>
              <p>Our total liability is limited to the amount you paid for the specific meetup in question.</p>
            </section>

            <section>
              <h2>11. Cancellations</h2>
              <ul>
                <li>Tables may be cancelled if fewer than 4 members pay</li>
                <li>Full refunds issued for cancelled tables</li>
                <li>We reserve the right to cancel tables for policy violations</li>
              </ul>
            </section>

            <section>
              <h2>12. Changes to Terms</h2>
              <p>We may update these Terms from time to time. Continued use after changes constitutes acceptance of new Terms. Significant changes will be communicated via email or in-app notification.</p>
            </section>

            <section>
              <h2>13. Account Termination</h2>
              <p>We reserve the right to suspend or terminate accounts for:</p>
              <ul>
                <li>Violation of these Terms</li>
                <li>Fraudulent activity</li>
                <li>Harmful behavior toward other users</li>
                <li>Repeated no-shows without check-in</li>
              </ul>
            </section>

            <section>
              <h2>14. Dispute Resolution</h2>
              <p>Any disputes arising from these Terms shall be governed by the laws of India. Users agree to attempt good-faith resolution before legal action.</p>
              <p>InPersn BookClub is an app owned by Alpha Marketer with Registered address at Plot No.7 Chittibabu Nagar Pallikaranai, Chennai 600100, India.</p>
            </section>

            <section>
              <h2>15. Contact Us</h2>
              <p>For questions about these Terms:</p>
              <p><strong>Email:</strong> support@inpersn.club<br />
              Through the app: Profile → Help & Support</p>
              <p>By using InPersn BookClub, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <Link to="/" className="footer-logo">
                <img src="https://customer-assets.emergentagent.com/job_5ea04f82-beca-491a-aa96-dd9485c3cd96/artifacts/a7lp2bjw_App%20Icon.png" alt="InPersn BookClub" className="footer-logo-img" />
                <span className="footer-logo-text">InPersn BookClub</span>
              </Link>
              <p className="footer-tagline">Building communities through books</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <Link to="/#how-it-works">How It Works</Link>
                <Link to="/#features">Features</Link>
                <Link to="/#faq">FAQ</Link>
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

export default TermsOfService;