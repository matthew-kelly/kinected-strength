import useSWR from "swr";
import { clientCDN } from "./sanityClient";
import { popupQuery } from "./queries";

export default function usePopupData() {
  const { data, error, isLoading } = useSWR(popupQuery, (query) =>
    clientCDN.fetch(query)
  );

  return {
    data,
    error,
    isLoading,
  };
}
