export const textTruncate = (text: string | undefined, max: number = 100) => {
  if (!text) {
    return ""
  }

  if (text.length <= max) {
    return text;
  }

  return `${text.slice(0, max)}...`;
}