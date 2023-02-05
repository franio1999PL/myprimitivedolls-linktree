import { defineConfig } from 'astro/config'
import NetlifyCMS from 'astro-netlify-cms'
// import partytown from '@astrojs/partytown'

// <https://astro.build/config>
import tailwind from '@astrojs/tailwind'

// <https://astro.build/config>
import netlify from '@astrojs/netlify/functions'

// <https://astro.build/config>
export default defineConfig({
  integrations: [
    NetlifyCMS({
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'main'
        },
        collections: [
          {
            label: 'Links',
            name: 'links',
            slug: '{{linkTitle}}',
            folder: 'src/pages/links',
            create: true,
            delete: true,
            fields: [
              {
                label: 'Link Title',
                name: 'linkTitle',
                widget: 'string'
              },
              {
                label: 'Link Icon',
                name: 'linkIcon',
                widget: 'string'
              },
              {
                label: 'Link URL',
                name: 'linkURL',
                widget: 'string'
              }
            ]
          }
        ]
      }
    }),
    tailwind()
    // partytown({
    //   // Adds dataLayer.push as a forwarding-event.
    //   config: {
    //     forward: ['dataLayer.push']
    //   }
    // })
  ],
  output: 'server',
  adapter: netlify()
})
