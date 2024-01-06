import React from 'react'
import LoginForm from '../components/login/LoginForm.js'
import Layout from "../components/Layout.js";

const login = () => {
  return (
    <Layout>
        <section>
            <LoginForm/>
        </section>
    </Layout>
  )
}

export default login