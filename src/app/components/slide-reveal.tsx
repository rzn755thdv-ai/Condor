import { useState } from "react";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";

import portrait from "../../../portrait.PNG";
import logo from "../../../Logo.png";
import vcard from "../../../John_D.vcf";

export default function SlideReveal() {
  const [revealPosition, setRevealPosition] = useState([0]);

  const contactInfo = {
    organization: "Condor Consulting Group",
    website: "https://condorconsultinggroup.co",
  };

  const saveContact = () => {
    const link = document.createElement("a");
    link.href = vcard;
    link.download = "John_D.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const goToWebsite = () => {
    window.location.href = contactInfo.website;
  };

  const cardClass = "w-full h-full rounded-3xl border border-white/8 bg-white/10 shadow-inner";
  const headingClass = "text-base font-semibold text-gray-100 leading-tight";
  const bodyClass = "text-xs text-gray-200";

  return (
    <div className="w-screen h-screen overflow-hidden bg-black flex items-center justify-center">
      <div className="relative w-full h-full max-w-[390px] max-h-[844px] bg-black flex flex-col">
        <div className="flex-1 relative">
          {/* Side 1 (Condor logo) */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#111111] to-black px-5 py-6">
            <div className={`${cardClass} flex flex-col items-center justify-center px-6 py-8 gap-5`}>
              <img
                src={logo}
                alt="Condor Consulting Group Logo"
                className="w-full h-auto max-w-[360px] object-contain"
              />

              <div className="text-center space-y-2 max-w-[340px]">
                <p className={headingClass} style={{ whiteSpace: "nowrap", fontSize: "0.9rem" }}> Adaptive Solutions for the Modern World
</p>
                <p className={bodyClass}>
                  Strategy. Compliance. Operations. Contract Delivery.
                </p>
                <p className={bodyClass}>
                  Delivering solutions for institutions operating in complex environments.
                </p>
              </div>
            </div>
          </div>

          {/* Side 2 (Portrait card) */}
          <div
            className="absolute inset-0 transition-all duration-100 bg-gradient-to-br from-[#111111] to-black px-5 py-6"
            style={{ clipPath: `inset(0 ${100 - revealPosition[0]}% 0 0)` }}
          >
            <div className={`${cardClass} flex flex-col`}>
              <div className="h-1/2 flex items-center justify-center p-4">
                <img
                  src={portrait}
                  alt="Portrait"
                  className="max-h-full max-w-[85%] w-auto object-contain"
                />
              </div>

              <div className="h-1/2 flex items-start justify-center px-6 pb-6 pt-4 overflow-y-auto">
                <div className="text-center max-w-[340px]">
                  <div className="space-y-1">
                    <h2 className={headingClass}>John Patrick Diaz</h2>
                    <p className={bodyClass}>Managing Director</p>
                    <p className={bodyClass}></p>
                    <p className={bodyClass}>
                     Our range of consultative services:
                    </p>
                  </div>

                  <div className="pt-3">
                    <ul className={`${bodyClass} space-y-2 text-left max-w-[260px] mx-auto`}>
                      <li className="flex items-start gap-2">
                        <span className="text-[#CD212A] mt-0.5">•</span>
                        <span>Program &amp; Product Management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#CD212A] mt-0.5">•</span>
                        <span>Environmental Health &amp; Safety</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#CD212A] mt-0.5">•</span>
                        <span>Strategic Planning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#CD212A] mt-0.5">•</span>
                        <span>Military &amp; Government Contracting</span>
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
          </div>

          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg transition-all duration-100"
            style={{ left: `${revealPosition[0]}%` }}
          />
        </div>

        <div className="p-8 pb-12 bg-gradient-to-t from-black/80 to-transparent">
          <div className="max-w-md mx-auto space-y-6">
            <div className="space-y-3">
              <Slider
                value={revealPosition}
                onValueChange={setRevealPosition}
                max={100}
                step={1}
                className="w-full"
              />
            </div>

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
