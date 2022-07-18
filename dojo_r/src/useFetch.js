import { useState,useEffect } from "react";

const useFetch= (url) => {
    const [Data, setData] = useState(null);
    const[isloading, setisloading]= useState(true);
    const[err,seterr]=useState(null);
   useEffect(()=>{

        fetch(url)
        .then(res=>
            {
                if(!res.ok)
                {
                    throw Error("could not connect");
                }
                return res.json();
            })
      
        .then(data=>{
            setData(data);
            setisloading(false);
            seterr(null);
        })
        .catch(err=>{
            seterr(err.message);
            setisloading(false);

        });
  

    }, [url]);
return ({Data,isloading,err});

}

export default useFetch;