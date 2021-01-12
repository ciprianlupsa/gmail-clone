export default function (timestamp: any): string {
  return timestamp.toDate().toLocaleString('en-GB', {
    timeZone: 'UTC',
  });
}
