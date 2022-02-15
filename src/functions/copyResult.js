export function copyResult(gridImage) {
    navigator.clipboard.writeText(gridImage.join('\n'));
    return false;
}