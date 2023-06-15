import { useEffect, useState } from "react";
import useGraphClient from "../../helpers/msGraphHelper";

function CallGraph() {
    const [users, setUsers] = useState<any[]>([]);
    const [init, setInit] = useState(false);

    const client = useGraphClient()

    useEffect(() => {
        if (client && !init) {
            client.api('/users').get().then((users) => setUsers(users.value));
            setInit(true);
        }
    }, [client, init])

    return (
        <div>
            <h1>List of Users</h1>
            <ul>
                {users?.length && users?.map((user) => (
                    <li key={user?.id ?? ''}>{user?.displayName ?? 'null'}</li>
                ))}
            </ul>
        </div>
    );
};

export default CallGraph;

