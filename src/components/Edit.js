import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../componentStyle/AddformStyle.css';
import {Link,useParams,useNavigate} from "react-router-dom";
import {connect} from 'react-redux';
import { useEffect } from 'react';
import React,{ useState } from 'react';
import { toast } from 'react-toastify';

const Editpost=({posts,updatePost})=> {

    const [title,setTitle]=useState("");
    const [categories,setCategories]=useState("");
    const [content,setContent]=useState("");

    const navigate = useNavigate();
    const {id} =useParams();
    //const posts=useSelector(state=>state);
    const currentpost=posts.find(post=>post.id ===parseInt(id));

    useEffect(()=>{
        if(currentpost){
            setTitle(currentpost.title);
            setCategories(currentpost.categories);
            setContent(currentpost.content);
        }
    },[currentpost]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!title || !categories || !content){
            return toast.warning("Please fill in all fields!!")
        }
       
        const data={
            id:parseInt(currentpost.id),
            title,
            categories,
            content
        }
       
        updatePost(data);
        toast.success("Post updated Successfully!!!");
        navigate('/');
    };

    return ( 
       <div className='container'>
            <div>
               <Link to='/' className='formLink'>Back to Index</Link>
           </div>
           
           {currentpost?(
               
               <div className='addPostForm'>
               <h3 className='formhead'>Edit Post {id}</h3>
               <hr className='hrform'/>
            <Form className='formadd' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tittle</Form.Label>
                <Form.Control type="text" value={title} 
                                        onChange={e=>setTitle(e.target.value)} />
               
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Categories</Form.Label>
                <Form.Control type="text" value={categories} 
                                        onChange={e=>setCategories(e.target.value)} />
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" rows={3} value={content} 
                                    onChange={e=>setContent(e.target.value)}/>
          </Form.Group>
            <Button variant="success" type="submit" className='btn'>
                Edit
            </Button>&nbsp;&nbsp;&nbsp;
            <Button variant="danger" type='reset' className='btn'>Reset</Button>
        </Form>
               </div>
             
           ):( <h3 className='formhead'>Post with this {id} is not exits</h3>)}
           
           
           
       </div>
     );
}
const mapStateToProps = (state) => ({
    posts: state,
  });
  const mapDispatchToProps = (dispatch) => ({
    updatePost: (data) => {
      dispatch({ type: "UPDATE_POST", payload: data });
    },
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(Editpost);
