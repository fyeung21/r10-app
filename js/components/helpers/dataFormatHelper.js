import timeFormatHelper from './timeFormatHelper'

export const formatSessionData = sessions => {
    return sessions
        .reduce((acc, curr) => {

            let formattedTime = timeFormatHelper(curr.startTime);

            const timeExists = acc.find(section => section.title === formattedTime);
            timeExists
                ? timeExists.data.push(curr)
                : acc.push({ title: formattedTime, data: [curr] });
            return acc;
        }, [])
        .sort((a, b) => a.title - b.title);
};