export type ServiceKey = "general" | "retirement" | "disability";

export const services: Record<
  ServiceKey,
  { name: string; meta: string; price: string; duration: string }
> = {
  general: {
    name: "General Consultation",
    meta: "30-min private call · Expert guidance on your situation",
    price: "$199",
    duration: "30 min",
  },
  retirement: {
    name: "Retirement Application Help",
    meta: "60-min Zoom · Walk through your mySSA.gov retirement application",
    price: "$299",
    duration: "60 min",
  },
  disability: {
    name: "Disability Application Help",
    meta: "90-min Zoom · Walk through your mySSA.gov disability application",
    price: "$299",
    duration: "90 min",
  },
};

const booking = (calendarId: string) =>
  `https://app.acuityscheduling.com/schedule.php?owner=34168585&calendarID=${calendarId}`;

export type Expert = {
  initials: string;
  name: string;
  title: string;
  bio: string;
  specialties: string[];
  booking: Partial<Record<ServiceKey, string>>;
};

export const experts: Expert[] = [
  {
    initials: "MJ",
    name: "Mai Jackson",
    title: "Retirement & Disability Consultant",
    bio: "Over 20 years at the SSA. Began as a Claims Specialist, rose to Claims Technical Expert and Program Expert in regional operations. Recipient of the Deputy Commissioner's Citation.",
    specialties: [
      "Retirement Benefits",
      "Disability Benefits",
      "Claims Processing",
      "Regional Operations",
    ],
    booking: { general: booking("11717596") },
  },
  {
    initials: "CC",
    name: "Chanda Costephens",
    title: "Retirement Specialist & Application Expert",
    bio: "15 years helping individuals navigate retirement, disability, survivors, and Medicare programs. Committed to providing clear and compassionate guidance to help you access the benefits you've earned.",
    specialties: [
      "Retirement Benefits",
      "Application Filing",
      "Survivors Benefits",
      "Medicare",
    ],
    booking: { general: booking("13214371"), retirement: booking("13056001") },
  },
  {
    initials: "JB",
    name: "Jay Burgos",
    title: "Retirement Specialist & Application Expert",
    bio: "Recently retired from the Social Security Administration with extensive experience in claims processing and retirement benefits. Specializes in helping people navigate the application process with confidence.",
    specialties: ["Retirement Benefits", "Application Filing", "Claims Processing"],
    booking: { general: booking("13214404"), retirement: booking("13059970") },
  },
  {
    initials: "TS",
    name: "Tarajee Stevenson",
    title: "Disability Specialist & Application Expert",
    bio: "Extensive SSA experience specializing in disability claims, medical evidence evaluation, and the application process. Passionate about helping people navigate the often-complex disability system.",
    specialties: [
      "Disability Benefits",
      "Application Filing",
      "Medical Documentation",
      "Appeals",
    ],
    booking: { general: booking("13214414"), disability: booking("13069238") },
  },
  {
    initials: "BB",
    name: "Brandi Bradford",
    title: "Disability Specialist & Application Expert",
    bio: "Former SSA professional with deep expertise in disability claims, CDR processes, and benefit reinstatement. Known for patient, thorough guidance through every step of the disability process.",
    specialties: [
      "Disability Benefits",
      "Application Filing",
      "CDR Process",
      "Reinstatement",
    ],
    booking: { general: booking("13214410"), disability: booking("13069199") },
  },
];

export const faqs = [
  {
    q: "What happens during a General Consultation?",
    a: "You'll have a private 30-minute phone or video call with a former SSA insider. You can ask any questions about your Social Security, retirement, disability, or Medicare situation. Your consultant will provide personalized guidance, explain your options in plain English, and give you clear next steps you can act on.",
  },
  {
    q: "What's included in the Retirement Application Help session?",
    a: "Retirement App Help sessions are conducted via Zoom with screen sharing. Your consultant will walk you through the actual retirement application on the mySSA.gov portal, step by step. They'll help you avoid common mistakes, ensure you're providing the right information, and maximize your benefit amount. Each session is 90 minutes to allow for the full filing process.",
  },
  {
    q: "What's included in the Disability Application Help session?",
    a: "Disability App Help sessions are conducted via Zoom with screen sharing. Your consultant will walk you through the actual disability application on the mySSA.gov portal, step by step. They'll help you avoid common mistakes, ensure you're providing the right information, and maximize your benefit amount. Each session is 90 minutes to allow for the full filing process.",
  },
  {
    q: "How do I choose the right consultant?",
    a: 'Each consultant has different specialties listed on their profile. For retirement questions or application help, look for consultants with "Retirement Specialist" in their title. For disability questions or application help, look for "Disability Specialist." For general questions about any topic, any of our consultants can help. If you\'re still unsure, the $199 General Consultation is a great place to start.',
  },
  {
    q: "Are there any hidden fees or upsells?",
    a: "No. Pricing is flat-rate and shown up front. You pay once for the session you book — there are no add-ons, no retainers, and no surprise charges.",
  },
  {
    q: "Can I reschedule or cancel my appointment?",
    a: "Yes. After booking, you'll receive a confirmation email with a link to reschedule or cancel your appointment. We ask for at least 24 hours' notice for cancellations.",
  },
  {
    q: "Is this legal advice?",
    a: "No. Our consultants are former SSA employees who provide educational guidance based on their insider knowledge. They are not attorneys and do not provide legal advice. For legal matters, many people find it helpful to consult with a qualified attorney who specializes in Social Security law.",
  },
];
