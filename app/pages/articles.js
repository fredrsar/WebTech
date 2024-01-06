import React from "react";
import Link from "next/link";
import Post from "../components/Post";
import Layout from "../components/Layout.js";
import SearchBar from "@/components/SearchBar";
import { useState, useEffect } from "react";
import { useContextProvider } from "@/components/UserContext";

const Article = () => {
  const { supabase } = useContextProvider();
  const [articles, setArticles] = useState([]); // State to store all articles
  const [displayedArticles, setDisplayedArticles] = useState([]); // State to store displayed articles
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

  // Fetch all articles when the component mounts
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data, error } = await supabase.from("posts").select("*");
        if (error) throw error;
        setArticles(data);
        setDisplayedArticles(data); // Initially display all articles
      } catch (error) {
        console.error("Error fetching articles:", error.message);
      }
    };

    fetchArticles();
  }, [supabase]);

  // Update displayed articles when search is performed
  const handleSearchResults = (searchResults) => {
    setDisplayedArticles(searchResults);
  };

  return (
    <Layout>
      <section className="bg-white dark:bg-gray-900 rounded-lg ">
        <div className="mx-auto p-3">
          <div className="flex flex-col items-center">
           <h1 className="mt-4 text-gray-900 text-3xl font-bold mb-6 font-serif  dark:text-white">
              Read the articles
            </h1>
          <div className="flex justify-center mb-4">
          <button 
              type="button"
              className="flex text-white bg-gradient-to-br from-purple-600 to-blue-500 
              hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <Link
                className="text-white"
                href="/createArticle"
              >
                Create a post
              </Link>
            </button>
            </div>
          </div>
          <SearchBar onSearch={handleSearchResults} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
           
           <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            {displayedArticles.map((article) => (
              <div key={article.id} onClick={() => openPostModal(article)} className="transform transition-transform hover:scale-105">
              
                <Post
                  title={article.title}
                  imageUrl={article.imageUrl}
                  tag={article.tag}
                  subtitle={article.subtitle}
                  author={article.author}
                  date={article.date}
                />
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
};

export default Article;
