import { Subject } from 'rxjs';

export class Popup {
    // private
    private ptitle: string;
    private isOpen: boolean;
    private pbuttons?: PopupButton[] = [];
    private event = new Subject<{event: string, data?: any}>();

    private animationClass = '';

    constructor(title?: string) {
        this.ptitle = title;
        this.isOpen = false;
    }

    get visible() {
        return this.isOpen;
    }

    get title() {
        return this.ptitle;
    }

    set title(title: string) {
        this.ptitle = title;
    }

    get animation() {
        return this.animationClass;
    }

    open() {
        this.isOpen = true;

        this.animationClass = 'bottom';
        setTimeout( x => {
            this.animationClass = '';
        });
    }

    close() {
        this.animationClass = 'bottom';
        setTimeout( x => {
            this.isOpen = false;
        }, 200);
    }

    addButton(btn: PopupButton) {
        this.pbuttons.push(btn);
    }

    get buttons() {
        return this.pbuttons;
    }

    set buttons(btns: PopupButton[]) {
        this.pbuttons = btns;
    }

    get listen() {
        return this.event;
    }

    dispatchAction(action: {event: string, data?: any}) {
        this.event.next(action);
    }
}

export interface PopupButton {
    label: string;
    action?: string;
    type?: string;
    icon?: string;
}
