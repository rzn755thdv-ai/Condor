import { useState } from "react";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";

import portrait from "../../../portrait.PNG";
import logo from "../../../Logo.png";

export default function SlideReveal() {
  const [revealPosition, setRevealPosition] = useState([0]);

  // Contact information for vCard
  const contactInfo = {
    name: "John Doe",
    organization: "Condor Consulting Group",
    phone: "+1-234-567-8900",
    email: "john.doe@example.com",
    website: "https://condorconsultinggroup.co",
  };

  const saveContact = () => {
    // Create vCard format
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
ORG:${contactInfo.organization}
TEL:${contactInfo.phone}
EMAIL:${contactInfo.email}
URL:${contactInfo.website}
END:VCARD`;

    // Create blob and download
    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "John.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const goToWebsite = () => {
    window.location.href = contactInfo.website;
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* iPhone Safari Container */}
      <div className="relative w-full h-full max-w-[390px] max-h-[844px] bg-black flex flex-col">
        {/* Image Container */}
        <div className="flex-1 relative">
          {/* Base Image - Portrait with Bio */}
          <div className="absolute inset-0 flex">
            <div className="w-1/3 relative bg-gradient-to-br from-[#111111] to-black flex items-start justify-center pt-8">
              <img
                src={portrait}
                alt="Portrait"
                className="w-auto h-auto max-w-[90%] max-h-[200px] object-contain"
              />
            </div>
            {/* Bio Text Section */}
            <div className="w-2/3 bg-gradient-to-br from-[#111111] to-black flex items-center justify-center p-6 overflow-y-auto">
              <div className="text-center space-y-4">
                <h2 className="text-lg font-semibold text-white leading-tight">
                  Adaptive Solutions for the Modern World
                </h2>
                <p className="text-xs font-medium text-gray-300">
                  Strategy. Compliance. Operations. Contract Delivery.
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Delivering solutions for institutions operating in complex environments.
                </p>

                {/* Consulting Services Section */}
                <div className="pt-4 space-y-3">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                    Consulting Services
                  </h3>
                  <p className="text-xs text-gray-400">
                    We provide a wide range of consultative services such as:
                  </p>
                  <ul className="text-xs text-gray-300 space-y-1.5 text-left max-w-[240px] mx-auto">
                    <li className="flex items-start gap-2">
                      <span className="text-[#CD212A] mt-0.5">•</span>
                      <span>Program & Product Management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#CD212A] mt-0.5">•</span>
                      <span>Environmental Health & Safety</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#CD212A] mt-0.5">•</span>
                      <span>Strategic Planning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#CD212A] mt-0.5">•</span>
                      <span>Military & Government Contracting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#CD212A] mt-0.5">•</span>
                      <span>Law Enforcement Services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#CD212A] mt-0.5">•</span>
                      <span>Engineering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#CD212A] mt-0.5">•</span>
                      <span>Non-Profit Support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Reveal Image - Logo (Nearly Full Width) with clip-path */}
          <div
            className="absolute inset-0 transition-all duration-100 flex items-center justify-center px-2"
            style={{
              clipPath: `inset(0 ${100 - revealPosition[0]}% 0 0)`,
            }}
          >
            <img
              src={logo}
              alt="Condor Consulting Group Logo"
              className="w-full h-auto max-w-[375px] object-contain"
            />
          </div>

          {/* Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg transition-all duration-100"
            style={{
              left: `${revealPosition[0]}%`,
            }}
          />
        </div>

        {/* Controls Container */}
        <div className="p-8 pb-12 bg-gradient-to-t from-black/80 to-transparent">
          <div className="max-w-md mx-auto space-y-6">
            {/* Slider */}
            <div className="space-y-3">
              <Slider
                value={revealPosition}
                onValueChange={setRevealPosition}
                max={100}
                step={1}
                className="w-full"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                onClick={saveContact}
                className="flex-1 text-white hover:opacity-90"
                style={{ backgroundColor: "#CD212A" }}
                size="lg"
              >
                Save Contact
              </Button>
              <Button
                onClick={goToWebsite}
                className="flex-1 text-white hover:opacity-90"
                style={{ backgroundColor: "#CD212A" }}
                size="lg"
              >
                Visit Website
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
