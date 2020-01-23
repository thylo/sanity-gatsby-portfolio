export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e29eed9ecedb758f4a658ca',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-359yvq2z',
                  apiId: '3d7eeb66-57a8-4501-9dbc-a4e9c8f1c6da'
                },
                {
                  buildHookId: '5e29eeda5cf389819378dab5',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vty2n31u',
                  apiId: '8fb71f47-1987-454d-adeb-6c9cd9bb35f4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thylo/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vty2n31u.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
