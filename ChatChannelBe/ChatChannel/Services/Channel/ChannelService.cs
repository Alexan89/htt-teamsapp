using ChatChannel.Models;

namespace ChatChannel.Services.Channel
{
    public class ChannelService : IChannelService
    {
        private readonly List<ChannelDto> _channels;

        private readonly List<UserDto> _users;

        public ChannelService()
        {
            _channels= new List<ChannelDto>
            {
                new ChannelDto
                {
                    Id= "1",
                    Name= "Channel 1"
                },
                new ChannelDto
                {
                    Id= "2",
                    Name= "Channel 2"
                },
                new ChannelDto
                {
                    Id= "3",
                    Name= "Channel 3"
                }
            };

            _users = new List<UserDto>();
        }

        public Task AddChannelUserAsync(UserDto userDto)
        {
            _users.Add(userDto);

            return Task.CompletedTask;
        }

        public Task<List<ChannelDto>> GetChannelsAsync()
        {
            return Task.FromResult(_channels);
        }

        public Task<IEnumerable<UserDto>> GetChannelUsersAsync()
        {
            return Task.FromResult(_users.AsEnumerable());
        }

        public Task RemoveChannelUserAsync(UserDto userDto)
        {
            _users.RemoveAll(f => f.Id == userDto.Id);
            return Task.CompletedTask;
        }
    }
}
