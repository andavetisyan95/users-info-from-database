import { useEffect, useState } from "react";

const withRequest = (OriginalComponent, url) => {
  function NewComponent() {
    const [data, setData] = useState();
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${url}`)
        .then(res => res.json())
        .then(result => setData(result));
    }, []);

    return <OriginalComponent data={data} setData={setData} />;
  }
  return NewComponent;
};

export default withRequest;
