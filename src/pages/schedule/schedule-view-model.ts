export class ScheduleViewModel {
     items: Array<{title:string, subTitle:string, img:string}>
}

export function ScheduleInitialState():ScheduleViewModel {
  return {
        items: [
            {
              title: "Stockholm",
              subTitle: "12/22 ~ 12/24",
              img: "assets/imgs/schedule-stockholm.jpg"
            },
            {
              title: "Turku",
              subTitle: "12/25",
              img: "assets/imgs/schedule-turku.jpg"
            },
            {
              title: "Helsinki",
              subTitle: "12/26",
              img: "assets/imgs/schedule-helsinki.jpg"
            },
            {
              title: "Tromso",
              subTitle: "12/27 ~ 12/30",
              img: "assets/imgs/schedule-tromso.jpg"
            },
            {
              title: "Bergen",
              subTitle: "12/31",
              img: "assets/imgs/schedule-bergen.jpg"
            },
            {
              title: "Flam",
              subTitle: "01/01",
              img: "assets/imgs/schedule-flam.jpg"
            },
            {
              title: "Oslo",
              subTitle: "01/02",
              img: "assets/imgs/schedule-oslo.jpg"
            },
            {
              title: "Copenhagen",
              subTitle: "01/02 ~ 01/06",
              img: "assets/imgs/schedule-copenhagen.jpg"
            }
        ]
      }
}