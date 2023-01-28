import React from "react";
import  '../componentStyle/HomeStyle.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home=()=> {
    const posts = useSelector(state=>state);
    return ( 
        <div className="container">
        <div className="row d-flex flex-column">
            <div className="col-md-28 my-5">
            <Link to="/add" className="btn btn-outline-dark" id="addbtn">
                Add Post
            </Link>
            </div>
        
            <div col-md-10 mx-auto my-4>
            <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
               
                <th scope="col" className="tablehead">Post</th>
               </tr>
            </thead>
            <tbody>
              {
                posts.map((posts,id)=>(
                  <tr key={id}>
                     
                      
                    <td><Link className="postdtlLink" to={`/details/${posts.id}`}>{posts.title}</Link></td>
                  </tr>
                ))
              }
               
                  
            
            </tbody>
          </table>
            </div>
        </div> 
        </div>
        
     );
}

export default Home;

