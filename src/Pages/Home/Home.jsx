import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Post from '../../Components/Post/Post';
import PublishPost from '../../Components/PublishPost/PublishPost';
import { fetchPosts } from '../../Api/Post';
import LeftSide from '../../Components/Sidebar/Left/LeftSide';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPosts();
        setPosts([]);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchData();
  },[]);

  

  return (
    <>
    
      <LeftSide/>
      <Container className="py-1">
        <PublishPost  />
        <div className="d-flex justify-content-center">
          <hr className="col-lg-5" />
        </div>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </Container>
      
    </>
  );
}

export default Home;