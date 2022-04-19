import { useCallback, useState, useEffect } from "react";
import { useDispatch } from 'react-redux';

// const useHttp = (applyData, dataModifier, errorMessage) => {
//   const dispatch = useDispatch();
//   const [isLoading, setIsLoading] = useState(false); // Sets individual loading state while fetching data.
//   const getHttp = useCallback(async (requestConfig) => {
//     setIsLoading(true);
//     const response = await fetch(requestConfig.url, {
//       method: requestConfig.method,
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(requestConfig.body),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       let modifiedData = dataModifier(data);
//       dispatch(applyData(modifiedData)); //apply data to state
//       setIsLoading(false);
//     } 
//     else{
//       const data = await response.json();
//       if(data&& data.error && data.error.message)
//       errorMessage = data.error.message;
//       else
//       errorMessage = 'Authentication Failed!';
//       alert(errorMessage);
//     }
//   }, [applyData, dataModifier]);
//   return { isLoading, getHttp };
// };

const useFetchData = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);


  const fetchData = async (url, method, body) => {
    setIsLoading(true);

    // dispatch(fetchApiData());
    const response = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    const data = await response.json();

    // dispatch(fetchApiSuccess(data));
    if (response.ok) {
      setApiData(data);
      setIsLoading(false);
    }
    else {
      setServerError(data);
      // dispatch(fetchApiFailure());
      setIsLoading(false);
    }
  }

  return { isLoading, apiData, serverError, fetchData };
};

export default useFetchData;