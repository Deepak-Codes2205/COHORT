import React, {useEffect} from 'react'
import '../styles/feed.scss'
import Post from '../components/Post'
import {usePost} from '../hooks/usePost'
import Nav from '../../shared/components/Nav'
import SideBar from '../components/SideBar'
import '../../shared/sidebar.scss'

const Feed = () => {

  const  {feed, loading, handleGetFeed, handleLike, handleUnlike} = usePost()

  useEffect( () =>{
    handleGetFeed()
  }, [])

  if(loading || !feed){
    return <main><h2>Feed is loading...</h2></main>
  }
  console.log(feed)

  return (
    <main className='feed-page'>
        <Nav />
        <div className="content">
          <div className='sidebar'>
            <h3>Followers</h3>
            <h3>Following</h3>
          </div>
          <div className="feed">
              <div className="posts">
                {feed.map(post=>{
                  return <Post user={post.user} post={post } loading={loading} handleLike={handleLike} handleUnlike={handleUnlike}/>
                })}
              </div>
          </div>
        </div>
    </main>
  )
}

export default Feed
