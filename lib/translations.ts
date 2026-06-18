// FILE: lib/translations.ts

export type Lang = "en" | "hi" | "pa";

export const translations = {
  en: {
    // Navbar
    nav: {
      about: "About",
      services: "Services",
      gallery: "Gallery",
      events: "Events",
      volunteer: "Volunteer",
      donate: "Donate",
      contact: "Contact",
      donateBtn: "Donate Now",
      tagline: "Seva Hi Pooja Hai",
    },

    // Hero
    hero: {
      badge: "❤️ Serving Patients Near PGI Chandigarh",
      heading1: "Every Life",
      heading2: "Deserves A",
      heading3: "Fighting Chance",
      desc: "Kar Bhala Ho Bhala supports poor and underprivileged patients with medicines, food, accommodation and financial aid.",
      donateBtn: "Donate Now",
      missionBtn: "Our Mission",
      stat: "Patients Helped",
    },

    // Stats
    stats: {
      fallback: [
        { value: "5000+", label: "Patients Served" },
        { value: "10000+", label: "Medicines Distributed" },
        { value: "200+", label: "Volunteers" },
        { value: "₹50L+", label: "Aid Provided" },
      ],
    },

    // About
    about: {
      badge: "About Us",
      heading1: "Compassion In",
      heading2: "Action",
      desc: "Kar Bhala Ho Bhala was founded with a simple belief that no patient should suffer because of poverty. Every day families arrive at PGI Chandigarh seeking treatment. Many struggle with medicines, food, accommodation and financial support. Our volunteers stand beside them with dignity, compassion and practical help.",
      mission: { title: "Mission", desc: "Ensure every patient receives support regardless of financial condition." },
      vision: { title: "Vision", desc: "Build a compassionate healthcare support network across India." },
      transparency: { title: "Transparency", desc: "Every donation is used responsibly and reported transparently." },
      credentials: {
        title: "Trust Credentials",
        reg: "Registration No.",
        g80: "80G Certified",
        a12: "12A Registered",
        years: "Years of Service",
        available: "Available",
        verified: "Verified",
      },
    },

    // Gallery
    gallery: {
      badge: "Gallery",
      heading1: "Moments Of",
      heading2: "Service & Hope",
      desc: "A glimpse of our volunteers, medical support activities, food distribution, patient assistance and community service.",
      categories: ["All", "Camps", "Distribution", "Volunteers"],
    },

    // Services
    services: {
      badge: "What We Do",
      heading1: "Helping Patients With",
      heading2: "Dignity & Care",
      desc: "Our volunteers provide practical help and compassionate support to families facing medical challenges.",
      list: [
        { title: "Free Diagnosis Support", desc: "Help with medical reports, consultations and second opinions." },
        { title: "Medication Assistance", desc: "Providing free and subsidized medicines to patients." },
        { title: "Food & Nutrition", desc: "Daily meals and nutrition support for patients and attendants." },
        { title: "Financial Aid", desc: "Support for hospital bills and emergency treatment expenses." },
        { title: "Accommodation Help", desc: "Temporary stay arrangements for outstation families." },
        { title: "Emotional Support", desc: "Volunteers who listen, guide and support families emotionally." },
      ],
    },

    // HowItWorks
    howItWorks: {
      badge: "How It Works",
      heading1: "Simple Process,",
      heading2: "Real Impact",
      steps: [
        { title: "Patient Contacts Trust", desc: "Patient or family contacts our volunteers for support." },
        { title: "Needs Assessment", desc: "Volunteer understands medical, financial and personal needs." },
        { title: "Immediate Help", desc: "Medicines, food, accommodation or aid is arranged quickly." },
        { title: "Follow-up Support", desc: "Continuous guidance and support throughout treatment." },
      ],
    },

    // Testimonials
    testimonials: {
      badge: "Patient Stories",
      heading1: "Real Stories.",
      heading2: "Real Impact.",
    },

    // Donate
    donate: {
      badge: "Support A Patient",
      heading: "Your Donation Can Save Lives",
      desc: "Every contribution helps provide medicines, food, accommodation and emergency support to patients admitted at PGI Chandigarh.",
      upiTitle: "Donate via UPI",
      upiId: "9473093492@axl",
      openUpi: "Open UPI App",
      amounts: [
        { amount: "₹100", desc: "One nutritious meal" },
        { amount: "₹500", desc: "Essential medicines" },
        { amount: "₹2000", desc: "Treatment assistance" },
      ],
      bank: {
        title: "Bank Transfer",
        name: "Account Name: Saransh",
        acc: "Account No: 147622010001484",
        ifsc: "IFSC: UBIN0914762",
        bank: "Bank: Union Bank Of India",
      },
      trust: ["80G Tax Exemption", "Registered Trust", "Transparent Fund Usage"],
    },

    // Volunteer
    volunteer: {
      badge: "Volunteer With Us",
      heading1: "Become A Part Of",
      heading2: "The Change",
      desc: "Every act of kindness matters. Join our volunteers and help patients facing medical and financial hardships.",
      roles: [
        { title: "Medical Volunteers", desc: "Guide patients and families during treatment." },
        { title: "Support Runners", desc: "Help with medicines, reports and logistics." },
        { title: "Counselors", desc: "Provide emotional support and guidance." },
        { title: "Community Volunteers", desc: "Support fundraising and awareness campaigns." },
      ],
      form: {
        badge: "Join The Team",
        heading: "Apply As A Volunteer",
        fullName: "Full Name *",
        email: "Email",
        phone: "Phone Number *",
        role: "Select Role *",
        motivation: "Why do you want to volunteer?",
        submit: "Submit Application",
        submitting: "Submitting...",
        submitted: "✅ Application Submitted!",
        error: "Please fill in Name, Phone and Role.",
        errorServer: "Something went wrong. Please try again.",
      },
    },

    // Contact
    contact: {
      badge: "Contact Us",
      heading: "Need Help?",
      call: "Call Us",
      email: "Email",
      visit: "Visit Us",
      address: "Near PGI Chandigarh",
    },

    // GetHelpForm
    getHelp: {
      badge: "Need Assistance?",
      heading: "Request Help",
      subheading: "Fill this form and our volunteers will contact you within a few hours.",
      patientName: "Patient Name *",
      guardianName: "Guardian Name",
      phone: "Mobile Number *",
      ward: "Hospital Ward Number",
      helpNeeded: "Describe Help Needed *",
      submit: "Submit Request",
      submitting: "Submitting...",
      submitted: "✅ Request Submitted!",
      error: "Please fill in Patient Name, Phone and Help Needed.",
      errorServer: "Something went wrong. Please try again.",
    },

    // Location
    location: {
      badge: "Visit Us",
      heading: "Near PGI Chandigarh",
      desc: "Patients and families can visit us directly for assistance and guidance.",
    },

    // Footer
    footer: {
      desc: "Supporting poor and underprivileged patients around PGI Chandigarh with medicines, food, accommodation and financial aid.",
      quickLinks: "Quick Links",
      trustInfo: "Trust Information",
      contact: "Contact",
      trust: ["Registered Trust", "80G Certified", "12A Registered", "Audited Accounts"],
      privacy: "Privacy Policy",
      terms: "Terms",
      copyright: "© 2026 Saransh. All Rights Reserved.",
    },

    // Cookie
    cookie: {
      title: "🍪 Cookie Notice",
      desc: "We use cookies to improve your experience and understand website usage.",
      accept: "Accept",
    },

    // Events
    events: {
      badge: "Upcoming Events",
      heading1: "Medical Camps",
      heading2: "& Activities",
      desc: "Join us at our upcoming camps and community activities. Everyone is welcome.",
    },

    // FAQ
    faq: {
      badge: "FAQ",
      heading1: "Frequently Asked",
      heading2: "Questions",
      desc: "Common questions about donations, volunteering, and patient support at Kar Bhala Ho Bhala.",
      items: [
        {
          q: "What does Kar Bhala Ho Bhala do?",
          a: "Kar Bhala Ho Bhala is a registered charitable trust near PGI Chandigarh, India that provides poor and underprivileged patients with free medicines, food, accommodation, financial aid, and emotional support during their medical treatment.",
        },
        {
          q: "Is my donation to Kar Bhala Ho Bhala tax deductible?",
          a: "Yes. Kar Bhala Ho Bhala is registered under Section 80G and Section 12A of the Income Tax Act, 1961. You can claim tax exemption, and an 80G donation receipt (PDF) can be generated instantly on this website by entering your name, amount, and UPI/bank transaction ID.",
        },
        {
          q: "How can I donate to Kar Bhala Ho Bhala?",
          a: "You can donate via UPI (scan the QR code or pay to 9473093492@axl), or via direct bank transfer to the trust's Union Bank of India account. A monthly recurring donation option with WhatsApp reminders is also available.",
        },
        {
          q: "How can I volunteer with Kar Bhala Ho Bhala?",
          a: "Fill out the volunteer application form on this website and choose a role — Medical Volunteer, Counselor, Support Runner, or Community Volunteer. Once approved, you'll receive a WhatsApp invite to join the volunteer coordination group.",
        },
        {
          q: "Where is Kar Bhala Ho Bhala located?",
          a: "Kar Bhala Ho Bhala operates near PGI (Post Graduate Institute of Medical Education and Research), Chandigarh, India, primarily serving patients and families seeking treatment at PGI Chandigarh.",
        },
        {
          q: "How can a patient or family request help?",
          a: "Patients or family members can submit a 'Request Help' form on this website with the patient's name, hospital ward number, and details of the assistance needed. A volunteer reviews and responds within hours.",
        },
      ],
    },
  },

  hi: {
    nav: {
      about: "हमारे बारे में",
      services: "सेवाएं",
      gallery: "गैलरी",
      volunteer: "स्वयंसेवक",
      events: "इवेंट्स",
      donate: "दान करें",
      contact: "संपर्क",
      donateBtn: "अभी दान करें",
      tagline: "सेवा ही पूजा है",
    },

    hero: {
      badge: "❤️ PGI चंडीगढ़ के पास मरीज़ों की सेवा",
      heading1: "हर जीवन",
      heading2: "को मिले एक",
      heading3: "लड़ने का मौका",
      desc: "कर भला हो भला गरीब और जरूरतमंद मरीजों को दवाइयां, खाना, आवास और आर्थिक सहायता प्रदान करता है।",
      donateBtn: "अभी दान करें",
      missionBtn: "हमारा मिशन",
      stat: "मरीज़ों की मदद",
    },

    stats: {
      fallback: [
        { value: "5000+", label: "मरीज़ों की सेवा" },
        { value: "10000+", label: "दवाइयां वितरित" },
        { value: "200+", label: "स्वयंसेवक" },
        { value: "₹50L+", label: "सहायता प्रदान" },
      ],
    },

    about: {
      badge: "हमारे बारे में",
      heading1: "करुणा",
      heading2: "कार्य में",
      desc: "कर भला हो भला की स्थापना इस सरल विश्वास के साथ हुई कि कोई भी मरीज गरीबी के कारण तकलीफ न उठाए। हर रोज परिवार PGI चंडीगढ़ इलाज के लिए आते हैं। कई लोग दवाइयों, खाने, आवास और आर्थिक सहायता के लिए संघर्ष करते हैं। हमारे स्वयंसेवक सम्मान, करुणा और व्यावहारिक मदद के साथ उनके साथ खड़े रहते हैं।",
      mission: { title: "मिशन", desc: "हर मरीज को आर्थिक स्थिति की परवाह किए बिना सहायता सुनिश्चित करना।" },
      vision: { title: "दृष्टि", desc: "पूरे भारत में एक दयालु स्वास्थ्य सेवा सहायता नेटवर्क बनाना।" },
      transparency: { title: "पारदर्शिता", desc: "हर दान का जिम्मेदारी से उपयोग और पारदर्शी रिपोर्टिंग।" },
      credentials: {
        title: "ट्रस्ट प्रमाण-पत्र",
        reg: "पंजीकरण संख्या",
        g80: "80G प्रमाणित",
        a12: "12A पंजीकृत",
        years: "सेवा के वर्ष",
        available: "उपलब्ध",
        verified: "सत्यापित",
      },
    },

    gallery: {
      badge: "गैलरी",
      heading1: "सेवा और आशा के",
      heading2: "पल",
      desc: "हमारे स्वयंसेवकों, चिकित्सा सहायता, खाना वितरण, मरीज सहायता और सामुदायिक सेवा की झलक।",
      categories: ["सभी", "शिविर", "वितरण", "स्वयंसेवक"],
    },

    services: {
      badge: "हम क्या करते हैं",
      heading1: "मरीजों की सहायता",
      heading2: "सम्मान और देखभाल से",
      desc: "हमारे स्वयंसेवक चिकित्सा चुनौतियों का सामना करने वाले परिवारों को व्यावहारिक और करुणामय सहायता प्रदान करते हैं।",
      list: [
        { title: "निःशुल्क निदान सहायता", desc: "मेडिकल रिपोर्ट, परामर्श और दूसरी राय में मदद।" },
        { title: "दवाई सहायता", desc: "मरीजों को मुफ्त और सब्सिडी वाली दवाइयां प्रदान करना।" },
        { title: "भोजन और पोषण", desc: "मरीजों और परिचारकों के लिए रोजाना भोजन और पोषण सहायता।" },
        { title: "आर्थिक सहायता", desc: "अस्पताल बिल और आपातकालीन इलाज खर्च के लिए सहायता।" },
        { title: "आवास सहायता", desc: "बाहर से आने वाले परिवारों के लिए अस्थायी रहने की व्यवस्था।" },
        { title: "भावनात्मक सहायता", desc: "स्वयंसेवक जो परिवारों को सुनते, मार्गदर्शन करते और भावनात्मक सहायता देते हैं।" },
      ],
    },

    howItWorks: {
      badge: "कैसे काम करता है",
      heading1: "सरल प्रक्रिया,",
      heading2: "असली प्रभाव",
      steps: [
        { title: "मरीज ट्रस्ट से संपर्क करे", desc: "मरीज या परिवार हमारे स्वयंसेवकों से सहायता के लिए संपर्क करें।" },
        { title: "जरूरतों का आकलन", desc: "स्वयंसेवक चिकित्सा, आर्थिक और व्यक्तिगत जरूरतों को समझता है।" },
        { title: "तुरंत मदद", desc: "दवाइयां, खाना, आवास या सहायता जल्दी से व्यवस्थित की जाती है।" },
        { title: "अनुवर्ती सहायता", desc: "पूरे इलाज के दौरान निरंतर मार्गदर्शन और सहायता।" },
      ],
    },

    testimonials: {
      badge: "मरीजों की कहानियां",
      heading1: "असली कहानियां।",
      heading2: "असली प्रभाव।",
    },

    donate: {
      badge: "एक मरीज का सहयोग करें",
      heading: "आपका दान जीवन बचा सकता है",
      desc: "हर योगदान PGI चंडीगढ़ में भर्ती मरीजों को दवाइयां, खाना, आवास और आपातकालीन सहायता प्रदान करने में मदद करता है।",
      upiTitle: "UPI से दान करें",
      upiId: "9473093492@axl",
      openUpi: "UPI ऐप खोलें",
      amounts: [
        { amount: "₹100", desc: "एक पौष्टिक भोजन" },
        { amount: "₹500", desc: "जरूरी दवाइयां" },
        { amount: "₹2000", desc: "इलाज सहायता" },
      ],
      bank: {
        title: "बैंक ट्रांसफर",
        name: "खाता नाम: सारांश",
        acc: "खाता संख्या: 147622010001484",
        ifsc: "IFSC: UBIN0914762",
        bank: "बैंक: यूनियन बैंक ऑफ इंडिया",
      },
      trust: ["80G कर छूट", "पंजीकृत ट्रस्ट", "पारदर्शी फंड उपयोग"],
    },

    volunteer: {
      badge: "हमारे साथ स्वयंसेवा करें",
      heading1: "बदलाव का",
      heading2: "हिस्सा बनें",
      desc: "दयालुता का हर कार्य मायने रखता है। हमारे स्वयंसेवकों से जुड़ें और चिकित्सा व आर्थिक कठिनाइयों का सामना करने वाले मरीजों की मदद करें।",
      roles: [
        { title: "चिकित्सा स्वयंसेवक", desc: "इलाज के दौरान मरीजों और परिवारों का मार्गदर्शन करें।" },
        { title: "सहायता धावक", desc: "दवाइयों, रिपोर्ट और लॉजिस्टिक्स में मदद करें।" },
        { title: "परामर्शदाता", desc: "भावनात्मक सहायता और मार्गदर्शन प्रदान करें।" },
        { title: "सामुदायिक स्वयंसेवक", desc: "धन उगाही और जागरूकता अभियानों में सहायता करें।" },
      ],
      form: {
        badge: "टीम से जुड़ें",
        heading: "स्वयंसेवक के रूप में आवेदन करें",
        fullName: "पूरा नाम *",
        email: "ईमेल",
        phone: "फोन नंबर *",
        role: "भूमिका चुनें *",
        motivation: "आप स्वयंसेवा क्यों करना चाहते हैं?",
        submit: "आवेदन जमा करें",
        submitting: "जमा हो रहा है...",
        submitted: "✅ आवेदन जमा हो गया!",
        error: "कृपया नाम, फोन और भूमिका भरें।",
        errorServer: "कुछ गलत हुआ। कृपया पुनः प्रयास करें।",
      },
    },

    contact: {
      badge: "संपर्क करें",
      heading: "मदद चाहिए?",
      call: "कॉल करें",
      email: "ईमेल",
      visit: "मिलें",
      address: "PGI चंडीगढ़ के पास",
    },

    getHelp: {
      badge: "सहायता चाहिए?",
      heading: "सहायता मांगें",
      subheading: "यह फॉर्म भरें और हमारे स्वयंसेवक कुछ घंटों में आपसे संपर्क करेंगे।",
      patientName: "मरीज का नाम *",
      guardianName: "अभिभावक का नाम",
      phone: "मोबाइल नंबर *",
      ward: "अस्पताल वार्ड नंबर",
      helpNeeded: "किस तरह की मदद चाहिए *",
      submit: "अनुरोध जमा करें",
      submitting: "जमा हो रहा है...",
      submitted: "✅ अनुरोध जमा हो गया!",
      error: "कृपया मरीज का नाम, फोन और मदद का विवरण भरें।",
      errorServer: "कुछ गलत हुआ। कृपया पुनः प्रयास करें।",
    },

    location: {
      badge: "हमसे मिलें",
      heading: "PGI चंडीगढ़ के पास",
      desc: "मरीज और परिवार सीधे हमसे मिलकर सहायता और मार्गदर्शन प्राप्त कर सकते हैं।",
    },

    footer: {
      desc: "PGI चंडीगढ़ के पास गरीब और जरूरतमंद मरीजों को दवाइयां, खाना, आवास और आर्थिक सहायता प्रदान करना।",
      quickLinks: "त्वरित लिंक",
      trustInfo: "ट्रस्ट जानकारी",
      contact: "संपर्क",
      trust: ["पंजीकृत ट्रस्ट", "80G प्रमाणित", "12A पंजीकृत", "ऑडिटेड खाते"],
      privacy: "गोपनीयता नीति",
      terms: "नियम",
      copyright: "© 2026 सारांश। सर्वाधिकार सुरक्षित।",
    },

    cookie: {
      title: "🍪 कुकी सूचना",
      desc: "हम आपके अनुभव को बेहतर बनाने और वेबसाइट उपयोग को समझने के लिए कुकीज़ का उपयोग करते हैं।",
      accept: "स्वीकार करें",
    },

    // Events
    events: {
      badge: "आगामी कार्यक्रम",
      heading1: "मेडिकल कैंप",
      heading2: "और गतिविधियां",
      desc: "हमारे आगामी कैंप और सामुदायिक गतिविधियों में शामिल हों। सभी का स्वागत है।",
    },

    // FAQ
    faq: {
      badge: "सामान्य प्रश्न",
      heading1: "अक्सर पूछे जाने वाले",
      heading2: "प्रश्न",
      desc: "कर भला हो भला में दान, स्वयंसेवा और मरीज सहायता के बारे में सामान्य प्रश्न।",
      items: [
        {
          q: "कर भला हो भला क्या करता है?",
          a: "कर भला हो भला PGI चंडीगढ़ के पास एक पंजीकृत चैरिटेबल ट्रस्ट है जो गरीब और जरूरतमंद मरीजों को इलाज के दौरान मुफ्त दवाइयां, खाना, आवास, आर्थिक सहायता और भावनात्मक सहायता प्रदान करता है।",
        },
        {
          q: "क्या कर भला हो भला को दिया गया दान टैक्स में छूट योग्य है?",
          a: "हाँ। कर भला हो भला आयकर अधिनियम, 1961 की धारा 80G और 12A के अंतर्गत पंजीकृत है। आप टैक्स छूट का दावा कर सकते हैं, और इस वेबसाइट पर अपना नाम, राशि और UPI/बैंक ट्रांजेक्शन ID डालकर तुरंत 80G दान रसीद (PDF) प्राप्त कर सकते हैं।",
        },
        {
          q: "मैं कर भला हो भला को दान कैसे कर सकता हूं?",
          a: "आप UPI के माध्यम से दान कर सकते हैं (QR कोड स्कैन करें या 9473093492@axl पर भुगतान करें), या ट्रस्ट के यूनियन बैंक ऑफ इंडिया खाते में सीधे बैंक ट्रांसफर कर सकते हैं। WhatsApp रिमाइंडर के साथ मासिक नियमित दान का विकल्प भी उपलब्ध है।",
        },
        {
          q: "मैं कर भला हो भला के साथ स्वयंसेवक कैसे बन सकता हूं?",
          a: "इस वेबसाइट पर स्वयंसेवक आवेदन फॉर्म भरें और एक भूमिका चुनें — चिकित्सा स्वयंसेवक, परामर्शदाता, सहायता धावक, या सामुदायिक स्वयंसेवक। स्वीकृत होने पर, आपको स्वयंसेवक समन्वय समूह में शामिल होने के लिए WhatsApp आमंत्रण मिलेगा।",
        },
        {
          q: "कर भला हो भला कहां स्थित है?",
          a: "कर भला हो भला PGI (पोस्ट ग्रेजुएट इंस्टीट्यूट ऑफ मेडिकल एजुकेशन एंड रिसर्च), चंडीगढ़, भारत के पास कार्य करता है, और मुख्य रूप से PGI चंडीगढ़ में इलाज की तलाश करने वाले मरीजों और परिवारों की सेवा करता है।",
        },
        {
          q: "एक मरीज या परिवार सहायता का अनुरोध कैसे कर सकता है?",
          a: "मरीज या परिवार के सदस्य इस वेबसाइट पर 'सहायता मांगें' फॉर्म में मरीज का नाम, अस्पताल वार्ड नंबर और आवश्यक सहायता का विवरण भरकर अनुरोध कर सकते हैं। एक स्वयंसेवक कुछ घंटों में जांच कर जवाब देगा।",
        },
      ],
    },
  },

  pa: {
    nav: {
      about: "ਸਾਡੇ ਬਾਰੇ",
      services: "ਸੇਵਾਵਾਂ",
      gallery: "ਗੈਲਰੀ",
      volunteer: "ਵਾਲੰਟੀਅਰ",
      donate: "ਦਾਨ ਕਰੋ",
      events: "ਪ੍ਰੋਗਰਾਮ",
      contact: "ਸੰਪਰਕ",
      donateBtn: "ਹੁਣੇ ਦਾਨ ਕਰੋ",
      tagline: "ਸੇਵਾ ਹੀ ਪੂਜਾ ਹੈ",
    },

    hero: {
      badge: "❤️ PGI ਚੰਡੀਗੜ੍ਹ ਨੇੜੇ ਮਰੀਜ਼ਾਂ ਦੀ ਸੇਵਾ",
      heading1: "ਹਰ ਜ਼ਿੰਦਗੀ",
      heading2: "ਨੂੰ ਮਿਲੇ",
      heading3: "ਲੜਨ ਦਾ ਮੌਕਾ",
      desc: "ਕਰ ਭਲਾ ਹੋ ਭਲਾ ਗਰੀਬ ਅਤੇ ਲੋੜਵੰਦ ਮਰੀਜ਼ਾਂ ਨੂੰ ਦਵਾਈਆਂ, ਖਾਣਾ, ਰਿਹਾਇਸ਼ ਅਤੇ ਵਿੱਤੀ ਸਹਾਇਤਾ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।",
      donateBtn: "ਹੁਣੇ ਦਾਨ ਕਰੋ",
      missionBtn: "ਸਾਡਾ ਮਿਸ਼ਨ",
      stat: "ਮਰੀਜ਼ਾਂ ਦੀ ਮਦਦ",
    },

    stats: {
      fallback: [
        { value: "5000+", label: "ਮਰੀਜ਼ਾਂ ਦੀ ਸੇਵਾ" },
        { value: "10000+", label: "ਦਵਾਈਆਂ ਵੰਡੀਆਂ" },
        { value: "200+", label: "ਵਾਲੰਟੀਅਰ" },
        { value: "₹50L+", label: "ਸਹਾਇਤਾ ਦਿੱਤੀ" },
      ],
    },

    about: {
      badge: "ਸਾਡੇ ਬਾਰੇ",
      heading1: "ਦਇਆ",
      heading2: "ਕਾਰਜ ਵਿੱਚ",
      desc: "ਕਰ ਭਲਾ ਹੋ ਭਲਾ ਦੀ ਸਥਾਪਨਾ ਇਸ ਸਰਲ ਵਿਸ਼ਵਾਸ ਨਾਲ ਹੋਈ ਕਿ ਕੋਈ ਵੀ ਮਰੀਜ਼ ਗਰੀਬੀ ਕਾਰਨ ਦੁੱਖ ਨਾ ਝੱਲੇ। ਹਰ ਰੋਜ਼ ਪਰਿਵਾਰ PGI ਚੰਡੀਗੜ੍ਹ ਇਲਾਜ ਲਈ ਆਉਂਦੇ ਹਨ। ਬਹੁਤ ਸਾਰੇ ਦਵਾਈਆਂ, ਖਾਣੇ, ਰਿਹਾਇਸ਼ ਅਤੇ ਵਿੱਤੀ ਸਹਾਇਤਾ ਲਈ ਸੰਘਰਸ਼ ਕਰਦੇ ਹਨ। ਸਾਡੇ ਵਾਲੰਟੀਅਰ ਸਨਮਾਨ, ਦਇਆ ਅਤੇ ਵਿਹਾਰਕ ਮਦਦ ਨਾਲ ਉਨ੍ਹਾਂ ਦੇ ਨਾਲ ਖੜ੍ਹੇ ਰਹਿੰਦੇ ਹਨ।",
      mission: { title: "ਮਿਸ਼ਨ", desc: "ਹਰ ਮਰੀਜ਼ ਨੂੰ ਵਿੱਤੀ ਸਥਿਤੀ ਦੀ ਪਰਵਾਹ ਕੀਤੇ ਬਿਨਾਂ ਸਹਾਇਤਾ ਯਕੀਨੀ ਕਰਨਾ।" },
      vision: { title: "ਦ੍ਰਿਸ਼ਟੀ", desc: "ਪੂਰੇ ਭਾਰਤ ਵਿੱਚ ਇੱਕ ਦਿਆਲੂ ਸਿਹਤ ਸੇਵਾ ਸਹਾਇਤਾ ਨੈੱਟਵਰਕ ਬਣਾਉਣਾ।" },
      transparency: { title: "ਪਾਰਦਰਸ਼ਤਾ", desc: "ਹਰ ਦਾਨ ਦੀ ਜ਼ਿੰਮੇਵਾਰੀ ਨਾਲ ਵਰਤੋਂ ਅਤੇ ਪਾਰਦਰਸ਼ੀ ਰਿਪੋਰਟਿੰਗ।" },
      credentials: {
        title: "ਟਰੱਸਟ ਪ੍ਰਮਾਣ-ਪੱਤਰ",
        reg: "ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਨੰਬਰ",
        g80: "80G ਪ੍ਰਮਾਣਿਤ",
        a12: "12A ਰਜਿਸਟਰਡ",
        years: "ਸੇਵਾ ਦੇ ਸਾਲ",
        available: "ਉਪਲਬਧ",
        verified: "ਤਸਦੀਕਸ਼ੁਦਾ",
      },
    },

    gallery: {
      badge: "ਗੈਲਰੀ",
      heading1: "ਸੇਵਾ ਅਤੇ ਉਮੀਦ ਦੇ",
      heading2: "ਪਲ",
      desc: "ਸਾਡੇ ਵਾਲੰਟੀਅਰਾਂ, ਡਾਕਟਰੀ ਸਹਾਇਤਾ, ਖਾਣਾ ਵੰਡ, ਮਰੀਜ਼ ਸਹਾਇਤਾ ਅਤੇ ਸਮੁਦਾਇਕ ਸੇਵਾ ਦੀ ਝਲਕ।",
      categories: ["ਸਾਰੇ", "ਕੈਂਪ", "ਵੰਡ", "ਵਾਲੰਟੀਅਰ"],
    },

    services: {
      badge: "ਅਸੀਂ ਕੀ ਕਰਦੇ ਹਾਂ",
      heading1: "ਮਰੀਜ਼ਾਂ ਦੀ ਮਦਦ",
      heading2: "ਸਨਮਾਨ ਅਤੇ ਦੇਖਭਾਲ ਨਾਲ",
      desc: "ਸਾਡੇ ਵਾਲੰਟੀਅਰ ਡਾਕਟਰੀ ਚੁਣੌਤੀਆਂ ਦਾ ਸਾਹਮਣਾ ਕਰਨ ਵਾਲੇ ਪਰਿਵਾਰਾਂ ਨੂੰ ਵਿਹਾਰਕ ਅਤੇ ਦਿਆਲੂ ਸਹਾਇਤਾ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਨ।",
      list: [
        { title: "ਮੁਫ਼ਤ ਜਾਂਚ ਸਹਾਇਤਾ", desc: "ਮੈਡੀਕਲ ਰਿਪੋਰਟਾਂ, ਸਲਾਹ-ਮਸ਼ਵਰੇ ਅਤੇ ਦੂਜੀ ਰਾਏ ਵਿੱਚ ਮਦਦ।" },
        { title: "ਦਵਾਈ ਸਹਾਇਤਾ", desc: "ਮਰੀਜ਼ਾਂ ਨੂੰ ਮੁਫ਼ਤ ਅਤੇ ਸਬਸਿਡੀ ਵਾਲੀਆਂ ਦਵਾਈਆਂ ਪ੍ਰਦਾਨ ਕਰਨਾ।" },
        { title: "ਭੋਜਨ ਅਤੇ ਪੋਸ਼ਣ", desc: "ਮਰੀਜ਼ਾਂ ਅਤੇ ਦੇਖਭਾਲ ਕਰਨ ਵਾਲਿਆਂ ਲਈ ਰੋਜ਼ਾਨਾ ਭੋਜਨ ਅਤੇ ਪੋਸ਼ਣ ਸਹਾਇਤਾ।" },
        { title: "ਵਿੱਤੀ ਸਹਾਇਤਾ", desc: "ਹਸਪਤਾਲ ਦੇ ਬਿੱਲਾਂ ਅਤੇ ਐਮਰਜੈਂਸੀ ਇਲਾਜ ਖਰਚਿਆਂ ਲਈ ਸਹਾਇਤਾ।" },
        { title: "ਰਿਹਾਇਸ਼ ਸਹਾਇਤਾ", desc: "ਬਾਹਰੋਂ ਆਉਣ ਵਾਲੇ ਪਰਿਵਾਰਾਂ ਲਈ ਅਸਥਾਈ ਰਹਿਣ ਦੀ ਵਿਵਸਥਾ।" },
        { title: "ਭਾਵਨਾਤਮਕ ਸਹਾਇਤਾ", desc: "ਵਾਲੰਟੀਅਰ ਜੋ ਸੁਣਦੇ, ਮਾਰਗਦਰਸ਼ਨ ਕਰਦੇ ਅਤੇ ਪਰਿਵਾਰਾਂ ਦੀ ਭਾਵਨਾਤਮਕ ਮਦਦ ਕਰਦੇ ਹਨ।" },
      ],
    },

    howItWorks: {
      badge: "ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",
      heading1: "ਸਰਲ ਪ੍ਰਕਿਰਿਆ,",
      heading2: "ਅਸਲੀ ਪ੍ਰਭਾਵ",
      steps: [
        { title: "ਮਰੀਜ਼ ਟਰੱਸਟ ਨਾਲ ਸੰਪਰਕ ਕਰੇ", desc: "ਮਰੀਜ਼ ਜਾਂ ਪਰਿਵਾਰ ਸਾਡੇ ਵਾਲੰਟੀਅਰਾਂ ਤੋਂ ਸਹਾਇਤਾ ਲਈ ਸੰਪਰਕ ਕਰੇ।" },
        { title: "ਲੋੜਾਂ ਦਾ ਮੁਲਾਂਕਣ", desc: "ਵਾਲੰਟੀਅਰ ਡਾਕਟਰੀ, ਵਿੱਤੀ ਅਤੇ ਨਿੱਜੀ ਲੋੜਾਂ ਨੂੰ ਸਮਝਦਾ ਹੈ।" },
        { title: "ਤੁਰੰਤ ਮਦਦ", desc: "ਦਵਾਈਆਂ, ਖਾਣਾ, ਰਿਹਾਇਸ਼ ਜਾਂ ਸਹਾਇਤਾ ਜਲਦੀ ਪ੍ਰਬੰਧ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।" },
        { title: "ਅਨੁਵਰਤੀ ਸਹਾਇਤਾ", desc: "ਪੂਰੇ ਇਲਾਜ ਦੌਰਾਨ ਨਿਰੰਤਰ ਮਾਰਗਦਰਸ਼ਨ ਅਤੇ ਸਹਾਇਤਾ।" },
      ],
    },

    testimonials: {
      badge: "ਮਰੀਜ਼ਾਂ ਦੀਆਂ ਕਹਾਣੀਆਂ",
      heading1: "ਅਸਲੀ ਕਹਾਣੀਆਂ।",
      heading2: "ਅਸਲੀ ਪ੍ਰਭਾਵ।",
    },

    donate: {
      badge: "ਇੱਕ ਮਰੀਜ਼ ਦਾ ਸਾਥ ਦਿਓ",
      heading: "ਤੁਹਾਡਾ ਦਾਨ ਜ਼ਿੰਦਗੀ ਬਚਾ ਸਕਦਾ ਹੈ",
      desc: "ਹਰ ਯੋਗਦਾਨ PGI ਚੰਡੀਗੜ੍ਹ ਵਿੱਚ ਦਾਖਲ ਮਰੀਜ਼ਾਂ ਨੂੰ ਦਵਾਈਆਂ, ਖਾਣਾ, ਰਿਹਾਇਸ਼ ਅਤੇ ਐਮਰਜੈਂਸੀ ਸਹਾਇਤਾ ਪ੍ਰਦਾਨ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
      upiTitle: "UPI ਨਾਲ ਦਾਨ ਕਰੋ",
      upiId: "9473093492@axl",
      openUpi: "UPI ਐਪ ਖੋਲ੍ਹੋ",
      amounts: [
        { amount: "₹100", desc: "ਇੱਕ ਪੌਸ਼ਟਿਕ ਭੋਜਨ" },
        { amount: "₹500", desc: "ਜ਼ਰੂਰੀ ਦਵਾਈਆਂ" },
        { amount: "₹2000", desc: "ਇਲਾਜ ਸਹਾਇਤਾ" },
      ],
      bank: {
        title: "ਬੈਂਕ ਟ੍ਰਾਂਸਫਰ",
        name: "ਖਾਤਾ ਨਾਮ: ਸਾਰਾਂਸ਼",
        acc: "ਖਾਤਾ ਨੰਬਰ: 147622010001484",
        ifsc: "IFSC: UBIN0914762",
        bank: "ਬੈਂਕ: ਯੂਨੀਅਨ ਬੈਂਕ ਆਫ਼ ਇੰਡੀਆ",
      },
      trust: ["80G ਟੈਕਸ ਛੋਟ", "ਰਜਿਸਟਰਡ ਟਰੱਸਟ", "ਪਾਰਦਰਸ਼ੀ ਫੰਡ ਵਰਤੋਂ"],
    },

    volunteer: {
      badge: "ਸਾਡੇ ਨਾਲ ਵਾਲੰਟੀਅਰ ਕਰੋ",
      heading1: "ਬਦਲਾਅ ਦਾ",
      heading2: "ਹਿੱਸਾ ਬਣੋ",
      desc: "ਦਿਆਲਤਾ ਦਾ ਹਰ ਕੰਮ ਮਹੱਤਵਪੂਰਨ ਹੈ। ਸਾਡੇ ਵਾਲੰਟੀਅਰਾਂ ਨਾਲ ਜੁੜੋ ਅਤੇ ਡਾਕਟਰੀ ਅਤੇ ਵਿੱਤੀ ਮੁਸ਼ਕਲਾਂ ਦਾ ਸਾਹਮਣਾ ਕਰਨ ਵਾਲੇ ਮਰੀਜ਼ਾਂ ਦੀ ਮਦਦ ਕਰੋ।",
      roles: [
        { title: "ਡਾਕਟਰੀ ਵਾਲੰਟੀਅਰ", desc: "ਇਲਾਜ ਦੌਰਾਨ ਮਰੀਜ਼ਾਂ ਅਤੇ ਪਰਿਵਾਰਾਂ ਦੀ ਅਗਵਾਈ ਕਰੋ।" },
        { title: "ਸਹਾਇਤਾ ਦੌੜਾਕ", desc: "ਦਵਾਈਆਂ, ਰਿਪੋਰਟਾਂ ਅਤੇ ਲੌਜਿਸਟਿਕਸ ਵਿੱਚ ਮਦਦ ਕਰੋ।" },
        { title: "ਸਲਾਹਕਾਰ", desc: "ਭਾਵਨਾਤਮਕ ਸਹਾਇਤਾ ਅਤੇ ਮਾਰਗਦਰਸ਼ਨ ਪ੍ਰਦਾਨ ਕਰੋ।" },
        { title: "ਸਮੁਦਾਇਕ ਵਾਲੰਟੀਅਰ", desc: "ਫੰਡਰੇਜ਼ਿੰਗ ਅਤੇ ਜਾਗਰੂਕਤਾ ਮੁਹਿੰਮਾਂ ਵਿੱਚ ਸਹਾਇਤਾ ਕਰੋ।" },
      ],
      form: {
        badge: "ਟੀਮ ਨਾਲ ਜੁੜੋ",
        heading: "ਵਾਲੰਟੀਅਰ ਵਜੋਂ ਅਰਜ਼ੀ ਦਿਓ",
        fullName: "ਪੂਰਾ ਨਾਮ *",
        email: "ਈਮੇਲ",
        phone: "ਫ਼ੋਨ ਨੰਬਰ *",
        role: "ਭੂਮਿਕਾ ਚੁਣੋ *",
        motivation: "ਤੁਸੀਂ ਵਾਲੰਟੀਅਰ ਕਿਉਂ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ?",
        submit: "ਅਰਜ਼ੀ ਜਮ੍ਹਾਂ ਕਰੋ",
        submitting: "ਜਮ੍ਹਾਂ ਹੋ ਰਿਹਾ ਹੈ...",
        submitted: "✅ ਅਰਜ਼ੀ ਜਮ੍ਹਾਂ ਹੋ ਗਈ!",
        error: "ਕਿਰਪਾ ਕਰਕੇ ਨਾਮ, ਫ਼ੋਨ ਅਤੇ ਭੂਮਿਕਾ ਭਰੋ।",
        errorServer: "ਕੁਝ ਗਲਤ ਹੋਇਆ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
      },
    },

    contact: {
      badge: "ਸੰਪਰਕ ਕਰੋ",
      heading: "ਮਦਦ ਚਾਹੀਦੀ ਹੈ?",
      call: "ਕਾਲ ਕਰੋ",
      email: "ਈਮੇਲ",
      visit: "ਮਿਲੋ",
      address: "PGI ਚੰਡੀਗੜ੍ਹ ਦੇ ਨੇੜੇ",
    },

    getHelp: {
      badge: "ਸਹਾਇਤਾ ਚਾਹੀਦੀ ਹੈ?",
      heading: "ਸਹਾਇਤਾ ਮੰਗੋ",
      subheading: "ਇਹ ਫਾਰਮ ਭਰੋ ਅਤੇ ਸਾਡੇ ਵਾਲੰਟੀਅਰ ਕੁਝ ਘੰਟਿਆਂ ਵਿੱਚ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਨਗੇ।",
      patientName: "ਮਰੀਜ਼ ਦਾ ਨਾਮ *",
      guardianName: "ਸਰਪ੍ਰਸਤ ਦਾ ਨਾਮ",
      phone: "ਮੋਬਾਈਲ ਨੰਬਰ *",
      ward: "ਹਸਪਤਾਲ ਵਾਰਡ ਨੰਬਰ",
      helpNeeded: "ਕਿਸ ਤਰ੍ਹਾਂ ਦੀ ਮਦਦ ਚਾਹੀਦੀ ਹੈ *",
      submit: "ਬੇਨਤੀ ਜਮ੍ਹਾਂ ਕਰੋ",
      submitting: "ਜਮ੍ਹਾਂ ਹੋ ਰਿਹਾ ਹੈ...",
      submitted: "✅ ਬੇਨਤੀ ਜਮ੍ਹਾਂ ਹੋ ਗਈ!",
      error: "ਕਿਰਪਾ ਕਰਕੇ ਮਰੀਜ਼ ਦਾ ਨਾਮ, ਫ਼ੋਨ ਅਤੇ ਮਦਦ ਦਾ ਵੇਰਵਾ ਭਰੋ।",
      errorServer: "ਕੁਝ ਗਲਤ ਹੋਇਆ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
    },

    location: {
      badge: "ਸਾਡੇ ਕੋਲ ਆਓ",
      heading: "PGI ਚੰਡੀਗੜ੍ਹ ਦੇ ਨੇੜੇ",
      desc: "ਮਰੀਜ਼ ਅਤੇ ਪਰਿਵਾਰ ਸਿੱਧੇ ਸਾਡੇ ਕੋਲ ਆ ਕੇ ਸਹਾਇਤਾ ਅਤੇ ਮਾਰਗਦਰਸ਼ਨ ਲੈ ਸਕਦੇ ਹਨ।",
    },

    footer: {
      desc: "PGI ਚੰਡੀਗੜ੍ਹ ਦੇ ਨੇੜੇ ਗਰੀਬ ਅਤੇ ਲੋੜਵੰਦ ਮਰੀਜ਼ਾਂ ਨੂੰ ਦਵਾਈਆਂ, ਖਾਣਾ, ਰਿਹਾਇਸ਼ ਅਤੇ ਵਿੱਤੀ ਸਹਾਇਤਾ ਪ੍ਰਦਾਨ ਕਰਨਾ।",
      quickLinks: "ਤੇਜ਼ ਲਿੰਕ",
      trustInfo: "ਟਰੱਸਟ ਜਾਣਕਾਰੀ",
      contact: "ਸੰਪਰਕ",
      trust: ["ਰਜਿਸਟਰਡ ਟਰੱਸਟ", "80G ਪ੍ਰਮਾਣਿਤ", "12A ਰਜਿਸਟਰਡ", "ਆਡਿਟਡ ਖਾਤੇ"],
      privacy: "ਗੋਪਨੀਯਤਾ ਨੀਤੀ",
      terms: "ਨਿਯਮ",
      copyright: "© 2026 ਸਾਰਾਂਸ਼। ਸਾਰੇ ਅਧਿਕਾਰ ਸੁਰੱਖਿਅਤ।",
    },

    cookie: {
      title: "🍪 ਕੁਕੀ ਸੂਚਨਾ",
      desc: "ਅਸੀਂ ਤੁਹਾਡੇ ਅਨੁਭਵ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ ਅਤੇ ਵੈੱਬਸਾਈਟ ਵਰਤੋਂ ਨੂੰ ਸਮਝਣ ਲਈ ਕੁਕੀਜ਼ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਾਂ।",
      accept: "ਸਵੀਕਾਰ ਕਰੋ",
    },

    // Events
    events: {
      badge: "ਆਉਣ ਵਾਲੇ ਪ੍ਰੋਗਰਾਮ",
      heading1: "ਮੈਡੀਕਲ ਕੈਂਪ",
      heading2: "ਅਤੇ ਗਤੀਵਿਧੀਆਂ",
      desc: "ਸਾਡੇ ਆਉਣ ਵਾਲੇ ਕੈਂਪਾਂ ਅਤੇ ਸਮੁਦਾਇਕ ਗਤੀਵਿਧੀਆਂ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ। ਸਾਰਿਆਂ ਦਾ ਸਵਾਗਤ ਹੈ।",
    },

    // FAQ
    faq: {
      badge: "ਅਕਸਰ ਪੁੱਛੇ ਜਾਂਦੇ ਸਵਾਲ",
      heading1: "ਅਕਸਰ ਪੁੱਛੇ ਜਾਂਦੇ",
      heading2: "ਸਵਾਲ",
      desc: "ਕਰ ਭਲਾ ਹੋ ਭਲਾ ਵਿੱਚ ਦਾਨ, ਵਾਲੰਟੀਅਰਿੰਗ ਅਤੇ ਮਰੀਜ਼ ਸਹਾਇਤਾ ਬਾਰੇ ਆਮ ਸਵਾਲ।",
      items: [
        {
          q: "ਕਰ ਭਲਾ ਹੋ ਭਲਾ ਕੀ ਕਰਦਾ ਹੈ?",
          a: "ਕਰ ਭਲਾ ਹੋ ਭਲਾ PGI ਚੰਡੀਗੜ੍ਹ ਦੇ ਨੇੜੇ ਇੱਕ ਰਜਿਸਟਰਡ ਚੈਰੀਟੇਬਲ ਟਰੱਸਟ ਹੈ ਜੋ ਗਰੀਬ ਅਤੇ ਲੋੜਵੰਦ ਮਰੀਜ਼ਾਂ ਨੂੰ ਇਲਾਜ ਦੌਰਾਨ ਮੁਫ਼ਤ ਦਵਾਈਆਂ, ਖਾਣਾ, ਰਿਹਾਇਸ਼, ਵਿੱਤੀ ਸਹਾਇਤਾ ਅਤੇ ਭਾਵਨਾਤਮਕ ਸਹਾਇਤਾ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।",
        },
        {
          q: "ਕੀ ਕਰ ਭਲਾ ਹੋ ਭਲਾ ਨੂੰ ਦਿੱਤਾ ਦਾਨ ਟੈਕਸ ਛੋਟ ਯੋਗ ਹੈ?",
          a: "ਹਾਂ। ਕਰ ਭਲਾ ਹੋ ਭਲਾ ਇਨਕਮ ਟੈਕਸ ਐਕਟ, 1961 ਦੀ ਧਾਰਾ 80G ਅਤੇ 12A ਅਧੀਨ ਰਜਿਸਟਰਡ ਹੈ। ਤੁਸੀਂ ਟੈਕਸ ਛੋਟ ਦਾ ਦਾਅਵਾ ਕਰ ਸਕਦੇ ਹੋ, ਅਤੇ ਇਸ ਵੈੱਬਸਾਈਟ 'ਤੇ ਆਪਣਾ ਨਾਮ, ਰਾਸ਼ੀ ਅਤੇ UPI/ਬੈਂਕ ਟ੍ਰਾਂਜੈਕਸ਼ਨ ID ਦਰਜ ਕਰਕੇ ਤੁਰੰਤ 80G ਦਾਨ ਰਸੀਦ (PDF) ਪ੍ਰਾਪਤ ਕਰ ਸਕਦੇ ਹੋ।",
        },
        {
          q: "ਮੈਂ ਕਰ ਭਲਾ ਹੋ ਭਲਾ ਨੂੰ ਦਾਨ ਕਿਵੇਂ ਕਰ ਸਕਦਾ ਹਾਂ?",
          a: "ਤੁਸੀਂ UPI ਰਾਹੀਂ ਦਾਨ ਕਰ ਸਕਦੇ ਹੋ (QR ਕੋਡ ਸਕੈਨ ਕਰੋ ਜਾਂ 9473093492@axl 'ਤੇ ਭੁਗਤਾਨ ਕਰੋ), ਜਾਂ ਟਰੱਸਟ ਦੇ ਯੂਨੀਅਨ ਬੈਂਕ ਆਫ਼ ਇੰਡੀਆ ਖਾਤੇ ਵਿੱਚ ਸਿੱਧਾ ਬੈਂਕ ਟ੍ਰਾਂਸਫਰ ਕਰ ਸਕਦੇ ਹੋ। WhatsApp ਰਿਮਾਈਂਡਰ ਦੇ ਨਾਲ ਮਹੀਨਾਵਾਰ ਨਿਯਮਤ ਦਾਨ ਦਾ ਵਿਕਲਪ ਵੀ ਉਪਲਬਧ ਹੈ।",
        },
        {
          q: "ਮੈਂ ਕਰ ਭਲਾ ਹੋ ਭਲਾ ਨਾਲ ਵਾਲੰਟੀਅਰ ਕਿਵੇਂ ਬਣ ਸਕਦਾ ਹਾਂ?",
          a: "ਇਸ ਵੈੱਬਸਾਈਟ 'ਤੇ ਵਾਲੰਟੀਅਰ ਅਰਜ਼ੀ ਫਾਰਮ ਭਰੋ ਅਤੇ ਇੱਕ ਭੂਮਿਕਾ ਚੁਣੋ — ਡਾਕਟਰੀ ਵਾਲੰਟੀਅਰ, ਸਲਾਹਕਾਰ, ਸਹਾਇਤਾ ਦੌੜਾਕ, ਜਾਂ ਸਮੁਦਾਇਕ ਵਾਲੰਟੀਅਰ। ਮਨਜ਼ੂਰੀ ਮਿਲਣ 'ਤੇ, ਤੁਹਾਨੂੰ ਵਾਲੰਟੀਅਰ ਕੋਆਰਡੀਨੇਸ਼ਨ ਗਰੁੱਪ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਣ ਲਈ WhatsApp ਸੱਦਾ ਮਿਲੇਗਾ।",
        },
        {
          q: "ਕਰ ਭਲਾ ਹੋ ਭਲਾ ਕਿੱਥੇ ਸਥਿਤ ਹੈ?",
          a: "ਕਰ ਭਲਾ ਹੋ ਭਲਾ PGI (ਪੋਸਟ ਗ੍ਰੈਜੂਏਟ ਇੰਸਟੀਚਿਊਟ ਆਫ਼ ਮੈਡੀਕਲ ਐਜੂਕੇਸ਼ਨ ਐਂਡ ਰਿਸਰਚ), ਚੰਡੀਗੜ੍ਹ, ਭਾਰਤ ਦੇ ਨੇੜੇ ਕੰਮ ਕਰਦਾ ਹੈ, ਅਤੇ ਮੁੱਖ ਤੌਰ 'ਤੇ PGI ਚੰਡੀਗੜ੍ਹ ਵਿੱਚ ਇਲਾਜ ਲਈ ਆਉਣ ਵਾਲੇ ਮਰੀਜ਼ਾਂ ਅਤੇ ਪਰਿਵਾਰਾਂ ਦੀ ਸੇਵਾ ਕਰਦਾ ਹੈ।",
        },
        {
          q: "ਇੱਕ ਮਰੀਜ਼ ਜਾਂ ਪਰਿਵਾਰ ਸਹਾਇਤਾ ਲਈ ਬੇਨਤੀ ਕਿਵੇਂ ਕਰ ਸਕਦਾ ਹੈ?",
          a: "ਮਰੀਜ਼ ਜਾਂ ਪਰਿਵਾਰਕ ਮੈਂਬਰ ਇਸ ਵੈੱਬਸਾਈਟ 'ਤੇ 'ਸਹਾਇਤਾ ਮੰਗੋ' ਫਾਰਮ ਵਿੱਚ ਮਰੀਜ਼ ਦਾ ਨਾਮ, ਹਸਪਤਾਲ ਵਾਰਡ ਨੰਬਰ ਅਤੇ ਲੋੜੀਂਦੀ ਸਹਾਇਤਾ ਦਾ ਵੇਰਵਾ ਭਰ ਕੇ ਬੇਨਤੀ ਕਰ ਸਕਦੇ ਹਨ। ਇੱਕ ਵਾਲੰਟੀਅਰ ਕੁਝ ਘੰਟਿਆਂ ਵਿੱਚ ਜਾਂਚ ਕਰ ਕੇ ਜਵਾਬ ਦੇਵੇਗਾ।",
        },
      ],
    },
  },
} as const;