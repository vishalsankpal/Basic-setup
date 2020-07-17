import React,{Component} from 'react';
import axios from 'axios';
export default class Post extends Component{
  state = {
    post : null
    //id : null //initially valye will be null . when componentDidMount life cycle method will call and we will grab the post id using this.props.match.params.post_id set to the state 
  }
  componentDidMount(){
    console.log(this.props)
    let id = this.props.match.params.post_id;
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response=>{
      this.setState({
        post : response.data
      })
      console.log(response.data)
    })
    
    
  }
  render(){
    const post = this.state.post ? (
      <div className="post">
        <h4 className="center">{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <div className="center">Loading Post....</div>
    )
    return(
      <div className="container">
        {post}
      </div>
    )
  }
}