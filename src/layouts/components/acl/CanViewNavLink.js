// ** React Imports
import { useContext } from 'react'

// ** Component Imports
import { AbilityContext } from 'src/layouts/components/acl/Can'
import {useSession} from "next-auth/react";

const CanViewNavLink = props => {
  // ** Props
  const { children, navLink } = props

  const {data:session} = useSession();


  // ** Hook
  const ability = useContext(AbilityContext)
  if (navLink) {
    return <>{children}</>
  } else {
    return ability && ability.can(navLink?.action, navLink?.subject) ? <>{children}</> : null
  }
}

export default CanViewNavLink
