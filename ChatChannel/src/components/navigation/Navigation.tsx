import { makeStyles } from "@fluentui/react-components";
import { Channel } from "./channels/Channel";
import Channels from "./channels/Channels";
import { useState } from "react";
import { User } from "./users/User";

const useStyles = makeStyles({
      root: {
            width: "300px"
      },
});

type Props = {
      channels: Channel[];
      setSelectedChannel: (channel: Channel) => void;
}

const Navigation = ({ channels, setSelectedChannel }: Props) => {
      const styles = useStyles();

      const [users, setUsers] = useState<User[]>([]);


      const joinChannel = (channel: Channel) => {
            const newUsers = [...(users?.filter(u => u.id !== "me") ?? [])]
            setUsers([...newUsers, { id: "me", name: "me", currentChannelId: channel.id }])
            setSelectedChannel(channel);
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