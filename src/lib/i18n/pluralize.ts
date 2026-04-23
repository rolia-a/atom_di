/**
 * Russian numeral pluralisation.
 *
 * Russian has three plural forms: «один заряд», «два заряда», «пять зарядов».
 * Pass them in that exact order; the helper picks the right one for `n`.
 *
 * @example
 *   pluralizeRu(1, ["заряд", "заряда", "зарядов"]) // "заряд"
 *   pluralizeRu(2, ["заряд", "заряда", "зарядов"]) // "заряда"
 *   pluralizeRu(5, ["заряд", "заряда", "зарядов"]) // "зарядов"
 *   pluralizeRu(21, ["заряд", "заряда", "зарядов"]) // "заряд"
 */
export function pluralizeRu(
  n: number,
  forms: readonly [one: string, few: string, many: string],
): string {
  const abs = Math.abs(Math.trunc(n));
  const mod10 = abs % 10;
  const mod100 = abs % 100;

  if (mod100 >= 11 && mod100 <= 14) return forms[2];
  if (mod10 === 1) return forms[0];
  if (mod10 >= 2 && mod10 <= 4) return forms[1];
  return forms[2];
}
