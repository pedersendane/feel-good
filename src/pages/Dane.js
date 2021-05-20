import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import FeelGoodForm from '../components/FeelGoodForm'
import ListContainer from '../components/ListContainer'

export default function Dane() {
  const { user, isLoading } = useAuth0();
  let items;
  if (isLoading) {
    items = <div>Loading...</div>
  } else {
    items = (
      <div>
        <FeelGoodForm user={user} />
        <ListContainer user={user} />
        </div>
        )
  }
  return (
    items
    ) 
  }