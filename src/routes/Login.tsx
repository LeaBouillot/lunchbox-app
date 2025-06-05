 import React, { useEffect, useState } from 'react';
 import Loading from '../components/Login/Loading';
import LoginMain from '../components/Login/LoginMain';

export default function Login() {
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <LoginMain input={input} setInput={setInput} />
      )}
    </>
  );
}

