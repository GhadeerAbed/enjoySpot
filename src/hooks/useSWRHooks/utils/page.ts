import axios from "../../../lib/axios/page";
import { fetcherParametersType, fetcherType } from "../types/page";
import { getAuthData } from "../../../utils/page";
import { useLocale } from "next-intl";

export const useCustomFetcher = () => {
  const authData = getAuthData(); 
  const accessToken = authData?.token || "";
  const locale = useLocale(); 

  const fetcher: fetcherType = async (
    [url, method, options]: fetcherParametersType,
    { arg }: any | undefined
  ) => {
    try {
      const response = await axios({
        url,
        method,
        ...(arg ? arg : options),
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Accept-Language": locale
        },
      });

      return response.data;
    } catch (error) {
      return error;
    }
  };

  return fetcher;
};
