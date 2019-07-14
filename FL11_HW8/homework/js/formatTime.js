function formatTime(value) {
  if (value > 0) {
    let time = {day : 0, hr : 0, mnt: 0};
    time.day = Math.floor(value / (60 * 24));
    time.hr = Math.floor(value % (60 * 24) / 60);
    time.mnt = Math.floor(value % (60 * 24) % 60);
    return time.day + ' day(s) ' + time.hr + ' hour(s) ' + time.mnt + ' minute(s)';
  } else {
    return 'Invalid Input Data';
  }
}

formatTime(36065);
