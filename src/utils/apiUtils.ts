const axios = require(`axios`)

const API_URL = process.env.VUE_APP_API_URL


interface UrlArgs {
  [Key: string]: string | number;
}

const constructUrl = (endpoint: string, args: UrlArgs): string => {
  const url = new URL(endpoint, API_URL)
  Object.entries(args).forEach(value => {
    url.searchParams.set(value[0], value[1].toString())
  })
  return url.toString()
}

export const get = async (endpoint: string, args: UrlArgs = {}): Promise<object> => {
  const url = constructUrl(endpoint, args)
  const data = await axios.get(url)
  console.log(`Querying ${url}`)
  return data['data']
}

export const enum SortOrder {
  ASC = "asc", DESC = "desc"
}
