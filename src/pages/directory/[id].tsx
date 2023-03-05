import React from 'react'
//  components
import Layout from '@/components/Layout';
//  ui
import { Button } from 'evergreen-ui';

const Directory = () => {
  return (
    <Layout>
      {/* Link to join page */}
      <h2>DAO Name</h2>
      <p>Description of DAO</p>

      <p>Invite</p>

      {/* If not connected, or joined show join button */}
      <Button
        borderRadius={8}
      >
        Join
      </Button>

      <h3>Members</h3>
      <p>Top Members: Admins and Initiator</p>
      <p>List of members in directory</p>
    </Layout>
  )
}

export default Directory;