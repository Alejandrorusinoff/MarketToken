export function firstUppercase(string) {
    if (string) {
        const res1 = string[0].toLocaleUpperCase()
        const res2 = string.slice(1-string.length)
        return `${res1}${res2}`
    }
}