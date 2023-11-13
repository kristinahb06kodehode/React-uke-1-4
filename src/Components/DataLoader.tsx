import React, { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import LoadingStatus from "./LoadingStatus";
import ErrorDisplay, { ErrorDisplayProps } from "./ErrorDisplay";
import DataDisplay, { UserDetailsData } from "./DataDisplay";

const DataLoader: React.FC = () => {
  const [data, setData] = useState<{
    userDetails?: UserDetailsData;
    textContent?: UserDetailsData;
  }>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ErrorDisplayProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response: AxiosResponse<UserDetailsData> =
          await axios.get<UserDetailsData>(
            "https://jsonplaceholder.typicode.com/posts/1"
          );
        setData({
          userDetails: response.data,
          textContent: response.data,
        });

        // Set a meaningful error if needed
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError({
            error: {
              name: "AxiosError",
              message: "Feil oppsto",
              isAxiosError: true,
              toJSON: () => ({}),
            },
          });
        } else {
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
    return <ErrorDisplay error={error.error} />;
  }

  return <DataDisplay data={data} />;
};

export default DataLoader;
