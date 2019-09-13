export class Drawer {
    private isClosed: boolean;
    private isHidden: boolean;

    constructor() {
        this.isClosed = true;
        this.isHidden = true;
    }

    open() {
        this.isHidden = false;
        setTimeout( x => {
            this.isClosed = false;
        });
    }

    close() {
        this.isClosed = true;
        setTimeout( x => {
            this.isHidden = true;
        }, 250);
    }

    get closed() {
        return this.isClosed;
    }

    get hidden() {
        return this.isHidden;
    }
}
