import { useContextProvider } from '../UserContext';
import Link from 'next/link';

async function signOut(supabase) {
  console.error('Disconnecting');
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error('Sign out error:', error);
  }
}

export default function SignUpForm() {
  const { supabase, setId, user, setUser, setEmail, setLang } = useContextProvider();

  const onSubmit = async function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    
    await signOut(supabase);

    try {
      const { data, error } = await supabase
      .from('users')
      .select("id, userName, language")
      .eq('email', email)
      .eq('password', password);

  
      if (error) {
        setMessage('Sorry, an unexpected error occurred.');
        console.error(error);
        return;
      }else if (data['length']==0) {
        alert('Wrong email or password.');
      }else{
        const userName = data[0].userName;
        setId(data[0].id);
        setUser(userName);
        setEmail(email);
        setLang(data[0].language);
      }
  
    } catch (error) {
      console.error('An error occured: ', error.message);
    }

  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          {user ? (
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Welcome, {user}!
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  You are already logged in.
                </p>

                <Link href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 md:dark:hover:text-blue-300" aria-current="page">Go to home page</Link>

              </div>
            ) : (
              <>  
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={onSubmit}
            >
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <Link href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                  </div>
                 <button type="submit" className="w-full text-gray-900 dark:text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center border border-black dark:border-white">Sign in</button>
 <p className=" text-dark text-sm font-light text-gray-500 dark:text-gray-00">
                      Don’t have an account yet? <Link href="/signUp" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                  </p>
              </form>
              </>
            )}
          </div>
      </div>
  </div>
</section>
  );
}

