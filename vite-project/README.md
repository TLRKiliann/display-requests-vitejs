# Request

## ASYNC - AWAIT with .then() old

```
  useEffect(() => {
    setLoading(true)
    const fetchRequest = async () => {
      await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          setResult(data)
          setLoading(false)
          console.log("to verify")
        })
        .catch((err) => {
          console.log(err?.message)
        })
    }
    fetchRequest();
    return () => console.log("+ useEffect done !")
  }, [])
```

## ASYNC - AWAIT new (best practice)

```
  useEffect(() => {
    setLoading(true)
    const fetchRequest = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json()
        setResult(data)
        setLoading(false)
      }
      catch (err) {
        let message = 'Unknown Error'
        if (err instanceof Error) {
          message = err.message
          console.log(message);
        }
      }
    }
    fetchRequest();
    return () => console.log("+ useEffect done !")
  }, [])
```

## Retrieve data

      {Object.values(result).map((res) => (
        <p key={res.id}>{res.body} {res.title}</p>
      ))}

## Trucs et astuces

https://cors.io/?