export class MenuLink {
    constructor(public text?: string,
                public path?: string,
                public children?: MenuLink[]){}
}