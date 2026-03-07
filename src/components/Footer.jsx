import { FaLinkedinIn, FaInstagram, FaXTwitter, FaYoutube, FaEnvelope, FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-[#1a103c] to-[#2d1b4e] text-gray-300 py-16 px-8 md:px-16">
            <div className="w-full max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                {/* Column 1: Brand Info */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white mb-4">Dr. Aperna <span className="text-dr-accent font-light">Volluru</span></h3>
                    <p className="text-sm leading-relaxed text-dr-light-purple">
                       Neuroscientist | Global Deep-Tech Founder in Human Development | Entrepreneur | Education Innovator | Philanthropist
                    </p>
                    <div className="flex space-x-4 pt-2 text-dr-light-purple">
                        {/* Social Icons */}
                        <SocialIcon icon={<FaLinkedinIn />} href="https://www.linkedin.com/in/myschoolitaly/" label="LinkedIn" />
                        {/* <SocialIcon icon={<FaXTwitter />} href="https://twitter.com/draperna" label="Twitter" /> */}
                        <SocialIcon icon={<FaInstagram />} href="https://www.instagram.com/neuropi.ai?igsh=dzYyZHRmYWwwOW5k" label="Instagram" />
                        <SocialIcon icon={<FaYoutube />} href="https://youtube.com/@neuropi?feature=shared" label="YouTube" />
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h4 className="text-dr-accent font-semibold mb-6">Quick Links</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-dr-light-purple hover:text-dr-accent transition-colors">Home</Link></li>
                        <li><Link to="/vision" onClick={() => window.scrollTo(0, 0)} className="text-dr-light-purple hover:text-dr-accent transition-colors">Vision & Mission</Link></li>
                        <li><Link to="/milestones" onClick={() => window.scrollTo(0, 0)} className="text-dr-light-purple hover:text-dr-accent transition-colors">Milestones</Link></li>
                        <li><Link to="/digital-card" onClick={() => window.scrollTo(0, 0)} className="text-dr-light-purple hover:text-dr-accent transition-colors">Digital Card</Link></li>
                    </ul>
                </div>

                {/* Column 3: Legal */}
                <div>
                    <h4 className="text-dr-accent font-semibold mb-6">Blog</h4>
                    <ul className="space-y-3 text-sm">
                        <li><a href="https://dummy-link.com" className="text-dr-light-purple hover:text-dr-accent transition-colors">Human Potential & Brain</a></li>
                        <li><a href="https://dummy-link.com" className="text-dr-light-purple hover:text-dr-accent transition-colors">Why the Future of Education Will Be Brain-Based.</a></li>
                        <li><a href="https://dummy-link.com" className="text-dr-light-purple hover:text-dr-accent transition-colors">From Genetics to Learning</a></li>
                    </ul>
                </div>

                {/* Column 4: Contact */}
                <div>
                    <h4 className="text-dr-accent font-semibold mb-6">Contact</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-3">
                            <span className="text-dr-accent mt-1"><FaEnvelope /></span>
                            <a href="mailto:aperna@neuropi.ai" className="text-dr-light-purple hover:text-dr-accent transition-colors">aperna@neuropi.ai</a>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-dr-accent mt-1"><FaLocationDot /></span>
                            <span className="text-dr-light-purple">Bari, Italy / Hyderabad, India</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 pt-8 text-center text-xs text-dr-accent">
                <p>&copy; 2015 Dr. Aperna Volluru. All rights reserved.</p>
            </div>
        </footer>
    );
};

const SocialIcon = ({ icon, href, label }) => (
    <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-dr-accent hover:text-white transition-all duration-300 text-base"
    >
        {icon}
    </a>
);

export default Footer;
