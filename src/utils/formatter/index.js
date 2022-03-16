export const onlyNumbers = (text = '') => {
  try {
    return text.replace(/[^0-9]/g, '')
  } catch (error) {
    return text
  }
}

export const formatPhone = (phone = '') => {
  try {
    const hasDDI = phone[0] === '+'
    const formattedPhone = onlyNumbers(phone).substring(
      hasDDI ? 2 : 0,
      hasDDI ? 13 : 11
    )

    let regex = /^(\d{2})(\d{4})(\d)/g
    let format = '($1) $2-$3'

    if (formattedPhone.length === 11) {
      regex = /^(\d{2})(\d)(\d{4})(\d)/g
      format = '($1) $2 $3-$4'
    }

    return formattedPhone.replace(regex, format)
  } catch (error) {
    return phone
  }
}

export const romanize = (num = '') => {
  if (isNaN(num)) return NaN

  let i = 3
  let roman = ''
  const digits = String(+num).split('')
  const key = [
    '',
    'C',
    'CC',
    'CCC',
    'CD',
    'D',
    'DC',
    'DCC',
    'DCCC',
    'CM',
    '',
    'X',
    'XX',
    'XXX',
    'XL',
    'L',
    'LX',
    'LXX',
    'LXXX',
    'XC',
    '',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX'
  ]

  while (i--) roman = (key[+digits.pop() + i * 10] || '') + roman
  return Array(+digits.join('') + 1).join('M') + roman
}
