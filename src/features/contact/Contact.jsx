import { useState } from "react";
import { motion } from "framer-motion";
import {
  IconSend,
  IconCheck,
  IconMail,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Simulasi pengiriman pesan (2 detik)
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      // Reset icon centang setelah 3 detik
      setTimeout(() => setIsSent(false), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-display font-bold mb-4"
        >
          Let's Work <span className="text-mint italic">Together.</span>
        </motion.h2>
        <p className="text-muted">
          Punya ide menarik? Mari kita wujudkan menjadi kenyataan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Info Kontak */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-accent mb-4">
              Contact Details
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:your@email.com"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-surface rounded-2xl group-hover:bg-accent transition-colors">
                  <IconMail size={20} />
                </div>
                <span className="text-lg hover:text-accent transition-colors">
                  dsandalpha@gmail.com
                </span>
              </a>
              <a href="https://wa.me/6287747394647" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="p-3 bg-surface rounded-2xl group-hover:bg-accent transition-colors">
                  <IconBrandWhatsapp size={20} />
                </div>
                <span className="text-lg hover:text-accent transition-colors">
                  +62 877 4739 4647
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full bg-surface border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-all"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full bg-surface border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-all"
          />
          <textarea
            placeholder="Message"
            rows="4"
            required
            className="w-full bg-surface border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-all resize-none"
          ></textarea>

          <button
            disabled={isSending}
            className="w-full bg-accent hover:bg-accent/90 disabled:bg-accent/50 font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all overflow-hidden relative"
          >
            {isSent ? (
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                className="flex items-center gap-2"
              >
                <IconCheck size={20} /> Sent!
              </motion.div>
            ) : (
              <div className="flex items-center gap-2">
                {isSending ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message <IconSend size={18} />
                  </>
                )}
              </div>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
