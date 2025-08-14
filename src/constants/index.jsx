import KudaLogo from "../assets/kuda.png";
import PiggyvestLogo from "../assets/piggyvest.png";
import TixafricaLogo from "../assets/tixafrica.png";
import MoniepointLogo from "../assets/moniepoint.png";

import streamImage from "../assets/streamer.jpeg";
import chart from "../assets/chart.png";
import optimize from "../assets/optimize.jpeg";
import audienceEngagementImage from "../assets/audience.jpeg";
import reportImage from "../assets/monetize.jpeg";
import automationImage from "../assets/automation.jpeg";
import user1 from "../assets/user1.jpeg";
import user2 from "../assets/user2.jpeg";
import user3 from "../assets/user3.jpeg";
import user4 from "../assets/user4.jpeg";
import user5 from "../assets/user5.jpeg";
import user6 from "../assets/user6.jpeg";

import {
  RiBarChart2Line,
  RiSettings2Line,
  RiTeamLine,
  RiTwitchLine,
  RiYoutubeLine,
  RiCalendarLine,
} from "@remixicon/react";

export const HERO_CONTENT = {
  badgeText: "New Feature: Introducing automated employee performance tracker🎉",
  mainHeading: "The all-in-one workspace for everything HR",
  subHeading:
    "From HR processes to payroll optimize your efficiency, track real-time analytics, and make precise decision effortlessly—all in one place, for startups and big tech companies.",
  callToAction: {
    primary: "Start Free Trial",
    secondary: "Request a Demo",
  },
  trustedByText: "TRUSTED BY LEADING COMPANIES",
};

export const BRAND_LOGOS = [
  { src: KudaLogo, alt: "Kuda" },
  { src: PiggyvestLogo, alt: "Piggyvest" },
  { src: TixafricaLogo, alt: "Tixafrica" },
  { src: MoniepointLogo, alt: "Moniepoint" },
];

export const HOW_IT_WORKS_CONTENT = {
  sectionTitle: "How it works!",
  sectionDescription:
    "Get up and running with our 6-step process. From setup to performance tracking, we've got everything you need to elevate your HR processes.",
  steps: [
    {
      title: " 01 - Set Up Your Workspace",
      description:
        "Easily configure your workspace with our user-friendly tools. Invite employees in minutes.",
      imageSrc: streamImage,
      imageAlt: "workspace Setup",
    },
    {
      title: " 02 - Invite employees to your workspace",
      description:
        "Interact with your employee in real-time through custom alerts, chat overlays, and live notifications.",
      imageSrc: audienceEngagementImage,
      imageAlt: "Invite Employee",
      users: [user1, user2, user3, user5],
    },
    {
      title: " 03 - Track and Analyze Performance",
      description:
        "Monitor your stream’s performance in real-time with detailed analytics and viewer engagement insights.",
      imageSrc: chart,
      imageAlt: "Performance Analytics",
    },
    {
      title: " 04 - Optimize Your HR procesess Settings",
      description:
        "Fine-tune your HR processes for optimal performance, ensuring smooth transition with your workflows.",
      imageSrc: optimize,
      imageAlt: "Optimize Settings",
    },
    {
      title: " 05 - Automate Your Workflows",
      description:
        "Use advanced automation tools to manage your schedule, alerts, and analytics effortlessly.",
      imageSrc: automationImage,
      imageAlt: "Workflow Automation",
    },
    {
      title: " 06 - Get Detailed Performance Reports",
      description:
        "Track your performance and analytics seamlessly with detailed report.",
      imageSrc: reportImage,
      imageAlt: "Performance Reports",
    },
  ],
};

export const KEY_FEATURES_CONTENT = {
  sectionTitle: "Built for Modern Workplace",
  sectionDescription:
    "Everything you need to enhance your HR processes, all in one place.",
  features: [
    {
      id: 1,
      icon: <RiBarChart2Line className="w-8 h-8" />,
      title: "Payroll",
      description:
        "Run payroll all from a single platform, just easy with accurate paydays for you and your employees.",
    },
    {
      id: 2,
      icon: <RiSettings2Line className="w-8 h-8" />,
      title: "Automated Performance Management",
      description:
        "Set up automated alerts, schedules, and more with ease.",
    },
    {
      id: 3,
      icon: <RiTeamLine className="w-8 h-8" />,
      title: "Recuitment Management Tools",
      description:
        "Sort multiple hiring and onboarding process through custom alerts, chat integrations and integratons.",
    },
    {
      id: 4,
      icon: <RiTwitchLine className="w-8 h-8" />,
      title: "Time & Attendance",
      description:
        "Seamlessly connect with Twitch to automate alerts, manage subscribers, and track donations.",
    },
    {
      id: 5,
      icon: <RiYoutubeLine className="w-8 h-8" />,
      title: "Learning Management",
      description:
        "Go live on YouTube with built-in tools for managing chats, subscribers, and more.",
    },
    {
      id: 6,
      icon: <RiCalendarLine className="w-8 h-8" />,
      title: "Data Reports",
      description:
        "Plan and schedule your streams ahead of time, with reminders sent to your audience.",
    },
  ],
};

export const PLANS_CONTENT = {
  sectionTitle: "Choose Your Plan",
  sectionDescription:
    "terraHR offers flexible pricing plans to fit every business needs, from basic to enterprise.",
  popularBadge: "Most Popular",
  ctaText: "Get Started",
  plans: [
    {
      name: "Basic",
      price: "$49.99/month",
      description:
        "Perfect for early stage startup.",
      features: [
        "Basic analytics",
        "10-50 employee invite",
        "Limited support"
      ],
    },
    {
      name: "Standard",
      price: "$99.99/month",
      description:
        "For fast growing startup with need for advanced tools to track performance.",
      features: [
        "Advanced analytics",
        "50-500 employee invite",
        "Unlimited support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199.99/month",
      description:
        "For enterprise with need for cutting-edge tools and insights.",
      features: [
        "Premium analytics & reporting",
        "Full API access",
        "100-1000 employee invite",
        "Unlimited support",
      ],
    },
  ],
};

export const TESTIMONIALS_CONTENT = {
  sectionTitle: "What Our Customers Say",
  sectionDescription:
    "Hear from some of the businesses who use terraHR to run their HR processes.",
  reviews: [
    {
      name: "Alice Johnson",
      title: "Employee Success Manager",
      review:
        "terraHR is easy to use, and the support is excellent. And that's what HR professionals want.",
      image: user1,
    },
    {
      name: "Bob Smith",
      title: "Director of People",
      review:
        "I'd absolutely recommend terraHR Time Tracking. It's a great system that does exactly what you need it to do.",
      image: user2,
    },
    {
      name: "Carla Mendes",
      title: "Chief Operating Officer",
      review:
        "The way terraHR has designed the product has been very thoughtful — they've really, genuinely understood the needs of the employee as well as the needs of HR.",
      image: user3,
    },
    {
      name: "David Lee",
      title: "Chief of Staff",
      review:
        "BambooHR and payroll together have saved me almost 20 hours a week. ",
      image: user4,
    },
    {
      name: "Ella Fernandez",
      title: "Director of Talent",
      review:
        "terraHR and I are a package deal. If you hire me, I'm making the case for terraHR..",
      image: user5,
    },
    {
      name: "Frank Wilson",
      title: "Head of People",
      review:
        "terraHR changed the way HR delivers value to the business. We can now collaborate with other departments and be secure in metrics like headcount, pay rate, and PTO accrual.",
      image: user6,
    },
  ],
};

export const FOOTER_CONTENT = {
  sections: [
    {
      title: "COMPANY",
      links: [
        { text: "About Us", url: "#" },
        { text: "Careers", url: "#" },
        { text: "Blogs", url: "#" },
        { text: "Contact Us", url: "#" },
      ],
    },
    {
      title: "SUPPORT & RESOURCES",
      links: [
        { text: "Subscription Plans", url: "#" },
        { text: "Affiliate Program", url: "#" },
        { text: "Frequently Asked Questions", url: "#" },
        { text: "Latest Features", url: "#" },
        { text: "Workshops & Events", url: "#" },
      ],
    },
    {
      title: "CONNECT WITH US",
      links: [
        { text: "Facebook", url: "#" },
        { text: "TikTok", url: "#" },
        { text: "LinkedIn", url: "#" },
        { text: "YouTube", url: "#" },
      ],
    },
    {
      title: "EXPLORE MORE",
      links: [
        { text: "API", url: "#" },
        { text: "Partner with us", url: "#" },
        { text: "Customer Stories", url: "#" },
        { text: "Referral Program", url: "#" },
      ],
    },
  ],
  copyrightText: "© 2024 terraHR, Inc. All rights reserved.",
};
