
type footerConstantType = {
   title:string
   links: {
      title: string
      path: string
   }[]
}[]


export const footerConstant:footerConstantType = [
   {
      title: 'Support',
      links: [
         {
            title: 'Help Center',
            path: '/'
         },
         {
            title: 'AirCover',
            path: '/'
         },
         {
            title: 'Anti-Discrimination',
            path: '/'
         }
      ]
   },
   {
      title: 'Hoisting',
      links: [
         {
            title: 'Goplayacar Yojur Home',
            path: '/'
         },
         {
            title: 'AirCover for Host',
            path: '/'
         },
         {
            title: 'Hoisting Resources',
            path: '/'
         }
      ]
   },
   {
      title: 'Goplayacar',
      links: [
         {
            title: 'Newsroom',
            path: '/'
         },
         {
            title: 'New Feature',
            path: '/'
         },
         {
            title: 'Career',
            path: '/'
         }
      ]
   }
]