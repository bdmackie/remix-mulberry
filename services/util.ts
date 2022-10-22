
export function logHeaders(headers : Headers) {
    headers.forEach((value: string, key: string) => {
      console.log(`Response Header: ${key}=${value}`)
    })
}