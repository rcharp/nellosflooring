import { Phone, MapPin, Clock, Facebook, Mail } from "lucide-react";
import logo from "@/assets/nello-logo.jpg";

const Footer = () => (
  <footer className="bg-foreground text-card py-16">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <img src={logo} alt="Nello's Flooring" className="h-20 w-auto" />
          <p className="text-sm opacity-60">Your trusted local flooring experts. Over 40 years of experience.</p>
        </div>

        {/* Business */}
        <div>
          <h4 className="font-heading font-semibold text-base uppercase tracking-wider mb-4 opacity-60">Business</h4>
          <nav className="space-y-3">
            <a href="/" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Home</a>
            <a href="/about" className="block text-base opacity-80 hover:opacity-100 transition-opacity">About Us</a>
            <a href="/contact" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Contact</a>
            <a href="/gallery" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Gallery</a>
            <a href="/tips" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Blog</a>
          </nav>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold text-base uppercase tracking-wider mb-4 opacity-60">Services</h4>
          <nav className="space-y-3">
            <a href="/services/hardwood-flooring" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Hardwood Flooring</a>
            <a href="/services/luxury-vinyl-plank" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Luxury Vinyl Plank</a>
            <a href="/services/laminate-flooring" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Laminate Flooring</a>
            <a href="/services/sand-and-refinish" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Sand & Refinish</a>
            <a href="/services/floor-cleaning" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Floor Cleaning</a>
          </nav>
        </div>

        {/* Service Areas */}
        <div>
          <h4 className="font-heading font-semibold text-base uppercase tracking-wider mb-4 opacity-60">Service Areas</h4>
          <nav className="space-y-3">
            <a href="/areas/manatee-county" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Manatee County</a>
            <a href="/areas/sarasota-county" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Sarasota County</a>
            <a href="/areas/pinellas-county" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Pinellas County</a>
          </nav>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <h4 className="font-heading font-semibold text-base uppercase tracking-wider mb-4 opacity-60">Contact</h4>
          <div className="flex items-start gap-3">
            <Phone className="w-4 h-4 mt-0.5 opacity-60" />
            <a href="tel:+17276442305" className="text-base opacity-80 hover:opacity-100 transition-opacity">(727) 644-2305</a>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="w-4 h-4 mt-0.5 opacity-60" />
            <a href="mailto:nellosflooring@gmail.com" className="text-base opacity-80 hover:opacity-100 transition-opacity">nellosflooring@gmail.com</a>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 mt-0.5 opacity-60" />
            <span className="text-base opacity-80">2508 6th Ct E, Ellenton, FL 34222</span>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 mt-0.5 opacity-60" />
            <span className="text-base opacity-80">Mon-Fri: 8am - 5pm</span>
          </div>
          <div className="flex items-start gap-3">
            <Facebook className="w-4 h-4 mt-0.5 opacity-60" />
            <a href="https://facebook.com/nellosflooring" target="_blank" rel="noopener noreferrer" className="text-base opacity-80 hover:opacity-100 transition-opacity">Facebook</a>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-card/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-base opacity-60">
          © 2026 Nello's Flooring. All rights reserved.
        </p>
      </div>
    </div>

    {/* Chat Widget */}
    <script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="69b1de1b330ef0cd0f38d3ed"
    ></script>
  </footer>
);

export default Footer;
