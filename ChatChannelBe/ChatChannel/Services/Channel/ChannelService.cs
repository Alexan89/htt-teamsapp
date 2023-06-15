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

            _users = new List<UserDto>
            {
                new UserDto
                {
                    Id= "4",
                    CurrentChannelId= "1",
                    Name = "Alexander"
                },
                new UserDto
                {
                    Id= "5",
                    CurrentChannelId= "2",
                    Name = "Axel"
                },
                new UserDto
                {
                    Id= "6",
                    CurrentChannelId= "1",
                    Name = "Marcus"
                }
            };
        }

        public Task AddChannelUserAsync(UserDto userDto)
        {
            _users.Add(userDto);

            return Task.CompletedTask;
        }

        public Task<IEnumerable<ChannelDto>> GetChannelsAsync()
        {
            return Task.FromResult(_channels.AsEnumerable());
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
