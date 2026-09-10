import {
  BadgeCheck,
  BadgeDollarSign,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Globe,
  GraduationCap,
  House,
  IdCard,
  Lightbulb,
  Shield,
  Star,
  Target,
  Ticket,
} from "lucide-react";

export const FORM_EMAIL = "olupeniel2000@gmail.com";
export const FORM_ENDPOINT = `https://formsubmit.co/${FORM_EMAIL}`;

export const taxidiStats = [
  { value: "1,000+", label: "Successful Applications" },
  { value: "95%", label: "Visa Approval Rate" },
  { value: "100+", label: "Countries Served" },
];

export const taxidiServices = [
  {
    icon: GraduationCap,
    title: "Study Abroad",
    text: "University admissions, application strategy, and end to end support for global education pathways.",
  },
  {
    icon: BadgeCheck,
    title: "Visa Processing",
    text: "Accurate documentation, application guidance, interview preparation, and professional visa support.",
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    text: "Business travel planning, documentation, premium coordination, and reliable travel support services.",
  },
  {
    icon: Ticket,
    title: "Flight Ticketing",
    text: "Smart flight planning and booking support for international trips across multiple destinations.",
  },
  {
    icon: House,
    title: "Accommodation",
    text: "Help with safe, suitable accommodation options for students, tourists, and relocating professionals.",
  },
  {
    icon: Globe,
    title: "Global Advisory",
    text: "Destination guidance, relocation insight, and strategic travel advice tailored to your goals.",
  },
];

export const taxidiStandards = [
  {
    icon: Shield,
    title: "Trusted Expertise",
    text: "Over 10 years of combined experience with 1000+ successful applications globally.",
  },
  {
    icon: Globe,
    title: "Worldwide Coverage",
    text: "Processing applications for 100+ countries across all continents.",
  },
  {
    icon: CheckCircle2,
    title: "95% Success Rate",
    text: "Proven track record with exceptional visa approval rates through expert guidance.",
  },
  {
    icon: Lightbulb,
    title: "Transparent Process",
    text: "Clear communication at every step with no hidden surprises.",
  },
  {
    icon: Target,
    title: "African Understanding",
    text: "We understand African travelers’ unique needs while delivering world class standards.",
  },
  {
    icon: BadgeCheck,
    title: "End to End Support",
    text: "From first contact to successful settlement anywhere in the world.",
  },
];

export const taxidiTestimonials = [
  {
    quote:
      "Fredmind Taxidi made my dream of studying in the UK a reality. From choosing the right university to getting my visa approved, they were with me every step.",
    name: "Chioma A.",
    meta: "Now studying in London, UK",
    initial: "C",
  },
  {
    quote:
      "Professional, transparent, and genuinely caring. They handled everything and I’m now settled in Canada with my family.",
    name: "Emmanuel O.",
    meta: "Relocated to Toronto, Canada",
    initial: "E",
  },
  {
    quote:
      "They prepared me for IELTS, got me admission, processed my visa, and arranged my accommodation.",
    name: "Blessing M.",
    meta: "MBA Student in Melbourne",
    initial: "B",
  },
];

export const taxidiDestinations = [
  { flag: "https://flagcdn.com/w80/gb.png", name: "United Kingdom" },
  { flag: "https://flagcdn.com/w80/us.png", name: "United States" },
  { flag: "https://flagcdn.com/w80/ca.png", name: "Canada" },
  { flag: "https://flagcdn.com/w80/au.png", name: "Australia" },
  { flag: "https://flagcdn.com/w80/ie.png", name: "Ireland" },
  { flag: "https://flagcdn.com/w80/de.png", name: "Germany" },
  { flag: "https://flagcdn.com/w80/fr.png", name: "France" },
  { flag: "https://flagcdn.com/w80/nl.png", name: "Netherlands" },
  { flag: "https://flagcdn.com/w80/sg.png", name: "Singapore" },
  { flag: "https://flagcdn.com/w80/jp.png", name: "Japan" },
  { flag: "https://flagcdn.com/w80/ae.png", name: "UAE" },
  { flag: "https://flagcdn.com/w80/za.png", name: "South Africa" }
];

export const expoCities = [
  { city: "Abuja", date: "Oct 3", edition: "Edition 1", venue: "Hall 2, Ground floor, Plot 205, Dalaba Street, Novare Central Floor,Wuse Zone 5" },
  { city: "Lagos", date: "", edition: "Edition 2", venue: "Coming Soon" },
  { city: "Port Harcourt", date: "", edition: "Edition 3", venue: "Coming Soon" },
  { city: "Accra, Ghana", date: "", edition: "Edition 4", venue: "Coming Soon" }
];

export const expoExpectations = [
  {
    icon: GraduationCap,
    title: "University Fair",
    text: "Meet admissions reps from 30+ universities in the UK, USA, Canada, Australia and Europe one on one.",
  },
  {
    icon: Star,
    title: "Scholarship Showcase",
    text: "Discover fully funded and partial scholarships available exclusively to African students.",
  },
  {
    icon: IdCard,
    title: "Visa Guidance",
    text: "Certified consultants demystify the student visa process for your destination country.",
  },
  {
    icon: BookOpen,
    title: "Live Masterclasses",
    text: "IELTS, TOEFL, personal statement writing, and application strategy workshops.",
  },
  {
    icon: BadgeDollarSign,
    title: "Finance Planning",
    text: "Education loan resources and financial planning tools for parents and students.",
  },
  {
    icon: Globe,
    title: "Alumni Network",
    text: "Connect with Nigerian and Ghanaian graduates studying abroad and hear real stories.",
  },
];

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};
