import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactInfo: React.FC = () => {
  return (
    <div className="lg:col-span-2 space-y-12">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary">
          Contact Information
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Reach out to us through any of these channels and we'll respond
          promptly.
        </p>
      </div>

      <div className="space-y-10">
        <div className="flex items-start space-x-6 group">
          <div className="w-14 h-14 bg-accent/10 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
            <Mail className="w-6 h-6 text-accent" />
          </div>
          <div className="space-y-1 pt-1 text-left">
            <h3 className="text-xl font-bold text-primary">Email Us</h3>
            <div className="text-muted-foreground space-y-0.5 font-medium">
              <p>info@leafclutchtech.com.np</p>
              <p>careers@leafclutchtech.com.np</p>
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-6 group">
          <div className="w-14 h-14 bg-accent/10 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
            <MapPin className="w-6 h-6 text-accent" />
          </div>
          <div className="space-y-1 pt-1 text-left">
            <h3 className="text-xl font-bold text-primary">Visit Us</h3>
            <div className="text-muted-foreground space-y-0.5 font-medium">
              <p>Bhairahawa</p>
              <p>
                Rupandehi, Nepal{" "}
                <span className="text-[10px] font-bold text-accent">NP</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-6 group">
          <div className="w-14 h-14 bg-accent/10 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
            <Phone className="w-6 h-6 text-accent" />
          </div>
          <div className="space-y-1 pt-1 text-left">
            <h3 className="text-xl font-bold text-primary">Call Us</h3>
            <div className="text-muted-foreground space-y-0.5 font-medium">
              <p>+977-9766722920</p>
              <p>+977-9766715666</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
