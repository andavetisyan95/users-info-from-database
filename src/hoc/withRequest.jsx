import { useEffect, useState } from "react";
import styles from "../styles/Loading.module.scss";

const withRequest = (OriginalComponent, url) => {
  function NewComponent() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${url}`)
        .then(res => res.json())
        .then(result => setData(result));

      setLoading(true);
    }, []);

    return loading ? (
      <OriginalComponent data={data} setData={setData} />
    ) : (
      <div className={styles.spinner_container}>
        <div className={styles.spinner_container_loading}></div>
      </div>
    );
  }
  return NewComponent;
};

export default withRequest;
