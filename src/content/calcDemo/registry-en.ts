// English for registry-az.ts; document designations stay as published
import type { CalcDemo } from "./types";

export const registryEn: Pick<
  CalcDemo["standards"],
  "groups" | "supplemental" | "official"
> = {
  groups: [
    {
      title: "Local legal and regulatory framework",
      rows: [
        {
          title: "Civil Code",
          desc: "Contract, obligation and service relations.",
          kind: "Legal framework",
        },
        {
          title: "Urban Planning and Construction Code",
          desc: "The local framework for construction and design activity.",
          kind: "Legal framework",
        },
        {
          title: "Housing Code",
          desc: "Residential premises and the use of dwellings.",
          kind: "Legal framework",
        },
        {
          title: "Law on the Protection of Consumer Rights",
          desc: "Informing the client and the client's rights.",
          kind: "Legal framework",
        },
        {
          title: "AzDTN 2.7-2",
          desc: "Residential buildings; planning within the scope of application.",
          kind: "Local regulatory reference",
        },
        {
          title: "AzDTN 2.7-3",
          desc: "Design of individual (single-family) dwellings.",
          kind: "Local regulatory reference",
        },
        {
          title: "AzDTN 2.12-2*",
          desc: "Heating, ventilation and air conditioning.",
          kind: "Local regulatory reference",
        },
        {
          title: "AZS ГОСТ 21.101-2010",
          desc: "Presentation of design and working documentation.",
          kind: "Design documentation",
        },
        {
          title:
            "Azerbaijan's fire, gas, electrical, sanitary and occupational safety rules",
          desc: "The requirements that apply to a specific site are selected separately.",
          kind: "Local rules",
        },
      ],
    },
    {
      title: "Floor area, occupancy density and accessibility",
      rows: [
        {
          title: "Eurostat — overcrowding rate",
          desc: "A statistical assessment of housing density; not a dimensional norm.",
          kind: "Statistical method",
        },
        {
          title: "UK Nationally Described Space Standard (NDSS)",
          desc: "A comparison of dwelling space in England.",
          kind: "Foreign planning reference",
        },
        {
          title: "Approved Document M",
          desc: "Access to and use of buildings in England.",
          kind: "Guidance document",
        },
        {
          title: "2010 ADA Standards",
          desc: "Facilities within scope in the USA; not a general norm for all dwellings.",
          kind: "Foreign accessibility reference",
        },
        {
          title: "BS 8300-1 / BS 8300-2",
          desc: "Inclusive environment: external environment and buildings; the parts apply differently.",
          kind: "Foreign standard",
        },
      ],
    },
    {
      title: "Lighting and visual comfort",
      rows: [
        {
          title: "EN 12464-1",
          desc: "Lighting of indoor work places.",
          kind: "Comparative standard",
        },
        {
          title: "EN 17037",
          desc: "Daylight and visual conditions in buildings.",
          kind: "Comparative standard",
        },
        {
          title: "IES recommendations and lighting guides",
          desc: "Lighting approaches by activity zone.",
          kind: "Professional sources",
        },
        {
          title: "CRI · CCT / Kelvin · UGR",
          desc: "Colour rendering, colour temperature and glare; not a separate certificate.",
          kind: "Technical indicators",
        },
      ],
    },
    {
      title: "Ventilation and thermal comfort",
      rows: [
        {
          title: "ANSI/ASHRAE 55",
          desc: "Human and environmental factors of thermal comfort.",
          kind: "Comparative standard",
        },
        {
          title: "EN 16798-1",
          desc: "Input parameters for ventilation and the indoor environment.",
          kind: "Comparative standard",
        },
        {
          title: "ISO 17772-1",
          desc: "Indoor environmental quality in building energy calculations.",
          kind: "Comparative standard",
        },
        {
          title: "ANSI/ASHRAE 62.1",
          desc: "Ventilation of applicable buildings other than the interiors of dwelling units.",
          kind: "Comparative standard",
        },
        {
          title: "ANSI/ASHRAE 62.2",
          desc: "Ventilation and source control in dwelling units.",
          kind: "Comparative standard",
        },
        {
          title: "WHO Housing and Health Guidelines",
          desc: "Healthy housing and environmental risks.",
          kind: "Scientific guidance source",
        },
        {
          title: "WHO — dampness, mould and indoor air quality",
          desc: "Dampness, mould and indoor air quality.",
          kind: "Scientific guidance sources",
        },
      ],
    },
    {
      title: "Product performance and conformity documents",
      rows: [
        {
          title: "Regulation (EU) No 305/2011 — CPR",
          desc: "Construction products; transitional and application status is checked separately.",
          kind: "EU legal framework",
        },
        {
          title: "Regulation (EU) 2024/3110 — CPR",
          desc: "The updated construction products framework; application stages are checked separately.",
          kind: "EU legal framework",
        },
        {
          title: "CE marking",
          desc: "A declaration for a specific product under the relevant framework; not a VR certificate.",
          kind: "Product marking",
        },
        {
          title: "Declaration of Performance — DoP",
          desc: "Declared performance; not a guarantee of correct installation.",
          kind: "Product declaration",
        },
        {
          title: "ETA / EAD",
          desc: "Product assessment and the assessment document.",
          kind: "Technical assessment",
        },
        {
          title: "ASTM · EN · ISO · DIN · BS · GOST / AZS",
          desc: "Products and test methods; the specific document and part are selected.",
          kind: "Standard families",
        },
      ],
    },
    {
      title: "Fire, slip and material safety",
      rows: [
        {
          title: "EN 13501 series",
          desc: "Fire performance of construction products and building elements.",
          kind: "Classification standards",
        },
        {
          title: "EN 13501-1",
          desc: "Reaction to fire of construction products.",
          kind: "Classification standard",
        },
        {
          title: "EN 13501-6",
          desc: "Reaction to fire of electric cables.",
          kind: "Classification standard",
        },
        {
          title: "ISO 7010",
          desc: "Safety signs; the standard's signs are not reproduced here.",
          kind: "Signs standard",
        },
        {
          title: "EN / DIN / BS slip standards and product test reports",
          desc: "Slip resistance on wet and dry surfaces.",
          kind: "Test sources",
        },
      ],
    },
    {
      title: "Environmental indicators and emissions",
      rows: [
        {
          title: "ISO 14025",
          desc: "EPD programmes and environmental product declarations.",
          kind: "Declaration standard",
        },
        {
          title: "ISO 21930",
          desc: "Environmental information for construction products and services.",
          kind: "Declaration standard",
        },
        {
          title: "EN 15804",
          desc: "Core rules for EPDs of construction products.",
          kind: "Declaration standard",
        },
        {
          title:
            "GREENGUARD / Gold · FloorScore · M1 · Blue Angel · French VOC A+ · CDPH Standard Method",
          desc: "Indoor air and emission indicators; these are not standards of the same type.",
          kind: "Emission programmes and methods",
        },
        {
          title: "REACH / RoHS",
          desc: "Separate requirements on product and material composition.",
          kind: "Substance restriction frameworks",
        },
      ],
    },
    {
      title: "Wood, furniture and origin",
      rows: [
        {
          title: "FSC",
          desc: "Forest origin and responsible sourcing.",
          kind: "Certification system",
        },
        {
          title: "PEFC",
          desc: "Forest management and the supply chain.",
          kind: "Certification system",
        },
        {
          title: "Chain of Custody — CoC",
          desc: "Tracking certified material through the supply chain.",
          kind: "Traceability mechanism",
        },
      ],
    },
    {
      title: "Sustainability, energy and water",
      rows: [
        {
          title:
            "LEED · BREEAM · WELL · Fitwel · DGNB · HQE · Green Globes · Living Building Challenge",
          desc: "Building- and project-level approaches; not a claim that VR holds these certifications.",
          kind: "Building rating systems",
        },
        {
          title:
            "ENERGY STAR · EU Energy Label · WaterSense · WELS · NFRC · Passive House / Passivhaus",
          desc: "Energy, water, window and building performance; applied per product.",
          kind: "Performance and rating systems",
        },
      ],
    },
    {
      title: "Management, quality and occupational safety",
      rows: [
        {
          title: "ISO 9001",
          desc: "Quality management; not an automatic approval of a specific project.",
          kind: "Management system standard",
        },
        {
          title: "ISO 14001",
          desc: "Environmental management.",
          kind: "Management system standard",
        },
        {
          title: "ISO 45001",
          desc: "Occupational health and safety.",
          kind: "Management system standard",
        },
        {
          title: "ISO 50001",
          desc: "Energy management.",
          kind: "Management system standard",
        },
        {
          title: "OSHA and occupational safety approaches",
          desc: "A comparison for risk literacy; does not replace local requirements.",
          kind: "Foreign rules and methods",
        },
      ],
    },
    {
      title: "Design documentation, CAD and BIM",
      rows: [
        {
          title: "ISO 128",
          desc: "Presentation of technical drawings.",
          kind: "Drawing standards series",
        },
        {
          title: "ISO 13567",
          desc: "Organisation and naming of layers.",
          kind: "CAD standard",
        },
        {
          title: "ISO 19650 series",
          desc: "Management of construction information.",
          kind: "BIM standards",
        },
        {
          title: "IEC 60617",
          desc: "The symbol language of electrotechnical diagrams.",
          kind: "Graphical symbol source",
        },
        {
          title:
            "NCS · AIA CAD Layer Guidelines · CSI UDS · NIBS BIM / Plotting Guidelines",
          desc: "Sheet, layer, symbol and coordination approaches.",
          kind: "Design documentation systems",
        },
      ],
    },
    {
      title:
        "Core scientific and methodological sources and further local sources",
      rows: [
        {
          title: "ISO 7250-1",
          desc: "Definitions of body measurements and landmarks; not a certificate of the VR formula.",
          kind: "Anthropometry standard",
        },
        {
          title: "ISO 15535",
          desc: "Establishing anthropometric databases.",
          kind: "Anthropometry standard",
        },
        {
          title: "ISO 9241-210",
          desc: "The human-centred design process for interactive systems.",
          kind: "Ergonomics standard",
        },
        {
          title: "ISO 19011",
          desc: "Auditing management systems; not a construction acceptance certificate.",
          kind: "Audit guidance standard",
        },
        {
          title: "EN 17210",
          desc: "Functional requirements for the accessibility and usability of the built environment.",
          kind: "Accessibility standard",
        },
        {
          title: "DIN 18040-2",
          desc: "Barrier-free planning of dwellings in Germany.",
          kind: "Foreign design standard",
        },
        {
          title: "ISO 7730",
          desc: "Assessment of general and local thermal comfort.",
          kind: "Thermal ergonomics standard",
        },
        {
          title: "ISO 2631-2",
          desc: "Assessment of human exposure to vibration in buildings.",
          kind: "Vibration standard",
        },
        {
          title: "ISO 9241-5",
          desc: "Workstation layout and postural requirements.",
          kind: "Ergonomics standard",
        },
        {
          title: "DIN 4150-2",
          desc: "Effects of vibration in buildings on people.",
          kind: "Vibration standard",
        },
        {
          title: "DIN 4108-7",
          desc: "Airtightness of buildings; not a local norm.",
          kind: "Foreign construction standard",
        },
        {
          title: "AzDTN 2.12-2* — new edition note",
          desc: "A further registry note on heating, ventilation and air conditioning.",
          kind: "Local regulatory reference",
        },
        {
          title: "AzDTN 2.12-4*",
          desc: "Thermal protection of buildings.",
          kind: "Local regulatory reference",
        },
        {
          title: "AzDTN 2.12-6",
          desc: "Thermal insulation of equipment and pipelines.",
          kind: "Local regulatory reference",
        },
      ],
    },
  ],
  supplemental: {
    title: "Further references from the related engineering chapters",
    rows: [
      {
        title: "ISO/CIE 8995-1",
        desc: "Lighting of indoor work places",
        kind: "R14 §7B.9.19, §7B.15.22",
      },
      {
        title: "CIE 227",
        desc: "Lighting for older people and people with visual impairment",
        kind: "R14 §7B.15.22",
      },
      {
        title: "IEC 60598-1",
        desc: "Safety requirements for luminaires",
        kind: "R14 §7B.15.22",
      },
      {
        title: "IEC 60364 / IEC 60364-7-701",
        desc: "Low-voltage electrical installations; locations containing a bath or shower",
        kind: "R14 safety chapters, §7B.9.19",
      },
      {
        title: "IEC 60529",
        desc: "IP classification of enclosures",
        kind: "R14 §7B.9.19",
      },
      {
        title: "BS 7671",
        desc: "UK requirements for electrical installations",
        kind: "R14 safety and inspection chapters",
      },
      {
        title: "NFPA 70 — NEC",
        desc: "US rules for electrical installations",
        kind: "R14 safety chapters",
      },
      {
        title: "Approved Document B",
        desc: "England's fire safety guidance document",
        kind: "R14 safety chapters",
      },
      {
        title: "DIN 1946-6",
        desc: "Residential ventilation concept",
        kind: "R14 §7C.7.16",
      },
      {
        title: "ISO 52016-1",
        desc: "Method for building heating and cooling loads",
        kind: "R14 §7D.6 source table",
      },
      {
        title: "ASHRAE Handbook — Fundamentals",
        desc: "Heating, cooling and heat load methods",
        kind: "R14 §7D.6 source table",
      },
      {
        title: "ANSI/ACCA Manual J",
        desc: "Residential heating and cooling load method",
        kind: "R14 §7D.6 source table",
      },
      {
        title: "CSA F280",
        desc: "Heating and cooling capacity of residential buildings",
        kind: "R14 §7D.6 source table",
      },
      {
        title: "ISO 52120-1",
        desc: "Building automation and energy efficiency",
        kind: "R14 §7D.9.14",
      },
      {
        title: "ISO 5149-4",
        desc: "Operation and maintenance of refrigerating systems",
        kind: "R14 §7D.11.18",
      },
      {
        title: "ANSI/ASHRAE/ACCA 180",
        desc: "Maintenance of commercial HVAC systems",
        kind: "R14 §7D.11.18",
      },
      {
        title: "ANSI/ASHRAE/IES 202 · ASHRAE Guideline 0",
        desc: "Commissioning, documentation and handover of systems",
        kind: "R14 §7D.10.17",
      },
      {
        title: "AzDTN 1.6-2* · TNvəQ 3.05.01-85*",
        desc: "Organisation of construction works and internal sanitary systems",
        kind: "R14 §7D.10.17",
      },
      {
        title: "AzDTN 2.6-5 · AzDTN 2.7-12",
        desc: "Local scope for accessibility and public buildings",
        kind: "R14 §7A.9.22",
      },
      {
        title: "ANSI/IES/ALA RP-11-26",
        desc: "Lighting of residential environments",
        kind: "H3.10.64 user PDF §7B source note; IES catalogue",
      },
      {
        title: "МСН 2.04-05-95",
        desc: "Application reference for natural and artificial lighting",
        kind: "H3.10.64 user PDF §7B source note",
      },
      {
        title: "RIBA Plan of Work 2020",
        desc: "Stage-by-stage management of the design process",
        kind: "R14 implementation mechanism chapter",
      },
    ],
  },
  official: {
    title: "Official sources and the limits of verification",
    count: "Catalogue links",
    checked:
      "09.11.2026: the main selected catalogue and application pages have been checked. This is not a full audit of all regulatory texts, amendments and the current legal status of the 70 entries. The full texts of standards are not published on the site.",
    links: [
      {
        href: "https://www.iso.org/standard/65246.html",
        label: "ISO 7250-1",
        text: "Anthropometric measurement definitions; the official ISO catalogue.",
      },
      {
        href: "https://www.iso.org/cms/live/live/en/sites/isoorg/contents/data/standard/07/63/76342.html",
        label: "ISO/CIE 8995-1",
        text: "Indoor work places; not an automatic norm for every area of a dwelling.",
      },
      {
        href: "https://landingpage.bsigroup.com/LandingPage/Undated?UPI=000000000030081826",
        label: "EN 12464-1",
        text: "BSI current standards catalogue.",
      },
      {
        href: "https://ies.org/products/recommended-practice-lighting-for-interior-and-exterior-residential-environments-1/",
        label: "ANSI/IES/ALA RP-11-26",
        text: "IES catalogue entry on residential lighting.",
      },
      {
        href: "https://www.ashrae.org/technical-resources/bookstore/standards-62-1-62-2",
        label: "ASHRAE 62.1 / 62.2",
        text: "Ventilation sources for different types of facility.",
      },
      {
        href: "https://www.ashrae.org/technical-resources/standards-and-guidelines/standards-addenda",
        label: "ASHRAE addenda",
        text: "Amendments must be taken into account separately as of the project date.",
      },
      {
        href: "https://www.iso.org/standard/19011",
        label: "ISO 19011",
        text: "Guidelines for auditing management systems.",
      },
      {
        href: "https://www.iso.org/standard/14025",
        label: "ISO 14025",
        text: "Environmental product declarations; not a software certificate.",
      },
      {
        href: "https://www.arxkom.gov.az/index.php/qanunvericilik/normativler/muhendis-sistemleri?page=7",
        label: "Azerbaijani regulations",
        text: "ARXKOM regulatory catalogue for engineering systems.",
      },
      {
        href: "https://copat.gov.az/az/nav/tez-tez-sorushulan-suallar",
        label: "Copyright",
        text: "General explanation by the Intellectual Property Agency; it does not confirm a transfer of rights to a specific company.",
      },
      {
        href: "https://www.iso.org/media-kit.html",
        label: "ISO name and logo rules",
        text: "The official logo is not used without permission; the page contains text references only.",
      },
      {
        href: "https://frameworks.e-qanun.az/4/f_4167.html",
        label: "Law on Copyright",
        text: "A general legal source on copyright protection of software code; this catalogue link does not confirm a specific rights holder.",
      },
    ],
  },
};
