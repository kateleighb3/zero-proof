// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_THOUGHT } from '../utils/queries';
import { backgroundImage } from '../utils/constants';


const SingleThought = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { thoughtId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
    // pass URL parameter
    variables: { thoughtId: thoughtId },
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={`min-h-screen w-full bg-fixed bg-repeat relative bg-cover bg-[url("./assets/${backgroundImage}")]`}>
    <div className="row relative w-full h-36"></div>
    <div className="mt-20 mb-20 bg-green-950 bg-opacity-50 text-white border-2 border-white my-3 ml-40 mr-40">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {thought.thoughtAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          had this thought on {thought.createdAt}
        </span>
      </h3>
      <div className="border-2 border-white">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {thought.thoughtText}
        </blockquote>
      </div>

      <div className="my-5">
        <CommentList comments={thought.comments} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm thoughtId={thought._id} />
      </div>
    </div>
    </div>
  );
};

export default SingleThought;
