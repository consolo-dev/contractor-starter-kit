// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/palenight");
const darkCodeTheme = require("prism-react-renderer/themes/palenight");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Consolo",
  tagline: "Contractor Starter Kit",
  url: "http://consolo.dev",
  baseUrl: "/contractor-starter-kit/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/Consolo.svg",
  organizationName: "consolo-dev", // Usually your GitHub org/user name.
  projectName: "contractor-starter-kit", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  plugins: [
    "docusaurus-plugin-sass",

    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // whether to index docs pages
        indexDocs: true,

        // Whether to also index the titles of the parent categories in the sidebar of a doc page.
        // 0 disables this feature.
        // 1 indexes the direct parent category in the sidebar of a doc page
        // 2 indexes up to two nested parent categories of a doc page
        // 3...
        //
        // Do _not_ use Infinity, the value must be a JSON-serializable integer.
        indexDocSidebarParentCategories: 3,

        // whether to index blog pages
        indexBlog: true,

        // whether to index static pages
        // /404.html is never indexed
        indexPages: true,

        // language of your documentation, see next section
        language: ["en"],

        // setting this to "none" will prevent the default CSS to be included. The default CSS
        // comes from autocomplete-theme-classic, which you can read more about here:
        // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
        style: undefined,

        // lunr.js-specific settings
        lunr: {
          // When indexing your documents, their content is split into "tokens".
          // Text entered into the search box is also tokenized.
          // This setting configures the separator used to determine where to split the text into tokens.
          // By default, it splits the text at whitespace and dashes.
          //
          // Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
          tokenizerSeparator: /[\s\-]+/,
          // https://lunrjs.com/guides/customising.html#similarity-tuning
          //
          // This parameter controls the importance given to the length of a document and its fields. This
          // value must be between 0 and 1, and by default it has a value of 0.75. Reducing this value
          // reduces the effect of different length documents on a term’s importance to that document.
          b: 0.75,
          // This controls how quickly the boost given by a common word reaches saturation. Increasing it
          // will slow down the rate of saturation and lower values result in quicker saturation. The
          // default value is 1.2. If the collection of documents being indexed have high occurrences
          // of words that are not covered by a stop word filter, these words can quickly dominate any
          // similarity calculation. In these cases, this value can be reduced to get more balanced results.
          k1: 1.2,
          // By default, we rank pages where the search term appears in the title higher than pages where
          // the search term appears in just the text. This is done by "boosting" title matches with a
          // higher value than content matches. The concrete boosting behavior can be controlled by changing
          // the following settings.
          titleBoost: 5,
          contentBoost: 1,
          parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
        },
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/consolo-dev/contractor-starter-kit/edit/main/",
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          breadcrumbs: true,
        },
        blog: {
          blogTitle: "Blog!",
          blogDescription: "A Docusaurus powered blog!",
          postsPerPage: 10, // number / 'ALL'
          showReadingTime: true,
          editUrl:
            "https://github.com/consolo-dev/contractor-starter-kit/edit/main/blog/",
          blogSidebarCount: 10,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: false,
        title: "Consolo",
        logo: {
          alt: "Docusaurus Logo",
          src: "img/Consolo.svg",
        },
        items: [
          {
            to: "/docs",
            position: "left",
            label: "Quick Start",
          },
          {
            to: "/form",
            position: "left",
            label: "Free Consultation",
          },
          { to: "/blog", label: "Blog", position: "right" },
          {
            href: "https://dev.us12.list-manage.com/subscribe?u=e08bc63eba2534c069fdbb91f&id=ad3ecdc097",
            label: "Newsletter",
            position: "right",
          },
          {
            href: "https://github.com/consolo-dev/contractor-starter-kit",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Get Started",
                to: "/docs",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/consolo-dev",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Consolo.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: "announcementBar-0", // Increment on change
        content: `Starting your own solo-contracting business? Get 30 a minute consult <a href="/form">here</a>`,
        isCloseable: true,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    }),
};

module.exports = config;
