export class ScheduleDetailsViewModel {
    tab_list: Array<{city_code:string, id:string, title:string, detail_list:{content:string, date_time:string}[]}>
}

export function ScheduleDetailsInitialState():ScheduleDetailsViewModel {
 return {
    tab_list: [
        {
        city_code: '01',
        id: '01',
        title: '12/22',
        detail_list: [
            {
            content: 'schedule1 content',
            date_time: 'CET 12:00'
        }]
    },
    {
        city_code: '01',
        id: '02',
        title: '12/23',
        detail_list: [
            {
            content: 'schedule2 content',
            date_time: 'CET 14:00'
        }]
    },
    {
        city_code: '01',
        id: '03',
        title: '12/24',
        detail_list: [
            {
            content: 'schedule3 content',
            date_time: 'CET 15:00'
        }]
    }]
 }
}