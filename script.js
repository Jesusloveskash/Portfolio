document.querySelector('#year').textContent = new Date().getFullYear();
const yapToggle = document.querySelector('#yap-toggle');
yapToggle.addEventListener('click', () => {
  const enabled = yapToggle.getAttribute('aria-pressed') !== 'true';
  yapToggle.setAttribute('aria-pressed', String(enabled));
  yapToggle.querySelector('span').textContent = enabled ? 'ON' : 'OFF';
  document.querySelector('#yap-caption').textContent = enabled
    ? 'Okay, you asked for the lore. Same facts, more Kash.'
    : 'The short version. For people with 37 tabs open.';
  document.querySelectorAll('[data-short]').forEach(element => {
    // Only locally authored copy is inserted; no user or remote input.
    element.innerHTML = enabled ? element.dataset.yap : element.dataset.short;
  });
});
const roleStories = {
  curious: {
    label: 'THE PERSON BEHIND THE BULLET POINTS',
    title: 'A onesie, a hackathon, and a lot of questions.',
    copy: 'At Cal Hacks 13.0, I built an AI-assisted scam detection agent, met other hackers, joined a Clash Royale tournament, and explored San Francisco with friends. I like the building. I like the people just as much.',
    anchor: '#side-quests', link: 'Take the side quest ↗'
  },
  fde: {
    label: 'FORWARD DEPLOYED ENGINEERING',
    title: 'Talk to the people. Build the thing.',
    copy: 'At Farallon, I built Python reconciliation tools and a Streamlit/Snowflake dashboard for trading operations. At Savorly, I turned user and partner feedback into product requirements and features.',
    anchor: '#work', link: 'See the work ↗'
  },
  analyst: {
    label: 'DATA & IMPACT ANALYTICS',
    title: 'Messy data. A clearer next move.',
    copy: 'At Change Please, I cleaned multi-source datasets and built Tableau dashboards for non-technical stakeholders. At JBEI, I consolidated 100,000+ microbial strain records and verified metadata against 50+ publications.',
    anchor: '#work', link: 'Follow the data ↗'
  },
  associate: {
    label: 'RESEARCH, BUSINESS & COLLABORATION',
    title: 'Technical curiosity. People skills included.',
    copy: 'At Formtek, I research companies, technical needs, and enterprise software opportunities. As a Berkeley CDSS Cohort Lead, I led workshops and presentations for 35–40 incoming students. I like helping people get to the next step.',
    anchor: '#experience', link: 'Get the background ↗'
  }
};
document.querySelectorAll('[data-role]').forEach(button => {
  button.addEventListener('click', () => {
    const story = roleStories[button.dataset.role];
    document.querySelectorAll('[data-role]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelector('#role-label').textContent = story.label;
    document.querySelector('#role-title').textContent = story.title;
    document.querySelector('#role-copy').textContent = story.copy;
    const link = document.querySelector('#role-proof');
    link.href = story.anchor;
    link.textContent = story.link;
  });
});

const threads = {
  people: { copy: 'At Cal Hacks, I wanted to meet as many hackers as possible and hear what they were building. The people are part of why I show up.', anchor: '#side-quests', link: 'Meet hackathon Kash ↗' },
  problems: { copy: 'Trading data that needs checking. Surplus meals that could reach students. I like understanding what is actually difficult before deciding what to build.', anchor: '#work', link: 'Start with the problem ↗' },
  building: { copy: 'Python reconciliation tools, a Streamlit/Snowflake dashboard, a surplus-meals app, and an AI-assisted scam investigation tool. Conversations turn into things you can use.', anchor: '#work', link: 'See what I’ve built ↗' }
};
document.querySelectorAll('[data-thread]').forEach(button => {
  button.addEventListener('click', () => {
    const story = threads[button.dataset.thread];
    document.querySelectorAll('[data-thread]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelector('#thread-copy').textContent = story.copy;
    const link = document.querySelector('#thread-link');
    link.href = story.anchor;
    link.textContent = story.link;
  });
});
const facts = [
  'Berkeley Data Science. Economics minor. Graduating in 2027.',
  'Built Python, Snowflake, and Streamlit tools for trading operations at Farallon.',
  'Cleaned 100,000+ microbial strain records at the Joint BioEnergy Institute.',
  'Cal Hacks uniform: a Stitch onesie. Saturday step count: about 18,000.',
  'D1 yapper means I love a conversation. Especially about what you’re building.'
];
let fact = 0;
document.querySelector('#next-fact').addEventListener('click', () => {
  fact = (fact + 1) % facts.length;
  document.querySelector('#quick-fact').textContent = facts[fact];
  document.querySelector('#fact-count').textContent = String(fact + 1).padStart(2, '0') + ' / 05';
});
