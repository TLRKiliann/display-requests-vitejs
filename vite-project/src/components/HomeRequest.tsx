import { useState, useEffect } from 'react'
import serviceLogin from '../services/serviceLogin'
/*
type RequestProps = {
  id: number;
  userId: number;
  title: string;
  body: string;
}
*/

function HomeRequest() {

  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  //https://jsonplaceholder.typicode.com/posts
  
  useEffect(() => {
    setLoading(true)
    const fetchRequest = async () => {
      await serviceLogin
      .loginRequest()
      .then(data => {
        console.log(data)
        //setResult(data)
        setLoading(false)
      })
      .catch((err) => {
        console.log("Error during catching of login data !", err.message)
        setLoading(false)
      })
    }
    fetchRequest();
    return () => console.log("useEffect !!!")
  }, []);


  console.log(result, "result 2")

  if (loading === true) {
    return <h2>Loading...</h2>
  }

  return (
    <main>
      <h1>Request with Vite (React)</h1>
    </main>
  )
}

export default HomeRequest;
