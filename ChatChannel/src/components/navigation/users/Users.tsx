import {
    AvatarGroup,
    AvatarGroupItem,
    AvatarGroupPopover,
    makeStyles,
    partitionAvatarGroupItems,
} from "@fluentui/react-components";
import { User } from "./User";

type Props = {
    users: User[]
};

const useStyles = makeStyles({
    root: {
        display: "flex",
        marginTop: "10px",
        justifyContent: "flex-start",
    },
});

export const Users = ({ users }: Props) => {
    const styles = useStyles();

    const { inlineItems, overflowItems } = partitionAvatarGroupItems({
        items: users.map(user => user.name),
    });

    return (
        <div className={styles.root}>
            <AvatarGroup>
                {inlineItems.map((name) => (
                    <AvatarGroupItem name={name} key={name} />
                ))}
                {overflowItems && (
                    <AvatarGroupPopover>
                        {overflowItems.map((name) => (
                            <AvatarGroupItem name={name} key={name} />
                        ))}
                    </AvatarGroupPopover>
                )}
            </AvatarGroup>
        </div>
    );
};