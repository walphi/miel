import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-muted-foreground mb-8">
          Ready to elevate your digital presence? Our team of experts is here to help you achieve your business goals through innovative digital solutions.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin className="w-6 h-6 text-secondary mr-4 flex-shrink-0" />
          <div>
            <h3 className="font-semibold mb-1">Office</h3>
            <p className="text-muted-foreground">
              Tower One, Boulevard Plaza,<br />
              Mohammed Bin Rashid Boulevard,<br />
              Downtown,<br />
              Dubai, UAE.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="w-6 h-6 text-secondary mr-4 flex-shrink-0" />
          <div>
            <h3 className="font-semibold mb-1">Call Us</h3>
            <p className="text-muted-foreground">+97150 7150 121</p>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="w-6 h-6 text-secondary mr-4 flex-shrink-0" />
          <div>
            <h3 className="font-semibold mb-1">Email Us</h3>
            <p className="text-muted-foreground">info@miel.media</p>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="w-6 h-6 text-secondary mr-4 flex-shrink-0" />
          <div>
            <h3 className="font-semibold mb-1">Business Hours</h3>
            <p className="text-muted-foreground">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday - Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t">
        <h3 className="font-semibold mb-4">Socials</h3>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/company/mielmedia/" className="text-muted-foreground hover:text-secondary">LinkedIn</a>
          <a href="https://www.facebook.com/MielMedia/" className="text-muted-foreground hover:text-secondary">Twitter</a>
          <a href="https://www.instagram.com/miel_media/?hl=en" className="text-muted-foreground hover:text-secondary">Instagram</a>
        </div>
      </div>
    </div>
  );
}