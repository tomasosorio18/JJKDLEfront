import { useEffect, useState } from "react";
import { getPreviousRecord } from "../api/getPreviousRecord";

export const usePreviousRecord = () =>{
  const [previousData, setPreviousData] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPreviousRecord();
   
        setPreviousData(data);
      } catch (error) {
        console.error("Error fetching previous record:", error);
      }
    };
    fetchData();
  }, []);


  
  return previousData;
}
