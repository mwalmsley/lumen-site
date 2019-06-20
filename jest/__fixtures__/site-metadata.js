'use strict';

module.exports = {
  site: {
    siteMetadata: {
      url: 'https://walmsley.dev',
      title: 'Walmsley',
      subtitle: 'Test subtitle',
      copyright: 'Copyright Mike Walmsley 2019',
      disqusShortname: 'walmsley',
      postsPerPage: 4,
      menu: [
        {
          label: 'Test label 1',
          path: '/test/1/'
        },
        {
          label: 'Test label 2',
          path: '/test/2/'
        },
        {
          label: 'Test label 3',
          path: '/test/3/'
        }
      ],
      author: {
        name: 'Mike Walmsley',
        photo: '/test.jpg',
        bio: 'Test bio',
        contacts: {
          email: '#',
          telegram: '#',
          twitter: '#',
          github: '#',
          rss: '#',
          vkontakte: '#'
        }
      }
    }
  }
};
