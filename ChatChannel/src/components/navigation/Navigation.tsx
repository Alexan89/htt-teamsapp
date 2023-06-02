import { makeStyles, shorthands } from "@fluentui/react-components";
import { Channel } from "./channels/Channel";
import Channels from "./channels/Channels";

const useStyles = makeStyles({
      root: {
            width: "300px"
      },
});
const Navigation = () => {
      const styles = useStyles();

      const channels: Channel[] = [{ name: "channel1" }, { name: "channel2" }, { name: "channel3" },]
      return (
            <div className={styles.root}>
                  <Channels channels={channels} />
            </div>
      )

}

export default Navigation;