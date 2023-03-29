import Layout from 'components/molecules/Layout'
import React from 'react'
import HomeTemplate from 'src/templates/HomeTemplate'

const Home = () => {
    return <HomeTemplate />
}

Home.getLayout = function getLayout(page: JSX.Element) {
    return <Layout isLoggedIn={false}>{page}</Layout>
}
export default Home
