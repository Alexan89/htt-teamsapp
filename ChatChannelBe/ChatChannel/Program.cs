using ChatChannel.Models;
using ChatChannel.Services.Channel;
using ChatChannel.Services.MeetingService;
using Microsoft.AspNetCore.Builder;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<IChannelService, ChannelService>();
builder.Services.AddSingleton<IMeetingService, MeetingService>();
builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(opt =>
{
    opt.AllowAnyHeader();
    opt.AllowAnyOrigin();
});

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

app.MapPost("/addChannelUser", async (IChannelService channelService, UserDto user) =>
{
    await channelService.AddChannelUserAsync(user);
})
.WithName("AddChannelUser");

app.MapPost("/removeChannelUser", async (IChannelService channelService, UserDto user) =>
{
    await channelService.RemoveChannelUserAsync(user);
})
.WithName("RemoveChannelUser");

// Meeting endpoints
app.MapPost("/meeting/create", async (IMeetingService meetingService, MeetingDto createMeetingRequest) =>
{
    await meetingService.CreateMeetingAsync(createMeetingRequest);
})
.WithName("CreateMeeting");

app.MapGet("/meeting/get", async (IMeetingService meetingService, string meetingId) =>
{
    var response = await meetingService.GetMeetingAsync(meetingId);

    return response;
})
.WithName("GetMeeting");

app.MapPost("/meeting/delete", async (IMeetingService meetingService, string meetingId) =>
{
    await meetingService.DeleteMeetingAsync(meetingId);
})
.WithName("DeleteMeeting");

app.Run();
