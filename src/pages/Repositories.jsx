import { Loader2 } from 'lucide-react'
import { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'

import RepoCard from '../components/RepoCard'
import { UserContainer } from '../context/UserContextProvider'
import NoRepositories from '../components/NoRepositories';
function Repositories() {

  const { repos, handleRepo, searchTerm, isLoading } = useContext(UserContainer);

  useEffect(() => {
    handleRepo()
  }, [searchTerm])


  return (
    <>
      <div className="min-h-screen bg-[#0f172a] text-white pb-17">
        <Navbar />


        <div className="max-w-5xl mx-auto px-6">
          {isLoading ?
            <div className="flex justify-center items-center pt-40 ">
              <Loader2 className='h-6 w-6 animate-spin text-blue-400' />
            </div>
            : 
            repos.length === 0 
            ? 
            <NoRepositories /> 
            : 
            <div>
              <h1 className="text-3xl font-bold mb-8">Repositories</h1>
              <div className="space-y-6">
                {repos.map((repo) => <RepoCard key={repo.id} repo={repo} />)}
              </div>
            </div>}
        </div>
      </div>



    </>
  )
}

export default Repositories