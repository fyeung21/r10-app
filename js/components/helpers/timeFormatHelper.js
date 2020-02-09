
const timeFormatHelper = isoTime => {

    let date = new Date(isoTime),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        ampm = 'AM';

    if (hours == 12) {
        ampm = 'PM';
    } else if (hours == 0) {
        hours = 12;
    } else if (hours > 12) {
        hours -= 12;
        ampm = 'PM';
    }

    return hours + ':' + minutes + '0 ' + ampm;
}

export default timeFormatHelper