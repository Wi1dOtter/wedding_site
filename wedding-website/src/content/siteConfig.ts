export const siteConfig = {
  meta: {
    title: "Kyla Bonker & Jared Hermon",
    description:
      "Join us in Kansas City for the wedding of Jared Hermon and Kyla Bonker.",
  },
  couple: {
    fullName: "Jared Hermon & Kyla Bonker",
    shortName: "Jared & Kyla",
  },
  location: {
    city: "Kansas City, Missouri",
  },
  venue: {
    name: "The Guild KC",
    addressLine1: "2222 Example Street",
    addressLine2: "Suite 100",
    city: "Kansas City",
    state: "MO",
    postalCode: "64108",
    mapLink: "https://maps.google.com/?q=The+Guild+KC",
  },
  a11y: {
    skipToContent: "Skip to main content",
    navLabel: "Main navigation",
    openMenuLabel: "Open menu",
    closeMenuLabel: "Close menu",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Schedule", href: "/schedule" },
    { label: "Travel", href: "/travel" },
    { label: "Registry", href: "/registry" },
    { label: "FAQ", href: "/faq" },
    { label: "RSVP", href: "/rsvp" },
    { label: "Wedding Party", href: "/wedding-party" },
  ],
  polaroidBackground: {
    // Polaroid background photos: add images in /public/photos and list them here.
    // Remove any object to remove a photo. Captions are optional.
    home: {
      photos: [
        {
          src: "/photos/backdrop/img_01.jpg",
          caption: "Our favorite place",
          rotation: -7,
          size: "xl",
          position: { top: "10%", right: "1%" },
          offsetX: "6px",
          offsetY: "-6px",
        },
        {
          src: "/photos/backdrop/img_02.jpg",
          caption: "Coffee run",
          rotation: -10,
          size: "lg",
          position: { top: "4%", right: "80%" },
          offsetX: "-8px",
          offsetY: "6px",
          hideOnMobile: true,
        },
        {
          src: "/photos/backdrop/img_03.jpg",
          caption: "September glow",
          rotation: 3,
          size: "md",
          position: { top: "44%", right: "33%" },
          offsetX: "-18px",
          offsetY: "2px",
        },
        {
          src: "/photos/backdrop/img_04.jpg",
          caption: "Weekend getaway",
          rotation: -4,
          size: "lg",
          position: { top: "16%", right: "50%" },
          offsetX: "-6px",
          offsetY: "4px",
          hideOnMobile: true,
        },
        {
          src: "/photos/backdrop/img_05.jpg",
          caption: "Hand in hand",
          rotation: 10,
          size: "md",
          position: { top: "20%", right: "67%" },
          offsetX: "6px",
          offsetY: "-4px",
        },
        {
          src: "/photos/backdrop/img_06.jpg",
          caption: "Hand in hand",
          rotation: 10,
          size: "lg",
          position: { top: "20%", right: "19%" },
          offsetX: "6px",
          offsetY: "-4px",
          hideOnMobile: true,
        },
      ],
    },
    global: {
      photos: [
        {
          src: "/photos/backdrop/img_07.jpg",
          caption: "First look",
          rotation: 15,
          size: "xxl",
          position: { top: "20%", right: "40%" },
          offsetX: "-8px",
          offsetY: "6px",
          hideOnDesktop: true,
        },
        {
          src: "/photos/backdrop/img_09.jpg",
          caption: "Engagement day",
          rotation: -15,
          size: "xxl",
          position: { top: "30%", right: "1%" },
          offsetX: "4px",
          offsetY: "6px",
        },
        {
          src: "/photos/backdrop/img_10.jpg",
          caption: "Kansas City",
          rotation: -4,
          size: "xxl",
          position: { top: "37%", right: "50%" },
          offsetX: "-6px",
          offsetY: "4px",
        },
        {
          src: "/photos/backdrop/img_11.jpg",
          caption: "Sunday stroll",
          rotation: 6,
          size: "xxl",
          position: { top: "45%", right: "9%" },
          offsetX: "6px",
          offsetY: "-2px",
          hideOnDesktop: true,
        },
        {
          src: "/photos/backdrop/img_13.jpg",
          caption: "Sweet moments",
          rotation: 20,
          size: "xxl",
          position: { top: "65%", right: "50%" },
          hideOnDesktop: true,
        },
        {
          src: "/photos/backdrop/img_12.jpg",
          caption: "Forever us",
          rotation: -5,
          size: "xxl",
          position: { top: "55%", right: "30%" },
          offsetX: "-6px",
          offsetY: "8px",
        },
        {
          src: "/photos/backdrop/img_14.jpg",
          caption: "Engagement day",
          rotation: -15,
          size: "xxl",
          position: { top: "75%", right: "10%" },
        },
        {
          src: "/photos/backdrop/img_16.jpg",
          caption: "Sunday stroll",
          rotation: 6,
          size: "xl",
          position: { top: "60%", right: "2%" },
          offsetX: "6px",
          offsetY: "-2px",
          hideOnMobile: true,
        },
        {
          src: "/photos/backdrop/img_15.jpg",
          caption: "Kansas City",
          rotation: 10,
          size: "xxl",
          position: { top: "60%", right: "65%" },
          hideOnMobile: true,
        },
        {
          src: "/photos/backdrop/img_17.jpg",
          caption: "Forever us",
          rotation: -5,
          size: "xxl",
          position: { top: "80%", right: "40%" },
          offsetX: "-6px",
          offsetY: "8px",
          hideOnMobile: true,
        },
        // {
        //   src: "/photos/backdrop/img_18.jpg",
        //   caption: "Sweet moments",
        //   rotation: 3,
        //   size: "sm",
        //   position: { top: "0%", right: "0%" },
        //   offsetX: "2px",
        //   offsetY: "4px",
        //   hideOnMobile: true,
        // },
        // {
        //   src: "/photos/backdrop/img_08.jpg",
        //   caption: "Golden hour",
        //   rotation: 20,
        //   size: "xxl",
        //   position: { top: "0%", right: "0%" },
        //   offsetX: "6px",
        //   offsetY: "-4px",
        //   hideOnMobile: true,
        // },
      ],
    },
  },
  home: {
    hero: {
      eyebrow: "September 20, 2026",
      title: "We are getting married",
      subtitle:
        "A rustic chic celebration with warm neutrals, soft textures, and elegant details.",
      backgroundImage: "/hero-placeholder.svg",
      ctaButtons: [
        { label: "RSVP", href: "/rsvp", variant: "primary" },
        { label: "Travel", href: "/travel", variant: "secondary" },
        { label: "Registry", href: "/registry", variant: "outline" },
      ],
    },
    details: {
      heading: "Details",
      description:
        "We cannot wait to celebrate with you. More information will be added soon.",
      items: [
        { label: "Date", value: "Saturday, September 20, 2026" },
        { label: "Venue", value: "The Guild KC" },
        { label: "City", value: "Kansas City, Missouri" },
      ],
    },
    schedulePreview: {
      heading: "Weekend Schedule",
      description: "A quick look at our wedding weekend.",
      items: [
        {
          title: "Welcome Gathering",
          time: "Friday Evening",
          description: "Drinks and light bites with out-of-town guests.",
        },
        {
          title: "Ceremony",
          time: "Saturday Afternoon",
          description: "A heartfelt ceremony followed by a cocktail hour.",
        },
        {
          title: "Reception",
          time: "Saturday Evening",
          description: "Dinner, toasts, and dancing late into the night.",
        },
      ],
      linkLabel: "View full schedule",
      linkHref: "/schedule",
    },
  },
  schedule: {
    title: "Schedule",
    intro:
      "All times and locations are placeholders and will be updated closer to the wedding weekend.",
    sections: [
      {
        title: "Welcome",
        time: "Friday, 7:00 PM",
        location: "Hotel lobby lounge",
        description:
          "Casual meet and greet with light bites and a toast to the weekend.",
      },
      {
        title: "Ceremony",
        time: "Saturday, 4:30 PM",
        location: "The Guild KC",
        description:
          "Please arrive early to find your seat and enjoy a prelude.",
      },
      {
        title: "Reception",
        time: "Saturday, 6:00 PM",
        location: "The Guild KC",
        description:
          "Dinner, speeches, and dancing with our favorite people.",
      },
      {
        title: "After Party",
        time: "Saturday, 10:30 PM",
        location: "Nearby lounge",
        description:
          "Keep the celebration going with late-night snacks and music.",
      },
    ],
  },
  travel: {
    title: "Travel",
    intro:
      "We have reserved a hotel block and gathered travel notes to make your trip easy.",
    hotel: {
      name: "Hotel Placeholder",
      addressLine1: "1234 Market Street",
      addressLine2: "Kansas City, MO 64108",
      notes: "Use code WEDDING for the group rate. Rooms held until August 15.",
      bookingLink: "https://example.com/hotel-block",
      bookingLabel: "Book the hotel block",
    },
    map: {
      title: "Venue Map",
      iframeSrc: "https://maps.google.com/?q=The+Guild+KC&output=embed",
      placeholderText: "Map embed placeholder for The Guild KC.",
    },
    airports: {
      heading: "Airports",
      items: [
        "Kansas City International Airport (MCI) is about 25 minutes from downtown.",
        "Rideshare pickup is available at both terminals.",
      ],
    },
    transport: {
      heading: "Getting Around",
      items: [
        "Downtown KC is walkable with rideshare options nearby.",
        "Parking garages are available near the venue and hotel.",
      ],
    },
    thingsToDo: {
      heading: "Things to Do in KC",
      items: [
        "Explore the Crossroads Arts District.",
        "Visit the National WWI Museum and Memorial.",
        "Grab coffee at a local roaster or spend time at the River Market.",
      ],
    },
  },
  registry: {
    title: "Registry",
    intro:
      "Your presence is the best gift. For those who would like to contribute, we are registered here.",
    registries: [
      { label: "Registry One", href: "https://example.com/registry-one" },
      { label: "Registry Two", href: "https://example.com/registry-two" },
      { label: "Registry Three", href: "https://example.com/registry-three" },
    ],
    faqNoteTitle: "Registry FAQ",
    faqNoteBody:
      "If you have questions about gifts or shipping, please reach out to us directly.",
  },
  faq: {
    title: "FAQ",
    intro: "Answers to the questions we are asked the most.",
    items: [
      {
        question: "What is the dress code?",
        answer: "Rustic chic attire. Think polished, comfortable, and festive.",
      },
      {
        question: "Is parking available?",
        answer: "Yes. There are nearby garages and limited street parking.",
      },
      {
        question: "Are kids invited?",
        answer:
          "While we love your little ones, this will be an adults-only celebration.",
      },
      {
        question: "Can I bring a plus-one?",
        answer:
          "If your invitation includes a guest, they are welcome to join you.",
      },
      {
        question: "Will there be food options?",
        answer:
          "Yes. We will have a full dinner service with vegetarian options.",
      },
      {
        question: "What time should I arrive?",
        answer:
          "Please arrive 30 minutes before the ceremony to find your seat.",
      },
      {
        question: "Can I take photos?",
        answer:
          "We are planning an unplugged ceremony and will share photos afterward.",
      },
      {
        question: "Who can I contact with questions?",
        answer:
          "Email us at hello@example.com and we will get back to you soon.",
      },
    ],
  },
  rsvp: {
    title: "RSVP",
    intro:
      "Please respond by August 1, 2026 so we can finalize our guest count.",
    form: {
      iframeSrc:
        "https://docs.google.com/forms/d/e/placeholder/viewform?embedded=true",
      iframeTitle: "RSVP Form",
      buttonLabel: "Open RSVP Form",
      buttonHref: "https://docs.google.com/forms/d/e/placeholder/viewform",
    },
  },
  weddingParty: {
    title: "Wedding Party",
    intro: "The people who mean the world to us.",
    members: [
      {
        name: "Alex Johnson",
        role: "Best Man",
        photo: "",
      },
      {
        name: "Taylor Smith",
        role: "Maid of Honor",
        photo: "",
      },
      {
        name: "Jordan Lee",
        role: "Groomsman",
        photo: "",
      },
      {
        name: "Casey Park",
        role: "Bridesmaid",
        photo: "",
      },
      {
        name: "Morgan Ray",
        role: "Groomsman",
        photo: "",
      },
      {
        name: "Riley James",
        role: "Bridesmaid",
        photo: "",
      },
    ],
  },
  footer: {
    text: "Jared & Kyla",
    year: "2026",
  },
} as const;

export type SiteConfig = typeof siteConfig;
