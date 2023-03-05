import React from 'react'
//  components
import Layout from '@/components/Layout'
//  sections
import Directories from '@/sections/Directories';

const Profile = () => {
    return (
        <Layout>
            <p>Home Page</p>

            <p>Profile | Create | Edit</p>

            <h3>DAOs</h3>
            <Directories />

            {/* If member then direct them to dirctory, otherwise ask them to join the dao directory */}
        </Layout>
    )
}

export default Profile;