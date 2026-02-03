export const generatePropertyURL = (): string => {
    if (typeof window !== 'undefined') {
        return window.location.href;
    }
    return '';
}