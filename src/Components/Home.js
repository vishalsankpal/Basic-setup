import React,{Component} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
class Home extends Component{
  state = {
    posts: []
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.setState({
          posts:response.data.slice(0,10)
        })
      })
  }
  render(){
    const {posts} = this.state;
    const postList = posts.length ? (
      posts.map(posts => (
        <div className="post card" key={posts.id} >
          <div className="card-content">
             {
               //<Link to={`/post/${posts.id}`}>
            //   <span className="card-title">{posts.title}</span>
            // </Link>
            //or
            //
            }
            <Link to={`/${posts.id}`}>
              <span className="card-title">{posts.title}</span>
            </Link>
            <p>{posts.body}</p>
          </div>
        </div>
      ))
    ) : (
      <div className="center">No Posts</div>
    )
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    )
  }
}
export default Home;