import { makeStyles,
      shorthands,
      Tab,
      TabList} from "@fluentui/react-components";
import { Channel } from "./Channel";

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
}

const Channels = (props: Props) => {
      const styles = useStyles();
      return (
        <div className={styles.root}>
          <TabList
            vertical
          >
            {props.channels.map(channel => (<Tab key={channel.name} value={channel.name}>{channel.name}</Tab>))}
          </TabList>
        </div>
      );
}

export default Channels;