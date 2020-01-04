import React from 'react';
import Posts from "./Props"
import blog from "./blog"
const App = ()=>{
  const blogPosts = blog.map(post =>
    <Posts title= {post.title} subtitle= {post.subTitle} author ={post.author} date={post.date} />)
return(
  <div>
    {blogPosts}
  </div>
)
}
export default App;
