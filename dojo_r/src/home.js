//import { useEffect, useState } from "react";
import BlogList from "./blogList";
import useFetch from "./useFetch";
const Home = () => {
    const { Data:blogs, isloading, err} = useFetch("http://localhost:4000/blogs");
    
    return (
            <div className="home">
                {err&&<div>{err}</div>}
                {isloading&&<div>loading...</div>}
                {blogs&&<BlogList blogs={blogs} title="All Blogs"/>}
            </div>
                 );
}
 
export default Home ;