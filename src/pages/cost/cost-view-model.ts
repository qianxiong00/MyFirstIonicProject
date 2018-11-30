export class CostViewModel {
    items: Array<{title:string, category:string, price:number}>
}

export function CostInitialState():CostViewModel {
 return {
    items: []
 }
}