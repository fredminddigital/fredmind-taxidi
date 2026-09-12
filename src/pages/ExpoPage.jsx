import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import FloatingGlow from "../components/ui/FloatingGlow";
import SectionHeading from "../components/ui/SectionHeading";
<<<<<<< HEAD
import { expoCities, expoExpectations, fadeUp, stagger } from "../data/siteData";
=======
import {
  expoCities,
  expoExpectations,
  fadeUp,
  stagger,
  FORM_ENDPOINT,
} from "../data/siteData";
>>>>>>> 3737eb3d74878b0aa232bceecdba508288867552

export default function ExpoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState({ type: "", message: "" });
  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    profile: "",
    preferred_destination: "",
    city_edition: "",
    referral_source: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

<<<<<<< HEAD
  function handleSubmit(event) {
=======
  async function handleSubmit(event) {
>>>>>>> 3737eb3d74878b0aa232bceecdba508288867552
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState({ type: "", message: "" });

<<<<<<< HEAD
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitState({
        type: "success",
        message: "Registration received successfully. Our team will contact you shortly.",
      });
      setFormValues({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        profile: "",
        preferred_destination: "",
        city_edition: "",
        referral_source: "",
      });
    }, 1200);
=======
    try {
      const formData = new FormData();
      formData.append("first_name", formValues.first_name);
      formData.append("last_name", formValues.last_name);
      formData.append("email", formValues.email);
      formData.append("phone", formValues.phone);
      formData.append("profile", formValues.profile);
      formData.append("preferred_destination", formValues.preferred_destination);
      formData.append("city_edition", formValues.city_edition);
      formData.append("referral_source", formValues.referral_source);
      formData.append("_subject", "New Study Abroad Expo Registration");
      formData.append("_captcha", "false");
      formData.append("_template", "table");

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      window.setTimeout(() => {
        setIsSubmitting(false);
        setSubmitState({
          type: "success",
          message: "Registration received successfully. Our team will contact you shortly.",
        });
        setFormValues({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          profile: "",
          preferred_destination: "",
          city_edition: "",
          referral_source: "",
        });
      }, 1200);
    } catch (error) {
      setIsSubmitting(false);
      setSubmitState({
        type: "error",
        message: "Something went wrong while submitting. Please try again.",
      });
    }
>>>>>>> 3737eb3d74878b0aa232bceecdba508288867552
  }

  return (
    <div className="min-h-screen bg-[#020918] text-white">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#192b64_0%,#081431_40%,#020918_100%)] px-4 pb-0 pt-14 text-white sm:px-6 lg:px-10 lg:pt-20">
<<<<<<< HEAD
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute left-1/2 top-[4%] h-[900px] w-[900px] -translate-x-1/2 rounded-full border border-white/6"
        />
=======
>>>>>>> 3737eb3d74878b0aa232bceecdba508288867552
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-[2%] h-[920px] w-[920px] -translate-x-1/2 rounded-full border border-white/8" />
          <div className="absolute left-1/2 top-[14%] h-[640px] w-[640px] -translate-x-1/2 rounded-full border border-white/10" />
        </div>
        <FloatingGlow className="absolute right-[8%] top-[46%] h-48 w-48 bg-[#7c3aed]/30" duration={10} />
        <FloatingGlow className="absolute left-[10%] top-[24%] h-36 w-36 bg-[#2563eb]/25" duration={8} />

        <motion.div initial="hidden" animate="visible" variants={stagger} className="relative mx-auto max-w-6xl text-center">
          <motion.div variants={fadeUp} className="inline-flex rounded-full border border-[#f4a300]/40 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#f4a300] sm:text-xs">
            Fredmind Taxidi Limited Presents
          </motion.div>

          <motion.div variants={fadeUp} className="relative mx-auto mt-6 max-w-5xl">
            <div className="pointer-events-none mb-4 text-[4rem] font-bold tracking-[-0.06em] text-white/20 sm:text-[5rem] md:text-[6rem]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              2026
            </div>

            <div className="text-[3.4rem] font-bold leading-[0.9] tracking-[-0.06em] text-white sm:text-[5rem] md:text-[6.4rem]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Study Abroad
              <br />
              <span className="text-[#f4a300]">Expo</span>
            </div>
          </motion.div>

          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-white/75 sm:text-[22px] sm:leading-10">
            Meet top universities from the UK, USA, Canada, Australia, and Europe. Your international education journey starts here across four cities in West Africa.
          </motion.p>

          <motion.div variants={stagger} className="mx-auto mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-3">
            {expoCities.map((item) => (
              <motion.div
                key={item.city}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/6 px-4 py-3 text-sm font-medium text-white/90 backdrop-blur"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#f4a300]" />
                <span>{item.city}</span>
                <span className="text-white/55">•</span>
                <span>{item.date}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex justify-center">
            <motion.a
              href="#personal-information"
              whileHover={{ scale: 1.04, y: -4, boxShadow: "0px 20px 50px rgba(244,163,0,0.35)" }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex min-w-[260px] cursor-pointer items-center justify-center rounded-full bg-[#f4a300] px-8 py-4 text-lg font-semibold text-black transition duration-300 hover:brightness-105"
            >
              Register Now
              <span className="ml-4 rounded-full bg-white/25 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white transition group-hover:bg-black/20">
                Free Entry
              </span>
            </motion.a>
          </motion.div>

          <motion.div variants={stagger} className="relative mt-14 grid overflow-hidden border-t border-white/10 bg-white/4 text-left backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
            {expoCities.map((item) => (
              <motion.div
                key={item.edition}
                variants={fadeUp}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                className="cursor-pointer border-b border-white/10 px-6 py-6 sm:border-r sm:border-b-0 lg:px-6"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f4a300]">{item.edition}</div>
                <div className="mt-3 text-3xl font-semibold text-white">{item.city}</div>
                <div className="mt-3 text-lg text-white/70">{item.date} • {item.venue}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="border-t border-white/10 bg-[#07112b] px-4 py-20 text-white sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What to Expect"
            title={<>Everything you need to<br />study abroad in one room</>}
            subtitle="Over 30 international universities. Live masterclasses. Visa consultants. Scholarship advisors. All under one roof, across four cities."
            light
            serif
          />

          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={{ once: true, amount: 0.12 }} className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {expoExpectations.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="cursor-pointer rounded-[22px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_14px_35px_rgba(0,0,0,0.16)] backdrop-blur transition duration-300 hover:border-[#f4a300]/30 hover:bg-white/[0.07] hover:shadow-[0_24px_60px_rgba(244,163,0,0.12)]"
                >
                  <motion.div whileHover={{ rotate: -8, scale: 1.08 }} className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#2b2317] text-[#f4a300]">
                    <Icon className="h-5 w-5" />
                  </motion.div>
                  <h3 className="mt-5 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-base leading-8 text-white/65">{item.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#091430] px-4 py-20 text-white sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Secure Your Spot"
            title="Register to Attend"
            subtitle="Attendance is completely free. Registration is required to confirm your place at your chosen city edition."
            light
          />

          <div className="mx-auto mt-8 flex max-w-xl items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-5 py-4 text-left text-emerald-300">
            <CheckCircle2 className="h-5 w-5 shrink-0" />
            <span className="text-base font-medium">100% free to attend. Registration simply reserves your place.</span>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            onSubmit={handleSubmit}
            className="mt-14 space-y-8"
          >
            <div id="personal-information">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">Personal Information</div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-white/70">First Name</span>
                  <input name="first_name" value={formValues.first_name} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-base text-white outline-none placeholder:text-white/25 focus:border-[#f4a300]/60" placeholder="e.g. Amara" required />
                </label>
                <label className="block">
                  <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-white/70">Last Name</span>
                  <input name="last_name" value={formValues.last_name} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-base text-white outline-none placeholder:text-white/25 focus:border-[#f4a300]/60" placeholder="e.g. Okafor" required />
                </label>
              </div>
              <div className="mt-4 space-y-4">
                <label className="block">
                  <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-white/70">Email Address</span>
                  <input type="email" name="email" value={formValues.email} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-base text-white outline-none placeholder:text-white/25 focus:border-[#f4a300]/60" placeholder="your@email.com" required />
                </label>
                <label className="block">
                  <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-white/70">Phone Number</span>
                  <input type="tel" name="phone" value={formValues.phone} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-base text-white outline-none placeholder:text-white/25 focus:border-[#f4a300]/60" placeholder="+234 800 000 0000" required />
                </label>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">Education and Preferences</div>
              <div className="mt-6 space-y-4">
                <label className="block">
                  <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-white/70">I Am A</span>
                  <select name="profile" value={formValues.profile} onChange={handleChange} className="w-full cursor-pointer appearance-none rounded-2xl border border-[#f4a300]/50 bg-[#111b38] px-5 py-4 text-base text-white outline-none transition focus:border-[#f4a300] focus:ring-2 focus:ring-[#f4a300]/20" required>
                    <option value="" className="bg-[#081431] text-white">Select your profile</option>
                    <option className="bg-[#081431] text-white">O'Level / WAEC Student</option>
                    <option className="bg-[#081431] text-white">Undergraduate Student</option>
                    <option className="bg-[#081431] text-white">Postgraduate Applicant</option>
                    <option className="bg-[#081431] text-white">Working Professional</option>
                    <option className="bg-[#081431] text-white">Parent / Guardian</option>
                    <option className="bg-[#081431] text-white">Education Counselor</option>
                  </select>
                </label>
                <label className="block">
                  <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-white/70">Preferred Study Destination</span>
                  <select name="preferred_destination" value={formValues.preferred_destination} onChange={handleChange} className="w-full cursor-pointer appearance-none rounded-2xl border border-[#f4a300]/50 bg-[#111b38] px-5 py-4 text-base text-white outline-none transition focus:border-[#f4a300] focus:ring-2 focus:ring-[#f4a300]/20" required>
                    <option value="" className="bg-[#081431] text-white">Select a country</option>
                    <option className="bg-[#081431] text-white">United Kingdom</option>
                    <option className="bg-[#081431] text-white">United States of America</option>
                    <option className="bg-[#081431] text-white">Canada</option>
                    <option className="bg-[#081431] text-white">Australia</option>
                    <option className="bg-[#081431] text-white">Europe (General)</option>
                    <option className="bg-[#081431] text-white">Not decided yet</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">Choose Your City</div>
              <div className="mt-6 space-y-4">
                <label className="block">
                  <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-white/70">City Edition to Attend</span>
                  <select name="city_edition" value={formValues.city_edition} onChange={handleChange} className="w-full cursor-pointer appearance-none rounded-2xl border border-[#f4a300]/50 bg-[#111b38] px-5 py-4 text-base text-white outline-none transition focus:border-[#f4a300] focus:ring-2 focus:ring-[#f4a300]/20" required>
                    <option value="" className="bg-[#081431] text-white">Select a city</option>
<<<<<<< HEAD
                    <option className="bg-[#081431] text-white">Abuja • April 10, 2026</option>
                    <option className="bg-[#081431] text-white">Lagos • June 5, 2026</option>
                    <option className="bg-[#081431] text-white">Port Harcourt • July 17, 2026</option>
                    <option className="bg-[#081431] text-white">Accra, Ghana • August 21, 2026</option>
=======
                    <option className="bg-[#081431] text-white">Abuja • October 3, 2026</option>
                    <option className="bg-[#081431] text-white">Lagos • Coming soon</option>
                    <option className="bg-[#081431] text-white">Port Harcourt • Coming soon</option>
                    <option className="bg-[#081431] text-white">Accra, Ghana • Coming soon</option>
>>>>>>> 3737eb3d74878b0aa232bceecdba508288867552
                  </select>
                </label>
                <label className="block">
                  <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-white/70">How Did You Hear About Us?</span>
                  <select name="referral_source" value={formValues.referral_source} onChange={handleChange} className="w-full cursor-pointer appearance-none rounded-2xl border border-[#f4a300]/50 bg-[#111b38] px-5 py-4 text-base text-white outline-none transition focus:border-[#f4a300] focus:ring-2 focus:ring-[#f4a300]/20" required>
                    <option value="" className="bg-[#081431] text-white">Select one</option>
                    <option className="bg-[#081431] text-white">Instagram</option>
                    <option className="bg-[#081431] text-white">Facebook</option>
                    <option className="bg-[#081431] text-white">LinkedIn</option>
                    <option className="bg-[#081431] text-white">Twitter / X</option>
                    <option className="bg-[#081431] text-white">WhatsApp</option>
                    <option className="bg-[#081431] text-white">Friend / Family</option>
                    <option className="bg-[#081431] text-white">School / Counselor</option>
                    <option className="bg-[#081431] text-white">Other</option>
                  </select>
                </label>
              </div>
            </div>

            <motion.button
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-[#f4a300] px-8 py-5 text-lg font-semibold text-black transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Complete Registration"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>

            {submitState.message ? (
              <div className={`rounded-2xl border px-5 py-4 text-base ${submitState.type === "success" ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-300" : "border-red-400/30 bg-red-500/10 text-red-300"}`}>
                {submitState.message}
              </div>
            ) : null}
          </motion.form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#050c1f] px-4 py-14 text-white sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-4xl font-bold tracking-[-0.04em] text-white" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            Fredmind Taxidi Limited
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-[#f4a300]">
            <button className="cursor-pointer">info@fredmindtaxidi.com</button>
            <button className="cursor-pointer">www.fredmindtaxidi.com</button>
          </div>
          <div className="mt-4 text-base text-white/35">@FredmindTaxidi on Instagram LinkedIn Facebook X</div>
          <div className="mt-6 text-base text-white/30">© 2026 Fredmind Taxidi Limited. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
