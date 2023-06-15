using ChatChannel.Models;

namespace ChatChannel.Services.MeetingService
{
    public interface IMeetingService
    {
        Task CreateMeetingAsync(MeetingDto newMeeting);

        Task<MeetingDto?> GetMeetingAsync(string id);

        Task DeleteMeetingAsync(string id);
    }
}
