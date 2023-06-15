import { useEffect, useState } from "react";
import useGraphClient from "./msGraphHelper";

const useGetMeeting = () => {
      const client = useGraphClient();
      
      const [meeting, setMeeting] = useState<any>(undefined);

      useEffect(() => {
            if (!client) return;

            client.api('/me/onlineMeetings/createOrGet').post({
                  startDateTime: '2023-06-09T16:00:00.3524945+00:00',
                  endDateTime: '2023-06-09T16:15:00.3524945+00:00',
                  subject: 'Create a meeting with customId provided',
                  externalId: '7eb8263f-d0e0-4149-bb1c-1f0476083c56',
                  participants: {
                        attendees: [
                              {
                                    identity: {
                                          user: {
                                                id: '{userId}'
                                          }
                                    },
                                    upn: '{upn}'
                              }
                        ]
                  }      
            }).then((meeting) => setMeeting(meeting));
      }, [client]);

      return {meeting}
}

export default useGetMeeting;
