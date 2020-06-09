export class GeneralInformation {
  readonly countryID: number
  readonly country: string
  readonly confirmed: number
  readonly recovered: number
  readonly deaths: number

  constructor(
    countryID: string = "0",
    country: string = "",
    confirmed: number = 0,
    recovered: number = 0,
    deaths: number = 0
  ) {
    this.countryID = +countryID
    this.country = country
    this.confirmed = confirmed
    this.recovered = recovered
    this.deaths = deaths
  }
}
