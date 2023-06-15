import useGraphClient from "./msGraphHelper";

const useGetMeeting = () => {
      const client = useGraphClient();

      const createOrGet = (externalId: string): Promise<any> => {
            if (!client) return Promise.reject("No access token provided");
            return client.api('/me/onlineMeetings/createOrGet').post(
            {
                  startDateTime: '2023-06-09T16:00:00.3524945+00:00',
                  endDateTime: '2023-06-09T16:15:00.3524945+00:00',
                  subject: 'Create a meeting with customId provided',
                  externalId: externalId,    
            }
            ).then((meeting) => { return meeting });
      };

      return {createOrGet};
}

export default useGetMeeting;
