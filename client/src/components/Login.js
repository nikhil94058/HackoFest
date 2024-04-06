import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const notify = () => toast("You are Redirected to Some external website !");
  return (
    <div>
      {!isAuthenticated ? (
        <div>

          <div className="w-[132px] h-[47px] px-8 py-3.5 bg-white justify-center items-center gap-2.5 inline-flex"><button onClick={() => { loginWithRedirect(); notify(); }} className="text-blue-600 text-base font-normal font-['Inter'] capitalize">Log In</button></div>
        </div>) :
        (
          <div>Footor</div>
        )}

      <ToastContainer />


    </div>
  )
}
