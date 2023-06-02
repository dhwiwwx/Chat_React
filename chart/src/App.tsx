import { useEffect } from "react";
import { ResultOptions, useQuery } from "react-query";
import { getUsers } from "./API/getUser";

function App() {
  const { data } = useQuery(["getUsers"], () => getUsers(), {
    refetchOnWindowFocus: false,
  });

  const charData = () => {
    if (!data) return [];

    data.results.map((gender) => {
      return {
        country: gender,
      };
    });
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div className="App"></div>;
}

export default App;
