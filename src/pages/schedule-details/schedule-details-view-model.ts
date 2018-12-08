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
            position: {lat: 59.335098, lng: 18.032656},
            trafic: 'train',
            time: ''
        },{
            content: 'デザイン・トリエ',
            date_time: 'DesignTorget',
            icon_name: 'pin',
            position: {lat: 59.334660, lng: 18.032327},
            trafic: 'train',
            time: ''
        },{
            content: 'オーニング＆レダ',
            date_time: 'Ordning & Reda',
            icon_name: 'pin',
            position: {lat: 59.317363, lng: 18.071529},
            trafic: 'train',
            time: ''
        },{
            content: 'ロイヤルカナルツアー（Royal Canal Tour）',
            date_time: '中央ヨーロッパ時間CET 10:30-11:30',
            icon_name: 'pin',
            position: {lat: 59.327858, lng: 18.058336},
            trafic: 'train',
            time: ''
        },{
            content: 'ストックホルム市立図書館',
            date_time: 'Stockholms Stadsbibliotek',
            icon_name: 'pin',
            position: {lat: 59.343408, lng: 18.054756},
            trafic: 'train',
            time: ''
        },{
            content: 'セーデルマルム島',
            date_time: 'Södermalm',
            icon_name: 'pin',
            position: {lat: 59.312672, lng: 18.060741},
            trafic: 'train',
            time: ''
        },{
            content: 'ドロットニングホルム宮殿',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 59.321700, lng: 17.886831},
            trafic: 'train',
            time: ''
        },{
            content: 'フェリーターミナル Stockholm Vartahamnen',
            date_time: '中央ヨーロッパ時間CET 19:30',
            icon_name: 'pin',
            position: {lat: 59.350109, lng: 18.107325},
            trafic: 'boat',
            time: '11時間'
        },{
            content: 'トゥルクフェリーターミナルTurku harbor',
            date_time: '東ヨーロッパ時間EET 07:00',
            icon_name: 'pin',
            position: {lat: 60.435144, lng: 22.217987},
            trafic: '',
            time: ''
        }]
    },
    {
        city_code: '02',
        id: '01',
        title: '12/25',
        detail_list: [{
            content: 'トゥルクフェリーターミナルTurku harbor',
            date_time: '東ヨーロッパ時間EET 07:00',
            icon_name: 'pin',
            position: {lat: 60.435144, lng: 22.217987},
            trafic: 'walk',
            time: '7分'
        },{
            content: 'トゥルク城Turun linna',
            date_time: '東ヨーロッパ時間EET 07:20',
            icon_name: 'pin',
            position: {lat: 60.435371, lng: 22.228699},
            trafic: 'walk',
            time: '5分(+観光15分)'
        },{
            content: 'トゥルク城1番バス乗り場Turun linna',
            date_time: '東ヨーロッパ時間EET 08:08',
            icon_name: 'pin',
            position: {lat: 60.435688, lng: 22.230116},
            trafic: 'bus',
            time: '16分'
        },{
            content: 'Turun linja-autoasemaバス乗り場',
            date_time: '東ヨーロッパ時間EET 08:24',
            icon_name: 'pin',
            position: {lat: 60.457121, lng: 22.269127},
            trafic: 'walk',
            time: '15分'
        },{
            content: 'トゥルク駅Jarnvags Station',
            date_time: '東ヨーロッパ時間EET 10:40',
            icon_name: 'pin',
            position: {lat: 60.453875, lng: 22.253018},
            trafic: 'walk',
            time: '14分(+荷物預ける15分)'
        },{
            content: '屋内マーケットTurku Kauppahalli',
            date_time: '東ヨーロッパ時間EET 09:15',
            icon_name: 'pin',
            position: {lat: 60.449901, lng: 22.265957},
            trafic: 'walk',
            time: '10分(+観光30分)'
        },{
            content: 'トゥルク大聖堂Turun Tuomiokirkko',
            date_time: '東ヨーロッパ時間EET 09:55',
            icon_name: 'pin',
            position: {lat: 60.452382, lng: 22.278157},
            trafic: 'walk',
            time: '11分(+観光30分)'
        },{
            content: 'マーケット広場Turun Kauppatori',
            date_time: '東ヨーロッパ時間EET 10:40',
            icon_name: 'pin',
            position: {lat: 60.451610, lng: 22.267135},
            trafic: 'walk',
            time: '13分(+観光30分+昼ご飯20分)'
        },{
            content: 'トゥルク駅Jarnvags Station',
            date_time: '東ヨーロッパ時間EET 11:45',
            icon_name: 'pin',
            position: {lat: 60.453875, lng: 22.253018},
            trafic: 'train',
            time: '2時間(16:25~18:23)'
        },{
            content: 'ヘルシンキ中央駅Helsingfors centralstation',
            date_time: '東ヨーロッパ時間EET 18:23',
            icon_name: 'pin',
            position: {lat: 60.171880, lng: 24.941424},
            trafic: 'walk',
            time: '18分'
        },{
            content: 'ホテルScandic Park Helsinki',
            date_time: '東ヨーロッパ時間EET 19:00',
            icon_name: 'pin',
            position: {lat: 60.179096, lng: 24.927657},
            trafic: '',
            time: ''
        }]
    },
    {
        city_code: '03',
        id: '01',
        title: '12/26',
        detail_list: [{
            content: 'ホテルScandic Park Helsinki',
            date_time: '東ヨーロッパ時間EET 09:00',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'ヘルシンキ中央駅（Helsingin rautatieasema）',
            date_time: '中央郵便局ポスティ（Posti）',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'アテネウム美術館（Ateneumin taidemuseo）',
            date_time: '15€',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: '国立現代美術館キアズマ（Kiasma - Nykytaiteen museo）',
            date_time: '14€',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'ヘルシンキ大聖堂（Tuomiokirkko）',
            date_time: '入場無料',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'セナーティ広場',
            date_time: 'Senaatintori 元老院広場',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'ハヴィス・アマンダ（Havis Amanda）の銅像',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'マーケット広場・カウパットリ',
            date_time: 'Kauppatori',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: '生神女就寝大聖堂 ウスペンスキ寺院',
            date_time: 'Uspenskin Katedraali',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'エスプラナーディ通り',
            date_time: 'Esplanadi',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'アカデミア書店',
            date_time: 'Akateeminen Kirjakauppa',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'アルテック家具店, セカンドサイクル',
            date_time: 'artek, 2nd Cycle',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'ハカニエミ・マーケットホール',
            date_time: 'Hakaniemen kauppahalli',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'テンペリアウキオ教会（Temppeliaukion kirkko）',
            date_time: '3€',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'フィンランディアホール',
            date_time: 'Finlandia-talo',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'シベリウス公園',
            date_time: 'Sibeliuksen puisto',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'カンピ 静寂の礼拝堂',
            date_time: 'Kampin kappeli',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'ナリンッカ広場',
            date_time: 'Narinkkatori',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'カンピ・ショッピングセンター',
            date_time: 'Kamppi Center',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'グッド・シェパード教会',
            date_time: 'Hyvan Paimenen kirkko',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'ヘルシンキ・ヴァンター国際空港 Helsinki Airport',
            date_time: '東ヨーロッパ時間EET 19:30',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'plane',
            time: '1時間30分'
        },{
            content: 'オスロ空港Oslo Airport',
            date_time: '中央ヨーロッパ時間CET 20:00',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'walk',
            time: ''
        },{
            content: 'Best Western Oslo Airport Hotelホテル',
            date_time: '中央ヨーロッパ時間CET 21:30',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: '',
            time: ''
        }]
    },
    {
        city_code: '04',
        id: '01',
        title: '12/27',
        detail_list: [{
            content: 'オスロ空港Oslo Airport',
            date_time: '中央ヨーロッパ時間CET 09:00',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'plane',
            time: '1時間50分'
        },{
            content: 'バルドゥフォス空軍基地Bardufoss Airport',
            date_time: '中央ヨーロッパ時間 CET 10:50',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'walk',
            time: ''
        },{
            content: 'レンタカーの受付カウンタSixt',
            date_time: '中央ヨーロッパ時間 CET 12:00',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'car',
            time: '車2時間(+レンタカー手続き30分)'
        },{
            content: 'トロムソCity Apartments',
            date_time: '中央ヨーロッパ時間 CET 14:30',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: '',
            time: ''
        }]
    },
    {
        city_code: '04',
        id: '02',
        title: '12/28',
        detail_list: [{
            content: 'Prestvannet湖',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'car',
            time: ''
        },{
            content: 'ポラリア水族館 Polaria',
            date_time: 'NOK 130',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'car',
            time: ''
        },{
            content: 'MS Polstjerna',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'car',
            time: ''
        },{
            content: 'トロムソ大聖堂 Tromsø Cathedral',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'car',
            time: ''
        },{
            content: 'Roald Amundsen Monument',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'car',
            time: ''
        },{
            content: 'Fangstmonument',
            date_time: 'Arctic Hunter',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'car',
            time: ''
        },{
            content: 'perspective Museum',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'car',
            time: ''
        },{
            content: 'Polarmuseet i Tromsø',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'car',
            time: ''
        },{
            content: 'Tromsø Bridge Tromsøbrua',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'car',
            time: ''
        },{
            content: '北極教会',
            date_time: 'Arctic Cathedral (NOK 50)',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'car',
            time: ''
        },{
            content: 'Tromsø Cable Car (Fjellheisen)',
            date_time: 'NOK 210',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: '',
            time: ''
        }]
    },
    {
        city_code: '04',
        id: '03',
        title: '12/29',
        detail_list: [{
            content: 'トロムソCity Apartments',
            date_time: '中央ヨーロッパ時間 CET 09:30',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'car',
            time: '2時間'
        },{
            content: 'レンタカーSixtの返却場所Bardufoss Airport',
            date_time: '中央ヨーロッパ時間 CET 11:30',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'walk',
            time: '(返却手続き30分)'
        },{
            content: 'Bardufoss sentrumバスStation',
            date_time: '中央ヨーロッパ時間 CET 14:50',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'bus',
            time: '2時間30分'
        },{
            content: 'Tromsdalen BruvegenバスStation',
            date_time: '中央ヨーロッパ時間 CET 17:20',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'walk',
            time: '8分'
        },{
            content: 'トロムソCity Apartment',
            date_time: '中央ヨーロッパ時間 CET 17:30',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: '',
            time: ''
        }]
    },
    {
        city_code: '04',
        id: '04',
        title: '12/30',
        detail_list: [{
            content: '市内観光',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'bus',
            time: ''
        },{
            content: 'トロムソCity Apartments',
            date_time: '中央ヨーロッパ時間 CET 17:20',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'walk',
            time: '8分'
        },{
            content: 'Tromsdalen Bruvegenバス停',
            date_time: '中央ヨーロッパ時間 CET 17:34',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'bus',
            time: '21分'
        },{
            content: 'NKL（トロムソ空港）',
            date_time: '中央ヨーロッパ時間 CET 17:55',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'walk',
            time: ''
        },{
            content: 'トロムソ空港',
            date_time: '中央ヨーロッパ時間 CET 19:55',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'plane',
            time: '2時間'
        },{
            content: 'ベルゲン空港',
            date_time: '中央ヨーロッパ時間 CET 21:55',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'walk',
            time: ''
        },{
            content: 'Bergen Lufthavn flybuss',
            date_time: '中央ヨーロッパ時間 CET 23:00',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'bus',
            time: '26分'
        },{
            content: 'Festplassenバス停',
            date_time: '中央ヨーロッパ時間 CET 23:26',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'walk',
            time: '5分'
        },{
            content: 'Basic Hotel Bergen',
            date_time: '中央ヨーロッパ時間 CET 23:32',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: '',
            time: ''
        }]
    },
    {
        city_code: '05',
        id: '01',
        title: '12/31',
        detail_list: [{
            content: 'Basic Hotel Bergen',
            date_time: '中央ヨーロッパ時間 CET 09:00',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'ベルゲン要塞',
            date_time: 'Bergenhus Fortress Museum (Free)',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: "St. Mary's Church (NOK50)",
            date_time: 'Monday - Friday 09:00 - 16:00',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'ブリッゲン博物館(Closed)',
            date_time: 'Bryggens Museum',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'シュタトラート・レームクール',
            date_time: 'Statsraad Lehmkuhl',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'ブリッゲン',
            date_time: 'Bryggen',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'Fløibanen Station',
            date_time: 'フロイエン山 Fløye(95NOK)',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'ベルゲン大聖堂',
            date_time: 'Bergen Cathedral',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'Musikkpaviljongen',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'KODE 1, KODE Kunstmuseer og komponisthjem',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: "St. John's Church",
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'ファントフト・スターヴ教会',
            date_time: 'Fantoft Stavkirke',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: '',
            time: ''
        }]
    },
    {
        city_code: '06',
        id: '01',
        title: '01/01',
        detail_list: [{
            content: 'Basic Hotel Bergenホテル',
            date_time: '中央ヨーロッパ時間CET 08:20',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'walk',
            time: '11分'
        },{
            content: 'Bergen Stasjon駅',
            date_time: '中央ヨーロッパ時間CET 08:39',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: 'NSB鉄道45号１時間14分'
        },{
            content: 'Voss Stasjon駅',
            date_time: '中央ヨーロッパ時間CET 09:53',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'walk',
            time: ''
        },{
            content: 'Voss Stasjon駅',
            date_time: '中央ヨーロッパ時間CET 10:35',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'bus',
            time: 'Nettbussバス450号48分'
        },{
            content: 'Gudvangen ferjekai駅',
            date_time: '中央ヨーロッパ時間CET 11:23',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'walk',
            time: ''
        },{
            content: 'Gudvangen',
            date_time: '中央ヨーロッパ時間CET 12:00',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'boat',
            time: '2時間'
        },{
            content: 'Flam',
            date_time: '中央ヨーロッパ時間CET 14:00',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'walk',
            time: '市内観光'
        },{
            content: 'Flam Station',
            date_time: '中央ヨーロッパ時間CET 16:50',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: 'NSB鉄道42号50分'
        },{
            content: 'Myrdal Station',
            date_time: '中央ヨーロッパ時間CET 17:40',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: 'NSB鉄道41号3時間59分'
        },{
            content: 'Drammen stasjon',
            date_time: '中央ヨーロッパ時間CET 21:52',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: 'Layover 5分'
        },{
            content: 'Drammen stasjon',
            date_time: '中央ヨーロッパ時間CET 21:57',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: 'NSB鉄道R10号34分'
        },{
            content: 'Oslo S',
            date_time: '中央ヨーロッパ時間CET 22:27',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'walk',
            time: '4分'
        },{
            content: 'Jernbanetorgetバス停',
            date_time: '中央ヨーロッパ時間CET 22:44',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'bus',
            time: '11号6分'
        },{
            content: 'Holbergs plassバス停',
            date_time: '中央ヨーロッパ時間CET 22:50',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'walk',
            time: '1分'
        },{
            content: 'Scandic Holbergホテル',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: '',
            time: ''
        }]
    },
    {
        city_code: '07',
        id: '01',
        title: '01/02',
        detail_list: [{
            content: 'Scandic Holbergホテル',
            date_time: '中央ヨーロッパ時間CET 09:00',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'オスロ市庁舎',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'Karl Johans gate',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'オスロ大聖堂',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'Nobel Peace Center',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'アーケシュフース城',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'オスロ・オペラハウス',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'フラム号博物館',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'ヴィーゲラン彫刻公園',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'Munchmuseet',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'Mathallen Oslo',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'オスロ空港Oslo Airport',
            date_time: '中央ヨーロッパ時間CET 17:15',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'plane',
            time: '1時間15分'
        },{
            content: 'コペンハーゲン空港Copenhagen Airport',
            date_time: '中央ヨーロッパ時間CET 18:25',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'walk',
            time: ''
        },{
            content: 'CPH Lufthavn',
            date_time: '中央ヨーロッパ時間CET 20:03',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: 'DSB029鉄道13分'
        },{
            content: 'Kobenhavn H',
            date_time: '中央ヨーロッパ時間CET 20:16',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'walk',
            time: ''
        },{
            content: 'First Hotel Mayfair',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: '',
            time: ''
        }]
    },
    {
        city_code: '08',
        id: '01',
        title: '01/03',
        detail_list: [{
            content: '市内観光',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: '',
            time: ''
        }]
    },
    {
        city_code: '08',
        id: '02',
        title: '01/04',
        detail_list: [{
            content: '市内観光',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: '',
            time: ''
        }]
    },
    {
        city_code: '08',
        id: '03',
        title: '01/05',
        detail_list: [{
            content: '市内観光',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: '',
            time: ''
        }]
    },
    {
        city_code: '08',
        id: '04',
        title: '01/06',
        detail_list: [{
            content: '市内観光',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: ''
        },{
            content: 'First Hotel Mayfair',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'walk',
            time: ''
        },{
            content: 'Kobenhavn H',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'train',
            time: 'DSB029鉄道13分'
        },{
            content: 'CPH Lufthavn',
            date_time: '中央ヨーロッパ時間CET 13:00',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'walk',
            time: ''
        },{
            content: 'コペンハーゲン空港Copenhagen Airport',
            date_time: '',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: 'plane',
            time: '10時間55分'
        },{
            content: '東京成田空港',
            date_time: '日本時間JST 10:40',
            icon_name: 'pin',
            position: {lat: 20, lng: 20},
            trafic: '',
            time: ''
        }]
    }]
 }
}