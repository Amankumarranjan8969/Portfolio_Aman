import React, { useState } from 'react';
import { candidateProfile } from '../../data/profile';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../components/ui/BrandIcons';

export const ContactView: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Direct mailto link dispatch (safe, zero exposed API keys or silent server drops)
    const mailtoUrl = `mailto:${candidateProfile.contact.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${subject || 'Collaboration'} from ${name}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.open(mailtoUrl, '_blank');
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(candidateProfile.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
          <Mail className="w-4 h-4" />
          <span>Direct Communication & Inquiries</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Contact & Collaboration
        </h1>
        <p className="text-sm text-slate-400 font-mono mt-1">
          Open to research fellowships, engineering opportunities, and open-source collaborations in AI/ML and software systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Contact Info Column (2 cols) */}
        <div className="md:col-span-2 space-y-4">
          <Card className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono">
              Direct Contact Details
            </h2>

            {/* Email Box */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-500 font-mono uppercase block">Primary Email</span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${candidateProfile.contact.email}`}
                  className="text-xs font-mono text-cyan-400 hover:underline truncate"
                >
                  {candidateProfile.contact.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 text-slate-400 hover:text-white"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Location */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-500 font-mono uppercase block">Location</span>
              <p className="text-xs text-slate-300 font-mono flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{candidateProfile.contact.location}</span>
              </p>
            </div>

            {/* Social Links */}
            <div className="pt-2 space-y-2">
              <span className="text-[10px] text-slate-500 font-mono uppercase block">Profiles</span>
              <div className="flex flex-col gap-2 font-mono text-xs">
                <a
                  href={candidateProfile.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>GitHub Profile</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>

                <a
                  href={candidateProfile.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </div>
          </Card>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-xs font-mono text-slate-400 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Privacy & Security Notice</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              No third-party analytics or invasive tracking scripts are active. Submitting this form directly invokes your local email client with prefilled metadata.
            </p>
          </div>
        </div>

        {/* Message Form Column (3 cols) */}
        <div className="md:col-span-3">
          <Card>
            <h2 className="text-base font-bold text-white mb-1">
              Send an Instant Inquiry
            </h2>
            <p className="text-xs text-slate-400 font-mono mb-5">
              Prefills and triggers a secure dispatch to <code className="text-cyan-400 font-bold">{candidateProfile.contact.email}</code>.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/80 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h3 className="text-base font-bold text-white">Client Dispatched</h3>
                <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
                  Your mail client has been invoked with your inquiry details. If your client did not launch automatically, feel free to directly email <code className="text-cyan-400 font-mono">{candidateProfile.contact.email}</code>.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSubmitted(false)}
                >
                  Compose Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block text-slate-400 uppercase text-[10px] mb-1">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Dr. Alex Vance / Jane Doe"
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-lg p-2.5 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 font-sans text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 uppercase text-[10px] mb-1">
                    Your Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="recruiter@lab.org or engineer@company.com"
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-lg p-2.5 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 font-sans text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 uppercase text-[10px] mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="AI/ML Internship / Research Collaboration / Interview"
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-lg p-2.5 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 font-sans text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 uppercase text-[10px] mb-1">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe the opportunity, research problem, or project scope..."
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-lg p-2.5 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 font-sans text-xs"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  icon={<Send className="w-4 h-4" />}
                >
                  Send Inquiry via Email
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};
