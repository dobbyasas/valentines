export const PRAGUE_TZ = "Europe/Prague";

/**
 * Returns today's date in Prague as YYYY-MM-DD
 */
export function todayInPragueISO(): string {
  // en-CA gives YYYY-MM-DD format
  return new Intl.DateTimeFormat("en-CA", { timeZone: PRAGUE_TZ }).format(new Date());
}

export function isUnlocked(unlockOn: string, todayISO: string): boolean {
  // YYYY-MM-DD string comparison is safe lexicographically
  return unlockOn <= todayISO;
}
