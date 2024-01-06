import Layout from "../components/Layout.js";
import { useContextProvider } from "../components/UserContext";
import Link from 'next/link';
//import { useRouter } from 'next/router'



export default function CreateArticle() {
    const { supabase, id, user } = useContextProvider();
    // const router = useRouter()
    const noUser = user === null

    

    const onSubmit = async function (e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const subject = formData.get('subject');
        const content = formData.get('content');
        const tag = formData.get('tag');
    
        try {
            const { error } = await supabase
                .from('posts')
                .insert([{ title: subject, content: content, tag: tag, userId: id }]);

            alert('Your article has been posted!');
            //router.push('/articles');
          

        } catch (exception) {
            alert('Sorry, an unexpected error occurred.');
            console.error('An exception occurred:', exception);
        }
        
    };
    
    
  return (
    <Layout>
    <section className="bg-white dark:bg-gray-900 rounded-lg">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Create your article
        </h2>
        <form action="#" className="space-y-8" onSubmit={onSubmit}>

          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject of your article
            </label>
            <div className="flex space-x-4">
            <input
              type="text"
              name="subject"
              id="subject"
              className="flex-1 p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="remember to write a good subject"
              required
            />
            <input
              type="text"
              name="tag"
              id="tag"
              className="w-1/3 p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="tag"
              required
            />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Article content
            </label>
            <textarea
              id="content"
              name="content"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="feel free to write as much as you want"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-gray-900 dark:text-gray-400 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Post article
          </button>
        </form>
      </div>
      {noUser && (
                <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
              
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
              
                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                  <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    
                    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                      <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                          <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                            </svg>
                          </div>
                          <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">You are not connected</h3>
                            <div class="mt-2">
                              <p class="text-sm text-gray-500">Please ensure that you are connected before attempting to create a new article. This ensures that your work is saved and that you can fully utilize the platform&apos;s features.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <Link href="/articles" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Understood</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
    </section>
    </Layout>
  );
}