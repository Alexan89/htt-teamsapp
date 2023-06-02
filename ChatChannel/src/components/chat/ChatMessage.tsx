import { Body1, Caption1, Card, CardHeader, makeStyles, shorthands } from "@fluentui/react-components";

const useStyles = makeStyles({
    card: {
        ...shorthands.margin("auto"),
        width: "720px",
        maxWidth: "100%",
    },
});

type Props = {
    name: string
    message: string
    details: string
}

export const ChatMessage = ({name, message, details}: Props) => {
    const styles = useStyles();

    return (
        <Card className={styles.card}>
            <CardHeader  
                header={
                    <Body1>
                        <b>{name}</b>{message}
                    </Body1>
                }
                description={<Caption1>{details}</Caption1>}
            />
        </Card>
    );
};