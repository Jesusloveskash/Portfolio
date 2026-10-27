export const ownerProfile = {
  identity: {
    fullName: 'Kash Vinayak', shortName: 'Kash', osName: 'Kash OS', pronouns: 'she/her',
    domain: 'https://jesusloveskash.github.io/Portfolio/', location: 'San Francisco Bay Area', timezone: 'America/Los_Angeles',
    roles: ['Builder', 'Analyst', 'Researcher', 'Communicator', 'Explorer', 'D1 Yapper'],
    headline: 'I talk to people. I build things.', tagline: 'Usually in that order.',
    intro: 'Berkeley Data Science student. I build useful things across finance, research, AI, and product—and I like meeting the people behind the problems.',
    positioning: 'Different industries. Same curiosity. I’m looking for client-facing work where technical problem-solving and a good conversation belong together.',
    education: 'UC Berkeley · Data Science + Economics minor · Class of 2027',
    portrait: 'public/assets/illustrations/kash-portrait.webp'
  },
  imageGeneration: {mode:'codex-native', approvedSourceImages:['Owner-supplied photograph in conversation'], likenessNotes:'Use supplied portrait; do not invent photographic scenes.', finalApprovalBy:'Kash Vinayak'},
  conversion: {email:'kashish_vinayak@berkeley.edu', alternateEmail:'vinayakkashish2@gmail.com', resume:'public/assets/documents/Kash-Vinayak-Resume.pdf', primaryLabel:'Explore projects'},
  socials: [
    {name:'LinkedIn',label:'Let’s connect',url:'https://www.linkedin.com/in/kash-vinayak-012b63216/'},
    {name:'GitHub',label:'Follow the commits',url:'https://github.com/Jesusloveskash'}
  ],
  quickFacts: ['20 European countries. A lot of new conversations.','Client-facing work? Yes, please. I like the people part.','Cal Hacks outfit: Stitch onesie. Saturday: roughly 18,000 steps.','Finance, research, AI, product. Same curiosity.','Ask me what you’re building. Actually, I’ll probably ask first.'],
  daily: ['Go meet someone interesting today.','Ask the question.','Build something useful.','Curiosity looks good on you.','You never know who you’ll meet.','A good conversation can change everything.'],
  achievements: [['2nd place','Forward Deployed Engineer Competition · SF Tech Week','Listed in the supplied October 24 résumé; independently unverified.'],['Tennyson valedictorian','High school academic recognition','Listed in supplied résumés. No transcript grades are published.'],['Helping people find their feet','UC Berkeley CDSS Welcome Program','Led incoming Data Science student workshops and presentations.'],['Showing up curious','Research, hackathons & community','A pattern I’m proud of, rather than a fabricated award.']],
  metrics: [
    {value:'100K+',label:'microbial strain records',status:'founder-reported',source:'Supplied technical résumé: JBEI',public:true,disclaimer:'Résumé-reported scope; not independently verified.'},
    {value:'50+',label:'research publications checked',status:'founder-reported',source:'Supplied technical résumé: JBEI',public:true,disclaimer:'Résumé-reported scope; not independently verified.'},
    {value:'35–40',label:'incoming students in workshops',status:'founder-reported',source:'October 24 résumé: CDSS',public:true,disclaimer:'Résumé-reported scope; not independently verified.'}
  ],
  projects: [
    {id:'farallon',name:'Making the numbers make sense',client:'Farallon Capital Management',category:'Finance & engineering',role:'Trading Ops FDE Intern',dates:'May–Sep 2026',status:'Internship contribution',image:'public/assets/projects/cases.webp',
      problem:'Daily P&L verification, pricing checks, and financial reconciliation require careful investigation across systems.',
      build:'Built a Streamlit/Snowflake dashboard and Python tools for P&L verification, pricing checks, data validation, and investigating swap/CFD financing discrepancies.',
      outcome:'Tools supported operational review and reconciliation. No quantified time savings or financial impact is claimed.',
      lesson:'Accuracy matters as much as automation. A useful tool has to make the next investigation easier.',stack:['Python','SQL','Snowflake','Streamlit'],url:null,featured:true,source:'October 24 résumé and owner intake'},
    {id:'scam',name:'A second look at suspicious sites',client:'AI-assisted scam investigation',category:'AI & investigation',role:'Builder · technical challenge',dates:'October 2026',status:'Challenge / hackathon project',image:'public/assets/projects/cases.webp',
      problem:'One suspicious site can be part of a larger pattern. Investigating signals and possible connections takes more than a quick glance.',
      build:'Built an AI-assisted investigation system using Python and browser automation to surface potential fraud signals, extract cryptocurrency addresses, and examine possible connections between sites.',
      outcome:'A technical challenge project associated with the TRM Labs challenge context. No commercial deployment, TRM adoption, or independent fraud classification is claimed.',
      lesson:'Automated signals need careful interpretation. A possible connection is a lead to investigate, not a verdict.',stack:['Python','Playwright','Browser automation','Structured analysis'],url:null,featured:true,source:'Owner completed intake'},
    {id:'savorly',name:'Good food deserves another chance',client:'Savorly',category:'Product & people',role:'Software Developer & Product Lead',dates:'Nov 2025–Jan 2026',status:'Product development',image:'public/assets/projects/cases.webp',
      problem:'Students and surplus meals should be easier to connect. Getting the experience right starts with understanding both sides.',
      build:'Turned user research and partner feedback into product requirements, designed UI/UX in Figma, and developed features with React Native and JavaScript.',
      outcome:'Contributed product planning, interface design, and implementation. No launch, user count, or revenue is claimed.',
      lesson:'A technically impressive feature only matters if it helps someone do what they came to do.',stack:['React Native','JavaScript','Figma','User research'],url:null,featured:true,source:'October 24 résumé and owner intake'},
    {id:'jbei',name:'Small organisms. Big data.',client:'Joint BioEnergy Institute',category:'Scientific data',role:'EinR Intern · Strain Archive Data Legacy Project',dates:'Summer 2024',status:'Research contribution',image:null,
      problem:'Scientific records need consistent, accessible metadata before they can move into a modern database.',
      build:'Consolidated and cleaned microbial strain records, checked metadata against research publications, and collaborated with bioinformatics and microbiology researchers.',
      outcome:'Prepared scientific data for migration. The supplied résumé reports 100K+ records and 50+ publications; these figures are pending independent verification.',
      lesson:'Data quality is a research problem and a people problem. Definitions have to make sense to the people using the records.',stack:['Data cleaning','Scientific metadata','Research'],url:null,source:'Supplied technical résumé'},
    {id:'berkeley-lab',name:'Research people can understand',client:'Lawrence Berkeley National Laboratory',category:'Research & communication',role:'Research Affiliate, Data Science',dates:'Jun 2023–Dec 2024',status:'Research contribution',image:null,
      problem:'Complex scientific datasets and research findings need to be understandable outside the immediate research team.',
      build:'Analyzed scientific datasets with Python, Pandas, and Matplotlib, evaluated climate metrics, and built a lab website to communicate research.',
      outcome:'Contributed analysis, visualization, and research communication. No independent publication or project ownership claim is implied.',
      lesson:'Explaining the work is part of doing the work.',stack:['Python','Pandas','Matplotlib'],url:null,source:'Supplied résumés'},
    {id:'change-please',name:'Impact data with a clearer story',client:'Change Please · London',category:'Impact analytics',role:'Impact Data Analyst',dates:'Jan–May 2026',status:'Analyst contribution',image:null,
      problem:'Multi-source impact data needed structure for audits, grants, CRM migration, and stakeholder decisions.',
      build:'Cleaned and structured datasets and created Tableau dashboards for non-technical stakeholders and executives.',
      outcome:'Supported clearer reporting and data preparation. No quantified organizational outcome is claimed.',
      lesson:'A dashboard is a conversation with someone who needs to make a decision.',stack:['Tableau','Data quality','Stakeholder insights'],url:null,source:'October 24 résumé'},
    {id:'freenow',name:'Good plans start with “you free?”',client:'FreeNow',category:'Product concept',role:'Product exploration',dates:'Date not specified',status:'Concept · not a launched product',image:null,
      problem:'Wanting company and knowing who is available are two different things.',
      build:'Explored a real-time campus social app concept for students available for coffee, studying, or a spontaneous adventure.',
      outcome:'An explored product concept. No deployed app or active users are claimed.',lesson:'Start with the small, human friction before reaching for a feature list.',stack:['Product thinking','Campus community','User needs'],url:null,source:'Owner creative brief and intake'}
  ],
  experience: [
    {company:'Formtek, Inc.',role:'Technical Business Development & Research Intern',date:'Oct 2026–Present',copy:'Research engineering-intensive companies, evaluate technical needs, and identify enterprise software opportunities in CAD/BIM and engineering data management.'},
    {company:'Farallon Capital Management',role:'Trading Ops Forward Deployed Engineer Intern',date:'May–Sep 2026',copy:'Built Python and Streamlit/Snowflake tools supporting financial reconciliation, verification, and operational investigations.'},
    {company:'Change Please',role:'Impact Data Analyst · London',date:'Jan–May 2026',copy:'Structured multi-source impact data and built dashboards for audits, grant applications, CRM migration, and stakeholders.'},
    {company:'Handshake',role:'AI Trainer & Evaluator',date:'Dec 2025–Jan 2026',copy:'Refined prompt frameworks and evaluated LLM outputs for accuracy, safety, and quality using structured feedback.'},
    {company:'Savorly',role:'Software Developer & Product Lead',date:'Nov 2025–Jan 2026',copy:'Connected user research, product planning, Figma design, and React Native development for a surplus-meals app.'},
    {company:'UC Berkeley CDSS',role:'Welcome Program Cohort Lead',date:'May 2025–Jan 2026',copy:'Led workshops and presentations for incoming Data Science students, coordinated logistics, and synthesized student feedback.'},
    {company:'UC Berkeley',role:'Network Engineering Assistant',date:'Start: May 2025 · end not confirmed',copy:'Supported campus networking hardware, troubleshooting, and IT records using ServiceNow; applied IP addressing, VLAN, and DNS concepts.'},
    {company:'Joint BioEnergy Institute',role:'EinR Intern · Strain Archive Data Legacy Project',date:'Jun–Aug 2024',copy:'Cleaned scientific records, verified metadata, and helped prepare strain data for database migration.'},
    {company:'Google',role:'Google Student Engineer',date:'Aug 2023–Oct 2024',copy:'Participated in engineering workshops, created data visualizations, and solved algorithmic problems with Python and C++.'},
    {company:'Amazon Games',role:'Student Apprentice',date:'Aug 2023–Mar 2024',copy:'Explored game design, AI, program flow, data storage, UX, and player feedback through learning with Amazon professionals.'},
    {company:'Lawrence Berkeley National Laboratory',role:'Research Affiliate, Data Science',date:'Jun 2023–Dec 2024',copy:'Analyzed scientific data and communicated findings through visualizations and a lab website.'},
    {company:'City of Hayward',role:'Youth Commissioner',date:'Jun 2023–May 2024',copy:'Helped develop youth initiatives through policymaking with a focus on equitable school environments.'}
  ],
  journey: [
    {date:'2023',title:'A question worth researching',copy:'High school cancer research and a contribution to the Teens in Health journal helped spark my interest in scientific work.',app:'learn'},
    {date:'2023–2024',title:'Learning inside a research lab',copy:'At Berkeley Lab and JBEI, I worked with scientific data, visualization, and research communication.',app:'projects'},
    {date:'2024',title:'Hello, Berkeley',copy:'Data Science, an Economics minor, and a growing interest in how technical systems meet human needs.',app:'systems'},
    {date:'2025',title:'People are part of the work',copy:'CDSS cohort leadership and Savorly brought together communication, product thinking, and building.',app:'experience'},
    {date:'2026',title:'New city. New questions.',copy:'London study abroad and impact analytics at Change Please. I explored 20 European countries during study abroad (self-reported).',app:'notes'},
    {date:'2026',title:'Finance, with a builder’s toolkit',copy:'At Farallon, I built tools around financial data checks and reconciliation.',app:'projects'},
    {date:'October 2026',title:'Technical work. Very unserious outfit.',copy:'Cal Hacks, a Stitch onesie, a scam-investigation project, and as many conversations as I could fit in.',app:'notes'},
    {date:'2027',title:'What’s next?',copy:'Graduation ahead. Looking for client-facing technical roles where I can build, investigate, and work with people.',app:'contact'}
  ],
  skills: [
    {name:'Build',tools:['Python','SQL','JavaScript','React Native','HTML/CSS','Git','Playwright']},
    {name:'Investigate',tools:['Snowflake','Streamlit','Pandas','NumPy','Matplotlib','Tableau','Power BI']},
    {name:'Work with people',tools:['User research','Figma','Product planning','Scientific communication','Presentations','ServiceNow']}
  ],
  method: [
    {title:'Meet the people',copy:'Understand who needs the work and what is difficult right now.',artifact:'A clear problem statement',gate:'Can we explain whose problem this solves?'},
    {title:'Trace the system',copy:'Follow the data, workflow, and constraints before deciding what to change.',artifact:'A map of the current workflow',gate:'Are the assumptions and data sources clear?'},
    {title:'Build a useful first step',copy:'Make the smallest useful thing, then test it against the actual problem.',artifact:'A prototype or working tool',gate:'Does the core behavior work?'},
    {title:'Explain, check, improve',copy:'Make the result understandable and investigate what still needs work.',artifact:'A demonstration and next steps',gate:'Can another person understand the result and its limits?'}
  ],
  notes: [
    {slug:'organized-chaos',title:'Organized chaos, excellent company',category:'Hackathons',read:'2 min',intro:'One weekend. A scam investigation tool. One Stitch onesie. A lot of “what are you building?”',body:['At Cal Hacks 13.0 in October 2026, I worked on an AI-assisted scam investigation project. I also made it a personal goal to meet as many hackers as possible and hear what they were excited about.','Saturday included roughly 18,000 steps, a Clash Royale tournament, exploring San Francisco with friends, and plenty of conversations. The step count is my own recollection, not an independently verified metric.','I like the building. I like the people just as much. A hackathon can be both technical work and a very good reason to ask someone about their idea.']},
    {slug:'follow-the-question',title:'Different industries. Same question.',category:'Working notes',read:'2 min',intro:'Research, finance, and product work keep bringing me back to what people actually need.',body:['Scientific research taught me to investigate unfamiliar questions. Financial workflows made the importance of accuracy and reliability very concrete. Product work brought the user back into every decision.','The common thread is not a single industry. It is understanding a system, finding the friction inside it, and building something useful for the people working with it.','These are reflections on my experience, not claims about quantified business outcomes.']},
    {slug:'new-city-new-questions',title:'New city, same curiosity',category:'Side quests',read:'1 min',intro:'Twenty European countries during study abroad, and plenty of reasons to start a conversation.',body:['During study abroad, I traveled to 20 European countries. That is a self-reported personal travel count, not a professional credential.','I like exploring unfamiliar places, meeting people, and figuring things out as I go. It is also why client-facing roles and opportunities to travel appeal to me.','No future travel itinerary or private schedule is published here.']}
  ],
  voiceAnswers: {
 intro:{label:'Give me the 30-second introduction',text:'Meet Kash Vinayak: a UC Berkeley Data Science student with an Economics minor, graduating in 2027. She has worked across scientific research, finance, AI, and product development. She is looking for client-facing FDE, analyst, associate, and technical consultant roles where she can investigate problems, build useful tools, and work with people.'},
 projects:{label:'What has Kash built?',text:'At Farallon, Kash built Python and Streamlit/Snowflake tools supporting reconciliation and verification. At Savorly, she contributed product planning, Figma design, and React Native development for a surplus-meals app. She also built an AI-assisted scam investigation tool in a technical challenge and hackathon context. Open Projects for the full scope and limitations.'},
 people:{label:'Why client-facing work?',text:'Kash enjoys meeting people, asking questions, traveling, and understanding what someone actually needs. Her research, analyst, product, and cohort leadership experience brings communication together with technical problem-solving. She describes herself as a D1 yapper.'},
 contact:{label:'How can I contact Kash?',text:'Email Kash at kashish underscore vinayak at berkeley dot edu. Her Contact app also includes an alternate email, LinkedIn, GitHub, and a résumé download.'}
},
  kashText: ['Hi, I’m Kash.','I’m a builder, data person, researcher, and self-proclaimed D1 yapper.','I love meeting people and figuring out what makes them tick. I’ve worked across finance, research, AI, and product development, and somehow every experience has made me more curious about the next one.','I don’t believe good technology starts with showing off what you can build. I think it starts with understanding what people actually need.','I take my work seriously, but I don’t think life has to be serious all the time.','If you’ve made it this far, we should probably talk.'],
  legal: {copyrightOwner:'Kash Vinayak',metricDisclaimer:'All résumé and owner-supplied claims are attributed. No quantified business impact is asserted.',assetLicenses:['Original native-generated illustration assets; pending final owner review','Original synthesized instrumental soundtrack, composed for this project']}
};
