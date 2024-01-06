"use client";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout.js";

export default function Contacts() {
  return (
    <Layout>
        <section className="contacts-content">
            <ContactForm />

        </section>
    </Layout>
  );
}