import { Link } from 'react-router'

function Navbar() {
  return (
    <div className="w-full max-w-285 mx-auto ">
        <div className='flex justify-between p-8'>
                <Link to='/'>
                  <h1 className='text-lg font-semibold '>Github Profile Visualizer</h1>
                </Link>
                <div>
                    <ul className='flex space-x-6 text-slate-300 '>
                        <li className=' hover:text-[#3B82F6] transition-colors duration-200'><Link to='/'>Home</Link></li>
                        <li className=' hover:text-[#3B82F6] transition-colors duration-200'><Link to='/repositories'>Repositories</Link></li>
                        <li className=' hover:text-[#3B82F6] transition-colors duration-200'><Link to='/analysis'>Analysis</Link></li>
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default Navbar