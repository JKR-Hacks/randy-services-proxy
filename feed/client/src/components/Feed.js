/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react';

// const style = {
//   image: {
//     border: '1px solid #ccc',
//     background: '#fefefe',
//   },
// };

const Feed = ({ ramsFeed }) => (

  <div>
    {ramsFeed.map(ramFeed => (
      <div className="row" key={ramFeed.id}>
        <div className="col-md-6">
          <div>
            <div><img src={`${ramFeed.bigphoto}`} width={500} height={300} /></div>
            <div>
              <h2>
                <strong>
                  {ramFeed.title}
                </strong>

              </h2>
            </div>
            <div>
              <img className="rounded-circle" width={28} height={28} src={`${ramFeed.authorphoto}`} />
              {ramFeed.author}
            </div>
            <p>
              <strong>
Updates:
              </strong>
              {ramFeed.newsfeed}
              <br />
            </p>
            <div><img src={`${ramFeed.smallphoto}`} width={300} height={200} /></div>
            <p>
              {ramFeed.newsfeed}
              <br />
            </p>
            <p>
              <img src="https://pbs.twimg.com/profile_images/1027403255607746560/dIyhrGOz_400x400.jpg" width={25} height={25} />
              {ramFeed.timestamp}
            </p>
          </div>
        </div>
      </div>))}
  </div>
);

export default Feed;
