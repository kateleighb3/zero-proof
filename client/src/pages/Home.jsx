import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';


// import ThoughtList from '../components/ThoughtList';
// import ThoughtForm from '../components/ThoughtForm';
// import './home.css';

import { QUERY_THOUGHTS } from '../utils/queries';
import Auth from '.././utils/auth';

import {backgroundImage} from '../utils/constants';



const Home = () => {
  // const { loading, data } = useQuery(QUERY_THOUGHTS);
  // const thoughts = data?.thoughts || [];
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div className={`bg-cover bg-[url("./assets/${backgroundImage}")] relative h-screen w-full m-0 p-0`}>
    {Auth.loggedIn() ? (
    <div className= "m-0 p-0 flex justify-center items-center min-h-screen">
   <div className='x-sign'>
    Open
   </div>
   </div>
                // <div className="m-0 p-0 flex justify-center items-center min-h-screen">
                //     <div className='text-center'>
                //         <h1 className="neonText">Zero</h1><h1 className="neon">Proof</h1>
                //     </div>
                // </div>
           
            
    ):(
      <div className="m-0 p-0 flex justify-center items-center min-h-screen">
                    <div className='text-center'>
                        <h1 className="neonText">Zero</h1><h1 className="neon">Proof</h1>
                    </div>
                </div>

    )
   
  }
   </div>
  )
 



    // <main>
      // <div className="flex-row justify-center">
        // <div className="col-12 col-md-10 mb-3 p-3" style={{ border: '1px dotted #1a1a1a' }}>
          // <ThoughtForm />
        // </div>
        // <div className="col-12 col-md-8 mb-3">
          // {loading ? (
            // <div>Loading...</div>
          
          // : (
            // <ThoughtList
              // thoughts={thoughts}
              // title="Some Feed for Thought(s)..."
            // />
          // )}
        // </div>
      // </div>
    // </main>
  // );
};

export default Home;
