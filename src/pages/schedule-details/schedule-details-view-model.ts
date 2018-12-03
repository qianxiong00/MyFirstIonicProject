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
            content: 'Biz Apartmentホテル',
            date_time: '中央ヨーロッパ時間CET 09:00',
            icon_name: 'pin',
            position: {lat: 59.301942, lng: 18.098854},
            trafic: 'train',
            time: ''
        },{
            content: 'ヒョートリエット（Hötorget）広場',
            date_time: '日曜日はロッピス「蚤の市」が開催',
            icon_name: 'pin',
            position: {lat: 59.334719, lng: 18.063052},
            trafic: 'train',
            time: ''
        },{
            content: '歩行者天国セルゲルガータン通り',
            date_time: 'Sergelgatan',
            icon_name: 'pin',
            position: {lat: 59.334014, lng: 18.063323},
            trafic: 'train',
            time: ''
        },{
            content: 'ガムラスタン',
            date_time: 'Gamla stan',
            icon_name: 'pin',
            position: {lat: 59.325658, lng: 18.070836},
            trafic: 'train',
            time: ''
        },{
            content: 'ノーベル博物館',
            date_time: 'Nobelmuseet 120 SEK',
            icon_name: 'pin',
            position: {lat: 59.325369, lng: 18.070857},
            trafic: 'train',
            time: ''
        },{
            content: 'モーテン・トローツィグ通り',
            date_time: 'Mårten Trotzigs gränd',
            icon_name: 'pin',
            position: {lat: 59.323003, lng: 18.072766},
            trafic: 'train',
            time: ''
        },{
            content: 'ストックホルム王宮 Kungliga slottet 160 SEK',
            date_time: '中央ヨーロッパ時間CET 13:00',
            icon_name: 'pin',
            position: {lat: 59.326898, lng: 18.071752},
            trafic: 'train',
            time: ''
        },{
            content: '大聖堂',
            date_time: 'Storkyrkan 60 SEK',
            icon_name: 'pin',
            position: {lat: 59.325782, lng: 18.070422},
            trafic: 'train',
            time: ''
        },{
            content: 'ドイツ教会',
            date_time: 'Tyska Kyrkan',
            icon_name: 'pin',
            position: {lat: 59.324147, lng: 18.071781},
            trafic: 'train',
            time: ''
        },{
            content: 'カステルホルメン島',
            date_time: 'Kastellholmen',
            icon_name: 'pin',
            position: {lat: 59.322605, lng: 18.089398},
            trafic: 'train',
            time: ''
        },{
            content: '現代美術館',
            date_time: 'Moderna Museet Free/100/150',
            icon_name: 'pin',
            position: {lat: 59.326118, lng: 18.084709},
            trafic: 'train',
            time: ''
        },{
            content: '王冠の橋',
            date_time: 'Gilded Crown on Skeppsholmsbron',
            icon_name: 'pin',
            position: {lat: 59.327341, lng: 18.079030},
            trafic: 'train',
            time: ''
        },{
            content: '国立美術館',
            date_time: 'Nationalmuseum 150 SEK',
            icon_name: 'pin',
            position: {lat: 59.328501, lng: 18.078329},
            trafic: 'train',
            time: ''
        },{
            content: 'ストックホルム市庁舎',
            date_time: 'The City Hall',
            icon_name: 'pin',
            position: {lat: 59.327483, lng: 18.054346},
            trafic: 'train',
            time: ''
        },{
            content: 'スカンセン',
            date_time: 'Skansen 125 SEK',
            icon_name: 'pin',
            position: {lat: 59.327013, lng: 18.103732},
            trafic: 'train',
            time: ''
        },{
            content: 'スカンセン・ブティーケン',
            date_time: 'SKANSENBUTIKEN',
            icon_name: 'pin',
            position: {lat: 59.324615, lng: 18.100463},
            trafic: 'train',
            time: ''
        },{
            content: 'ストックホルム・グローブ・アリーナ',
            date_time: 'Skyview 150 SEK',
            icon_name: 'pin',
            position: {lat: 59.293580, lng: 18.083550},
            trafic: 'train',
            time: ''
        },{
            content: 'Biz Apartmentホテル',
            date_time: '中央ヨーロッパ時間CET 20:00',
            icon_name: 'pin',
            position: {lat: 59.301942, lng: 18.098854},
            trafic: '',
            time: ''
        }]
    },
    {
        city_code: '01',
        id: '03',
        title: '12/24',
        detail_list: [
            {
            content: 'Biz Apartmentホテル',
            date_time: '中央ヨーロッパ時間CET 09:00',
            icon_name: 'pin',
            position: {lat: 59.301942, lng: 18.098854},
            trafic: 'train',
            time: ''
        },{
            content: 'グラニート',
            date_time: 'Granit',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'デザイン・トリエ',
            date_time: 'DesignTorget',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'オーニング＆レダ',
            date_time: 'Ordning & Reda',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'ロイヤルカナルツアー（Royal Canal Tour）',
            date_time: '中央ヨーロッパ時間CET 10:30-11:30',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'ストックホルム市立図書館',
            date_time: 'Stockholms Stadsbibliotek',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'セーデルマルム島',
            date_time: 'Södermalm',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'ドロットニングホルム宮殿',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'フェリーターミナル Stockholm Vartahamnen',
            date_time: '中央ヨーロッパ時間CET 19:30',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'boat',
            time: '11時間'
        },{
            content: 'トゥルクフェリーターミナルTurku harbor',
            date_time: '東ヨーロッパ時間EET 07:00',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: '',
            time: ''
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