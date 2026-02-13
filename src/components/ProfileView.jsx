import {useContext} from 'react'
import { UserContainer } from '../context/UserContextProvider';

function ProfileView() {
  const {profile} = useContext(UserContainer)
  const { avatar_url, name, login, bio, followers, following, public_repos } = profile;
  return (
    <>
      <div className=" mt-14 bg-[#0F172A] text-white flex items-center justify-center">

        <div className="text-center max-w-2xl px-6">
          <img
            src={avatar_url}
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto border-4 border-gray-300"
          />
          <h1 className="text-5xl font-bold mt-6">
            {name}
          </h1>
          <p className="text-xl text-gray-300 mt-2">
            {login}
          </p>
          <p className="text-gray-400 mt-6 leading-relaxed">
            {bio}
          </p>
          <div className="flex justify-center items-center gap-12 mt-10 text-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-400">
                {followers}
              </h2>
              <p className="text-gray-400 mt-1 tracking-widest text-sm">
                FOLLOWERS
              </p>
            </div>
            <div className="h-14 w-px bg-gray-600"></div>
            <div>
              <h2 className="text-3xl font-bold text-blue-400">
                {following}
              </h2>
              <p className="text-gray-400 mt-1 tracking-widest text-sm">
                FOLLOWING
              </p>
            </div>

            <div className="h-14 w-px bg-gray-600"></div>

            <div>
              <h2 className="text-3xl font-bold text-blue-400">
                {public_repos}
              </h2>
              <p className="text-gray-400 mt-1 tracking-widest text-sm">
                PUBLIC REPOS
              </p>
            </div>

          </div>

        </div>
      </div>


    </>
  )
}

export default ProfileView
