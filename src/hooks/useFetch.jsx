import axios from "axios";
import React, { useEffect, useState } from "react";

const UseFetch = (url) => {
  axios.defaults.withCredentials = true;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      try {
        console.log(url);
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchdata();
  }, [url]);
  // const reFetch = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await axios.get(url);
  //     setData(res.data);
  //   } catch (err) {
  //     setError(err);
  //   }
  //   setLoading(false);
  // };
  return { data, loading, error };
};

export default UseFetch;
