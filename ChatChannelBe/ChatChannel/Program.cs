using ChatChannel.Services.Channel;
using Microsoft.AspNetCore.Builder;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<IChannelService, ChannelService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/channels", async (IChannelService channelService) =>
{
    return await channelService.GetChannelsAsync();
})
.WithName("GetChannels");

app.MapGet("/channelUsers", async (IChannelService channelService) =>
{
    return await channelService.GetChannelUsersAsync();
})
.WithName("GetChannelUsers");

app.MapPost("/addChannelUsers", async (IChannelService channelService, UserDto user) =>
{
    await channelService.AddChannelUserAsync(user);
})
.WithName("AddChannelUsers");

app.MapPost("/removeChannelUsers", async (IChannelService channelService, UserDto user) =>
{
    await channelService.RemoveChannelUserAsync(user);
})
.WithName("RemoveChannelUsers");


app.Run();
