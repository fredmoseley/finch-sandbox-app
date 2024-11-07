export function setLocalStorage(key: string, value: string): void {
  localStorage.setItem(key, value)
}

export function getLocalStorage(key: string): boolean {
  return localStorage.getItem(key) === 'true'
}
