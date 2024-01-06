import ContactCard from '../components/ContactCard';
import Layout from '../components/Layout.js'

export default function Contacts() {
  return (
    <Layout>
      <section className="bg-white dark:bg-gray-900 rounded-lg">

        <div className='flex items-center mt-4 p-3'> 
          <ContactCard  
              imgUrl = "NicolasPP.jpeg"
              name = "Nicolas D'Aviau de Ternay"
              text = "I fell in love with Norway's beauty and culture, which inspired me to co-create 'Hvordan går det?' Travel Agency."
              title = "Developer"
          />

          <ContactCard
              imgUrl = "FredrikPP.png"
              name = "Fredrik Sarai"
              text = "Norway is my homeland, and I'm excited to share its wonders with the world through 'Hvordan går det?' Travel Agency"
              title = "Developer"
          />

          <ContactCard
              imgUrl = "AymericPP.jpeg"
              name = "Aymeric Moulet"
              text = "Norway has captured my heart, and I'm thrilled to be part of 'Hvordan går det?' Travel Agency's journey to showcase its magic."
              title = "Developer"
          />
        </div>

      </section>
    </Layout>
  );
}