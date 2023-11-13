import React, { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import LoadingStatus from "./LoadingStatus";
import ErrorDisplay from "./ErrorDisplay";
import DataDisplay from "./DataDisplay";

interface Data {
  id: number;
  title: string;
  body: string;
}

const DataLoader: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response: AxiosResponse<Data> = await axios.get<Data>(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        setData(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error);
        } else {
          // Handle other types of errors
          console.error("Unexpected error:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingStatus />;
  }

  if (error) {
    return <ErrorDisplay error={error} />;
  }

  return <DataDisplay data={data} />;
};

export default DataLoader;
