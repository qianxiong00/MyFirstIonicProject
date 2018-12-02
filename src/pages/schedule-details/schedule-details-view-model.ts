export class ScheduleDetailsViewModel {
    tab_list: Array<{
        city_code:string,
        id:string,
        title:string,
        detail_list:{
            content:string,
            date_time:string,
            icon_name:string,
            position: {lat: number, lng: number},
            trafic: string,
            time: string
        }[]
    }>
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
            content: '東京成田空港T1S',
            date_time: '日本時間JST 12:30',
            icon_name: 'pin',
            position: {lat: 35.763807, lng: 140.386247},
            trafic: 'plane',
            time: '11時間35分'
        },
        {
            content: 'コペンハーゲン空港T3',
            date_time: '中央ヨーロッパ時間CET 16:05',
            icon_name: 'pin',
            position: {lat: 55.618048, lng: 12.650806},
            trafic: 'walk',
            time: '3時間55分'
        },
        {
            content: 'コペンハーゲン空港T3',
            date_time: '中央ヨーロッパ時間CET 20:00',
            icon_name: 'pin',
            position: {lat: 55.618048, lng: 12.650806},
            trafic: 'plane',
            time: '1時間10分'
        },
        {
            content: 'ストックホルム空港T5',
            date_time: '中央ヨーロッパ時間CET 21:10',
            icon_name: 'pin',
            position: {lat: 59.652084, lng: 17.925962},
            trafic: 'walk',
            time: ''
        },
        {
            content: 'Arlanda central (pendeltåg)駅',
            date_time: '中央ヨーロッパ時間CET 22:41',
            icon_name: 'pin',
            position: {lat: 59.650008, lng: 17.929116},
            trafic: 'train',
            time: 'pendeltåg 40 mot 45分'
        },
        {
            content: 'Årstaberg駅(på Årstabergsvägen)',
            date_time: '中央ヨーロッパ時間CET 23:26',
            icon_name: 'pin',
            position: {lat: 59.299824, lng: 18.029560},
            trafic: 'bus',
            time: 'Ersättningsbuss 22B mot Sickla 17分'
        },
        {
            content: 'Sickla Kaj駅',
            date_time: '中央ヨーロッパ時間CET 23:51',
            icon_name: 'pin',
            position: {lat: 59.302773, lng: 18.103616},
            trafic: 'walk',
            time: '5分'
        },
        {
            content: 'Biz Apartmentホテル',
            date_time: '中央ヨーロッパ時間CET 24:00',
            icon_name: 'pin',
            position: {lat: 59.301942, lng: 18.098854},
            trafic: '',
            time: ''
        }]
    },
    {
        city_code: '01',
        id: '02',
        title: '12/23',
        detail_list: [
            {
            content: 'schedule2 content',
            date_time: 'CET 14:00',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'plane',
            time: '11時間35分'
        }]
    },
    {
        city_code: '01',
        id: '03',
        title: '12/24',
        detail_list: [
            {
            content: 'schedule3 content',
            date_time: 'CET 15:00',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'plane',
            time: '11時間35分'
        }]
    },
    {
        city_code: '02',
        id: '01',
        title: '12/25',
        detail_list: [
            {
            content: 'schedule3 content',
            date_time: 'CET 15:00',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'plane',
            time: '11時間35分'
        }]
    }]
 }
}