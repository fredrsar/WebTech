import { useContextProvider } from './UserContext';
import { FaPen } from "react-icons/fa";
import Gravatar from 'react-gravatar';
import { useState } from 'react';
import Link from 'next/link';



export default function SettingsCard() {
    const { supabase, id, user, setUser, email, setEmail, language, setLang, logout } = useContextProvider();
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  

    const handleDeleteAccount = () => {
        setDeleteModalOpen(true);
    };

    const handleDeleteConfirmation = async () => {

        try {
            const { error } = await supabase
            .from('users')
            .delete()
            .eq('id', id);

            if (error) {
                console.error(error);
                return;
            }
        } catch (error) {
            console.error('An error occured: ', error.message);
        }

        setDeleteModalOpen(false);
        window.location.href = '/';
    };

    const handleDeleteCancel = () => {
        setDeleteModalOpen(false);
    };

    const onSubmit = async function (e) {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const language = formData.get('language');

        console.log(name, email, language);
        

        if (name != "") {
            try {
                const { error } = await supabase
                .from('users')
                .update({ userName: name })
                .eq('id', id);
            
                if (error) {
                    console.error(error);
                    return;
                }else{
                    setUser(name);
                    alert('Name changed to ' + name);
                }
            
            } catch (error) {
                console.error('An error occured: ', error.message);
            }
        }

        if (email != "") {
            try {
                const { error } = await supabase
                .from('users')
                .update({ email: email })
                .eq('id', id);
            
                if (error) {
                    console.error(error);
                    return;
                }else{
                    setEmail(email);
                    alert('Email changed to ' + email);
                }
            
            } catch (error) {
                console.error('An error occured: ', error.message);
            }
        }

        if (language != "") {
            try {
                const { error } = await supabase
                .from('users')
                .update({ language: language })
                .eq('id', id);
            
                if (error) {
                    console.error(error);
                    return;
                }else{
                    setLang(language);
                    alert('Language changed to ' + language);
                }
            
            } catch (error) {
                console.error('An error occured: ', error.message);
            }
        }

    };
    
    return (
                
        <section className="bg-white dark:bg-gray-900 rounded-lg">              
            <div className="w-3/4 mx-auto overflow-hidden shadow-2xl m-12 rounded-lg">
                <div className="w-64 h-64 p-3 mx-auto mt-6 grid grid-rows-2 grid-flow-col"> 
                    <Gravatar className="object-cover rounded-full" email={email} size={256} />
                </div>
                <div className="w-3/6 flex justify-center mx-auto">
                    <form className="flex flex-col mx-auto p-3 space-y-4"
                        onSubmit={onSubmit}>	
                        <div className="w-full">
                            <label 
                                htmlFor="name" 
                                className="block mb-2 font-medium text-gray-900 dark:text-white">
                                Name
                            </label>
                            <dd class="flex items-center">
                                <input 
                                    type="name" 
                                    name="name" 
                                    id="name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 w-3/5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder={user} 
                                    required=""
                                />                                    
                                <button type="submit" class="ml-4 bg-gray-50 text-gray-900 inline-block p-2 px-4 text-base font-medium leading-5 whitespace-nowrap align-middle cursor-pointer select-none border border-solid border-gray-300 rounded-md appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <FaPen/>
                                </button>
                            </dd>
                        </div>
                        <div className="w-full">
                            <label 
                                htmlFor="email" 
                                className="block mb-2 font-medium text-gray-900 dark:text-white">
                                Email
                            </label>
                            <dd class="flex items-center">
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email"                                    
                                    class="bg-gray-50 border border-gray-300 text-gray-900 w-3/5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder={email} 
                                    required=""
                                />                                    
                                <button type="submit" class="ml-4 bg-gray-50 text-gray-900 inline-block p-2 px-4 text-base font-medium leading-5 whitespace-nowrap align-middle cursor-pointer select-none border border-solid border-gray-300 rounded-md appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <FaPen/>
                                </button>
                            </dd>
                        </div>
                        <div className="w-full">
                            <label 
                                htmlFor="language" 
                                className="block mb-2 font-medium text-gray-900 dark:text-white">
                                Language
                            </label>
                            <dd class="flex items-center">
                                <input 
                                    type="language" 
                                    name="language" 
                                    id="language" 
                                    class="bg-gray-50 border border-gray-300 text-gray-900 w-3/5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder={language}
                                    required=""
                                />                                    
                                <button type="submit" class="ml-4 bg-gray-50 text-gray-900 inline-block p-2 px-4 text-base font-medium leading-5 whitespace-nowrap align-middle cursor-pointer select-none border border-solid border-gray-300 rounded-md appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <FaPen/>
                                </button>
                            </dd>
                        </div>

                            <Link
                                href="/"
                                onClick={() => logout()}
                                className="text-center bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 mt-6 rounded dark:bg-blue-800"
                                >
                                Logout
                            </Link>
                            <button 
                                onClick={handleDeleteAccount}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Deactivate account
                            </button>
                    </form>
                </div>
            </div>
            {isDeleteModalOpen && (
                <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" ></div>
              
                <div class="fixed inset-0 z-10 w-screen overflow-y-auto" onClick={handleDeleteCancel}>
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
                            <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Deactivate account</h3>
                            <div class="mt-2">
                              <p class="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">                
                        <button type="button" onClick={handleDeleteConfirmation} class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Deactivate</button>
                        <button type="button" onClick={handleDeleteCancel} class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                
            )}
            
        </section>
    );
  };   




  