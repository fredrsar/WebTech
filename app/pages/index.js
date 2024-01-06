import Post from '../components/Post';
import Layout from '../components/Layout.js';
import React, { useState } from 'react';
import { FaRegCircle } from "react-icons/fa";


const Data = [
  {
    id: 1,
    email: "fredrik.malt@gmail.com",
    title: "Bergen",
    subtitle: "Fjords, Wharf, Culture, Rain, Grieg",
    content:
      "Norway's fjords are some of the most awe-inspiring natural wonders in the world. These deep, narrow inlets are surrounded by towering cliffs and crystal-clear waters. Exploring the stunning fjords of Norway is an experience like no other.\n\nBegin your journey in the famous Geirangerfjord, where waterfalls cascade down the steep cliffs. Take a cruise and witness the dramatic landscapes. Hike the fjord's surrounding trails for breathtaking views of the deep blue waters.\n\nAs you travel along the western coast, visit Nærøyfjord, a UNESCO World Heritage Site. The narrow, winding fjord is a paradise for kayakers and photographers. You'll be immersed in the tranquility of this natural wonder.\n\nFurther north, you'll find Sognefjord, the largest and deepest fjord in Norway. Explore charming villages, go fishing, and enjoy local cuisine. Don't forget to ride the Flåm Railway for a unique perspective of the fjord's beauty.\n\nTo the north, Tromsø offers a chance to experience the fjords under the mesmerizing Northern Lights. This is an adventure you'll never forget.\n\nPlan your trip to Norway and embark on a fjord exploration that will leave you in awe of nature's grandeur.",
    imageUrl: "Bergen.png",
    tag: "CITY", 
    author: "Fredrik Sarai",
    date: "8 NOV 2023"
  },
  {
    id: 2,
    email: "fredrik.malt@gmail.com",
    title: "Lofoten",      
    subtitle: "Arcipelago Beauty, Fishing Tradition",
    content:
      "The Northern Lights, or Aurora Borealis, are a mesmerizing natural phenomenon that graces the night skies of Norway. This celestial display of dancing lights has captured the imaginations of people for centuries.\n\nTo witness the magic of the Northern Lights in Norway, head to Tromsø. This Arctic city is known as the 'Gateway to the Arctic' and is one of the best places on Earth to see the Northern Lights.\n\nSpend your evenings chasing the Northern Lights on guided tours. Experienced guides will take you to the best viewing spots and provide valuable insights into this natural wonder.\n\nWhile waiting for the lights to appear, warm up in a cozy Sami tent and enjoy hot drinks and snacks. The vivid colors of the Northern Lights against the Arctic landscape are a sight to behold.\n\nTromsø offers a variety of winter activities, from dog sledding to snowmobiling. Embrace the Arctic winter and make memories that will last a lifetime.\n\nTo capture the perfect shot of the Northern Lights, bring your camera and set up your tripod. The result will be a stunning photograph of this otherworldly phenomenon.\n\nExperience the magic of the Northern Lights in Norway and be prepared to be enchanted by the beauty of the Arctic night sky.",
    imageUrl: "Lofoten.png",
    tag: "CITY", 
    author: "Fredrik Sarai",
    date: "8 NOV 2023"
  },
  {
    id: 3,
    email: "fredrik.malt@gmail.com",
    title: "Røros",
    subtitle: "Mining Heritage, Wooden Architecture",
    content:
      "The Norwegian wilderness is a paradise for adventure seekers and nature enthusiasts. With its pristine landscapes and diverse ecosystems, it offers a wide range of outdoor activities.\n\nHiking in Norway is an unforgettable experience. Explore the Jotunheimen National Park, home to Norway's highest peaks. Hike to Galdhøpiggen, the country's highest mountain, and enjoy breathtaking vistas.\n\nDog sledding in Norway is an adventure like no other. Travel through snowy landscapes with a team of enthusiastic huskies. The silence of the wilderness broken only by the sound of paws on the snow is truly magical.\n\nFor those who love fishing, Norway's rivers and lakes are teeming with fish. Try your hand at fly fishing for salmon or trout. The peacefulness of the wilderness and the thrill of the catch create an unforgettable experience.\n\nCamping in Norway allows you to connect with nature. Camp by a fjord, in the forest, or high in the mountains. The clear night skies make it a perfect spot for stargazing.\n\nCross-country skiing is a popular winter activity. Glide through the snowy forests and enjoy the tranquility of the wilderness. It's an excellent way to explore the pristine landscapes.\n\nEmbark on adventures in the Norwegian wilderness and discover the beauty and excitement of the great outdoors.",
    imageUrl: "Rødros.png",
    tag: "CITY", 
    author: "Fredrik Sarai",
    date: "8 NOV 2023"
    },
  {
    id: 4,
    email: "fredrik.malt@gmail.com",
    title: "Norwegian Coastal Culture and Traditions",
    content:
      "The coastal culture of Norway is deeply rooted in traditions that have been passed down for generations. As you explore the Norwegian coast, you'll encounter unique customs and a way of life that is closely tied to the sea.\n\nOne of the most iconic traditions is the celebration of St. Olav's Day. This annual event includes parades, music, and traditional food. It's a time when coastal communities come together to celebrate their heritage.\n\nThe seafood along the Norwegian coast is a culinary delight. Try dishes like fresh salmon, shrimp, and the famous lutefisk. These delicacies have been a part of coastal culture for centuries.\n\nThe coastal communities also have their own festivals. In Bergen, the Fishermen's Festival is a lively event with boat races, concerts, and seafood tastings. The atmosphere is filled with the scent of the sea and the sounds of celebration.\n\nSami culture is another important aspect of coastal culture, especially in the northern regions. The indigenous Sami people have a rich heritage of reindeer herding, traditional clothing, and joik, their unique form of singing.\n\nExploring the Norwegian coastal culture and traditions is a fascinating journey through history and a celebration of the sea's influence on the people.",
    imageUrl: "Lofoten.png",
    tag: "CITY", 
    author: "Fredrik Sarai",
    date: "8 NOV 2023"
    },
  {
    id: 5,
    email: "fredrik.malt@gmail.com",
    title: "Oslo: The Vibrant Capital of Norway",
    subtitle: "Fjords, Wharf, Culture, Rain, Grieg",
    content:
      "Oslo, the capital of Norway, is a vibrant city filled with culture, history, and natural beauty. From world-class museums to lush parks, it offers a diverse range of attractions.\n\nStart your exploration of Oslo at the Vigeland Park, where you'll find an impressive collection of sculptures by Gustav Vigeland. The park is a tribute to human life and emotions.\n\nThe Viking Ship Museum is a must-visit for history enthusiasts. It houses well-preserved Viking ships and artifacts that provide insight into Norway's seafaring past.\n\nTake a stroll along the waterfront and visit the Oslo Opera House, an architectural masterpiece that seems to rise from the fjord. The rooftop offers panoramic views of the city.\n\nFor art lovers, the Munch Museum showcases the works of Edvard Munch, including his famous painting, 'The Scream.' Explore the emotions and symbolism in his art.\n\nOslo is also known for its culinary scene. Try traditional Norwegian dishes at local restaurants or visit the Mathallen Food Hall for a taste of international cuisine.\n\nWith its mix of culture, history, and natural beauty, Oslo is a vibrant capital that has something for every traveler.",
    imageUrl: "Oslo.png",
    tag: "CITY", 
    author: "Fredrik Sarai",
    date: "8 NOV 2023"
  },
];


export default function Home() {

  const [isPostModalOpen, setPostModalOpen] = useState(false);
  const [articleState, setArticleState] = useState(null);

  const openPostModal = (article) => {
    setPostModalOpen(true);
    setArticleState(article)
  };

  const closePostModal = () => {
    setPostModalOpen(false);
    setArticleState(null)
  };

  const recentArticles = Data
    .sort((a, b) => new Date(b.date) - new Date(a.date)) 
    .slice(0, 3); 


  return (
    <Layout>
    <section className="welcome mx-auto">
      <div className="relative overflow-hidden mb-12 h-screen flex justify-center items-center w-full">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat brightness-50"
          style={{ backgroundImage: `url(${"Bergen.jpeg"})` }}
        />
        <div className="relative z-10">
          <div className="text-white flex flex-col flex-wrap items-center justify-content"> 
            <span className="font-bold uppercase">Featured</span>
            <span className="font-bold text-5xl p-3">Norway</span>
            <span className='p-3'> <FaRegCircle /> </span>
            <span className='w-4/6'>
              Norway, a symphony of fjords and auroras, whispers tales of untamed beauty. 
              Majestic landscapes dance with the Northern Lights, while rugged coasts serenade the adventurous heart. 
              In Norway, nature weaves poetry, and each mountain, fjord,
              and wilderness invites you to unlock the verses of your own soul&apos;s odyssey.
            </span>
          </div>
        </div>
      </div>
    </section>

    <section className="p-3 flex items-center mx-auto justify-center">
      <div className="pl-3 flex-wrap">
        <div className="flex items-center mt-4">
          <div className="flex lg:flex-row flex-col gap-4">
          <h2 className="text-3xl font-bold mb-6 font-serif text-black dark:text-white lg:self-center">Explore New Places</h2>
            {recentArticles.map((article) => (
              <div key={article.id} className="transform transition-transform hover:scale-110">
                <div onClick={() => openPostModal(article)}>
                  <Post  
                    title={article.title}
                    imageUrl={article.imageUrl}
                    tag={article.tag}
                    subtitle={article.subtitle}
                    author={article.author}
                    date={article.date}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    {isPostModalOpen && (


      <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" ></div>
          <div class="fixed inset-0 z-10 w-screen overflow-y-auto" onClick={closePostModal}>
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">                    
                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">{articleState.title}</h3>
                      <div class="mt-2">
                        <p class="text-sm text-gray-500">{articleState.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}