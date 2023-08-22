import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

console.log(dayjs.tz.guess()); // Asia/Tokyo
console.log(dayjs("2020-01-01T00:00:00Z").format()); // 2020-01-01T09:00:00+09:00
console.log(dayjs("2020-01-01T00:00:00Z").utc().format()); // 2020-01-01T00:00:00Z
console.log(dayjs("2020-01-01T00:00:00Z").tz("Asia/Tokyo").format()); // Invalid Date
console.log(dayjs().tz().format()); // Invalid Date
