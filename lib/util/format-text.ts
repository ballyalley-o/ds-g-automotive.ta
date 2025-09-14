type FormatTextType = 'uppercase' | 'lowercase' | 'capitalize'

export const formatText = (text: string, type: FormatTextType): string => {
   switch (type) {
        case 'uppercase':
            return text.toUpperCase()
        case 'lowercase':
            return text.toLowerCase()
        case 'capitalize':
            return text.toLowerCase().split(" ").map(_word => _word.charAt(0).toUpperCase() + _word.slice(1)).join(" ")
        default:
            return text
   }
}