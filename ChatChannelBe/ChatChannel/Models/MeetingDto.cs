namespace ChatChannel.Models
{
    public class MeetingDto
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ChannelId { get; set; }
        public string ChannelName { get; set; }
        public string JoinUrl { get; set; }
    }
}
