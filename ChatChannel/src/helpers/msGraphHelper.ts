import { useTeamsUserCredential } from "@microsoft/teamsfx-react";
import config from "../components/sample/lib/config";
import { AuthenticationProviderOptions, Client, ClientOptions } from "@microsoft/microsoft-graph-client";
import { useEffect, useState } from "react";

const useGraphClient = () => {
    const [client, setClient] = useState<Client | undefined>(undefined);

    const { teamsUserCredential } = useTeamsUserCredential({
        initiateLoginEndpoint: config.initiateLoginEndpoint!,
        clientId: config.clientId!,
    });

    const getAccessToken = (authenticationProviderOptions?: AuthenticationProviderOptions | undefined): Promise<string> => {
        return teamsUserCredential!.getToken(["https://graph.microsoft.com/.default"]).then(token => {
            return token!.token;
        });
    }

    useEffect(() => {
        if (!teamsUserCredential) return;

        let clientOptions: ClientOptions = {
            authProvider: {getAccessToken},
        };      
        setClient(Client.initWithMiddleware(clientOptions));
    }, [teamsUserCredential]);

    // const createMeeting = (): Promise<any> => {
    //     if (!token) return Promise.reject("No access token provided");
    //     return fetch("/me/onlineMeetings", {
    //         method: 'POST',
    //         body: "",
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         },
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         return data.value;
    //     });
    // };

    return client;
}

export default useGraphClient;