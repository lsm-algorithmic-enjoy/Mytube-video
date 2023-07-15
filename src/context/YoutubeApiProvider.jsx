import Youtube from "../api/Youtube";
import YoutubeClient from "../api/YoutubeClient";
import { YoutubeApiContext } from "./YoutubeApiContext";

const client = new YoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}
