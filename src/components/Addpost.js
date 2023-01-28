import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../componentStyle/AddformStyle.css';
import {Link} from "react-router-dom";
import { connect} from 'react-redux';
import React,{ useState } from 'react';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';

const Addpost=({posts,addpost})=> {
    const [title,setTitle]=useState("");
    const [categories,setCategories]=useState("");
    const [content,setContent]=useState("");
    
    //const posts =useSelector((state)=>state);

    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!title || !categories || !content){
            return toast.warning("Please fill in all fields!!")
        }
       
        const data={
            id:posts[posts.length-1].id+1,
            title,
            categories,
            content,
            like:0
        }
       
        addpost(data);
        toast.success("Post Added Successfully!!!");
        navigate('/');
    };
    
   


   
    return ( 
       <div className='container'>
           <div>
               <Link to='/' className='formLink'>Back to Index</Link>
           </div>
           <div className='addPostForm'>
           <h3 className='formhead'>Add Post In Blog</h3>
           <hr className='hrform'/>
        <Form className='formadd'onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tittle</Form.Label>
            <Form.Control type="text" onChange={e=>setTitle(e.target.value)} />
           
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Categories</Form.Label>
            <Form.Control type="text" onChange={e=>setCategories(e.target.value)} />
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Content</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={e=>setContent(e.target.value)}/>
      </Form.Group>
        <Button variant="success" type="submit" className='btn'>
            Submit
        </Button>&nbsp;&nbsp;&nbsp;
        <Button variant="danger" type='reset' className='btn'>Reset</Button>
    </Form>
           </div>
           
       </div>
     );
};

const mapStateToProps = (state) => ({
    posts: state,
  });
  const mapDispatchToProps = (dispatch) => ({
    addpost: (data) => {
      dispatch({ type: "ADD_POST", payload: data });
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(Addpost);