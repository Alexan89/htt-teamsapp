using ChatChannel.Models;

namespace ChatChannel.Services.Channel
{
    public interface IChannelService
    {
        public Task<List<ChannelDto>> GetChannelsAsync();

        public Task<IEnumerable<UserDto>> GetChannelUsersAsync();

        public Task AddChannelUserAsync(UserDto userDto);

        public Task RemoveChannelUserAsync(UserDto userDto);

    }
}
