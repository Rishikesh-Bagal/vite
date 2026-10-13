/**
 * Based on @rollup/pluginutils/makeLegalIdentifier
 */
export function makeLegalIdentifier(str: string): string {
  let identifier = str
    .replace(/-(\w)/g, (_, letter) => letter.toUpperCase())
    .replace(/-(.)/g, (_, letter) => letter.toUpperCase())
    .replace(/^\d/, '_$&')
    .replace(/[^\w$]/g, '_')

  if (isReservedName(identifier)) {
    identifier = `_${identifier}`
  }

  return identifier
}

function isReservedName(name: string): boolean {
  return reservedNames.has(name)
}

const reservedNames = new Set([
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'debugger',
  'default',
  'delete',
  'do',
  'else',
  'export',
  'extends',
  'false',
  'finally',
  'for',
  'function',
  'if',
  'import',
  'in',
  'instanceof',
  'new',
  'null',
  'return',
  'super',
  'switch',
  'this',
  'throw',
  'true',
  'try',
  'typeof',
  'var',
  'void',
  'while',
  'with',
  'yield',
])
