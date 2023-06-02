import {
  makeStyles,
  shorthands,
  Tab,
  TabList
} from "@fluentui/react-components";
import { Channel } from "./Channel";
import { Users } from "../users/Users";
import { User } from "../users/User";

const useStyles = makeStyles({
  root: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    ...shorthands.padding("50px", "20px"),
    rowGap: "20px",
  },
});

type Props = {
  channels: Channel[]
  users: User[]
  joinChannel: (channel: Channel) => void
}

const Channels = (props: Props) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <TabList
        vertical
      >
        {props.channels.map(channel => (
          <Tab onClick={() => props.joinChannel(channel)} key={channel.name} value={channel.name}>
            {channel.name}
              <Users users={props.users.filter(u => u.currentChannelId === channel.id)} />
          </Tab>
        ))}
      </TabList>
    </div>
  );
}

export default Channels;