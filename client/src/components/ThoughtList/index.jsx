import { Link } from 'react-router-dom';

const ThoughtList = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!thoughts.length) {
    return <h3 className ='text-white'>No Thoughts Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3 className="text-white">{title}</h3>}
      {thoughts &&
        thoughts.map((thought) => (

          <div className="flex justify-center">
          <div className = "w-3/4">
          <div key={thought._id} className="text-white border-2 border-white m-2">
            <h4 className="bg-green-950 bg-opacity-50 text-white p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-white font-yellow text-2xl"
                  to={`/profiles/${thought.thoughtAuthor}`}
                >
                  {thought.thoughtAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    wrote this review on {thought.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You wrote this review on {thought.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="bg-opacity-50 border-2 border-white p-4 bg-green-950">
              <p>{thought.thoughtText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/thoughts/${thought._id}`}
            >
              <div className="bg-opacity-50 bg-green-950">
              Join the discussion on this review.
              </div>
            </Link>
          </div>
          </div>
          </div>
        ))}
    </div>
    
  );
};

export default ThoughtList;
