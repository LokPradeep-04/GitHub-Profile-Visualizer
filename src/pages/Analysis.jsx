import { useContext } from 'react'
import { UserContainer } from '../context/UserContextProvider'
import Navbar from '../components/Navbar'
import NoAnalysisData from '../components/NoAnalysisData'

function Analysis() {

  const { profile } = useContext(UserContainer)

  if (!profile) return (
    <NoAnalysisData />
  )
  return (
    <>
      <div className="min-h-screen bg-[#0f172a] text-white pb-17">
        <Navbar />
        <div>Analysis</div>
      </div>

    </>
  )
}

export default Analysis