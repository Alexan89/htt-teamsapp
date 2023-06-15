import { makeStyles } from "@fluentui/react-components";
import { Channel } from "./channels/Channel";
import Channels from "./channels/Channels";
import { useEffect, useState } from "react";
import microsoftTeams, { app, authentication, call, executeDeepLink, meeting, meetingRoom } from "@microsoft/teams-js";
import { User } from "./users/User";
import CallGraph from "../sample/CallGraph";
import useGraphClient from "../../helpers/msGraphHelper";
import { axiosClient } from "../../core/axiosClient";
import { BackendEndpoints } from "../BackendEndpoints";
import React from "react";
import { UserDto } from "../../models/UserDto";
import { useTeamsFx } from "@microsoft/teamsfx-react";

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
      const [init, setInit] = useState(false);
      const context = useTeamsFx();

      React.useEffect(() => {
            axiosClient.get(BackendEndpoints.ChannelUsersGet)
            .then(response => setUsers(response.data));
      }, []);
      const createChanngel = () => {
            // 1. Create a meeting
            // 2. Save meeting to storage (with link)
            // 3. Join meeting & channel
      };

      // const joinChannel = (channel: Channel) => {
      //       const newUsers = [...(users?.filter(u => u.id !== "me") ?? [])]
      //       setUsers([...newUsers, { id: "me", name: "me", currentChannelId: channel.id }])
      //       setSelectedChannel(channel);

      //       var url = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_NTU2N2VkYjQtZmYzZi00NDc5LTkwOWEtZjNhYTE2MGM2NDIy%40thread.v2/0?context=%7b%22Tid%22%3a%22700951c4-e14e-4370-a898-a2f981d11bb9%22%2c%22Oid%22%3a%224f204dfc-bc0c-4408-afcd-fa1a39df5295%22%7d";
      //       app.openLink(url);
      // };

      const joinChannel = async (channel: Channel) => {
            var response = await context.teamsfx?.getUserInfo().then(response => response);

            if(response) {
                  const addUserRequest: UserDto = {
                        id: response.objectId,
                        name: response.displayName,
                        currentChannelId: channel.id
                  };

                  await axiosClient.post(BackendEndpoints.ChannelUserAdd, addUserRequest);
                  setUsers(users => [...users, addUserRequest])
            }

      }

      return (
            <div className={styles.root}>
                  <Channels
                        channels={channels}
                        users={users}
                        joinChannel={joinChannel}
                  />
                  <CallGraph></CallGraph>
            </div>
      )

}

export default Navigation;