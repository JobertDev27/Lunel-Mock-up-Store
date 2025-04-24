import { useEffect, useState } from "react";

export default function useFetch(item) {
  const [exportData, setExportData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          `https://dummyjson.com/products/category/${item}?limit=0`,
          {
            mode: "cors",
          }
        );
        const res = await data.json();
        setExportData(res?.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [item]);
  return exportData;
}
