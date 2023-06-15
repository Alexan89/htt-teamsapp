using ChatChannel.Models;

namespace ChatChannel.Services.MeetingService
{
    public class MeetingService : IMeetingService
    {

        private readonly List<MeetingDto> _meetings;

        public MeetingService()
        {
            _meetings = new List<MeetingDto>();
        }

        public Task CreateMeetingAsync(MeetingDto newMeeting)
        {
            if(!_meetings.Exists(meeting => meeting.Id == newMeeting.Id))
            {
                _meetings.Add(newMeeting);
            }

            return Task.CompletedTask;
        }

        public Task DeleteMeetingAsync(string id)
        {
            _meetings.Remove(_meetings.Where(meeting => meeting.Id == id).First());

            return Task.CompletedTask;
        }

        public Task<MeetingDto?> GetMeetingAsync(string id)
        {
            var existingMeeting = _meetings.FirstOrDefault(meeting => meeting.Id == id);

            return Task.FromResult(existingMeeting);
        }
    }
}
