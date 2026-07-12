// Central content source for the CCC site. Mirrors verified copy pulled from
// the legacy Google Sites export and live site. Update copy here, not in components.

export const site = {
  name: "Civic Creation Circle",
  shortName: "CCC",
  tagline: "Discuss. Change. Impact.",
  description:
    "The Civic Creation Circle (CCC) is a student-led civic engagement organization turning civic curiosity into action through political, legal, and journalistic means.",
  email: "myra.dhawan@lps-students.org",
  instagram: "https://www.instagram.com/civic.creation.circle",
  schoologyCode: "ZQQJ-86SX-5ZJQR",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Press", href: "/press" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const links = {
  newsletterSubscribe: "https://forms.gle/WzjW2GQWV1Qt6igw8",
  newsletterArchive:
    "https://drive.google.com/drive/folders/1icIBXLXLLb7AeH-BtFbQRDbh4R29onwx?usp=sharing",
  newsletterSubmit: "https://forms.gle/NnVR1GwunNqjipXQ9",
  chapterApplication: "https://forms.gle/5cABnGT4dADq1Taa7",
  press: {
    unEcosoc: "https://drive.google.com/file/d/1JHrsI3hONbg151_yIcDsku2J1oX5kBLY/view",
    townCouncilTestimony: "https://www.youtube.com/watch?v=kmbnJpmdXJ0",
    mobilizePetition: "https://www.mobilize.us/njinstituteforsocialjustice/event/974192/",
    townCouncilFeature:
      "https://www.facebook.com/LivingstonTownshipNJ/videos/during-its-june-8-meeting-the-livingston-township-council-heard-from-civic-creat/2092034281744725/",
    njisjInterview: "https://www.instagram.com/dosocialjustice/reel/DZfe7sCzLp3/",
    civicsUnplugged: "https://www.instagram.com/civicsunplugged/p/DYn4Xqdm5dh/",
    vote16Njisj: "https://www.instagram.com/dosocialjustice/reel/DZK5rf8CLsO/",
  },
};

export const impactStats = [
  { value: 2500, suffix: "+", label: "Civic Current subscribers" },
  { value: 50, suffix: "+", label: "Livingston High School members" },
  { value: 13, suffix: "", label: "Dedicated student leaders" },
  { value: 8, suffix: "", label: "Speaker and advocacy events this year" },
];

export const homeImages = {
  hero: "/images/home/hero.jpg",
  story: "/images/home/story.jpg",
};

export const programs = [
  {
    slug: "civic-current-newsletter",
    name: "Civic Current Newsletter",
    tagline: "A monthly publication for the civically curious.",
    description:
      "A monthly publication to increase student awareness of civic issues through a news summary, student-submitted opinion pieces, CCC updates, and news quizzes.",
    cta: { label: "Subscribe", href: links.newsletterSubscribe },
    icon: "/images/home/newsletter-icon.png",
  },
  {
    slug: "roundtable-discussions",
    name: "Roundtable Discussions",
    tagline: "Once-a-semester open forum on the issue of the year.",
    description:
      "A once-in-a-semester opportunity to discuss the chosen civic issue of the year (selected by member vote) in an open, honest, and educated manner. Productive conversations are the first step to change.",
    cta: { label: "See our events", href: "/events" },
    icon: "/images/home/roundtable-icon.png",
  },
  {
    slug: "purpose-projects",
    name: "Purpose Projects",
    tagline: "Turning the issue of the semester into real action.",
    description:
      "A club-wide initiative working to solve the issue of the semester at the local, state, and/or national level. Bi-monthly check-in meetings keep the effort going all year, giving every student a role and a voice in the project.",
    cta: { label: "Get involved", href: "/get-involved" },
    icon: "/images/home/purpose-icon.png",
  },
];

export const currentIssue = {
  title: "Civic Issue: Lowering the Voting Age",
  body: "Voted on by our members, this issue had 30% of our club's support. Lowering the voting age is particularly relevant to youth today, when increased access to resources allows them to be more educated and involved. Now more than ever, their involvement is necessary. Bringing youth into the world of voting by age 16 at the local level not only promotes lifelong voting habits but also more accurately represents the modernizing population. Together, we're laying the groundwork for higher voter engagement and awareness one young person at a time.",
  image: "/images/home/voting-age.png",
  petition: {
    label: "Sign our petition to lower the voting age in Livingston",
    href: "https://www.mobilize.us/njinstituteforsocialjustice/event/974192/",
  },
};

export const testimonials = [
  {
    name: "Ketan Bhuptani",
    role: "Deputy Mayor of Livingston",
    quote:
      "Starting something like the Civic Creation Circle shows that there is a need and desire to come forth with what the youth believe is right.",
    image: null,
  },
  {
    name: "Annika Raj",
    role: "Civic Current Newsletter Editor",
    quote:
      "I'm excited to encourage young people to speak up and take part in local political conversations that affect their lives.",
    image: "/images/team/annika-raj.jpg",
  },
  {
    name: "Myra Dhawan",
    role: "Founder & President",
    quote:
      "I believed students were beyond capable of holding discussions about civic issues, but lacked a nonpartisan forum to debate, brainstorm, and implement impactful solutions.",
    image: "/images/team/myra-dhawan.jpg",
  },
];

export const events = [
  {
    date: "2025-11-13",
    displayDate: "Nov 13",
    title: "Interest Meeting",
    description:
      "With 30+ attendants, the CCC had a great first meeting. We developed solutions to civic issue prompts in groups, then discussed the club's mission, programs, and board positions.",
    image: "/images/events/01.jpg",
  },
  {
    date: "2026-01-14",
    displayDate: "Jan 14",
    title: "Roundtable Discussion",
    description:
      "We discussed our civic issue, lowering the voting age, at length. A research slideshow on the pros, cons, case studies, and potential solutions gave everyone the tools for a productive conversation.",
    image: "/images/events/02.jpg",
  },
  {
    date: "2026-03-11",
    displayDate: "Mar 11",
    title: "LWV Speaking Event",
    description:
      "In partnership with the League of Women Voters, we hosted Melissa Marks, Manager of Mission Impact at the NJ League of Women Voters. Students gained insight into civic engagement, advocacy, and how young people can make an impact.",
    image: "/images/events/03.jpg",
  },
  {
    date: "2026-04-10",
    displayDate: "Apr 10",
    title: "Carmen Cusido Speaking Event",
    description:
      "We hosted Carmen Cusido, a Columbia-trained journalist who has written for CNN, Newsweek, and NPR. She spoke about her career in journalism and answered member questions about civics and lowering the voting age.",
    image: "/images/events/04.jpg",
  },
  {
    date: "2026-04-30",
    displayDate: "Apr 30",
    title: "NJISJ Vote16 Event",
    description:
      "We hosted Heather Richner and Kimberly Cross of the New Jersey Institute for Social Justice, who led the Vote16 movement that lowered Newark's voting age to 16. Over 20 members learned how to build the movement in Livingston.",
    image: "/images/events/05.jpg",
    image2: "/images/events/06.jpg",
  },
  {
    date: "2026-06-08",
    displayDate: "Jun 8",
    title: "Livingston Town Council Testimony",
    description:
      "The June event brought CCC members before the Livingston Town Council to advocate for lowering the voting age to 16 in local and school board elections, sharing personal testimonies, research, and student-government election data alongside the NJ Institute for Social Justice.",
    image: "/images/press/02.jpg",
  },
];

export const press = [
  {
    slug: "un-ecosoc-youth-forum",
    title: "UN ECOSOC Youth Forum",
    kicker: "International Stage",
    description:
      "Our founder took the CCC to the international stage, discussing the importance of grassroots engagement for real youth leadership at the UN ECOSOC Youth Forum of 2026, with hundreds of delegates and panelists in attendance. We urged multilateral spaces to get behind initiatives like ours in vulnerable communities, listen to youth concerns, and include them in acting upon them. The CCC is going global.",
    href: links.press.unEcosoc,
    video: true,
    cta: "Watch on Drive",
  },
  {
    slug: "livingston-town-council",
    title: "Livingston Town Council Meeting",
    kicker: "Local Advocacy",
    description:
      "On Monday, June 8th, students from Livingston High School's Civic Creation Circle attended the Livingston Town Council meeting to advocate for lowering the voting age to 16 for local and school board elections. The presentation was the result of a year of hard work, sharing personal testimonies, research, and student-government election data, in partnership with the New Jersey Institute for Social Justice, the group that recently helped lower the voting age in Newark.",
    href: links.press.townCouncilTestimony,
    image: "/images/press/02.jpg",
    cta: "Watch testimony",
  },
];

export const pressMentions = [
  { label: "Town Council Feature", org: "Livingston Township NJ (Facebook)", href: links.press.townCouncilFeature },
  { label: "NJISJ Interview", org: "@dosocialjustice", href: links.press.njisjInterview },
  { label: "Civics Unplugged National Feature", org: "@civicsunplugged", href: links.press.civicsUnplugged },
  { label: "Vote16 NJISJ Interview", org: "@dosocialjustice", href: links.press.vote16Njisj },
  { label: "Mobilize Petition", org: "NJ Institute for Social Justice", href: links.press.mobilizePetition },
];

export const newsletterSections = [
  { name: "Monthly News Summary" },
  { name: "Student Submissions" },
  { name: "CCC Updates" },
  { name: "News Quiz / Games" },
];

export type TeamMember = {
  name: string;
  role: string;
  department: string;
  bio: string;
  email: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    name: "Myra Dhawan",
    role: "Founder & President",
    department: "Leadership",
    bio: "Hi! I'm Myra, a current sophomore at LHS. I founded the Civic Creation Circle because I believed that students were beyond capable of holding discussions about civic issues, but lacked a nonpartisan forum to debate, brainstorm, and implement impactful solutions. Beyond that, I'm deeply inspired by learning about different perspectives and broadening my worldview on all kinds of topics. Outside school, I love to write, read, and paint, and I bring that creativity with me in building civic solutions.",
    email: "myra.dhawan@lps-students.org",
    image: "/images/team/myra-dhawan.jpg",
  },
  {
    name: "Mya Mamouzette",
    role: "Secretary Team",
    department: "Secretary Team",
    bio: "Hi, I'm Mya! I'm a sophomore at Livingston High School, and I joined Civic Creation Club because I'm interested in making a positive impact in my community. In my free time, I enjoy playing volleyball, running track, and reading. I'm excited to learn, collaborate, and contribute with everyone in CCC.",
    email: "mya.mamouzette@lps-students.org",
    image: "/images/team/mya-mamouzette.jpg",
  },
  {
    name: "Grace Zhu",
    role: "Secretary Team",
    department: "Secretary Team",
    bio: "Hi I'm Grace and I am part of the Secretary Team! I like debate and discussing current events, which is a reason why I joined CCC.",
    email: "grace.zhu@lps-students.org",
    image: "/images/team/grace-zhu.jpg",
  },
  {
    name: "Mahi Jaladi",
    role: "Outreach Department",
    department: "Outreach Department",
    bio: "Mahi is a junior at LHS. She spends her free time reading and is actively involved in the DECA, FBLA, and Debate communities. She's excited to serve on the Outreach team for the CCC this year!",
    email: "mahi.jaladi@lps-students.org",
    image: "/images/team/mahi-jaladi.jpg",
  },
  {
    name: "Nadja Petreski",
    role: "Outreach Department",
    department: "Outreach Department",
    bio: "My name is Nadja, and I just moved to New Jersey! I've lived in multiple countries around the world, which is why I'm passionate about building inclusive communities across cultures. I hope to help create meaningful civic impact here!",
    email: "nadja.petreski@lps-students.org",
    image: "/images/team/nadja-petreski.jpg",
  },
  {
    name: "Kruthi Mellacheruvu",
    role: "Internal Outreach Director",
    department: "Outreach Department",
    bio: "Hi, I'm Kruthi, and I am the Internal Outreach Director! I love public speaking, but even more than that, I love talking with people about anything. I joined CCC because I want to talk with others about things that are happening in our world, as well as hear their opinions. I am so excited to meet all of you!",
    email: "kruthi.mellacheruvu@lps-students.org",
    image: "/images/team/kruthi-mellacheruvu.jpg",
  },
  {
    name: "Mahi Khanna",
    role: "Media Department",
    department: "Media Department",
    bio: "I am someone who's driven, organized, and always looking to improve. I enjoy doing fun activities, baking, and traveling. I'm passionate about learning new skills and stepping outside my comfort zone.",
    email: "mahi.khanna@lps-students.org",
    image: "/images/team/mahi-khanna.jpg",
  },
  {
    name: "Aashrita Bhagawatula",
    role: "Webmaster",
    department: "Webmaster",
    bio: "My name is Aashrita, and I manage the CCC website! I am currently a Freshman, and I joined CCC because I want to spread awareness for overlooked issues and help the people affected by them. In my free time, I enjoy playing the piano and listening to music.",
    email: "aashrita.bhagawatula@lps-students.org",
    image: "/images/team/aashrita-bhagawatula.jpg",
  },
  {
    name: "Ali Agha",
    role: "Civic Research Team",
    department: "Civic Research Team",
    bio: "Hi, I'm Ali Agha! I am a Sophomore at Livingston High School. I'm passionate about passing more environmental protections into law, advocating for women's rights, and protecting the funding for scientific research.",
    email: "ali.agha@lps-students.org",
    image: "/images/team/ali-agha.jpg",
  },
  {
    name: "Aadya Vadlakonda",
    role: "Civic Research Team",
    department: "Civic Research Team",
    bio: "Hi, my name is Aadya, and I am a sophomore at LHS. I am ambitious, driven by motivation, and am always willing to learn. I am passionate about advocating for gender equality, sports, and mental health.",
    email: "aadya.vadlakonda@lps-students.org",
    image: "/images/team/aadya-vadlakonda.jpg",
  },
  {
    name: "Sania Majithia",
    role: "Assistant Researcher",
    department: "Civic Research Team",
    bio: "Hi! My name is Sania Majithia. I'm an Assistant Researcher with CCC and currently a sophomore. I have a passion for psychology and business, and hope to make a meaningful impact on society by empowering many people to learn and shape their communities. In my free time, I love to dance and play guitar!",
    email: "sania.majthia@lps-students.org",
    image: "/images/team/sania-majithia.jpg",
  },
  {
    name: "Annika Raj",
    role: "Civic Current Newsletter Editor",
    department: "Newsletter",
    bio: "Annika Raj is the Chair of the National Coalition Against Deepfake Abuse (NCADA) and is deeply passionate about fighting deepfake misuse and protecting people online. She is excited to work with the CCC to encourage young people to speak up and take part in local political conversations that affect their lives. Outside of her advocacy work, Annika loves to dance and spend her free time reading!",
    email: "annika.raj@lps-students.org",
    image: "/images/team/annika-raj.jpg",
  },
  {
    name: "Alan Yaari",
    role: "Purpose Project Lead",
    department: "Purpose Project",
    bio: "I'm a student at Livingston High School with a strong interest in civic engagement and community building. I've worked in social media and outreach roles, where I enjoy telling meaningful stories and building communities around important causes. As the Purpose Project Lead, I focus on transforming thoughtful conversations into action-driven projects that amplify youth voices.",
    email: "alan.yaari@lps-students.org",
    image: "/images/team/alan-yaari.jpg",
  },
];

export const faqs = [
  {
    q: "What exactly are civic issues?",
    a: "Civic issues are the shared questions a community has to work through together, the things that affect how people live, vote, and are treated where they live. They show up at every level: a local school board deciding a policy, a town council setting the voting age, a state weighing a new law, or the country debating rights and representation. Some are political, like elections and legislation. Some are legal, like how a rule gets challenged or changed. And many play out in the news we read every day. At the CCC, we focus on the issues young people can actually shape, and we treat them as problems to understand and solve together rather than sides to pick.",
  },
  {
    q: "How do I join the Civic Creation Circle?",
    a: "Join our Schoology page using the code below to get updates on meetings, events, and resources, or come to our next interest meeting at Livingston High School. You can also DM us on Instagram or email any board member.",
  },
  {
    q: "Do I need experience with debate or politics to join?",
    a: "Not at all. CCC is a nonpartisan forum built for students to learn, discuss, and act together, and many of our most active members joined with no prior civics background.",
  },
  {
    q: "How can my town start a CCC chapter?",
    a: "We provide the resources and structure, and you bring the voice. Fill out our chapter application and our board will follow up with an onboarding packet.",
  },
  {
    q: "How do I submit to the Civic Current Newsletter?",
    a: "Use our submission form to send in an op-ed, research piece, or civic update. We accept submissions from all Livingston High School students.",
  },
];
