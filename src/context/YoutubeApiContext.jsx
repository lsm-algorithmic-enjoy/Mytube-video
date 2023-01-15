import { createContext, useContext } from "react";
import Youtube from "../api/Youtube";
import YoutubeClient from "../api/YoutubeClient";
//import FakeYoutubeClient from "../api/FakeYoutubeClient";

export const YoutubeApiContext = createContext();

const client = new YoutubeClient();
//const client = new FakeYoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
