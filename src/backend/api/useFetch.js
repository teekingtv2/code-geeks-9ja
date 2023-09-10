import React, { useEffect, useState } from 'react';

export const getData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(url);
      if (res.satus === 200) {
        setData(res.data);
        setLoading(false);
      } else {
        setLoading(false);
        setErr(res.error);
      }
    };
    getData();
    return { data, loading, err };
  }, []);
};

export const postData = (url, values) => {
  const res = axios.post(url, values, {});
};
