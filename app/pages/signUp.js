"use client";
import SignUp from "../components/SignUpForm";
import Layout from "../components/Layout.js";

export default function SignUpPage() {
  return (
    <Layout>
        <section className="contacts-content">
            <SignUp/>
        </section>
    </Layout>
  );
}