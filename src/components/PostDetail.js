import { useSelector,useDispatch} from "react-redux";
import {connect} from 'react-redux';
import {useNavigate, useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../componentStyle/PostDetailsStyle.css';
import {Link} from "react-router-dom";
import {AiTwotoneLike} from "react-icons/ai";
import { toast } from 'react-toastify';
import React,{ useState } from 'react';

const PostDetail=({post})=>{
    const {id}=useParams();
   
    const navigate = useNavigate();
    const dispatch=useDispatch();
    //const post=useSelector(state=>state);
    const currentpost=post.find(post=>post.id ===parseInt(id));
    
    const [like,setLike]=useState(currentpost.like);
    const deletePost=(id)=>{
      dispatch({ type: "DELETE_POST", payload: id });
      toast.success("Post deleted Successfully!!!");
      navigate('/');
    }
    
    const clickHandle = event => {
      event.preventDefault()
      setLike((like + 1))
  }
   
  
  return(
      <div className="containerdetail">
             <div>
               <Link to='/' className='formLink'>Back to Index</Link>
           </div>
            {currentpost ?(  <Form className="detailsform">
              <button className="likebtn" onClick={clickHandle} >
                <AiTwotoneLike size="30px" color="rgb(0, 57, 230)"/>
                {like}</button>
              <Link to={`/edit/${currentpost.id}`} className="btn  btn-primary mr-1" id='editbtn'>
                        Edit
                      </Link>
              <Button type="button" onClick={()=>deletePost(currentpost.id)} className="btn  btn-danger" id='deletebtn'>
                      Delete
                      </Button>
            
      <Form.Group className="mb-3" >
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={currentpost.title}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" value={currentpost.categories}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Content</Form.Label>
        <Form.Control as="textarea" rows={3} value={currentpost.content}/>
      </Form.Group>
      
    </Form>
            ):(
            <h1 className="text-center">No Contact Found</h1>
          )}
      </div>
      
  )
}

const mapStateToProps = (state) => ({
  post: state,
});



export default connect(mapStateToProps)(PostDetail);
