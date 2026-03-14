import logo from '../../Logo.png';
import portrait from '../../portrait.PNG';
import vCard from '../../John.vcf';

export default function DigitalCard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white/10 border border-white/20 rounded-3xl shadow-xl overflow-hidden">
        <div className="p-6 flex flex-col items-center">
          <img src={logo} alt="Condor logo" className="h-14 mb-6" />

          <div className="w-32 h-32 rounded-full overflow-hidden ring-2 ring-white/40">
            <img src={portrait} alt="John Patrick Diaz" className="w-full h-full object-cover" />
          </div>

          <h1 className="mt-4 text-xl font-semibold">John Patrick Diaz</h1>
          <p className="text-sm text-white/70">Digital Business Card</p>

          <div className="mt-6 flex gap-3">
            <a
              href={vCard}
              download
              className="px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition"
            >
              Save Contact
            </a>
            <a
              href="/"
              className="px-4 py-2 rounded-full border border-white/30 hover:bg-white/10 transition"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
