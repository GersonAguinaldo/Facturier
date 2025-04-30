import {HasSetItem} from '../interfaces/HasSetItem.js';

export class Storage implements HasSetItem {

    oldData: string [] = [];

    constructor(typeVal: string, htmlString: string){
        this.setItem(typeVal, htmlString)
    }

    static checkLocalStorage(): void{
        if(localStorage.getItem('invoice')===null){
            localStorage.setItem('invoice', '[]');
        }
        if(localStorage.getItem('estimate')===null){
            localStorage.setItem('estimate', '[]');
        }
        
    }
    public setItem(typeVal: string, htmlString: string) {
        let array:string | null;
        array = localStorage.getItem(typeVal);
        if(array !== null){
            this.oldData = JSON.parse(array);
            this.oldData.push(htmlString);
            localStorage.setItem(typeVal, JSON.stringify(this.oldData));
        }else {
            document.location.reload();
        }
    }
}