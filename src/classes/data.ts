export class DataPoint {
  readonly date: Date = new Date(Date.now())
  readonly jump: number = 0

  constructor(date: string, jump: number) {
    this.date = new Date(date)
    this.jump = jump
  }
}

export default class Data {
  readonly country: string | null = null
  readonly data: DataPoint[] = []
  readonly lat: number = 0
  readonly long: number = 0
  readonly state: string | null = null
  readonly total: number = 0

  constructor(json: any) {
    this.country = json.country
    this.data = json.data.map((record: any) => new DataPoint(record.date, record.value))
    this.lat = json.lat
    this.long = json.long
    this.state = json.state
    this.total = json.total
  }
}
