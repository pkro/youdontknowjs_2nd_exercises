// https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/apB.md

// scheduleMeeting(..) should take a start time (in 24-hour format as a string
// "hh:mm") and a meeting duration (number of minutes). It should return true if
// the meeting falls entirely within the work day (according to the times
// specified in dayStart and dayEnd); return false if the meeting violates the
// work day bounds.

const dayStart = '07:30';
const dayEnd = '17:45';

class Meeting {
  contructor(meetingStart, meetingDuration) {
    [this.start, this.end] = Meeting.parseSchedule(
      meetingStart,
      meetingDuration
    );
  }
  validate(dayStart, dayEnd) {
    const [start, end] = Meeting.parseSchedule(dayStart, dayEnd);
    return start >= this.start && end <= this.end;
  }
  static parseSchedule(str, duration) {
    const [h, m] = str.split(':');
    const start = h * 60 + m;
    const end = start + duration;
    return [start, end];
  }
}
function scheduleMeeting(startTime, durationMinutes) {
  const meeting = new Meeting(startTime, durationMinutes);
  const res = meeting.validate(dayStart, dayEnd);
  console.log(`${startTime}, ${durationMinutes}: ${res}`);
  return res;
}

scheduleMeeting('7:00', 15); // false
scheduleMeeting('07:15', 30); // false
scheduleMeeting('7:30', 30); // true
scheduleMeeting('11:30', 60); // true
scheduleMeeting('17:00', 45); // true
scheduleMeeting('17:30', 30); // false
scheduleMeeting('18:00', 15); // false
