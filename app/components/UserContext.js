import { createContext, useContext, useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const SupabaseContext = createContext();


const ContextProvider = ({ children }) => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);
  const [id, setId] = useState(null);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [language, setLang] = useState(null);
  const [theme, setTheme] = useState('light');


  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    applyTheme(storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  const applyTheme = (newTheme) => {
    if (newTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };


  const value = {
    supabase,
    id, setId,
    user, setUser,
    email, setEmail,
    language, setLang,
    theme, setTheme,
    toggleTheme,



    logout: () => {
      setId(null);
      setUser(null);
      setEmail(null);
      setLang(null);
    }
    

  };


  return (
    <SupabaseContext.Provider value={value}>
      {children}
    </SupabaseContext.Provider>
  );
};

const useContextProvider = () => {
  return useContext(SupabaseContext);
};

export { ContextProvider, useContextProvider };
