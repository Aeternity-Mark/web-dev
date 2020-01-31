module.exports = {
    head: [
        ['link', {rel: 'icon', type: 'image/png', href: '/img/favicon-16x16.png', sizes: '16x16'}],
        ['link', {rel: 'icon', type: 'image/png', href: '/img/favicon-32x32.png', sizes: '32x32'}],
        ['link', {rel: 'canonical', href: 'https://aeternity.com'}],
        ['meta', {property: 'og:description', content: 'æternity is a public open source smart contract platform.'}],
        ['meta', {property: 'og:title', content: 'æternity - a blockchain for scalable, secure and decentralized æpps'}],
        ['meta', {property: 'og:url', content: 'https://aeternity.com/img/og-aeternity.jpg'}],
        ['meta', {property: 'og:image', content: 'https://aeternity.com'}],
        ['meta', {property: 'og:type', content: 'website'}],
        ['meta', {property: 'twitter:card', content: 'summary_large_image'}],
        ['meta', {property: 'twitter:site', content: '@aeternity'}],
    ],
    base: process.env.BASE_PATH || '/',
    plugins: [
        '@vuepress/register-components',
        [
            'vuepress-plugin-container',
            {
                type: 'content',
                before: info => `<div class="${info}">`,
                after: '</div>',
            },
        ],
    ],
    markdown: {
        anchor: {
            permalink: false
        }
    },
    themeConfig: {
        'GA_ID': process.env.GA_ID || 'UA-89489770-3',
        search: false,
        nav: [
            {text: 'Developers', link: '/'},
            {text: 'Entrepreneurs', link: ''},
            {text: 'Æternity Consulting', link: ''},
            {text: 'Community', link: ''},
            {text: `Dæmo`, link: ''},
        ]
    },
    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
            lang: 'en-US' // this will be set as the lang attribute on <html>
        }
    }
};
