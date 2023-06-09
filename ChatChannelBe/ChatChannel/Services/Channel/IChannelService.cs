namespace ChatChannel.Services.Channel
{
    public interface IChannelService
    {
        public Task<IEnumerable<ChannelDto>> GetChannelsAsync();

        public Task<IEnumerable<UserDto>> GetChannelUsersAsync();

        public Task AddChannelUserAsync(UserDto userDto);

        public Task RemoveChannelUserAsync(UserDto userDto);

    }
}
