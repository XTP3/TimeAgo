function timeAgo(timestamp) {
  const intervals = [
    { label: 'year',   seconds: 31536000 },
    { label: 'month',  seconds: 2592000 },
    { label: 'day',    seconds: 86400 },
    { label: 'hour',   seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 }
  ];

  const secondsAgo = Math.floor((new Date() - timestamp) / 1000);

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    const intervalCount = Math.floor(secondsAgo / interval.seconds);

    if (intervalCount >= 1) {
      return `${intervalCount} ${interval.label}${intervalCount > 1 ? 's' : ''} ago`;
    }
  }

  return 'just now';
}
