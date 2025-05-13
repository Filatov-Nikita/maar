export function isPhoneTest(str?: string): boolean {
  if(!str) return true;
  return /^\+7\s\(9[0-9]{2}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(str);
}
