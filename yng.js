function YNG()
{
	var _pic = $("#pic").attr("src");
	var i = Math.floor(Math.random()*2);
	var pics = [["drums.gif", "programming.gif", "partytiem.jpg"], ["barney.gif", "fff.gif", "simps.gif", "tonninseteli.jpg"]];
	var result = "No";
	var pic = pics[i][Math.floor(Math.random()*pics[i].length)];
	while (_pic == pic)
		pic = pics[i][Math.floor(Math.random()*pics[i].length)];

	if (i)
		result = "Yes";
	
	$("#result").html(result);
	$("#pic").attr("src", pic);
}

$(function ()
{
	$("#YNG").bind('click', function (event) { YNG(); });
});