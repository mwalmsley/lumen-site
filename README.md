
<p align="center">
    <a target="_blank" href="https://circleci.com/gh/alxshelepenok/gatsby-starter-lumen"><img src="https://circleci.com/gh/alxshelepenok/gatsby-starter-lumen.svg?style=svg"></a> <a href="https://discord.gg/Bx2dezQ"><img src="https://img.shields.io/discord/556731785640280065.svg?color=%237289da&label=discord&style=popout"></a> <a target="_blank" href="https://codecov.io/gh/alxshelepenok/gatsby-starter-lumen"><img src="https://codecov.io/gh/alxshelepenok/gatsby-starter-lumen/branch/master/graph/badge.svg"></a> <a target="_blank" href="https://www.codacy.com/app/alxshelepenok/gatsby-starter-lumen?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=alxshelepenok/gatsby-starter-lumen&amp;utm_campaign=Badge_Grade"><img src="https://api.codacy.com/project/badge/Grade/f7e27bb3a28a46a6b13453a02801c5c9"></a> <a target="_blank" href="https://codeclimate.com/github/alxshelepenok/gatsby-starter-lumen"><img src="https://img.shields.io/codeclimate/maintainability/alxshelepenok/gatsby-starter-lumen.svg"></a> <a href="https://app.fossa.io/projects/git%2Bgithub.com%2Falxshelepenok%2Fgatsby-starter-lumen?ref=badge_shield" alt="FOSSA Status"><img src="https://app.fossa.io/api/projects/git%2Bgithub.com%2Falxshelepenok%2Fgatsby-starter-lumen.svg?type=shield"/></a>
</p>



## Quick Start

Install 
https://www.gatsbyjs.org/docs/gatsby-on-linux/
https://www.gatsbyjs.org/docs/quick-start


#### Create a Gatsby site

Use the Gatsby CLI to create a new site, specifying the Lumen starter.

```sh
# Create a new Gatsby site using the Lumen starter
gatsby new blog https://github.com/alxshelepenok/gatsby-starter-lumen
```

#### Start Developing

Navigate into your new site’s directory and start it up.

```sh
cd blog
gatsby develop
```

#### Open the source code and start editing!

Your site is now running at `http://localhost:8000`!

Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

Open the `blog` directory in your code editor of choice and edit `src/templates/index-template.js`. Save your changes and the browser will update in real time!

## Deploy with Netlify

`npm run build`
(essentially, `gatsby build`)

`gatsby serve` (local production build)
`npm run deploy`

#### Access Locally
```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn
$ npm run develop
```
To test the CMS locally, you'll need run a production build of the site:
```
$ npm run build
$ gatsby serve
```

## Folder Structure

```
└── content
    ├── pages
    └── posts
└── static
    ├── admin
    └── media
└── src
    ├── assets
    │   └── scss
    │       ├── base
    │       └── mixins
    ├── cms
    │   └── preview-templates
    ├── components
    │   ├── Feed
    │   ├── Icon
    │   ├── Layout
    │   ├── Page
    │   ├── Pagination
    │   ├── Post
    │   │   ├── Author
    │   │   ├── Comments
    │   │   ├── Content
    │   │   ├── Meta
    │   │   └── Tags
    │   └── Sidebar
    │       ├── Author
    │       ├── Contacts
    │       ├── Copyright
    │       └── Menu
    ├── constants
    ├── templates
    └── utils

```

## License

Not for use! Based on MIT-licensed template by Alexander Shelepenok.

## Template Notes


## Features
+ [Lost Grid](http://lostgrid.org).
+ [Modern font stack](https://bitsofco.de/the-new-system-font-stack).
+ Beautiful typography inspired by [matejlatin/Gutenberg](https://github.com/matejlatin/Gutenberg).
+ Syntax highlighting in code blocks using [PrismJS](http://prismjs.com).
+ [Mobile-First](https://medium.com/@mrmrs_/mobile-first-css-48bc4cc3f60f) approach in development.
+ Archive organized by tags and categories.
+ Pagination support.
+ [Netlify CMS](https://www.netlifycms.org) support.
+ Google Analytics.
+ Disqus Comments.
+ [Flow](https://flow.org/) static type checking.

## Web Performance Tests
+ Lighthouse Report - [WebPageTest](https://www.webpagetest.org/result/190510_FE_3f2b13d0beed320f477467d433f56f43/)
+ Visual Comparison - [WebPageTest](https://www.webpagetest.org/video/compare.php?tests=190510_KZ_1228c343ccf04148619a5d0b89a41f71,190510_RE_b3bfad442f32c690a9f420fe46025b8d,190510_RS_3b5f0bff2d95161351dc6934cadbf1cf,190510_SC_5c458c451941f81b12911ccf4171a817,190510_63_52d5edd8743773815fbacb2e9c66d228,190510_AS_741b29f5af5a6e54980d82826d7bb5bb)


### Contributors
Thanks goes to these wonderful people!

[<img alt="abisz" src="https://avatars3.githubusercontent.com/u/7287780?v=4&s=117" width="117">](https://github.com/abisz) |[<img alt="vzhou842" src="https://avatars3.githubusercontent.com/u/10209814?v=4&s=117" width="117">](https://github.com/vzhou842) |[<img alt="mariolopjr" src="https://avatars3.githubusercontent.com/u/2067324?v=4&s=117" width="117">](https://github.com/mariolopjr) |[<img alt="ihororlovskyi" src="https://avatars3.githubusercontent.com/u/7969737?v=4&s=117" width="117">](https://github.com/ihororlovskyi) |[<img alt="timbroder" src="https://avatars2.githubusercontent.com/u/121503?v=4&s=117" width="117">](https://github.com/timbroder) |[<img alt="yodahuang" src="https://avatars2.githubusercontent.com/u/11242657?v=4&s=117" width="117">](https://github.com/yodahuang) |
:---: |:---: |:---: |:---: |:---: |:---: |
[abisz](https://github.com/abisz) |[vzhou842](https://github.com/vzhou842) |[mariolopjr](https://github.com/mariolopjr) |[ihororlovskyi](https://github.com/ihororlovskyi) |[timbroder](https://github.com/timbroder) |[yodahuang](https://github.com/yodahuang) |

[<img alt="vinnymac" src="https://avatars0.githubusercontent.com/u/1832781?v=4&s=117" width="117">](https://github.com/vinnymac) |[<img alt="axelclark" src="https://avatars1.githubusercontent.com/u/16856928?v=4&s=117" width="117">](https://github.com/axelclark) |[<img alt="BigTony666" src="https://avatars2.githubusercontent.com/u/29159357?v=4&s=117" width="117">](https://github.com/BigTony666) |[<img alt="ybbarng" src="https://avatars2.githubusercontent.com/u/1793950?v=4&s=117" width="117">](https://github.com/ybbarng) |[<img alt="marktani" src="https://avatars1.githubusercontent.com/u/1780597?v=4&s=117" width="117">](https://github.com/marktani) |[<img alt="concreted" src="https://avatars2.githubusercontent.com/u/4016897?v=4&s=117" width="117">](https://github.com/concreted) |
:---: |:---: |:---: |:---: |:---: |:---: |
[vinnymac](https://github.com/vinnymac) |[axelclark](https://github.com/axelclark) |[BigTony666](https://github.com/BigTony666) |[ybbarng](https://github.com/ybbarng) |[marktani](https://github.com/marktani) |[concreted](https://github.com/concreted) |

[<img alt="chmac" src="https://avatars0.githubusercontent.com/u/690997?v=4&s=117" width="117">](https://github.com/chmac) |[<img alt="charandas" src="https://avatars2.githubusercontent.com/u/542168?v=4&s=117" width="117">](https://github.com/charandas) |[<img alt="marcelabomfim" src="https://avatars0.githubusercontent.com/u/6224547?v=4&s=117" width="117">](https://github.com/marcelabomfim) |[<img alt="zollillo" src="https://avatars3.githubusercontent.com/u/8833904?v=4&s=117" width="117">](https://github.com/zollillo) |[<img alt="codejet" src="https://avatars3.githubusercontent.com/u/802203?v=4&s=117" width="117">](https://github.com/codejet) |[<img alt="reed-jones" src="https://avatars0.githubusercontent.com/u/11511864?v=4&s=117" width="117">](https://github.com/reed-jones) |
:---: |:---: |:---: |:---: |:---: |:---: |
[chmac](https://github.com/chmac) |[charandas](https://github.com/charandas) |[marcelabomfim](https://github.com/marcelabomfim) |[zollillo](https://github.com/zollillo) |[codejet](https://github.com/codejet) |[reed-jones](https://github.com/reed-jones) |

[<img alt="swapnilmishra" src="https://avatars2.githubusercontent.com/u/875450?v=4&s=117" width="117">](https://github.com/swapnilmishra) |[<img alt="vvasiloud" src="https://avatars1.githubusercontent.com/u/5891530?v=4&s=117" width="117">](https://github.com/vvasiloud) |[<img alt="wichopy" src="https://avatars2.githubusercontent.com/u/24414632?v=4&s=117" width="117">](https://github.com/wichopy) |
:---: |:---: |:---: |
[swapnilmishra](https://github.com/swapnilmishra) |[vvasiloud](https://github.com/vvasiloud) |[wichopy](https://github.com/wichopy) |


## Related
[Statinamic port](https://github.com/thangngoc89/statinamic-theme-lumen) by [Khoa Nguyen](https://github.com/thangngoc89)


## Credits
Nature graphic by [Anna Bearne](https://www.behance.net/annabearne) from [Noun Project](https://thenounproject.com/) is licensed under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/us/legalcode).
