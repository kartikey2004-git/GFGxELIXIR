import {
  Brain,
  Code,
  Shield,
  Sparkles,
  Target,
  Trophy,
  Users,
  Zap,
  Award,
  Crown
} from "lucide-react";


export const aboutData = [
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Collaboration",
    text: "Team up with elite developers.",
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Innovation",
    text: "Build creative solutions.",
  },
  {
    icon: <Trophy className="w-6 h-6 text-white" />,
    title: "Recognition",
    text: "Win prizes and mentorship.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-white" />,
    title: "Growth",
    text: "Learn from experts.",
  },
];

export const cardData = [
  {
    icon: <Code />,
    title: "Strategic Web Initiative",
    desc: "Frontend & Backend Ops",
    points: ["React, Next.js, Vue.js", "Full-stack systems", "Modern UI/UX"],
  },
  {
    icon: <Brain />,
    title: "AI/ML Titan",
    desc: "Intelligence Division",
    points: ["ML Models", "NLP Systems", "Computer Vision"],
  },
  {
    icon: <Shield />,
    title: "Security Titan",
    desc: "Digital Wall Ops",
    points: ["Security Tools", "Threat Detection", "Privacy"],
  },
  {
    icon: <Zap />,
    title: "Chain Titan",
    desc: "Decentralized Sphere",
    points: ["Smart Contracts", "DeFi Apps", "NFT Systems"],
  },
  {
    icon: <Sparkles />,
    title: "Mobile Titan",
    desc: "App Command Unit",
    points: ["iOS / Android", "Cross-platform", "Mobile-first"],
  },
  {
    icon: <Target />,
    title: "Wings of Freedom",
    desc: "Creative Ops",
    points: ["Unique Ideas", "Creative Thinking", "Rapid Execution"],
  },
];

export const faqs = [
  {
    q: "Who can participate?",
    a: "Anyone with a passion for coding! Students, professionals, and hobbyists are all welcome. Teams can have 2–4 members.",
  },
  {
    q: "Is there a registration fee?",
    a: "No, the hackathon is completely free to participate. Just bring your skills and enthusiasm!",
  },
  {
    q: "What do I need to bring?",
    a: "Bring your laptop, charger, and any tools you need. We’ll provide Wi-Fi, snacks, and energy drinks to keep you going!",
  },
  {
    q: "Can I work on a pre-existing project?",
    a: "No, all projects must be started fresh during the hackathon. You can use libraries and frameworks, but the core idea must be new.",
  },
  {
    q: "Will the event be online or offline?",
    a: "The hackathon will be held offline. Join us at the venue on 28th March.",
  },
];

export const timelineData = [
  {
    title: "15 February",
    content: (
      <div className="space-y-3">
        <h4 className="text-xl md:text-2xl font-bold text-white">
          Registration Opens
        </h4>
        <p className="text-base md:text-lg text-white/80 leading-relaxed">
          Sign up starts now! Get ready for an amazing hackathon experience. Secure your spot and join us for 24 hours of innovation.
        </p>
      </div>
    ),
  },
  {
    title: "15 March",
    content: (
      <div className="space-y-3">
        <h4 className="text-xl md:text-2xl font-bold text-white">
          Registration Closed
        </h4>
        <p className="text-base md:text-lg text-white/80 leading-relaxed">
          Registration is now closed. Stay tuned for updates and announcements as we prepare for the main event!
        </p>
      </div>
    ),
  },
  {
    title: "28 March",
    content: (
      <div className="space-y-3">
        <h4 className="text-xl md:text-2xl font-bold text-white">
          Hackathon Begins
        </h4>
        <p className="text-base md:text-lg text-white/80 leading-relaxed">
          Coding, innovation, and collaboration starts now! Teams begin their 36-hour journey to create amazing projects.
        </p>
      </div>
    ),
  },
  {
    title: "29 March",
    content: (
      <div className="space-y-3">
        <h4 className="text-xl md:text-2xl font-bold text-white">
          Submissions Due
        </h4>
        <p className="text-base md:text-lg text-white/80 leading-relaxed">
          Final demos presented. Show us what you&apos;ve built! Time to showcase your innovative solutions.
        </p>
      </div>
    ),
  },
  {
    title: "29 March",
    content: (
      <div className="space-y-3">
        <h4 className="text-xl md:text-2xl font-bold text-white">
          Results & Awards
        </h4>
        <p className="text-base md:text-lg text-white/80 leading-relaxed">
          Winners announced! Celebrate the amazing projects and innovations. Prizes, recognition, and new beginnings await.
        </p>
      </div>
    ),
  },
];

export const GoldSponsorsData = [
  { tier: "GitHub", alt: "GitHub Logo", image: "/sponsors/github-logo.png", glow: "from-indigo-500/20", link: "https://github.com/" },
  { tier: "Risein", alt: "Risein", image: "/sponsors/On_Black_Vertical.png", glow: "from-blue-500/20", link: "https://www.risein.com/" },
  // { tier: "Polygon", alt: "Polygon", image: "/sponsors/Polygon.svg", glow: "from-pink-500/20", link: "#" },
];
export const SilverSponsorsData = [
  // { tier: "India Blockchain Week 2024", alt: "India Blockchain Week 2024", image: "/sponsors/ibw.svg", glow: "from-blue-500/20", link: "#" },
  { tier: "Cyrene AI", alt: "Cyrene AI Logo", image: "/sponsors/cyrene-2.png", glow: "from-purple-500/20", link: "https://cyreneai.com/" },

  { tier: "CertifyX", alt: "CertifyX Logo", image: "/sponsors/FREE CREDITS (3).png", glow: "from-cyan-500/20", link: "https://certifyix.com/" },
];
export const BronzeSponsorsData = [
  // { tier: "India Blockchain Week 2024", alt: "India Blockchain Week 2024", image: "/sponsors/ibw.svg", glow: "from-blue-500/20", link: "#" },
  { tier: "Gen.xyz", alt: "Gen Logo", image: "/sponsors/xyz-logo-white.png", glow: "from-cyan-500/20", link: "https://gen.xyz/" },
  { tier: "Windsurf", alt: "Windsurf Logo", image: "/sponsors/Windsurf-white-symbol.png", glow: "from-purple-500/20", link: "https://windsurf.com/" },
  { tier: "E-certify", alt: "E-certify Logo", image: "/sponsors/ecertifyhub2.png", glow: "from-pink-500/20", link: "https://ecertifyhub.in/" },
  { tier: "Featherless.ai", alt: "Featherless.ai Logo", image: "/sponsors/featherlessai.png", glow: "from-slate-500/10", link: "https://featherless.ai/" },
  { tier: "Stellar", alt: "Stellar Logo", image: "/sponsors/stellar.png", glow: "from-slate-500/10", link: "https://stellar.org/" },
  { tier: "Apacked", alt: "Apacked Logo", image: "/sponsors/apacked.png", glow: "from-slate-500/10", link: "https://apacked.com/" },
  // { tier: "Polygon", alt: "Polygon", image: "/sponsors/Polygon.svg", glow: "from-indigo-500/20", link: "#" },
];


export const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#mission-briefing" },
  { label: "Tracks", href: "#tracks" },
  { label: "Timelines", href: "#timeline" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Rewards", href: "#prizes" },
  { label: "FAQ", href: "#faq" },
];

export const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "Tracks", href: "#tracks" },
  { label: "Timelines", href: "#timeline" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Rewards", href: "#prizes" },
];

export const communityPartnersData = [
  { name: "Code Crafting", alt: "Code Crafting Logo", image: "/community-partners/code-crafting.png",  },
  { name: "Blitz", alt: "Blitz Logo", image: "/community-partners/blitz.png" },
  { name: "GeeksForGeeks BU", alt: "GeeksForGeeks BU Logo", image: "/community-partners/gfg-bu.png" },
  { name: "Spark Tech", alt: "Spark Tech AI Hub Logo", image: "/community-partners/spark-tech.png" },
  { name: "AWS Cloud Clubs GBU", alt: "AWS Cloud Clubs GBU Logo", image: "/community-partners/aws-cloud-clubs.png" },
  { name: "Campus Lens", alt: "Campus Lens Logo", image: "/community-partners/campus-lens.png" },
];

export const winners = [
  {
    place: "1st Place",
    amount: "$500",
    icon: Trophy,
    color: "text-yellow-100",
    spotlight: "rgba(253, 224, 71, 0.2)",
    border: "hover:border-yellow-500/40",
    perks: ["Mentorship", "Certificate", "Goodies"],
    id: 1,
    order: "lg:order-2",
  },
  {
    place: "2nd Place",
    amount: "$300",
    icon: Crown,
    color: "text-slate-200",
    spotlight: "rgba(226, 232, 240, 0.2)",
    border: "hover:border-slate-400/40",
    perks: ["Mentorship", "Certificate", "Goodies"],
    id: 2,
    order: "lg:order-1",
  },
  {
    place: "3rd Place",
    amount: "$200",
    icon: Award,
    color: "text-orange-100",
    spotlight: "rgba(253, 186, 116, 0.2)",
    border: "hover:border-orange-500/40",
    perks: ["Mentorship", "Certificate", "Goodies"],
    id: 3,
    order: "lg:order-3",
  },
];
