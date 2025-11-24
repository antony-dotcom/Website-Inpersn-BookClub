import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
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
              <Link to="/terms">Terms of Service</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="legal-content">
        <div className="container">
          <div className="legal-wrapper">
            <h1>Privacy Policy</h1>
            <p className="last-updated">Last Updated: November 24, 2025</p>

            <div className="intro-section">
              <p>At InPersn BookClub, we take your privacy seriously. This Privacy Policy explains how we collect, use, share, and protect your personal information when you use our mobile application and services.</p>
            </div>

            <section>
              <h2>1. Information We Collect</h2>
              
              <h3>1.1 Information You Provide</h3>
              <p>When you create an account, we collect:</p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>City and area</li>
                <li>Reading pace preference</li>
                <li>Referral code (if applicable)</li>
              </ul>

              <h3>1.2 Payment Information</h3>
              <p>Payment processing is handled by Razorpay. We do not store your complete credit card or payment card numbers. We receive transaction confirmations and payment status from Razorpay.</p>

              <h3>1.3 Usage Data</h3>
              <p>We automatically collect:</p>
              <ul>
                <li>Device information (model, OS version)</li>
                <li>App usage data (features used, time spent)</li>
                <li>Book interests and table participation</li>
                <li>Chat messages within the app</li>
                <li>Check-in and attendance data</li>
                <li>Ratings and reviews you submit</li>
              </ul>

              <h3>1.4 Location Data</h3>
              <p>We collect your city and area to:</p>
              <ul>
                <li>Match you with local book clubs</li>
                <li>Suggest nearby meetup locations</li>
                <li>Display relevant café options for voting</li>
              </ul>
            </section>

            <section>
              <h2>2. How We Use Your Information</h2>
              
              <h3>Provide Services:</h3>
              <ul>
                <li>Create and manage your account</li>
                <li>Form book club tables</li>
                <li>Process payments and referral credits</li>
                <li>Facilitate group chat and voting</li>
                <li>Send notifications about your bookings</li>
              </ul>

              <h3>Improve Experience:</h3>
              <ul>
                <li>Personalize book recommendations</li>
                <li>Match you with compatible readers</li>
                <li>Analyze usage patterns to enhance features</li>
              </ul>

              <h3>Communication:</h3>
              <ul>
                <li>Send booking confirmations and reminders</li>
                <li>Notify about table status changes</li>
                <li>Share important updates about the service</li>
                <li>Respond to support inquiries</li>
              </ul>

              <h3>Safety & Security:</h3>
              <ul>
                <li>Prevent fraud and abuse</li>
                <li>Monitor for policy violations</li>
                <li>Maintain community quality through ratings</li>
              </ul>
            </section>

            <section>
              <h2>3. Information Sharing</h2>
              
              <h3>3.1 With Other Users</h3>
              <p>When you join a table, other members can see:</p>
              <ul>
                <li>Your name</li>
                <li>Your area (neighborhood)</li>
                <li>Your messages in group chat</li>
                <li>Your ratings (anonymous to rated users)</li>
              </ul>

              <h3>3.2 With Service Providers</h3>
              <p>We share data with:</p>
              <ul>
                <li>Razorpay: For payment processing</li>
                <li>Resend: For transactional emails</li>
                <li>Cloud hosting: For data storage and app functionality</li>
              </ul>

              <h3>3.3 Legal Requirements</h3>
              <p>We may disclose information if required by law, court order, or to:</p>
              <ul>
                <li>Comply with legal processes</li>
                <li>Protect our rights and safety</li>
                <li>Prevent fraud or abuse</li>
                <li>Protect user safety</li>
              </ul>

              <h3>3.4 What We DON'T Share</h3>
              <p>We do NOT:</p>
              <ul>
                <li>Sell your personal information</li>
                <li>Share your phone number with other users</li>
                <li>Share your full address</li>
                <li>Share payment card details (stored by Razorpay)</li>
                <li>Use your data for advertising to third parties</li>
              </ul>
            </section>

            <section>
              <h2>4. Data Security</h2>
              <p>We implement security measures to protect your data:</p>
              <ul>
                <li>Encrypted data transmission (HTTPS/TLS)</li>
                <li>Secure password storage (hashed and salted)</li>
                <li>Regular security audits</li>
                <li>Limited employee access to personal data</li>
                <li>Secure cloud infrastructure</li>
              </ul>
              <p>However, no system is 100% secure. We cannot guarantee absolute security of your data.</p>
            </section>

            <section>
              <h2>5. Data Retention</h2>
              <p>We retain your information:</p>
              <ul>
                <li>Account data: Until you delete your account</li>
                <li>Transaction history: For 7 years (tax/legal requirements)</li>
                <li>Chat messages: For the duration of the table + 30 days</li>
                <li>Ratings: Permanently (anonymized after 1 year)</li>
              </ul>
            </section>

            <section>
              <h2>6. Your Rights & Choices</h2>
              
              <h3>6.1 Access & Update</h3>
              <p>You can access and update your information in the app under Profile settings.</p>

              <h3>6.2 Account Deletion</h3>
              <p>You can request account deletion by contacting support@inpersn.club. We will:</p>
              <ul>
                <li>Delete your personal information within 30 days</li>
                <li>Retain transaction records as legally required</li>
                <li>Anonymize your ratings</li>
              </ul>

              <h3>6.3 Marketing Communications</h3>
              <p>You can opt out of promotional emails through:</p>
              <ul>
                <li>Unsubscribe links in emails</li>
                <li>App notification settings</li>
              </ul>
              <p>Note: You cannot opt out of transactional emails (booking confirmations, payment receipts, etc.)</p>

              <h3>6.4 Data Portability</h3>
              <p>You can request a copy of your data by emailing support@inpersn.club. We'll provide it in a readable format within 30 days.</p>
            </section>

            <section>
              <h2>7. Children's Privacy</h2>
              <p>InPersn BookClub is not intended for users under 18 years old. We do not knowingly collect data from children. If you believe a child has provided us information, please contact us immediately.</p>
            </section>

            <section>
              <h2>8. Cookies & Tracking</h2>
              <p>Our mobile app uses:</p>
              <ul>
                <li>Local storage: To keep you logged in</li>
                <li>Analytics: To understand app usage</li>
                <li>Crash reporting: To fix technical issues</li>
              </ul>
              <p>We do not use cookies for advertising tracking.</p>
            </section>

            <section>
              <h2>9. Third-Party Links</h2>
              <p>Our app may contain links to café websites or Google Maps. These sites have their own privacy policies. We are not responsible for their practices.</p>
            </section>

            <section>
              <h2>10. International Data Transfers</h2>
              <p>Your data is primarily stored in India. If we transfer data internationally, we ensure appropriate safeguards are in place.</p>
            </section>

            <section>
              <h2>11. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Significant changes will be communicated via:</p>
              <ul>
                <li>Email notification</li>
                <li>In-app notification</li>
                <li>Updated "Last Updated" date</li>
              </ul>
              <p>Continued use after changes constitutes acceptance of the updated policy.</p>
            </section>

            <section>
              <h2>12. Contact Us</h2>
              <p>For privacy questions or to exercise your rights:</p>
              <p><strong>Email:</strong> support@inpersn.club<br />
              <strong>Subject Line:</strong> Privacy Request<br />
              <strong>Response Time:</strong> Within 7 business days</p>
              <p>You can also reach us through the app: Profile → Help & Support</p>
            </section>

            <section>
              <h2>13. Your Consent</h2>
              <p>By using InPersn BookClub, you consent to this Privacy Policy. If you do not agree, please do not use our service. We are committed to protecting your privacy and using your data responsibly. Your trust is important to us.</p>
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

export default PrivacyPolicy;