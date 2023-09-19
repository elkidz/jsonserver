// Insert HTML
$('#content_value .vis tbody tr:nth-child(8)')
  .after('<tr><td colspan="2">Cancel snipe target:</td><td><input id="snipe_target"  style="width: 90%"/></td></tr>')
  .after('<tr><td colspan="2">Cancel when "arrival in":</td><td id="snipe_arrival"></td></tr>');

function parseTime(time) {
  var split = time.split(':');
  var time = parseInt(split[0]) * 60 * 60 + parseInt(split[1]) * 60 + parseInt(split[2]);
  return time;
}

// Retrieve variables
var dur_t = $('#content_value .vis tbody tr:nth-child(6) td:nth-child(2)').text();
var duration = parseTime(dur_t);

var end_t = $('#content_value .vis tbody tr:nth-child(7) td:nth-child(2)').text().split(' ');
end_t = end_t[end_t.length - 1];
var end = parseTime(end_t);

// Register calculator
$('#snipe_target').change(_ => {
  var targ_t = $('#snipe_target').val();
  var target = parseTime(targ_t);
  // I am adding an incorrect 1 here - it seems that the walk timer is rounded to ceil?
  var cancel = (duration - target + end) / 2 + 1;
  var minutes = Math.floor(cancel / 60);
  var seconds = cancel - minutes * 60;
  $('#snipe_arrival').text(`0:${minutes}:${seconds}`);
});
