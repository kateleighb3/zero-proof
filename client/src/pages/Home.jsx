import { useQuery } from '@apollo/client';

// import ThoughtList from '../components/ThoughtList';
// import ThoughtForm from '../components/ThoughtForm';
// import './home.css';

import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (

    <div className='bg-cover bg-[url("./assets/su-san-lee-g3PyXO4A0yc-unsplash.jpg")] relative h-screen w-full m-0 p-0'>
                <div className="m-0 p-0 flex justify-center items-center min-h-screen">
                    <div className='text-center'>
                        <h1 className="neonText">Zero</h1><h1 className="neon">Proof</h1>
                    </div>
                </div>
            </div>




    // <main>
      // <div className="flex-row justify-center">
        // <div className="col-12 col-md-10 mb-3 p-3" style={{ border: '1px dotted #1a1a1a' }}>
          // <ThoughtForm />
        // </div>
        // <div className="col-12 col-md-8 mb-3">
          // {loading ? (
            // <div>Loading...</div>
          ) 
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
