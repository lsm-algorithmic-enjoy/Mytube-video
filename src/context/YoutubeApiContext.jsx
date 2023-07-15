import { createContext, useContext } from "react";

export const YoutubeApiContext = createContext();

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
