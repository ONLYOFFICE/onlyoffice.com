export interface IHero {
    heading: string,
    text: string,
    image: { url: string; };
    btn: { href: string; target: "_blank" | "_self"; }
}