import { useState } from "react";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";

import portrait from "../../../portrait.PNG";
import logo from "../../../logo.png";
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

  return (
    <div className="w-screen h-screen overflow-hidden bg-black flex items-center justify-center">
      <div className="relative w-full h-full max-w-[390px] max-h-[844px] bg-black flex flex-col">
        <div className="flex-1 relative">
          {/* Side 1 */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#111111] to-black">
            <div className="h-1/2 flex items-center justify-center p-6">
              <div className="w-full h-full rounded-3xl border border-white/10 bg-black/30 shadow-inner flex items-center justify-center">
                <img
                  src={portrait}
                  alt="Portrait"
                  className="max-h-full max-w-[85%] w-auto object-contain"
                />
              </div>
            </div>

            <div className="h-1/2 flex items-center justify-center px-6 pb-6 overflow-y-auto">
              <div className="text-center space-y-4">
                <h2 className="text-lg font-semibold text-white leading-tight">
                  John Patrick Diaz
                </h2>
                <p className="text-xs font-medium text-gray-300">
                  Managing Director
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  CONSULTING SERVICES
                </p>

                <div className="pt-2 space-y-3">
                  <p className="text-xs text-gray-400">
                    We provide a wide range of consultative services such as:
                  </p>
                  <ul className="text-xs text-gray-300 space-y-1.5 text-left max-w-[260px] mx-auto">
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

          {/* Side 2 */}
          <div
            className="absolute inset-0 transition-all duration-100 px-6 py-10 bg-gradient-to-br from-[#111111] to-black flex flex-col items-center justify-start text-center gap-4"
            style={{
              clipPath: `inset(0 ${100 - revealPosition[0]}% 0 0)`,
            }}
          >
            <img
              src={logo}
              alt="Condor Consulting Group Logo"
              className="w-full h-auto max-w-[360px] object-contain"
            />
            <div className="space-y-2 text-gray-200 max-w-[340px]">
              <p className="text-sm font-semibold">
                Adaptive Solutions for the Modern World
              </p>
              <p className="text-xs text-gray-400">
                Strategy. Compliance. Operations. Contract Delivery.
              </p>
              <p className="text-xs text-gray-400">
                Delivering solutions for institutions operating in complex
                environments.
              </p>
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
