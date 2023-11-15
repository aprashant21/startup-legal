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
        title: 'Generate Contract',
        icon:'tabler:email',
        path:'/contracts/generate'
      },
      {
        title: 'Sign Contract',
        icon:'tabler:email'
      },
      {
        title: 'Pending Contracts',
        icon:'tabler:email'
      }
    ]
  }
]

export default navigation
