import { useContext, useState } from "react";
import { TeamsFxContext } from "./Context";
import Navigation from "./navigation/Navigation";
import { Chat } from "./chat/Chat";
import { Button, makeStyles, shorthands } from "@fluentui/react-components";
import TabConfig from "./TabConfig";
import { Channel } from "./navigation/channels/Channel";
import React from "react";
import { axiosClient } from "../core/axiosClient";
import { ChannelDto } from "../models/ChannelDto";
import { BackendEndpoints } from "./BackendEndpoints";
// import { Person } from "@microsoft/mgt-react";
const useGridExampleStyles = makeStyles({
  targetContainer: {
    display: "flex",
    flexDirection: "row",
    height: "100%"
    // gridTemplateColumns: "repeat(5, 1fr)",
    // gridTemplateRows: "repeat(5, 64px)",
    // ...shorthands.gap("20px"),
    // ...shorthands.margin("16px", "128px"),
  }
})
export default function Tab() {
  const { themeString } = useContext(TeamsFxContext);
  var classes = useGridExampleStyles();
  const [channels, setChannels] = useState<Channel[]>([]);
  const [selectedChannel, setSelectedChannel] = useState<Channel | undefined>(undefined);

  React.useEffect(() => {
    axiosClient.get(BackendEndpoints.ChannelsGet).then(response => setChannels(response.data));
  }, [channels])


  return (
    <div
      className={themeString === "default" ? "light" : themeString === "dark" ? "dark" : "contrast"}
    >
      <div className={classes.targetContainer}>
        <Navigation channels={channels} setSelectedChannel={setSelectedChannel}/>
        <Chat selectedChannel={selectedChannel}/>
      </div>
    </div>
  );
}

