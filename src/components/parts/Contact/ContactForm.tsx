import React, { useState } from "react";
import { Send, ChevronDown, AlertCircle } from "lucide-react";

interface ContactFormProps {
  onShowToast: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.phone.trim() && formData.phone.trim().length < 7) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrs = { ...prev };
        delete newErrs[name];
        return newErrs;
      });
    }
  };

  const handleSend = () => {
    if (!validateForm()) return;

    onShowToast();

    const subject = encodeURIComponent("Course Enrollment Inquiry");
    const body = encodeURIComponent(
      `Hello Leafclutch Team,

My name is ${
        formData.fullName
      } and I am reaching out regarding a course enrollment inquiry.

--- Details ---
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone || "N/A"}
Course Interested In: ${formData.course || "Not Selected"}

I look forward to hearing from you.

Sincerely,
${formData.fullName}`
    );

    const mailtoLink = `mailto:info@leafclutchtech.com.np?subject=${subject}&body=${body}`;

    //     setTimeout(() => {
    //       window.location.href = mailtoLink;
    //     }, 1500);
    //   };
    setTimeout(() => {
      window.open(mailtoLink, "_blank", "noopener,noreferrer");
    }, 1500);
  };

  return (
    <div className="lg:col-span-3">
      <div className="bg-card border border-border p-8 md:p-14 rounded-[2.5rem] shadow-xl shadow-primary/5 transition-all duration-300">
        <h2 className="text-3xl font-heading font-bold mb-10 text-primary">
          Send Us a Message
        </h2>

        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2.5 text-left">
              <label className="text-sm font-bold text-primary">
                Full Name *
              </label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                type="text"
                placeholder="John Doe"
                className={`w-full px-5 py-4 rounded-2xl bg-secondary/30 border ${
                  errors.fullName
                    ? "border-red-500 focus:ring-red-500/20"
                    : "border-border focus:ring-accent/20"
                } focus:outline-none focus:ring-2 focus:border-accent transition-all placeholder:text-muted-foreground/50 text-foreground`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs font-medium flex items-center mt-1">
                  <AlertCircle className="w-3 h-3 mr-1" /> {errors.fullName}
                </p>
              )}
            </div>
            <div className="space-y-2.5 text-left">
              <label className="text-sm font-bold text-primary">
                Email Address *
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="john@example.com"
                className={`w-full px-5 py-4 rounded-2xl bg-secondary/30 border ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500/20"
                    : "border-border focus:ring-accent/20"
                } focus:outline-none focus:ring-2 focus:border-accent transition-all placeholder:text-muted-foreground/50 text-foreground`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs font-medium flex items-center mt-1">
                  <AlertCircle className="w-3 h-3 mr-1" /> {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2.5 text-left">
            <label className="text-sm font-bold text-primary">
              Phone Number
            </label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="+977-1234567890"
              className={`w-full px-5 py-4 rounded-2xl bg-secondary/30 border ${
                errors.phone
                  ? "border-red-500 focus:ring-red-500/20"
                  : "border-border focus:ring-accent/20"
              } focus:outline-none focus:ring-2 focus:border-accent transition-all placeholder:text-muted-foreground/50 text-foreground`}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs font-medium flex items-center mt-1">
                <AlertCircle className="w-3 h-3 mr-1" /> {errors.phone}
              </p>
            )}
          </div>

          <div className="space-y-2.5 relative text-left">
            <label className="text-sm font-bold text-primary">
              Course Interested In
            </label>
            <div className="relative">
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl bg-secondary/30 border border-border appearance-none focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-foreground cursor-pointer"
              >
                <option value="">Select a course</option>
                <option value="Core Tech & Design">Core Tech & Design</option>
                <option value="Data & AI Programs">Data & AI Programs</option>
                <option value="DSA Program">DSA Program</option>
                <option value="Programming Languages">
                  Programming Languages
                </option>
              </select>
              <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          <button
            onClick={handleSend}
            className="w-full py-5 bg-primary text-white font-black rounded-2xl hover:opacity-90 transition-all flex items-center justify-center space-x-3 uppercase tracking-[0.2em] text-sm  group active:scale-[0.98]"
          >
            <span>Send Message</span>
            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
