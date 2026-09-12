import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import FloatingGlow from "../components/ui/FloatingGlow";
import SectionHeading from "../components/ui/SectionHeading";
import TaxidiNavbar from "../components/TaxidiNavbar";
import {
  fadeUp,
  stagger,
  taxidiDestinations,
  taxidiServices,
  taxidiStandards,
  taxidiStats,
  taxidiTestimonials,
} from "../data/siteData";

export default function TaxidiHome({ onOpenExpo }) {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-black">
      <TaxidiNavbar onOpenExpo={onOpenExpo} />

      <section className="relative mx-auto grid max-w-7xl items-stretch gap-10 overflow-hidden px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-20 xl:gap-16">
        <FloatingGlow className="absolute -left-10 top-10 h-44 w-44 bg-[#4f8fe5]/15" duration={8} />
        <FloatingGlow className="absolute right-0 top-24 h-64 w-64 bg-[#4f8fe5]/12" duration={10} />

        <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col justify-center">
          <motion.h1 variants={fadeUp} className="font-serif text-[3rem] font-bold leading-[0.94] tracking-[-0.05em] sm:text-[4.5rem] lg:text-[5.5rem]">
            Your Journey to the
            <br />
            <span className="text-[#4f8fe5]">World</span> Starts Here
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-8 max-w-3xl text-lg leading-9 text-slate-500 sm:text-[22px] sm:leading-10">
            Africa&apos;s most trusted global travel and study abroad agency. Connecting dreams to destinations across 100+ countries worldwide with expert guidance and seamless service.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <button className="inline-flex cursor-pointer items-center justify-center rounded-full bg-black px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-[0_18px_35px_rgba(0,0,0,0.18)]">
              Book Free Consultation
            </button>
            <a
              href="#services"
              className="inline-flex cursor-pointer items-center justify-center rounded-full border-2 border-[#4f8fe5] px-8 py-4 text-lg font-semibold text-[#4f8fe5] transition duration-300 hover:-translate-y-1 hover:bg-[#4f8fe5] hover:text-white hover:shadow-[0_18px_35px_rgba(79,143,229,0.25)]"
            >
              Explore Services
            </a>
          </motion.div>

          <motion.div variants={stagger} className="mt-14 grid gap-5 sm:grid-cols-3">
            {taxidiStats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} whileHover={{ y: -6, scale: 1.01 }} className="rounded-[22px] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                <div className="font-serif text-4xl font-bold text-[#4f8fe5] sm:text-5xl">{stat.value}</div>
                <div className="mt-4 text-xl font-semibold leading-9 text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -4 }}
          className="relative min-h-[420px] overflow-hidden rounded-[28px] bg-[#dce8f7] shadow-[0_18px_40px_rgba(0,0,0,0.06)] sm:min-h-[520px]"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute h-[320px] w-[320px] rounded-full bg-[#c3d6f0] sm:h-[420px] sm:w-[420px]" />
            <motion.div animate={{ scale: [1, 0.97, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute h-[220px] w-[220px] rounded-full bg-[#b3caeb] sm:h-[280px] sm:w-[280px]" />
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] h-[96px] w-[96px] rounded-full bg-[#152a49] sm:h-[108px] sm:w-[108px]" />
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[41%] h-[126px] w-[126px] bg-[#4f8fe5] sm:h-[140px] sm:w-[140px]" />
          </div>
<<<<<<< HEAD
          <div className="absolute right-8 top-8 rounded-full bg-[#4f8fe5] px-4 py-2 text-xs font-bold text-white sm:text-sm">
            GLOBAL
          </div>
=======
          <div className="absolute right-8 top-8 rounded-full bg-[#4f8fe5] px-4 py-2 text-xs font-bold text-white sm:text-sm">GLOBAL</div>
>>>>>>> 3737eb3d74878b0aa232bceecdba508288867552
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <div className="text-3xl font-bold text-slate-900">Global Dreams</div>
            <div className="mt-2 text-lg text-slate-500">Made Reality</div>
          </div>
        </motion.div>
      </section>

      <section id="services" className="bg-[#f5f5f5] px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Our Services" title="Comprehensive Global Solutions" subtitle="From study abroad to visa processing, flight bookings to accommodation, we handle everything across all continents." serif />
<<<<<<< HEAD

=======
>>>>>>> 3737eb3d74878b0aa232bceecdba508288867552
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={{ once: true, amount: 0.15 }} className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {taxidiServices.map((card) => {
              const Icon = card.icon;
              return (
<<<<<<< HEAD
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  whileHover={{ y: -8, rotate: -0.3 }}
                  className="cursor-pointer rounded-[24px] bg-white p-8 shadow-[0_16px_40px_rgba(0,0,0,0.05)] transition duration-300 hover:bg-[#f8fbff] hover:shadow-[0_24px_60px_rgba(79,143,229,0.16)]"
                >
=======
                <motion.div key={card.title} variants={fadeUp} whileHover={{ y: -8, rotate: -0.3 }} className="cursor-pointer rounded-[24px] bg-white p-8 shadow-[0_16px_40px_rgba(0,0,0,0.05)] transition duration-300 hover:bg-[#f8fbff] hover:shadow-[0_24px_60px_rgba(79,143,229,0.16)]">
>>>>>>> 3737eb3d74878b0aa232bceecdba508288867552
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4f8fe5] text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-serif text-3xl font-bold tracking-[-0.03em] text-black">{card.title}</h3>
                  <p className="mt-4 text-lg leading-8 text-slate-500">{card.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      <section className="bg-[#f5f5f5] px-4 py-8 sm:px-6 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Why Choose Us" title="African Expertise, Global Standards" subtitle="What makes Fredmind Taxidi your trusted partner for global opportunities" serif />

=======
      <section  id="about" className="bg-[#f5f5f5] px-4 py-8 sm:px-6 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Why Choose Us" title="African Expertise, Global Standards" subtitle="What makes Fredmind Taxidi your trusted partner for global opportunities" serif />
>>>>>>> 3737eb3d74878b0aa232bceecdba508288867552
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={{ once: true, amount: 0.15 }} className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">
            {taxidiStandards.map((item) => {
              const Icon = item.icon;
              return (
<<<<<<< HEAD
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="cursor-pointer rounded-[20px] bg-white p-7 shadow-[0_12px_30px_rgba(0,0,0,0.04)] transition duration-300 hover:bg-[#f8fbff] hover:shadow-[0_20px_50px_rgba(79,143,229,0.12)]"
                >
=======
                <motion.div key={item.title} variants={fadeUp} whileHover={{ y: -6, scale: 1.01 }} className="cursor-pointer rounded-[20px] bg-white p-7 shadow-[0_12px_30px_rgba(0,0,0,0.04)] transition duration-300 hover:bg-[#f8fbff] hover:shadow-[0_20px_50px_rgba(79,143,229,0.12)]">
>>>>>>> 3737eb3d74878b0aa232bceecdba508288867552
                  <div className="flex items-start gap-5">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#4f8fe5] text-white shadow-[0_10px_25px_rgba(79,143,229,0.25)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-black">{item.title}</h3>
                      <p className="mt-3 text-base leading-8 text-slate-400">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      <section className="border-y border-slate-700 bg-black px-4 py-20 text-white sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Global Reach" title="Your Gateway to Every Corner of the World" subtitle="We process applications and provide services for destinations across all continents" light serif />

          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={{ once: true, amount: 0.15 }} className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
            {taxidiDestinations.map((item) => (
              <motion.div
                key={item.name}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.03, backgroundColor: "#1f1f1f" }}
                className="cursor-pointer rounded-[16px] bg-[#171717] p-5 text-center transition duration-300 hover:bg-[#202020] hover:shadow-[0_20px_40px_rgba(79,143,229,0.12)] sm:p-6"
              >
=======
    <section
  id="destinations"
  className="border-y border-slate-700 bg-black px-4 py-20 text-white sm:px-6 lg:px-10"
>
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Global Reach" title="Your Gateway to Every Corner of the World" subtitle="We process applications and provide services for destinations across all continents" light serif />
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={{ once: true, amount: 0.15 }} className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
            {taxidiDestinations.map((item) => (
              <motion.div key={item.name} variants={fadeUp} whileHover={{ y: -6, scale: 1.03, backgroundColor: "#1f1f1f" }} className="cursor-pointer rounded-[16px] bg-[#171717] p-5 text-center transition duration-300 hover:bg-[#202020] hover:shadow-[0_20px_40px_rgba(79,143,229,0.12)] sm:p-6">
>>>>>>> 3737eb3d74878b0aa232bceecdba508288867552
                <div className="flex justify-center">
                  <img src={item.flag} alt={item.name} className="h-10 w-14 rounded-md object-cover shadow-md sm:h-12 sm:w-16" />
                </div>
                <div className="mt-4 text-base font-semibold text-white">{item.name}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f5f5f5] px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Success Stories" title="What Our Clients Say" subtitle="Real stories from Africans who achieved their global dreams with Fredmind Taxidi" serif />
<<<<<<< HEAD

          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={{ once: true, amount: 0.15 }} className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-3">
            {taxidiTestimonials.map((item) => (
              <motion.div
                key={item.name}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.01 }}
                className="cursor-pointer rounded-[20px] border border-slate-200 bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#4f8fe5]/20 hover:shadow-[0_24px_50px_rgba(79,143,229,0.12)]"
              >
                <div className="text-5xl leading-none text-slate-200">“</div>
                <p className="mt-2 text-base leading-8 text-slate-700">{item.quote}</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#4f8fe5] font-bold text-white">
                    {item.initial}
                  </div>
=======
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={{ once: true, amount: 0.15 }} className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-3">
            {taxidiTestimonials.map((item) => (
              <motion.div key={item.name} variants={fadeUp} whileHover={{ y: -8, scale: 1.01 }} className="cursor-pointer rounded-[20px] border border-slate-200 bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#4f8fe5]/20 hover:shadow-[0_24px_50px_rgba(79,143,229,0.12)]">
                <div className="text-5xl leading-none text-slate-200">“</div>
                <p className="mt-2 text-base leading-8 text-slate-700">{item.quote}</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#4f8fe5] font-bold text-white">{item.initial}</div>
>>>>>>> 3737eb3d74878b0aa232bceecdba508288867552
                  <div>
                    <div className="font-bold text-black">{item.name}</div>
                    <div className="text-sm text-slate-400">{item.meta}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      <section className="relative overflow-hidden bg-[#4f8fe5] px-4 py-20 text-center text-white sm:px-6 lg:px-10">
=======
      <section  id="contact" className="relative overflow-hidden bg-[#4f8fe5] px-4 py-20 text-center text-white sm:px-6 lg:px-10">
>>>>>>> 3737eb3d74878b0aa232bceecdba508288867552
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-[25%] top-0 h-full w-[180px] -skew-x-[20deg] bg-white/30" />
          <div className="absolute right-[20%] top-0 h-full w-[180px] -skew-x-[20deg] bg-white/20" />
        </div>
        <div className="relative mx-auto max-w-4xl">
          <h2 className="font-serif text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Ready to Start Your Global
            <br />
            Journey?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
            Book your free consultation today and let&apos;s turn your international dreams into reality.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <button className="inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-[#4f8fe5] transition hover:opacity-90 sm:min-w-[220px] sm:w-auto">
              Call +234 916 219 3733
            </button>
            <button className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border border-white/40 px-8 py-4 text-base font-bold text-white transition hover:bg-white/10 sm:min-w-[220px] sm:w-auto">
              Email Us Now
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-black px-4 py-16 text-white sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
            <div>
              <div className="font-serif text-4xl font-bold tracking-[-0.04em] text-white">
                Fredmind <span className="text-[#4f8fe5]">Taxidi</span>
              </div>
              <p className="mt-5 max-w-md text-base leading-8 text-white/75">
                Africa&apos;s Gateway to the World. Connecting dreams to destinations across 100+ countries with expert guidance, transparent processes, and proven success.
              </p>
              <div className="mt-6 font-semibold text-white">RC: 6917285</div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white">Quick Links</h4>
              <ul className="mt-5 space-y-3 text-sm text-white/80">
                {["About Us", "Our Services", "Destinations", "Success Stories", "Contact Us"].map((item) => (
<<<<<<< HEAD
                  <li key={item} className="cursor-pointer transition hover:text-[#4f8fe5]">{item}</li>
=======
                  <li key={item} className="cursor-pointer transition hover:text-[#4f8fe5]">
                    {item}
                  </li>
>>>>>>> 3737eb3d74878b0aa232bceecdba508288867552
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white">Services</h4>
              <ul className="mt-5 space-y-3 text-sm text-white/80">
                {["Study Abroad", "Visa Processing", "Corporate Travel", "Flight Ticketing", "Accommodation"].map((item) => (
<<<<<<< HEAD
                  <li key={item} className="cursor-pointer transition hover:text-[#4f8fe5]">{item}</li>
=======
                  <li key={item} className="cursor-pointer transition hover:text-[#4f8fe5]">
                    {item}
                  </li>
>>>>>>> 3737eb3d74878b0aa232bceecdba508288867552
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white">Contact</h4>
              <div className="mt-5 space-y-3 text-sm text-white/80">
                <div className="cursor-pointer transition hover:text-[#4f8fe5]">+234 916 219 3733</div>
                <div className="cursor-pointer transition hover:text-[#4f8fe5]">info@fredmindtaxidi.com</div>
                <div className="cursor-pointer transition hover:text-[#4f8fe5]">admissions@fredmindtaxidi.travel</div>
                <div className="cursor-pointer transition hover:text-[#4f8fe5]">visa@fredmindtaxidi.com</div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <button className="fixed bottom-4 right-4 inline-flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-black text-white shadow-xl transition duration-300 hover:scale-110 hover:bg-[#4f8fe5] sm:bottom-6 sm:right-6">
        <MessageCircle className="h-7 w-7" />
      </button>
    </div>
  );
}
