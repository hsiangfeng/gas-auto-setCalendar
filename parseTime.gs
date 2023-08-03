function parseTime(date, time) {
  Logger.log(time)
  const timeRegex = /([上下]午) (\d+):(\d+):(\d+)/;
  const match = time.match(timeRegex);

  if (!match) {
    throw new Error(`Invalid time format: ${time}`);
  }

  let hours = parseInt(match[2], 10);
  const minutes = parseInt(match[3], 10);
  const seconds = parseInt(match[4], 10);

  if (match[1] === '下午' && hours < 12) {
    hours += 12;
  }

  const parsedTime = new Date(date);
  parsedTime.setHours(hours, minutes, seconds);

  return parsedTime;
}
