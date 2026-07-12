import React from "react";
import { useState, useEffect } from "react";

function useFetchProducts(url) {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

  
      fetch(url, {signal : controller.signal})
      .then(response => {
        if(!response.ok) throw new Error(`Error ${response.status}`)
        return response.json()
      }
        
      )
      .then(body => {
        setData(body)
        setIsLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setIsLoading(false)
      })

      return () => controller.abort()
  }, [url]);

  return {data, isloading, error}
}

export default useFetchProducts;
