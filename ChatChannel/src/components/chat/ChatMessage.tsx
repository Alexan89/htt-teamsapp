import { Body1, Caption1, Card, CardHeader, makeStyles, shorthands } from "@fluentui/react-components";
import { ChatMessageItem } from "./ChatMessageItem";

const useStyles = makeStyles({
    card: {
        // ...shorthands.margin("auto"),
        width: "720px",
        maxWidth: "100%",
    },
    cardRight: {
        width: "720px",
        maxWidth: "100%",
        backgroundColor: "#0c3b5e"
    },
    cardContainerLeft: {
        width: "100%",
        height: "fit-content",
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        ...shorthands.padding(".7em")
    },
    cardContainerRight: {
        width: "100%",
        height: "fit-content",
        display: "flex",
        flexDirection: "row",
        justifyContent: "end",
        ...shorthands.padding(".7em")
    },
});

type Props = {
    item: ChatMessageItem;
}

export const ChatMessage = (props: Props) => {
    const styles = useStyles();
    const { name, message, details, timeStamp } = props.item;

    return (
        <div className={props.item.isMe ? styles.cardContainerRight : styles.cardContainerLeft}>
            <Card className={props.item.isMe ? styles.cardRight : styles.card}>
                <CardHeader
                    header={
                        <Body1>
                            {message}
                        </Body1>
                    }
                    description={<Caption1>Posted by: {name} at: {timeStamp.toUTCString()}</Caption1>}
                />
            </Card>
        </div>
    );
};