import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./apiActions";

function ApiComponent() {
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}

      {data && (
        <div>
          <h3>Title: {data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default ApiComponent;
