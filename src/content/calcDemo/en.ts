// English for calcDemoAz; the legal name VR GLOBAL GROUP MMC is kept as registered
import { registryEn } from "./registry-en";
import type { CalcDemo } from "./types";

export const calcDemoEn: CalcDemo = {
  topics: {
    book: {
      text: "Hello. I would like to order the book “VR Standards 2026”.",
      subject: "VR Standards 2026 — book order",
    },
    training: {
      text: "Hello. I would like to register for the “VR Standards 2026” methodological training.",
      subject: "VR Standards 2026 — training registration",
    },
    design: {
      text: "Hello. I would like to order design and a project based on VR Standards 2026.",
      subject: "VR Standards 2026 — design and project order",
    },
    corporate: {
      text: "Hello. I would like to arrange contract-based corporate training for our construction company on VR Standards 2026 and the professional use of the calculator.",
      subject: "VR Standards 2026 — corporate training enquiry",
    },
    general: {
      text: "Hello. I would like information about the VR Standards 2026 book, the methodological training and your services.",
      subject: "VR MINI DEMO — information request",
    },
  },
  actions: {
    whatsapp: "Contact via WhatsApp",
    email: "Contact by e-mail",
    whatsappShort: "WhatsApp",
    emailShort: "E-mail",
  },

  nav: {
    brandAria: "Official website of VR GLOBAL GROUP MMC",
    brand: "VR GLOBAL GROUP",
    brandSub: "NATIONAL STANDARDS",
    aria: "Page navigation",
    links: [
      { label: "Capabilities", href: "#kalk-imkanlar" },
      { label: "Projects and training", href: "#kalk-yollar" },
      { label: "References", href: "#kalk-istinadlar" },
    ],
    contact: "Contact us",
  },

  hero: {
    eyebrow: "VR STANDARDS 2026",
    eyebrowSub: "LIMITED DEMO",
    title: "Let the space",
    titleAccent: "adapt to you.",
    copy: "The same dimension, different people. Enter your height and see the difference between the base dimension and a preliminary individual result for three interior elements.",
    byline: "Mukhtar Erturan’s VR Adaptive Ergonomic Measurement System",
    proLine:
      "Professional system: ergonomics · lighting · ventilation · heating and cooling · safety",
    accessLabel: "ACCESS TO THE PROFESSIONAL VERSION",
    access:
      "Only for students who complete the methodological training and receive the special certificate.",
    accessMore: "See the conditions of provision",
    asideAria: "Scope of the demo",
    scopeTitle: "VR MINI DEMO",
    scopeSub: "WEB / R3",
    scopeCountLabel: "selected elements",
    scopeLines:
      "One height value.\nThree preliminary comparisons.\nA human-centred approach.",
    scopeBottom: "Free · No registration",
  },

  capabilities: {
    eyebrow: "SCOPE OF THE PROFESSIONAL SYSTEM",
    heading: "Not just three dimensions.\nA whole-space approach.",
    intro:
      "This open demo shows a small part of the system. Alongside ergonomics, the professional calculator also includes preliminary calculation and checking sections for lighting, ventilation, heating and cooling, and safety.",
    items: [
      {
        title: "Individual and family ergonomics",
        text: "User anthropometry, the element base, individual results and, where appropriate, shared preliminary candidates.",
        tag: "Measurement · comparison · functional check",
      },
      {
        title: "Lighting",
        text: "Illuminance by activity zone, preliminary luminous flux and assessment of lighting solutions.",
        tag: "lx · lm · activity surfaces",
      },
      {
        title: "Ventilation",
        text: "Checks of preliminary air flow rate, air paths and indoor air quality based on the room's function and volume.",
        tag: "m³/h · air flow · source control",
      },
      {
        title: "Heating and cooling",
        text: "A preliminary heating and cooling assessment from climate, room and construction data, and preparation for equipment selection.",
        tag: "W / kW · climate · heat load",
      },
      {
        title: "Safety systems",
        text: "Technical check areas for fire detection, electrical, gas / CO, water leaks, evacuation and accessibility.",
        tag: "Risk · engineering review · safety",
      },
      {
        title: "Room and project report",
        text: "Dimensions by space, base and source statuses, individual results and the parts that need clarification by a specialist.",
        tag: "Source · result · decision trail",
      },
    ],
    callout:
      "**The professional capabilities are introduced here; they are not enabled in the open demo.** Preliminary engineering calculations do not replace the full project, equipment selection or safety approval. Results are completed with actual measurements, the applicable requirements and a specialist's review.",
  },

  method: {
    eyebrow: "FROM FIGURE TO DECISION",
    heading: "The calculation is a start.\nSuitability is checked separately.",
    intro:
      "A preliminary result is one indicator. Applying it correctly in your space requires further measurement and a professional decision.",
    steps: [
      {
        title: "Base dimension",
        text: "The book's preliminary reference is shown. This figure is not a universal installation norm.",
      },
      {
        title: "Individual comparison",
        text: "Only a preliminary proportional result is calculated from your height.",
      },
      {
        title: "Functional check",
        text: "Reach at the switch, knee height at the seat, elbow height at the worktop and real use are assessed.",
      },
      {
        title: "Project decision",
        text: "Determined by a specialist once the product, safety and site conditions have been checked.",
      },
    ],
  },

  family: {
    eyebrow: "ONE HOME. DIFFERENT PEOPLE.",
    heading: "How does it work for a family?",
    intro:
      "See a ready example for three notional adult profiles. Adding your own family members is not part of the demo.",
    status:
      "Light switch centre · base: 900 mm. Three notional adult profiles. This is not your family's calculation. A shared installation height is not calculated.",
    profile: "Profile {name}",
    height: "Height: {n} cm",
    unitMm: "mm",
    profiles: [
      { name: "A", height: 160 },
      { name: "B", height: 170 },
      { name: "C", height: 180 },
    ],
    note: "**A shared dimension is not an automatic average.** No shared installation height is calculated here. Each person's actual reach, role in use and safety must be assessed separately.",
  },

  certification: {
    eyebrow: "A MANDATORY CONDITION FOR PROFESSIONAL USE",
    heading: "Methodological training.\nSpecial certificate.",
    headingAccent: "Professional calculator.",
    key: "The professional version of the VR Adaptive Ergonomic Calculator will be provided only to students who complete the “VR Standards 2026” methodological training and receive the special certificate.",
    copy: "This ensures that the knowledge gained is applied correctly in future professional practice. **Simply attending the course is not enough.**",
    channelAria: "Contact channel for training registration",
    whatsappAria: "Training registration — WhatsApp",
    emailAria: "Training registration — e-mail",
    stepsAria: "How the professional version is provided",
    steps: [
      "Complete the\n**“VR Standards 2026” methodological training.**",
      "Receive the\n**special certificate for the training.**",
      "With the professional calculator,\n**continue your professional practice.**",
    ],
    small:
      "The provision and use of the professional version are formalised under rules set by the company. Taking part in corporate training does not replace the methodological training and special certificate condition either. The open demo offers no download of the professional version and no automatic access.",
  },

  pathways: {
    eyebrow: "PROJECTS · EDUCATION · CORPORATE COOPERATION",
    heading: "Three ways to work with VR.",
    intro:
      "From the demo to a real project, from training to professional use.",
    items: [
      {
        kicker: "01 / PROJECT ORDER",
        title: "Interior solutions\nwith calculated dimensions.",
        text: "When you order design and a project based on VR Standards 2026, calculations are made with the VR Adaptive Ergonomic Calculator and interior solutions are prepared to suit the users, the space and the equipment.",
        note: "Base → individual calculation → functional check → project solution",
        topic: "design",
        channelAria: "Contact channel for design and project orders",
        whatsappAria: "Design and project order — WhatsApp",
        emailAria: "Design and project order — e-mail",
      },
      {
        kicker: "02 / FOR STUDENTS",
        title: "From certified training\nto professional use.",
        text: "Students who complete the “VR Standards 2026” methodological training and receive the special certificate will be provided with the professional version of the VR Adaptive Ergonomic Calculator for use in their future professional practice. The training covers carrying out the calculations, interpreting the results and the limits of application.",
        note: "Only students who complete the methodological training and receive the special certificate. Simply attending the course is not enough.",
        topic: "training",
        channelAria: "Contact channel for training registration",
        whatsappAria: "Training registration — WhatsApp",
        emailAria: "Training registration — e-mail",
      },
      {
        kicker: "03 / FOR CONSTRUCTION COMPANIES",
        title: "Corporate training\nfor your team.",
        text: "Corporate training is held for construction companies on a contract basis. The programme covers applying the VR Standards methodology in the design process and the professional use of the calculator.",
        note: "The format and scope of the training are set by contract. The condition of completing the methodological training and receiving the special certificate still applies to the provision of the professional version.",
        topic: "corporate",
        channelAria: "Contact channel for corporate training",
        whatsappAria: "Corporate training — WhatsApp",
        emailAria: "Corporate training — e-mail",
      },
    ],
    access:
      "The professional version will be provided only to students who complete the methodological training and receive the special certificate, under separate terms of use. Ordering the book, ordering a project or using the open demo does not create professional access automatically.",
  },

  standards: {
    eyebrow: "SCIENTIFIC AND TECHNICAL REFERENCE MAP",
    heading: "A design approach\nwith visible sources.",
    intro:
      "VR Standards 2026 presents local norms and international technical sources with their different scopes of application. The names below are references; they do not state that the company, the calculator or the results are certified by these bodies.",
    badgesAria: "Reference families; not certification marks",
    badges: [
      "AzDTN",
      "AZS / GOST",
      "ISO",
      "EN",
      "IEC",
      "DIN",
      "BS",
      "ASTM",
      "ASHRAE",
      "CIE / IES",
      "ADA",
      "NFPA",
    ],
    disclaimer:
      "**Local application requirements come first.** A standard, a law, a scientific guide, a product declaration and a certification system are not the same thing. The specific part, the edition in force and the scope of application to the site are checked separately for each project. Official logos and certification marks are not used.",
    registryTitle: "Selected source registry of the R14 book",
    registryMeta: "Annex C · 70 entries · 12 groups",
    registryCaption:
      "All 70 numbered entries of the registry are grouped below. This is not a list of all the standards in the world or of the book's entire bibliography. Showing a reference does not mean that its full method is calculated in the demo.",
    count: {
      one: "{n} entry",
      few: "{n} entries",
      many: "{n} entries",
      other: "{n} entries",
    },
    ...registryEn,
  },

  contact: {
    eyebrow: "NEXT STEP",
    heading: "From three dimensions\nto the whole space.",
    copy: "Order the book, and contact us about design and project solutions with VR calculations. Get information about student training and contract-based corporate training for your company.",
    small:
      "The full room programme, multi-user calculations and professional reports are not part of this open demo.",
    routes: [
      {
        title: "Order the book",
        topic: "book",
        whatsappAria: "Book order — WhatsApp",
        emailAria: "Book order — e-mail",
      },
      {
        title: "Register for training",
        topic: "training",
        whatsappAria: "Training registration — WhatsApp",
        emailAria: "Training registration — e-mail",
      },
      {
        title: "Design and project order",
        topic: "design",
        whatsappAria: "Design and project order — WhatsApp",
        emailAria: "Design and project order — e-mail",
      },
      {
        title: "Corporate training order",
        topic: "corporate",
        whatsappAria: "Corporate training — WhatsApp",
        emailAria: "Corporate training — e-mail",
      },
    ],
    channelAriaSuffix: "Contact channel: {title}",
    generalWhatsappAria: "General enquiry — WhatsApp",
    generalEmailAria: "General enquiry — e-mail",
    phoneLabel: "WhatsApp · +994 50 200 51 21",
    sendNote:
      "The text for the enquiry you choose opens ready to send. The message is sent only after you press “Send”; this link is not an automatic confirmation of an order or registration.",
    certNote:
      "The professional version will be provided only to students who complete the methodological training and receive the special certificate.",
    certLink: "See the conditions of provision.",
    website: "Introductory part of the book · millistandart.az",
  },

  rights: {
    eyebrow: "INTELLECTUAL PROPERTY AND AUTHORSHIP",
    heading: "The intellectual property of VR GLOBAL GROUP MMC.",
    lead: "The VR Adaptive Ergonomic Calculator and “VR MINI DEMO — WEB” are protected by copyright.",
    author:
      "The author of the VR Adaptive Ergonomic Coefficient and the VR Adaptive Ergonomic Measurement System is **Mukhtar Erturan**. The method was first presented systematically in the scientific work “VR Standards 2026”.",
    small:
      "Subject to the exceptions provided by law, copying the software code, texts and original presentation materials, distributing them in modified form or using them commercially without the written permission of the rights holder is not permitted. Terms agreed with the company apply to professional use.",
  },

  faq: {
    aria: "Sources and terms of use",
    items: [
      {
        q: "Who is the professional calculator provided to?",
        a: [
          "**Only to students who complete the “VR Standards 2026” methodological training and receive the special certificate.** Simply attending the course is not enough. The professional version will be provided for use in future professional practice under rules set by the company. The open demo does not verify certificates, open professional accounts or download the software.",
        ],
      },
      {
        q: "How is corporate training for construction companies organised?",
        a: [
          "Corporate training and training in the professional use of the calculator are held for construction companies on a contract basis. The programme, format and terms of participation are set in the contract. The conditions of completing the methodological training and receiving the special certificate also apply to corporate participants for the provision of the professional version.",
        ],
      },
      {
        q: "Source and limits of scientific application",
        a: [
          "“VR Standards 2026”, PRINT-001/R14: §6.5–§6.6 — preliminary proportional model; §6.7 — light switch; §6.8 — kitchen worktop; §6.10 — seat. The methodological reference height is 1700 mm. This is not the official average height of the population.",
          "The figures shown are rounded to 1 mm for presentation; this is not an installation tolerance. The same height does not replace different functional body dimensions. Children, special accessibility and different functional needs are not assessed in this limited example. Consult a specialist.",
          "The author of the VR Adaptive Ergonomic Coefficient and the VR Adaptive Ergonomic Measurement System is Mukhtar Erturan. The method was first presented systematically in the scientific work “VR Standards 2026”.",
        ],
      },
      {
        q: "What does the demo not unlock?",
        a: [
          "Only the preliminary comparison for three selected elements is open. Creating further users and rooms, viewing the full element registry, carrying out engineering calculations and exporting PDF/Excel/JSON reports are not possible. The ready family example is not an editable project.",
          "The full file of the book and the professional calculator are not included in this project. It is technically possible to copy the information shown on screen or take a screenshot.",
        ],
      },
      {
        q: "How is your data processed?",
        a: [
          "The demo does not collect a name, e-mail or phone number, and requires no registration before the calculation. The height submitted is used only for the current calculation on the server and is not stored in this application's database or application log. No cookies, advertising trackers or analytics have been added.",
          "A temporary technical trace derived from the IP address is kept in server memory to enforce the request limit. The access logs of the hosting and network providers may operate separately. The contact buttons open WhatsApp or the e-mail application with ready text for the enquiry you choose. The user sends the message themselves; orders and registrations are not confirmed automatically. Your height is not added to that enquiry automatically. Following the WhatsApp link opens a third-party service.",
        ],
      },
    ],
  },

  footer: {
    company: "VR GLOBAL GROUP MMC",
    copyright: "© 2026 VR GLOBAL GROUP MMC",
    author: "Author: Mukhtar Erturan · Protected by copyright.",
    product: "VR MINI DEMO — WEB",
    version: "R3 / 1.1.1",
    note: "A preliminary comparison. Not a final installation decision.",
  },
};
