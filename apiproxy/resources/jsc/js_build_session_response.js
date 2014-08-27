var schedule_response = JSON.parse(context.getVariable('schedule_response.content'));
var sessions=schedule_response.sessions;
var resp=[];
for (var i in schedule_response.sessions){
    resp.push({ title: sessions[i].post_title,
                     start_time: sessions[i].time,
                     end_time: sessions[i].end_time,
                     location: sessions[i].location
                  });
};
context.proxyResponse.content = JSON.stringify(resp);
