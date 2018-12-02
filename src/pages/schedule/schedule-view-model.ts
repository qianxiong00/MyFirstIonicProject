export class ScheduleViewModel {
     items: Array<{id:string, title:string, subTitle:string, img:string, color:string}>
}

export function ScheduleInitialState():ScheduleViewModel {
  return {
        items: [
            {
              id: "01",
              title: "Stockholm",
              subTitle: "12/22 ~ 12/24",
              img: "assets/imgs/schedule-stockholm1.png",
              color:"#ffffff"
            },
            {
              id: "02",
              title: "Turku",
              subTitle: "12/25",
              img: "assets/imgs/schedule-turku1.png",
              color:"#ff8080"
            },
            {
              id: "03",
              title: "Helsinki",
              subTitle: "12/26",
              img: "assets/imgs/schedule-helsinki1.png",
              color:"#e2ffa0"
            },
            {
              id: "04",
              title: "Tromso",
              subTitle: "12/27 ~ 12/30",
              img: "assets/imgs/schedule-tromso1.png",
              color:"#f9b7f3"
            },
            {
              id: "05",
              title: "Bergen",
              subTitle: "12/31",
              img: "assets/imgs/schedule-bergen1.png",
              color:"#1c15f1"
            },
            {
              id: "06",
              title: "Flam",
              subTitle: "01/01",
              img: "assets/imgs/schedule-flam1.png",
              color:"#ffffff"
            },
            {
              id: "07",
              title: "Oslo",
              subTitle: "01/02",
              img: "assets/imgs/schedule-oslo1.png",
              color:"#bd00b4"
            },
            {
              id: "08",
              title: "Copenhagen",
              subTitle: "01/02 ~ 01/06",
              img: "assets/imgs/schedule-copenhagen1.png",
              color:"#e9fbdf"
            }
        ]
      }
}