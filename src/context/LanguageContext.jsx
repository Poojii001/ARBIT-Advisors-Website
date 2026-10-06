import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Navbar
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      caseStudies: 'Case Studies',
      insights: 'Insights',
      getInTouch: 'Get in Touch',
      tagline: 'STRATEGY • IMPACT',
    },
    // Hero
    hero: {
      badge: 'POLITICAL PR & STRATEGIC ADVISORY',
      title1: 'Shaping Political Narratives,',
      title2: 'Driving Electoral Success.',
      subtitle:
        'We combine data-driven communication, strategic counsel and reputation management to help leaders, parties and organizations win trust, build influence and create lasting impact.',
      cta: 'Book a Consultation',
      pillars: ['STRATEGY', 'COMMUNICATION', 'INFLUENCE', 'IMPACT'],
      livePulse: 'Live Campaign Pulse',
      pulseState: '12 Active State Desks • 99.4% Message Precision',
      trustBadges: [
        'Strict NDA Protocol',
        'Pan-India Ground Field Command',
        'Rapid 15-Min Response Protocol',
      ],
      quickHighlight: 'Trusted across 35+ high-stakes state assembly & leadership campaigns',
    },
    // Testimonials / Strategic Endorsements
    testimonials: {
      badge: 'PROVEN LEADERSHIP TRUST',
      title: 'Voices of Electoral & Policy Leadership',
      subtitle: 'What campaign chiefs, legislators, and senior strategists say about partnering with Arbit Advisors.',
      items: [
        {
          id: 1,
          quote: 'Arbit Advisors transformed our ground narrative within 45 days. Their booth-level psycho-demographic intelligence pinpointed the exact rural voter concerns, turning our campaign into a historic +42 seat victory.',
          author: 'Campaign Director',
          role: 'State Assembly Election Victory (2024)',
          region: 'Northern India',
          tag: 'Electoral Strategy',
          metric: '+42 Seats Flipped',
        },
        {
          id: 2,
          quote: 'During an orchestrated national media crisis, their rapid response war room defused misinformation and restored positive sentiment within 48 hours. Absolute masterclass in political discipline.',
          author: 'Senior Communications Advisor',
          role: 'Union Cabinet Leader Office',
          region: 'National Broadcast',
          tag: 'Crisis Mitigation',
          metric: '89% Positive Balance',
        },
        {
          id: 3,
          quote: 'Their positive vision-first messaging and syndicated thought leadership elevated our policy agenda across Tier-1 media and energized young first-time voters statewide.',
          author: 'National Working Committee Member',
          role: 'Public Policy & Governance Forum',
          region: 'Pan-India',
          tag: 'Brand PR & Vision',
          metric: '+22.5% Approval',
        },
      ],
    },
    // Capabilities (Harmonized with Footer)
    capabilities: {
      badge: 'OUR CORE CAPABILITIES',
      title: 'Strategy. Media. Advisory.',
      description:
        'We craft powerful narratives, build media relationships and provide strategic guidance to help political leaders, parties and organizations achieve their goals.',
      exploreBtn: 'Explore Our Services',
      learnMore: 'Learn More',
      modalBadge: 'CAPABILITY BRIEF',
      deliverablesTitle: 'Core Strategic Deliverables',
      closeBtn: 'Close',
      inquireBtn: 'Inquire for Campaign',
      items: [
        {
          number: '01',
          title: 'Brand PR & Leadership Positioning',
          description:
            'Build a strong, credible and positive public image with targeted campaigns, thought leadership and reputation management.',
          details: [
            'Candidate Personality & Narrative Sculpting',
            'High-Impact Digital & Broadcast Campaigns',
            'Reputation Fortification & Crisis Pre-emption',
            'Constituency Perception Tracking & Poll Analysis',
            'Strategic Speechwriting & Keynote Positioning',
          ],
        },
        {
          number: '02',
          title: 'Media Relations & War Room',
          description:
            'Get the right stories, in the right media, at the right time. We help you build lasting relationships with key journalists and media outlets.',
          details: [
            'National & Regional Tier-1 Media Placement',
            'Press Conference Management & Media Briefings',
            'Editorial Opinion-Pieces (Op-Ed) Placement',
            '24/7 Rapid Response Media War Room',
            'Journalist & Political Editor Engagement Networks',
          ],
        },
      ],
    },
    // Impact Stats (Credibly Defined & Audited)
    impact: {
      badge: 'OUR AUDITED IMPACT',
      title1: 'Real Strategies.',
      title2: 'Measurable Results.',
      campaignsVal: '35+',
      campaignsTitle: 'CAMPAIGNS MANAGED',
      campaignsSub: 'Strategic electoral & leadership campaigns',
      reachVal: '50M+',
      reachTitle: 'VERIFIED TOTAL REACH',
      reachSub: 'Targeted voter & citizen impressions',
      trustVal: '92%',
      trustTitle: 'CAMPAIGN RETENTION RATE',
      trustSub: 'Post-electoral & advisory renewals',
      auditFootnote: 'Data audited annually across active campaign contracts, broadcast metrics and certified voter reach analytics.',
    },
    // About
    about: {
      badge: 'WHO WE ARE',
      title: 'Pioneering Strategic Political Communications in India.',
      desc: 'Arbit Advisors is a premier political consulting and strategic communications firm. We advise party high-commands, union ministers, chief ministers, and emerging political leaders on navigating modern multi-channel electoral warfare.',
      pillars: [
        {
          title: 'Precision Narrative Architecture',
          desc: 'We construct defensible, resonant political messaging based on granular district-level psycho-demographic data.',
        },
        {
          title: 'AI & Sentiment Intelligence',
          desc: 'Our real-time social listening and predictive swing-voter analytics track sentiment shifts before mainstream polls catch on.',
        },
        {
          title: 'Dominant Media Positioning',
          desc: 'Deep networks with key national anchors, chief political correspondents, and vernacular print powerhouses.',
        },
        {
          title: 'Rapid Response Crisis Shield',
          desc: 'Sub-15 minute protocol deployment to neutralize opposition narratives, smear campaigns, and viral misinformation.',
        },
      ],
      showcaseBadge: 'INTEGRATED CAMPAIGN COMMAND',
      showcaseTitle: 'Precision-Engineered Electoral War Rooms',
      showcaseDesc:
        'Combining ground voter pulse, high-frequency media monitoring, and synchronized digital communication for decisive electoral breakthroughs.',
      philosophyBadge: 'OUR PHILOSOPHY',
      philosophyTitle:
        'Winning campaigns are built on discipline, data, and relentless storytelling.',
      philosophyDesc:
        'We do not rely on guesswork or cookie-cutter templates. Every campaign strategy is forged in real-world ground intelligence and executed with military precision.',
      briefingBtn: 'Schedule a Confidential Briefing',
    },
    // Case Studies (with Year, Region, Baseline vs Result & Client Consent)
    caseStudies: {
      badge: 'PROVEN TRACK RECORD',
      title: 'Strategic Case Studies',
      all: 'All',
      clientProfile: 'Client Profile',
      categories: ['All', 'Electoral Strategy', 'Crisis Mitigation', 'Brand PR & Positioning'],
      permissionBadge: 'Authorized Client Disclosure (NDA Compliant)',
      baselineLabel: 'Baseline (Pre-Campaign)',
      resultLabel: 'Outcome & Measurable Result',
      items: [
        {
          id: 1,
          category: 'Electoral Strategy',
          title: 'State Assembly Victory: Multi-Phased Perception Overhaul',
          client: 'Major State Regional Party High-Command',
          year: '2024',
          region: 'Northern India (State Assembly Elections)',
          baseline: 'Trailing by 8.4% in voter favorability; severe anti-incumbency across 38 swing rural constituencies.',
          result: 'Achieved +42 seat majority victory; flipped 31 swing seats; +18.4% surge in youth demographic vote share.',
          metrics: [
            { label: 'Seat Swing', val: '+42 Seats' },
            { label: 'Youth Vote Share', val: '+18.4%' },
            { label: 'Digital Engagement', val: '120M+' },
          ],
          summary:
            'Engineered an aggressive, grassroots-focused narrative countering anti-incumbency sentiment through localized development townhalls and viral digital micro-campaigns.',
        },
        {
          id: 2,
          category: 'Crisis Mitigation',
          title: 'Neutralizing Coordinated Disinformation in 48 Hours',
          client: 'Union Cabinet Minister Office',
          year: '2023',
          region: 'National Broadcast & Digital Sphere',
          baseline: 'Coordinated viral allegations across 200+ media outlets; negative sentiment spiked to 68% in 6 hours.',
          result: 'Sub-18 min rebuttal deployment; achieved 89% positive/neutral press balance; positive sentiment restored to 76%.',
          metrics: [
            { label: 'Response Velocity', val: '< 18 Mins' },
            { label: 'Media Neutrality', val: '89%' },
            { label: 'Sentiment Recovery', val: '76%' },
          ],
          summary:
            'Deployed our Rapid Response Command Center to deconstruct opposition allegations with verifiable audit proofs and primed prime-time debates across 14 broadcast networks.',
        },
        {
          id: 3,
          category: 'Brand PR & Positioning',
          title: 'National Leadership Positioning & Policy Vision Rollout',
          client: 'National Political Figure & Working Committee',
          year: '2024–2025',
          region: 'Pan-India (Tier-1 Metro & Key State Capitals)',
          baseline: 'Low national recognition in economic policy domain; limited Tier-1 editorial coverage.',
          result: '45+ syndicated Op-Eds in leading dailies; 320+ hours of prime-time thought leadership; +22.5% approval jump.',
          metrics: [
            { label: 'Op-Ed Syndications', val: '45+ Papers' },
            { label: 'Public Approval Shift', val: '+22.5%' },
            { label: 'Prime Time Footprint', val: '320+ Hours' },
          ],
          summary:
            'Curated a 12-month national intellectual outreach tour, high-profile podcast appearances, and flagship policy whitepapers establishing domain authority in economic policy.',
        },
      ],
    },
    // Insights
    insights: {
      badge: 'INTELLIGENCE & ANALYSIS',
      title: 'Latest Political Insights',
      subtitle:
        'Strategic briefs, election analytics, and media intelligence authored by our senior advisory council.',
      readBrief: 'Read Intelligence Brief',
      closeBrief: 'Close Briefing',
      authorLabel: 'Author & Advisor',
      items: [
        {
          id: 1,
          title: 'The Anatomy of Narrative Warfare in High-Density Indian Elections',
          author: 'Dr. Ananya Sen',
          role: 'Chief Strategy Officer & Former Media Advisor',
          avatar: 'AS',
          date: 'October 2026',
          readTime: '6 min read',
          category: 'Electoral Intelligence',
          excerpt:
            'How rapid sentiment shifts across regional broadcast television and dark social networks determine swing votes in critical state assembly seats.',
          fullContent: `Modern election warfare in India is fought concurrently across three battlegrounds: mainstream broadcast television, regional vernacular print, and high-velocity digital messaging networks.
          
To establish dominance, political leaders must maintain narrative agility. A delay of merely three hours in responding to an opposition salvo can allow adverse perception to solidify across millions of households.
          
At Arbit Advisors, we implement the 15-Minute Rebuttal Protocol, deploying synchronized counter-narratives with factual infographics, spokesperson talking points, and localized video soundbites simultaneously across all channels.`,
        },
        {
          id: 2,
          title: 'Micro-Targeting vs Mass Broadcasts: The 2026 Voter Demographics Report',
          author: 'Vikramaditya Rathore',
          role: 'Head of Electoral Analytics & Polling Intelligence',
          avatar: 'VR',
          date: 'September 2026',
          readTime: '8 min read',
          category: 'Data & Analytics',
          excerpt:
            'An empirical analysis of why pan-constituency generic promises fail to convert undecided voters compared to booth-level demographic tailoring.',
          fullContent: `Analyzing voting trends across over 150 constituencies reveals a stark transformation: generic mass rallies now serve primarily as morale boosters for core party cadres, while decisive victory margins are determined by localized micro-promises.
          
Segmenting voter lists by localized civic pain points (water drainage, localized youth employment, regional MSP demands) allows campaigns to achieve a 3.4x higher conversion efficiency per media rupee spent.`,
        },
        {
          id: 3,
          title: 'Managing 24/7 Digital Crisis: The Political Commander’s Playbook',
          author: 'Raghav K. Malhotra',
          role: 'Director of Rapid Response & Crisis Communications',
          avatar: 'RM',
          date: 'August 2026',
          readTime: '5 min read',
          category: 'Crisis Advisory',
          excerpt:
            'Essential protocols for political spokespersons and campaign chiefs facing coordinated online smear operations and deepfake media.',
          fullContent: `In an era of synthetic media and viral distortion, political campaigns face asymmetric threats. When an unverified video clip begins gaining traction, traditional PR approaches that wait for morning press briefings are fatal.
          
Our crisis framework establishes immediate forensic verification, direct escalation channels with platform compliance officers, and swift contextualization before the media narrative slips away.`,
        },
      ],
    },
    // Direct Contact Info
    contact: {
      directChannels: 'Direct Confidential Channels',
      phone: '+91 98110 24001',
      phoneLabel: 'Advisory Hotline',
      email: 'contact@arbitadvisors.in',
      emailLabel: 'Confidential Desk',
      whatsapp: '+91 98110 24001',
      whatsappLabel: 'WhatsApp Command Desk',
      whatsappUrl: 'https://wa.me/919811024001?text=Hello%20Arbit%20Advisors%2C%20I%20would%20like%20to%20request%20a%20strategic%20consultation.',
      chatOnWhatsapp: 'Chat on WhatsApp',
    },
    // Legal & Regulatory Disclaimer
    disclaimer: {
      title: 'Regulatory & Independence Disclaimer',
      text: 'Arbit Advisors is an independent, privately held political consulting and strategic communications advisory firm. It is NOT affiliated with, authorized by, sponsored by, or an agency of the Government of India, the Parliament of India, or any statutory ministry or constitutional body. Architectural imagery (such as Sansad Bhavan) and national motifs are used solely for representative, editorial, and thematic purposes.',
    },
    // Consultation Modal
    modal: {
      badge: 'STRICTLY CONFIDENTIAL',
      title: 'Book a Strategic Consultation',
      subtitle:
        'Engage our senior advisory council for discreet campaign strategy, narrative positioning, or rapid crisis mitigation.',
      nameLabel: 'Full Name *',
      namePlaceholder: 'e.g. Dr. Rajesh Sharma',
      titleLabel: 'Title / Political Office',
      titlePlaceholder: 'e.g. MLA / MP Office / Campaign Chief',
      emailLabel: 'Confidential Email *',
      emailPlaceholder: 'official@office.in',
      phoneLabel: 'Phone / Direct Line *',
      phonePlaceholder: '+91 98765 43210',
      serviceLabel: 'Primary Advisory Requirement',
      serviceOptions: [
        { val: 'Brand PR & Leadership Positioning', label: 'Brand PR & Leadership Positioning' },
        { val: 'Media Relations & War Room', label: 'Media Relations & War Room' },
        { val: 'Strategic Advisory & Electoral Intelligence', label: 'Strategic Advisory & Electoral Intelligence' },
        { val: '24/7 Rapid Crisis Management', label: '24/7 Rapid Crisis Management' },
        { val: 'Full Campaign Management', label: 'End-to-End Electoral Campaign Management' },
      ],
      messageLabel: 'Brief Strategic Objective (Optional)',
      messagePlaceholder:
        'Share details regarding constituency, upcoming election timeline, or key objectives...',
      privacyNote: 'Protected by strict NDA protocols. Not a government portal.',
      submitting: 'Transmitting Secure Request...',
      submitBtn: 'Submit Confidential Briefing Request',
      successTitle: 'Briefing Request Received',
      successDesc:
        'Our Senior Managing Partner will review your inquiry with strict non-disclosure compliance and contact your office within 2 hours.',
      doneBtn: 'Done',
    },
    // Footer
    footer: {
      brandDesc:
        'Architecting transformative political strategy, high-velocity narrative control, and sustained public mandate.',
      quickLinks: 'Quick Links',
      ourServices: 'Our Services',
      connectWithUs: 'Connect With Us',
      directContact: 'Direct Contact Desk',
      stayUpdated: 'Stay Updated',
      stayUpdatedSub: 'Get the latest insights and updates.',
      emailPlaceholder: 'Your email address',
      subscribedMsg: '✓ You have been subscribed to our briefing.',
      rights: 'All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsConditions: 'Terms & Conditions',
    },
  },
  hi: {
    // Navbar
    nav: {
      home: 'मुख्य पृष्ठ',
      about: 'हमारे बारे में',
      services: 'रणनीतिक सेवाएं',
      caseStudies: 'केस स्टडीज',
      insights: 'राजनीतिक अंतर्दृष्टि',
      getInTouch: 'संपर्क करें',
      tagline: 'रणनीति • प्रभाव',
    },
    // Hero
    hero: {
      badge: 'राजनीतिक पीआर एवं रणनीतिक परामर्श',
      title1: 'राजनीतिक आख्यान का निर्माण,',
      title2: 'चुनावी विजय का मजबूत आधार।',
      subtitle:
        'हम डेटा-आधारित संचार, रणनीतिक मार्गदर्शन और जनधारणा प्रबंधन के संयोजन से राजनीतिक दलों और नेताओं को जनविश्वास और ऐतिहासिक विजय दिलाने में सक्षम बनाते हैं।',
      cta: 'परामर्श सत्र बुक करें',
      pillars: ['रणनीति', 'संचार', 'प्रभाव', 'सफलता'],
      livePulse: 'सक्रिय चुनावी नब्ज',
      pulseState: '12 राज्यों में सक्रिय वॉर रूम • 99.4% संदेश प्रभावशीलता',
      trustBadges: [
        'सख्त गैर-प्रकटीकरण (NDA) सुरक्षा',
        'अखिल भारतीय जमीनी खुफिया नेटवर्क',
        '15-मिनट त्वरित प्रतिक्रिया प्रोटोकॉल',
      ],
      quickHighlight: '35+ महत्वपूर्ण विधानसभा एवं संसदीय अभियानों में विश्वसनीय परामर्श भागीदार',
    },
    // Testimonials / Strategic Endorsements
    testimonials: {
      badge: 'प्रमाणित नेतृत्व विश्वास',
      title: 'चुनावी एवं नीतिगत नेतृत्व के अनुभव',
      subtitle: 'आर्बिट एडवाइजर्स के साथ काम करने वाले चुनाव प्रमुखों, नीति रणनीतिकारों और जनप्रतिनिधियों की राय।',
      items: [
        {
          id: 1,
          quote: 'आर्बिट एडवाइजर्स ने 45 दिनों में हमारे जमीनी जनसंवाद को बदल दिया। उनके बूथ-स्तरीय मनोवैज्ञानिक विश्लेषण ने ग्रामीण मतदाताओं की वास्तविक नब्ज पकड़ी, जिससे हमें ऐतिहासिक +42 सीटों की प्रचंड जीत मिली।',
          author: 'अभियान निदेशक',
          role: 'राज्य विधानसभा चुनाव विजय (2024)',
          region: 'उत्तर भारत',
          tag: 'चुनावी रणनीति',
          metric: '+42 सीटें जीतीं',
        },
        {
          id: 2,
          quote: 'एक सुनियोजित राष्ट्रीय मीडिया हमले के दौरान उनके त्वरित प्रतिक्रिया वॉर रूम ने भ्रामक प्रचार को ध्वस्त कर 48 घंटों के भीतर सकारात्मक जनधारणा वापस लौटा दी। रणनीतिक अनुशासन की अद्भुत मिसाल।',
          author: 'वरिष्ठ संचार सलाहकार',
          role: 'केंद्रीय कैबिनेट मंत्री कार्यालय',
          region: 'राष्ट्रीय ब्रॉडकास्ट',
          tag: 'संकट प्रबंधन',
          metric: '89% सकारात्मक कवरेज',
        },
        {
          id: 3,
          quote: 'उनके सकारात्मक और विकास-उन्मुख संदेशों ने प्रमुख राष्ट्रीय समाचार पत्रों और मीडिया में हमारे विजन को स्थापित किया और प्रदेश भर के पहली बार वोट देने वाले युवाओं में भारी उत्साह भरा।',
          author: 'राष्ट्रीय कार्यसमिति सदस्य',
          role: 'लोकनीति एवं सुशासन मंच',
          region: 'अखिल भारतीय',
          tag: 'ब्रांड पीआर एवं विजन',
          metric: '+22.5% जनस्वीकार्यता',
        },
      ],
    },
    // Capabilities (Harmonized with Footer)
    capabilities: {
      badge: 'हमारी मुख्य क्षमताएं',
      title: 'रणनीति। मीडिया। परामर्श।',
      description:
        'हम राजनीतिक नेताओं, दलों और संस्थाओं को उनके लक्ष्यों को प्राप्त करने हेतु प्रभावशाली आख्यान, मजबूत मीडिया संबंध और रणनीतिक दिशा प्रदान करते हैं।',
      exploreBtn: 'हमारी सेवाएं देखें',
      learnMore: 'विस्तार से जानें',
      modalBadge: 'रणनीतिक कार्ययोजना',
      deliverablesTitle: 'प्रमुख रणनीतिक सेवाएं',
      closeBtn: 'बंद करें',
      inquireBtn: 'अभियान हेतु परामर्श लें',
      items: [
        {
          number: '01',
          title: 'ब्रांड पीआर एवं जनछवि',
          description:
            'लक्षित जन अभियानों, विचार नेतृत्व और धारणा प्रबंधन के साथ सशक्त, विश्वसनीय और सकारात्मक सार्वजनिक छवि का निर्माण।',
          details: [
            'प्रत्याशी व्यक्तित्व एवं आख्यान निर्माण',
            'उच्च-प्रभावी डिजिटल एवं ब्रॉडकास्ट अभियान',
            'छवि सुदृढ़ीकरण एवं संकट पूर्व-निवारण',
            'विधानसभा/लोकसभा स्तर पर जनधारणा ट्रैकिंग',
            'रणनीतिक भाषण लेखन एवं की-नोट स्थिति निर्धारण',
          ],
        },
        {
          number: '02',
          title: 'मीडिया संबंध एवं वॉर रूम',
          description:
            'सही समय पर, सही मीडिया मंच पर सही बात पहुंचाना। हम राष्ट्रीय और क्षेत्रीय संपादकों व पत्रकारों के साथ मजबूत संबंध बनाते हैं।',
          details: [
            'राष्ट्रीय एवं क्षेत्रीय टियर-1 मीडिया कवरेज',
            'प्रेस वार्ता प्रबंधन एवं आधिकारिक मीडिया ब्रीफिंग',
            'संपादकीय आलेख (Op-Ed) प्रकाशन',
            '24/7 त्वरित प्रतिक्रिया मीडिया वॉर रूम',
            'वरिष्ठ राजनीतिक पत्रकारों से प्रत्यक्ष संवाद नेटवर्क',
          ],
        },
      ],
    },
    // Impact Stats (Credibly Defined)
    impact: {
      badge: 'प्रमाणित चुनावी प्रभाव',
      title1: 'ठोस रणनीतियां।',
      title2: 'मापने योग्य परिणाम।',
      campaignsVal: '35+',
      campaignsTitle: 'सफल रणनीतिक अभियान',
      campaignsSub: 'विधानसभा एवं संसदीय चुनावों में',
      reachVal: '50M+',
      reachTitle: 'कुल लक्षित जन पहुंच',
      reachSub: 'प्रिंट, ब्रॉडकास्ट एवं डिजिटल माध्यमों पर',
      trustVal: '92%',
      trustTitle: 'क्लाइंट निरंतरता दर',
      trustSub: 'रणनीतिक परामर्श अनुबंध नवीनीकरण',
      auditFootnote: 'सभी आंकड़े सक्रिय अभियान अनुबंधों, ब्रॉडकास्ट मेट्रिक्स और प्रमाणित मतदाता पहुंच डेटा द्वारा समर्थित हैं।',
    },
    // About
    about: {
      badge: 'हम कौन हैं',
      title: 'भारत में रणनीतिक राजनीतिक संचार का अग्रणी मंच।',
      desc: 'आर्बिट एडवाइजर्स एक शीर्ष राजनीतिक परामर्श और रणनीतिक संचार फर्म है। हम पार्टी आलाकमान, केंद्रीय मंत्रियों, मुख्यमंत्रियों और भावी नेतृत्व को आधुनिक बहु-मंचीय चुनावी युद्ध में मार्गदर्शन प्रदान करते हैं।',
      pillars: [
        {
          title: 'सटीक आख्यान संरचना',
          desc: 'हम जमीनी मनोवैज्ञानिक-जनसांख्यिकीय डेटा के आधार पर अचूक और जनप्रिय राजनीतिक संदेश तैयार करते हैं।',
        },
        {
          title: 'एआई एवं जनभावना विश्लेषण',
          desc: 'हमारा रियल-टाइम सोशल लिसनिंग टूल मुख्यधारा के सर्वेक्षणों से पहले ही मतदाता झुकाव को भांप लेता है।',
        },
        {
          title: 'प्रमुख मीडिया में सर्वोच्च स्थान',
          desc: 'राष्ट्रीय प्राइम-टाइम एंकरों, मुख्य राजनीतिक संवाददाताओं और प्रादेशिक प्रिंट मीडिया के साथ मजबूत नेटवर्क।',
        },
        {
          title: 'त्वरित संकट प्रबंधन कवच',
          desc: 'विपक्षी दुष्प्रचार और भ्रामक खबरों को 15 मिनट के भीतर निष्प्रभावी करने वाली त्वरित प्रतिक्रिया प्रणाली।',
        },
      ],
      showcaseBadge: 'एकीकृत अभियान कमान केंद्र',
      showcaseTitle: 'सटीक-इंजीनियर्ड चुनावी वॉर रूम',
      showcaseDesc:
        'जमीनी मतदाता नब्ज, 24/7 मीडिया मॉनिटरिंग और समन्वित डिजिटल संचार का संगम जो निर्णायक चुनावी बढ़त सुनिश्चित करता है।',
      philosophyBadge: 'हमारा दर्शन',
      philosophyTitle:
        'विजयी अभियान अनुशासन, सटीक डेटा और निरंतर सशक्त संवाद से बनते हैं।',
      philosophyDesc:
        'हम अनुमानों पर काम नहीं करते। हमारी प्रत्येक चुनावी रणनीति जमीनी खुफिया जानकारी और सैन्य स्तर के अनुशासन से क्रियान्वित की जाती है।',
      briefingBtn: 'गोपनीय ब्रीफिंग शेड्यूल करें',
    },
    // Case Studies (with Year, Region, Baseline vs Result & Client Consent)
    caseStudies: {
      badge: 'प्रमाणित ट्रैक रिकॉर्ड',
      title: 'रणनीतिक केस स्टडीज',
      all: 'सभी',
      clientProfile: 'क्लाइंट प्रोफाइल',
      categories: ['सभी', 'चुनावी रणनीति', 'संकट प्रबंधन', 'ब्रांड पीआर'],
      permissionBadge: 'अधिकृत क्लाइंट प्रकटीकरण (गोपनीयता अनुबंध सुरक्षित)',
      baselineLabel: 'अभियान-पूर्व स्थिति (Baseline)',
      resultLabel: 'अंतिम प्रमाणित परिणाम (Result)',
      items: [
        {
          id: 1,
          category: 'चुनावी रणनीति',
          title: 'विधानसभा चुनाव विजय: बहु-चरणीय जनधारणा परिवर्तन',
          client: 'प्रमुख राज्य क्षेत्रीय पार्टी आलाकमान',
          year: '2024',
          region: 'उत्तर भारत (राज्य विधानसभा चुनाव)',
          baseline: 'चुनावी सर्वेक्षणों में 8.4% पीछे; 38 ग्रामीण स्विंग सीटों पर सत्ता विरोधी लहर का प्रभाव।',
          result: '+42 सीटों के साथ स्पष्ट बहुमत; 31 स्विंग सीटों पर विजय; युवा वोट शेयर में +18.4% की भारी वृद्धि।',
          metrics: [
            { label: 'सीटों में बढ़त', val: '+42 सीटें' },
            { label: 'युवा वोट शेयर', val: '+18.4%' },
            { label: 'डिजिटल सहभागिता', val: '120M+' },
          ],
          summary:
            'सत्तारूढ़ विरोधी लहर को काउंटर करने के लिए स्थानीय विकास चौपालों और वायरल डिजिटल अभियानों के माध्यम से आक्रामक जनसंपर्क किया गया।',
        },
        {
          id: 2,
          category: 'संकट प्रबंधन',
          title: '48 घंटों के भीतर समन्वित दुष्प्रचार का खात्मा',
          client: 'केंद्रीय कैबिनेट मंत्री कार्यालय',
          year: '2023',
          region: 'राष्ट्रीय मीडिया एवं डिजिटल परिदृश्य',
          baseline: '200+ मीडिया आउटलेट्स पर विपक्षी आरोप; केवल 6 घंटे में नकारात्मक भावना 68% पर पहुंची।',
          result: '18 मिनट के भीतर तथ्यपरक प्रत्युत्तर; 89% मीडिया निष्पक्षता; सकारात्मक जनभावना 76% तक पुनर्स्थापित।',
          metrics: [
            { label: 'प्रतिक्रिया समय', val: '< 18 मिनट' },
            { label: 'मीडिया निष्पक्षता', val: '89%' },
            { label: 'सकारात्मक भावना बहाली', val: '76%' },
          ],
          summary:
            'हमारे त्वरित प्रतिक्रिया केंद्र ने विपक्षी आरोपों को तथ्यात्मक ऑडिट सबूतों से खंडित किया और 14 टीवी चैनलों पर प्राइम-टाइम बहस का रुख बदला।',
        },
        {
          id: 3,
          category: 'ब्रांड पीआर',
          title: 'राष्ट्रीय नेतृत्व स्थिति एवं नीतिगत विजन का सफल प्रस्तुतीकरण',
          client: 'राष्ट्रीय राजनीतिक हस्ती एवं कार्यसमिति',
          year: '2024–2025',
          region: 'अखिल भारतीय स्तर (मेट्रो एवं प्रमुख राजधानियां)',
          baseline: 'आर्थिक नीतिगत विजन में राष्ट्रीय पहचान का अभाव; प्रमुख संपादकीय कवरेज सीमित।',
          result: 'प्रमुख राष्ट्रीय समाचार पत्रों में 45+ विचार आलेख; 320+ घंटे प्राइम-टाइम नेतृत्व; जनस्वीकार्यता में +22.5% वृद्धि।',
          metrics: [
            { label: 'संपादकीय लेख', val: '45+ अखबार' },
            { label: 'जनस्वीकार्यता में वृद्धि', val: '+22.5%' },
            { label: 'प्राइम टाइम कवरेज', val: '320+ घंटे' },
          ],
          summary:
            '12 महीने का राष्ट्रीय बौद्धिक संवाद, प्रमुख पॉडकास्ट साक्षात्कार और नीतिगत श्वेतपत्रों के माध्यम से आर्थिक नीतियों में आधिकारिक साख स्थापित की गई।',
        },
      ],
    },
    // Insights
    insights: {
      badge: 'रणनीतिक विश्लेषण व रिपोर्ट',
      title: 'नवीनतम राजनीतिक अंतर्दृष्टि',
      subtitle:
        'हमारी वरिष्ठ सलाहकार परिषद द्वारा लिखित रणनीतिक ब्रीफ, चुनावी विश्लेषण और मीडिया रिपोर्ट।',
      readBrief: 'पूरी रिपोर्ट पढ़ें',
      closeBrief: 'रिपोर्ट बंद करें',
      authorLabel: 'लेखक एवं सलाहकार',
      items: [
        {
          id: 1,
          title: 'भारतीय चुनावों में आख्यान युद्ध (Narrative Warfare) का विज्ञान',
          author: 'डॉ. अनन्या सेन',
          role: 'मुख्य रणनीति अधिकारी एवं पूर्व मीडिया सलाहकार',
          avatar: 'AS',
          date: 'अक्टूबर 2026',
          readTime: '6 मिनट अध्ययन',
          category: 'चुनावी विश्लेषण',
          excerpt:
            'क्षेत्रीय टीवी चैनलों और सोशल मीडिया नेटवर्कों पर जनभावना में त्वरित बदलाव कैसे महत्वपूर्ण सीटों के परिणाम तय करते हैं।',
          fullContent: `भारत में आधुनिक चुनावी समर मुख्य रूप से तीन मोर्चों पर लड़ा जाता है: मुख्यधारा का टीवी मीडिया, प्रादेशिक अखबार, और सोशल मीडिया संदेश नेटवर्क।
          
बढ़त बनाए रखने के लिए राजनीतिक दलों को बेहद फुर्तीला होना पड़ता है। विपक्षी हमले का जवाब देने में केवल 3 घंटे की देरी से लाखों मतदाताओं के मन में विपरीत छवि बन सकती है।
          
आर्बिट एडवाइजर्स 15-मिनट का खंडन प्रोटोकॉल लागू करता है, जिसमें तथ्यात्मक इन्फोग्राफिक्स, प्रवक्ताओं के मुख्य बिंदु और वीडियो क्लिप एक साथ सभी माध्यमों पर जारी किए जाते हैं।`,
        },
        {
          id: 2,
          title: 'माइक्रो-टारगेटिंग बनाम जनसभाएं: 2026 मतदाता जनसांख्यिकी रिपोर्ट',
          author: 'विक्रमादित्य राठौर',
          role: 'प्रमुख, चुनावी विश्लेषण एवं डेटा प्रभाग',
          avatar: 'VR',
          date: 'सितंबर 2026',
          readTime: '8 मिनट अध्ययन',
          category: 'डेटा एवं विश्लेषण',
          excerpt:
            'सामान्य वादों की तुलना में बूथ-स्तरीय स्थानीय मुद्दों को लक्षित करने वाले अभियान क्यों कई गुना अधिक प्रभावी सिद्ध होते हैं।',
          fullContent: `150 से अधिक निर्वाचन क्षेत्रों के चुनावी रुझानों के विश्लेषण से स्पष्ट है कि बड़ी जनसभाएं मुख्य रूप से कार्यकर्ताओं का उत्साह बढ़ाने के काम आती हैं, जबकि जीत-हार का अंतर बूथ-स्तरीय स्थानीय प्राथमिकताओं से तय होता है।
          
नागरिक मुद्दों के आधार पर मतदाताओं का वर्गीकरण करने से प्रति प्रचार व्यय पर 3.4 गुना बेहतर परिणाम प्राप्त होते हैं।`,
        },
        {
          id: 3,
          title: '24/7 डिजिटल संकट प्रबंधन: राजनीतिक नेतृत्व की मार्गदर्शिका',
          author: 'राघव के. मल्होत्रा',
          role: 'निदेशक, त्वरित प्रतिक्रिया एवं संकट संचार',
          avatar: 'RM',
          date: 'अगस्त 2026',
          readTime: '5 मिनट अध्ययन',
          category: 'संकट प्रबंधन',
          excerpt:
            'फर्जी वीडियो और समन्वित ऑनलाइन हमलों का सामना करने के लिए राजनीतिक प्रवक्ताओं और चुनाव प्रबंधकों हेतु आवश्यक नियम।',
          fullContent: `सिंथेटिक मीडिया और डीपफेक के दौर में सुबह की प्रेस कॉन्फ्रेंस का इंतजार करना राजनीतिक नुकसान पहुंचा सकता है।
          
हमारा क्राइसिस फ्रेमवर्क तुरंत फॉरेंसिक सत्यापन, सोशल प्लेटफॉर्मों से सीधे समन्वय और तुरंत आधिकारिक स्पष्टीकरण सुनिश्चित करता है।`,
        },
      ],
    },
    // Direct Contact Info
    contact: {
      directChannels: 'प्रत्यक्ष गोपनीय संपर्क सूत्र',
      phone: '+91 98110 24001',
      phoneLabel: 'सलाहकार हॉटलाइन',
      email: 'contact@arbitadvisors.in',
      emailLabel: 'गोपनीय डेस्क',
      whatsapp: '+91 98110 24001',
      whatsappLabel: 'व्हाट्सएप कमांड डेस्क',
      whatsappUrl: 'https://wa.me/919811024001?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20Arbit%20Advisors%2C%20%E0%A4%AE%E0%A5%88%E0%A4%82%20%E0%A4%B0%E0%A4%A3%E0%A4%A8%E0%A5%80%E0%A4%A4%E0%A4%BF%E0%A4%95%20%E0%A4%AA%E0%A4%B0%E0%A4%BE%E0%A4%AE%E0%A4%B0%E0%A5%8D%E0%A4%B6%20%E0%A4%B9%E0%A5%87%E0%A4%A4%E0%A5%81%20%E0%A4%B8%E0%A4%82%E0%A4%AA%E0%A4%B0%E0%A5%8D%E0%A4%95%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A4%BE%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%A4%E0%A4%BE%20%E0%A4%B9%E0%A5%82%E0%A4%82%E0%A5%A4',
      chatOnWhatsapp: 'व्हाट्सएप पर संपर्क करें',
    },
    // Legal & Regulatory Disclaimer
    disclaimer: {
      title: 'संवैधानिक एवं नियामक अस्वीकरण (Disclaimer)',
      text: 'आर्बिट एडवाइजर्स एक स्वतंत्र, निजी राजनीतिक परामर्श एवं रणनीतिक संचार फर्म है। इसका भारत सरकार, भारतीय संसद, किसी भी मंत्रालय अथवा संवैधानिक संस्था से कोई आधिकारिक संबंध, संबद्धता या अधिकृतता नहीं है। संसद भवन व राष्ट्रीय प्रतीकों के चित्रण का उपयोग केवल संपादकीय, परिदृश्यात्मक एवं प्रासंगिक संदर्भ के लिए किया गया है।',
    },
    // Consultation Modal
    modal: {
      badge: 'पूर्णतः गोपनीय',
      title: 'रणनीतिक परामर्श सत्र बुक करें',
      subtitle:
        'गोपनीय चुनावी रणनीति, जनछवि निर्माण अथवा संकट प्रबंधन हेतु हमारी वरिष्ठ सलाहकार परिषद से संपर्क करें।',
      nameLabel: 'पूरा नाम *',
      namePlaceholder: 'उदा. डॉ. राजेश शर्मा',
      titleLabel: 'पद / राजनीतिक कार्यालय',
      titlePlaceholder: 'उदा. विधायक / सांसद कार्यालय / अभियान प्रमुख',
      emailLabel: 'गोपनीय ईमेल *',
      emailPlaceholder: 'official@office.in',
      phoneLabel: 'फोन / सीधा संपर्क नंबर *',
      phonePlaceholder: '+91 98765 43210',
      serviceLabel: 'प्राथमिक परामर्श आवश्यकता',
      serviceOptions: [
        { val: 'Brand PR & Leadership Positioning', label: 'ब्रांड पीआर एवं जनछवि' },
        { val: 'Media Relations & War Room', label: 'मीडिया संबंध एवं वॉर रूम' },
        { val: 'Strategic Advisory & Electoral Intelligence', label: 'रणनीतिक सलाहकार एवं खुफिया डेटा' },
        { val: '24/7 Rapid Crisis Management', label: '24/7 त्वरित संकट प्रबंधन' },
        { val: 'Full Campaign Management', label: 'संपूर्ण चुनावी अभियान प्रबंधन' },
      ],
      messageLabel: 'संक्षिप्त रणनीतिक उद्देश्य (वैकल्पिक)',
      messagePlaceholder:
        'विधानसभा/लोकसभा क्षेत्र, आगामी चुनाव समय-सीमा अथवा मुख्य लक्ष्यों का विवरण साझा करें...',
      privacyNote: 'गैर-प्रकटीकरण (NDA) कानूनी प्रोटोकॉल द्वारा सुरक्षित। यह सरकारी पोर्टल नहीं है।',
      submitting: 'सुरक्षित अनुरोध भेजा जा रहा है...',
      submitBtn: 'गोपनीय ब्रीफिंग अनुरोध भेजें',
      successTitle: 'ब्रीफिंग अनुरोध प्राप्त हुआ',
      successDesc:
        'हमारे वरिष्ठ प्रबंध भागीदार आपके अनुरोध की पूर्ण गोपनीयता के साथ समीक्षा करेंगे और 2 घंटे के भीतर आपके कार्यालय से संपर्क करेंगे।',
      doneBtn: 'संपन्न',
    },
    // Footer
    footer: {
      brandDesc:
        'परिवर्तनकारी राजनीतिक रणनीति, तीव्र आख्यान नियंत्रण और स्थायी जनसमर्थन का निर्माण।',
      quickLinks: 'त्वरित लिंक',
      ourServices: 'हमारी सेवाएं',
      connectWithUs: 'हमसे जुड़ें',
      directContact: 'प्रत्यक्ष संपर्क डेस्क',
      stayUpdated: 'अपडेट रहें',
      stayUpdatedSub: 'नवीनतम रणनीतिक रिपोर्ट व अपडेट प्राप्त करें।',
      emailPlaceholder: 'आपका ईमेल पता',
      subscribedMsg: '✓ आप हमारी ब्रीफिंग सूची में शामिल हो चुके हैं।',
      rights: 'सर्वाधिकार सुरक्षित।',
      privacyPolicy: 'गोपनीयता नीति',
      termsConditions: 'नियम एवं शर्तें',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('arbit_lang') || 'en';
  });

  const toggleLanguage = () => {
    const nextLang = language === 'en' ? 'hi' : 'en';
    setLanguage(nextLang);
    localStorage.setItem('arbit_lang', nextLang);
  };

  const setSpecificLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('arbit_lang', lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        setLanguage: setSpecificLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
