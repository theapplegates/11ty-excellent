module.exports = {
<<<<<<< HEAD
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Living Life',
=======
  url: process.env.URL || 'https://paulapplegate.com',
  siteName: 'Eleventy Excellent',
>>>>>>> main
  siteDescription:
    'Eleventy starter based on the workflow suggested by buildexcellentwebsit.es.',
  siteType: 'Blog', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: {
    name: 'Paul Applegate', // i.e. Lene Saile - page / blog author's name. Must be set.
    avatar: '/favicon.png',
<<<<<<< HEAD
    email: 'me@paulapplegate.com', // i.e. hola@lenesaile.com - email of the author
    website: 'https.://paulapplegate.com' // i.e. https.://www.lenesaile.com - the personal site of the author
=======
    email: 'hola@lenesaile.com', // i.e. hola@lenesaile.com - email of the author
<<<<<<< HEAD
    website: 'https://www.lenesaile.com' // i.e. https.://www.lenesaile.com - the personal site of the author
>>>>>>> main
  },
  creator: {
    name: 'Paul Applegate', // i.e. Lene Saile - creator's (developer) name.
    email: 'me@paulapplegate.com',
    website: 'https://paulapplegate.com',
    social: 'https://front-end.social/'
=======
    website: 'https://paulapplegate.com' // i.e. https.://www.lenesaile.com - the personal site of the author
  },
  creator: {
    name: 'Lene Saile', // i.e. Lene Saile - creator's (developer) name.
    email: 'hola@lenesaile.com',
    website: 'https://paulapplegate.com',
    social: 'https://front-end.social/@lene'
>>>>>>> main
  },
  themeColor: '#DD4462', //  Manifest: defines the default theme color for the application
  themeBgColor: '#FBFBFB', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  opengraph_default: '/assets/images/template/opengraph-default.jpg', // fallback/default meta image
  opengraph_default_alt:
    'Visible content: Eleventy starter based on workflow for Cube CSS, Every Layout, Design Tokens and Tailwind for uitility, based on the concepts explained in buildexcellentwebsit.es', // alt text for default meta image
  blog: {
    // this is for the rss feed
    name: 'My Web Development Blog',
    description:
      'Tell the word what you are writing about in your blog. It will show up on feed readers.',
    tagSingle: 'Tag',
    tagPlural: 'Tags',
    tagMore: 'More tags:',
    // feed links are looped over in the head.
    feedLinks: [{title: 'Atom Feed', url: '/feed.xml', type: 'application/atom+xml'}],
    pagination: 'Blog',
    paginationPage: 'Page',
    paginationPrevious: 'Previous',
    paginationNext: 'Next'
  },
  navigation: {
    ariaTop: 'Main',
    ariaBottom: 'Complementary',
    ariaSocial: 'Social',
    closedText: 'Menu'
  },
  themeSwitch: {
    title: 'Theme',
    light: 'light',
    dark: 'dark'
  },
  greenweb: {
    // this goues into src/common/greenweb.njk
    providers: {
      // if you want to add more than one, edit the array directly.
      domain: 'netlify.com',
      service: 'cdn'
    },
    credentials: {
      // optional, eg: 	{ domain='my-org.com', doctype = 'webpage', url = 'https://my-org.com/our-climate-record'}
      domain: '',
      doctype: '',
      url: ''
    }
  },
  viewRepo: {
    // this is for the view/edit on github link. The value in the package.json will be pulled in.
    allow: true,
    infoText: 'View this page on GitHub'
  },
  easteregg: true
};
