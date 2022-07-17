import { useEffect, useState } from "react";
import BlogList from "./blogList";
const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const[isloading, setisloading]= useState(true);
    const[err,seterr]=useState(null);
   useEffect(()=>{

        fetch('http://localhost:8000/blogs')
        
        .then(res =>{
            return res.json();
        })
        .then(data=>{
            setBlogs(data);
            setisloading(false);
        })
        .catch(err=>{
            seterr('could not connect');
            setisloading(false);

        });
  

    }, []);
    
    return (
            <div className="home">
                {err&&<div>{err}</div>}
                {isloading&&<div>loading...</div>}
                {blogs&&<BlogList blogs={blogs} title="All Blogs"/>}
            </div>
                 );
}
 
export default Home ;