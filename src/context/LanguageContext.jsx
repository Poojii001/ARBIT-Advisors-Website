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
    },
    // Capabilities
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
          title: 'Brand PR',
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
          title: 'Media Relations',
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
        {
          number: '03',
          title: 'Strategic Advisory',
          description:
            'Actionable insights, political intelligence and strategy support to help you make informed decisions and stay ahead of the curve.',
          details: [
            'Electoral War Room Setup & Oversight',
            'Opposition Intelligence & Vulnerability Audits',
            'Coalition & Stakeholder Strategic Alignment',
            'Micro-Targeted Demographic Voter Messaging',
            'Post-Election Policy & Governance Positioning',
          ],
        },
      ],
    },
    // Impact
    impact: {
      badge: 'OUR IMPACT',
      title1: 'Real Strategies.',
      title2: 'Measurable Results.',
      campaignsVal: '150+',
      campaignsTitle: 'CAMPAIGNS MANAGED',
      campaignsSub: 'From local to national',
      reachVal: '500M+',
      reachTitle: 'TOTAL REACH',
      reachSub: 'Across traditional & digital media',
      trustVal: '95%',
      trustTitle: 'CLIENT TRUST FACTOR',
      trustSub: 'Built on results, not promises',
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
    // Case Studies
    caseStudies: {
      badge: 'PROVEN TRACK RECORD',
      title: 'Strategic Case Studies',
      all: 'All',
      clientProfile: 'Client Profile',
      categories: ['All', 'Electoral Strategy', 'Crisis Mitigation', 'Brand PR & Positioning'],
      items: [
        {
          id: 1,
          category: 'Electoral Strategy',
          title: 'State Assembly Victory: Multi-Phased Perception Overhaul',
          client: 'Major State Regional Party',
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
          client: 'Union Cabinet Minister',
          metrics: [
            { label: 'Response Velocity', val: '< 18 Mins' },
            { label: 'Media Neutrality Ratio', val: '89%' },
            { label: 'Positive Sentiment Recovery', val: '76%' },
          ],
          summary:
            'Deployed our Rapid Response Command Center to deconstruct opposition allegations with verifiable audit proofs and primed prime-time debates across 14 broadcast networks.',
        },
        {
          id: 3,
          category: 'Brand PR & Positioning',
          title: 'National Leadership Positioning & Policy Vision Rollout',
          client: 'National Political Figure',
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
      items: [
        {
          id: 1,
          title: 'The Anatomy of Narrative Warfare in High-Density Indian Elections',
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
        { val: 'Brand PR', label: 'Brand PR & Leadership Positioning' },
        { val: 'Media Relations', label: 'Media Relations & Prime-Time Strategy' },
        { val: 'Strategic Advisory', label: 'Strategic Advisory & War Room Setup' },
        { val: 'Crisis Management', label: '24/7 Rapid Crisis Management' },
        { val: 'Full Campaign', label: 'End-to-End Electoral Campaign Management' },
      ],
      messageLabel: 'Brief Strategic Objective (Optional)',
      messagePlaceholder:
        'Share details regarding constituency, upcoming election timeline, or key objectives...',
      privacyNote: 'Protected by non-disclosure legal protocols. Data is never shared.',
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
    },
    // Capabilities
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
          title: 'मीडिया संबंध प्रबंधन',
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
        {
          number: '03',
          title: 'रणनीतिक सलाहकार',
          description:
            'सटीक राजनीतिक खुफिया जानकारी, बूथ-स्तरीय डेटा और रणनीतिक सहयोग से आपको विरोधियों से हमेशा आगे रखना।',
          details: [
            'चुनावी वॉर रूम की स्थापना एवं संचालन',
            'विपक्षी रणनीति विश्लेषण एवं कमियों का ऑडिट',
            'गठबंधन एवं हितधारक रणनीतिक सामंजस्य',
            'वर्ग-विशिष्ट एवं जनसांख्यिकीय मतदाता संदेश',
            'चुनाव-उपरांत नीतिगत व शासन स्थिति निर्धारण',
          ],
        },
      ],
    },
    // Impact
    impact: {
      badge: 'हमारा प्रभाव व परिणाम',
      title1: 'ठोस रणनीतियां।',
      title2: 'मापने योग्य परिणाम।',
      campaignsVal: '150+',
      campaignsTitle: 'सफल चुनावी अभियान',
      campaignsSub: 'स्थानीय निकाय से राष्ट्रीय स्तर तक',
      reachVal: '500M+',
      reachTitle: 'कुल जन पहुंच',
      reachSub: 'पारंपरिक मीडिया एवं डिजिटल मंचों पर',
      trustVal: '95%',
      trustTitle: 'क्लाइंट विश्वास दर',
      trustSub: 'वादों पर नहीं, परिणामों पर आधारित',
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
    // Case Studies
    caseStudies: {
      badge: 'प्रमाणित ट्रैक रिकॉर्ड',
      title: 'रणनीतिक केस स्टडीज',
      all: 'सभी',
      clientProfile: 'क्लाइंट प्रोफाइल',
      categories: ['सभी', 'चुनावी रणनीति', 'संकट प्रबंधन', 'ब्रांड पीआर'],
      items: [
        {
          id: 1,
          category: 'चुनावी रणनीति',
          title: 'विधानसभा चुनाव विजय: बहु-चरणीय जनधारणा परिवर्तन',
          client: 'प्रमुख राज्य क्षेत्रीय पार्टी',
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
          client: 'केंद्रीय कैबिनेट मंत्री',
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
          client: 'राष्ट्रीय राजनीतिक हस्ती',
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
      items: [
        {
          id: 1,
          title: 'भारतीय चुनावों में आख्यान युद्ध (Narrative Warfare) का विज्ञान',
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
        { val: 'Brand PR', label: 'ब्रांड पीआर एवं नेतृत्व स्थिति' },
        { val: 'Media Relations', label: 'मीडिया संबंध एवं प्राइम-टाइम रणनीति' },
        { val: 'Strategic Advisory', label: 'रणनीतिक परामर्श एवं वॉर रूम स्थापना' },
        { val: 'Crisis Management', label: '24/7 त्वरित संकट प्रबंधन' },
        { val: 'Full Campaign', label: 'संपूर्ण चुनावी अभियान प्रबंधन' },
      ],
      messageLabel: 'संक्षिप्त रणनीतिक उद्देश्य (वैकल्पिक)',
      messagePlaceholder:
        'विधानसभा/लोकसभा क्षेत्र, आगामी चुनाव समय-सीमा अथवा मुख्य लक्ष्यों का विवरण साझा करें...',
      privacyNote: 'गैर-प्रकटीकरण (NDA) कानूनी प्रोटोकॉल द्वारा संरक्षित। डेटा कभी साझा नहीं किया जाता।',
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
