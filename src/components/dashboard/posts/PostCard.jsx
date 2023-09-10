import { deletePost, fetchPosts } from '@/backend/api';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostCard = () => {
  const { posts, postsLoading, postsError, mutatePosts } = fetchPosts();
  const successNotification = (message) => toast.success(message);
  const errorNotification = (message) => toast.error(message);

  const handleDelete = async (id) => {
    const res = await deletePost(id);
    console.log(res);
    if (res.status === 201) {
      errorNotification(res.data);
      mutatePosts();
    } else {
      errorNotification(res.error);
    }
  };

  return (
    <div className="mb-3">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {posts &&
        posts.map((post) => (
          <div className="postCard mb-3" key={post._id}>
            <img src={post.img} width={100} height={50} alt="Code Geeks 9ja" />
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignSelf: 'flex-end',
              }}
            >
              <div className="fw-bold py-2" style={{ color: '#ccc', fontSize: '13px' }}>
                {post.title}
              </div>
              <div
                style={{
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  // width: '100%',
                  color: 'red',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignSelf: 'flex-end',
                }}
                onClick={() => handleDelete(post._id)}
              >
                X
              </div>
            </div>
          </div>
        ))}
      {postsLoading && <div>Laoding...</div>}
      {postsError && <div>{postsError}</div>}
    </div>
  );
};

export default PostCard;
