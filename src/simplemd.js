export function parsePair(chars, delim, tag, className) {
  let start = -1;
  chars.forEach((c, i) => {
    if (c === delim) {
      if (start < 0) {
        start = i;
      } else {
        chars[start] = `<${tag} ${className ? 'class=' + className : ''}>`;
        chars[i] = `</${tag}>`;
        start = -1;
      }
    }
  });
  return chars;
};

export default function parse(smd) {
  let chars = smd.split('');
  chars = parsePair(chars, '*', 'em');
  chars = parsePair(chars, '_', 'span', 'underline');
  chars = parsePair(chars, '~', 'span', 'strike');
  return chars.join('');
};
