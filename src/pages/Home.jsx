import { useContext } from 'react'
import {Loader2} from 'lucide-react'
import { UserContainer } from '../context/UserContextProvider.jsx';

import images from '../assets/asserts.js'
import Navbar from '../components/Navbar.jsx'
import ErrorView from '../components/ErrorView.jsx';
import LandingView from '../components/LandingView.jsx';
import ProfileView from '../components/ProfileView.jsx';
function Home() {
     
    const {searchTerm, setSearchTerm, handleInput, errorHandle, status, profile, errMsg ,isLoading} = useContext(UserContainer)    
    
    return (
        <>
            <div className='min-h-screen bg-[#0F172A] text-white '>
                <Navbar />
                <form
                    onSubmit={handleInput}
                    className="flex justify-center items-center mt-15"
                >
                    <input
                        type="text"
                        placeholder="Enter github username..."
                        className="w-96 h-14 bg-[#1D2537] p-3 "
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                    />

                    <button type="submit">
                        <img src={images.search_icon} alt="search_icon" />
                    </button>
                </form>
                {!profile && <p className=' text-red-900 text-center mt-2'>{errMsg}</p>}
                {status === "idle" && <LandingView />}
                {isLoading && (
                    <div className="flex justify-center items-center pt-40 ">
                        <Loader2 className='h-6 w-6 animate-spin text-blue-400'/>
                    </div>
                )}
                {status === "error" && (
                    <ErrorView
                        onRetry={errorHandle}
                    />
                )}
                {status === "success" && <ProfileView />}

            </div>


        </>
    )
}

export default Home