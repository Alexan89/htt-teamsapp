import { makeStyles, shorthands } from "@fluentui/react-components";
import { Channel } from "./channels/Channel";
import Channels from "./channels/Channels";
import { useState } from "react";
import { User } from "./users/User";

const useStyles = makeStyles({
      root: {
            width: "300px"
      },
});
const Navigation = () => {
      const styles = useStyles();

      const [users, setUsers] = useState<User[]>([]);

      const [channels, setChannels] = useState<Channel[]>([{ name: "channel1", id: "1" }, { name: "channel2", id: "2" }, { name: "channel3", id: "3" }]);

      const joinChannel = (channel: Channel) => {
            const newUsers = [...(users?.filter(u => u.id !== "me") ?? [])]
            setUsers([...newUsers, { id: "me", name: "me", currentChannelId: channel.id }])
      };

      return (
            <div className={styles.root}>
                  <Channels
                        channels={channels}
                        users={users}
                        joinChannel={joinChannel}
                  />
            </div>
      )

}

export default Navigation;