const navigation = () => [
  {
    title: 'Home',
    path: '/home',
    icon: 'tabler:smart-home',
  },
  {
    title: 'Contract',
    path: '/second-page',
    icon: 'tabler:mail',
    children:[
      {
        title: 'Signing Contract',
        icon:'tabler:email'
      }
    ]
  }
]

export default navigation
