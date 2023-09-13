import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  if (
    Auth.loggedIn() && 
    /* Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's username, and compare it to the userParam variable */
    Auth.getProfile().authenticatedPerson.username === userParam
  ) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <div className="profile-bg"> </div>
        <div className="contain"> </div>
          

        {/* <div class="col-6 col-md-4 left-col">
        <div class="search_box row mx-3">
                        <h3 className='find-title'>Find a bar:</h3>
                    </div>                 */}
    {/* <div className='search-cont'> */}
        
      {/* </div> */}
      
    



          
          <div className='box-around-boxes'>
          <div className="a-box">
          <h2>Viewing your profile.</h2>
        </div>

        <div className="a-card">
          <ThoughtList
            thoughts={user.thoughts}
            title={`${user.username}'s thoughts...`}
            showTitle={false}
            showUsername={false}
          />
        </div>
        {!userParam && (
          <div
            className="thought-cont"
            style={{ border: '1px dotted #1a1a1a' }}
          >
            <ThoughtForm />
          </div>
        )}
      </div>
      </div>
  
  );
};

export default Profile;
