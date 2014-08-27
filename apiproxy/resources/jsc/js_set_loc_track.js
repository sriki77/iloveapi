var locs_tracks= { "Festival Pavilion": 13, "Herbst Pavilion":14,
"API Best Practices":10,"Big Data and APIs":9,"Keynotes":12,"Product Track":11, "Digital Transformation Strategy": 4};

var loc=decodeURIComponent(context.getVariable('location'));
var track=decodeURIComponent(context.getVariable('track'));

var data_loc=locs_tracks[loc];
var data_track=locs_tracks[track];

print("Data Loc: "+ data_loc);

if(data_loc!==undefined){
    context.setVariable('data-location',data_loc);
}
if(data_track!==undefined){
    context.setVariable('data-track',data_track);
}
