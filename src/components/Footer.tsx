import { ArrowUpRight, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 relative z-40">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-500">
        <div>
          &copy; {new Date().getFullYear()} Kunal. All rights reserved.
        </div>
        <div className="flex gap-8">
          <a
            href="https://www.behance.net/KUNAL_IMMIE"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            Behance <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="mailto:kunal_immie@example.com"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" /> Email Me
          </a>
        </div>
      </div>
    </footer>
  );
}
