declare const __DEV__: boolean;
declare module "*.css" {
    const content: string;
    export default content;
}

interface Window {
    mk_wins: any,
    parseUrl,
    addButton
}