import loadJSON from "utils/load-json";

export interface Iterator<T> {
    // Return the current element.
    current(): T;
 
    // Return the current element and move forward to next element.
    next(): T;
 
    // Return the key of the current element.
    key(): number;
 
    // Checks if current position is valid.
    valid(): boolean;
 
    // Rewind the Iterator to the first element.
    rewind(): void;
}
 
export interface Aggregator {
    // Retrieve an external iterator.
    getIterator(): Iterator<string>;
}
 
/**
 * Concrete Iterators implement various traversal algorithms. These classes
 * store the current traversal position at all times.
 */
 
export class WeatherDataIterator implements Iterator<string> {
    private collection: WeatherCollection;
 
    /**
     * Stores the current traversal position. An iterator may have a lot of
     * other fields for storing iteration state, especially when it is supposed
     * to work with a particular kind of collection.
     */
    private position: number = 0;
 
    /**
     * This variable indicates the traversal direction.
     */
    private reverse: boolean = false;
 
    constructor(collection: WeatherCollection, reverse: boolean = false) {
        this.collection = collection;
        this.reverse = reverse;
 
        if (reverse) {
            this.position = collection.getCount() - 1;
        }
    }
 
    public rewind() {
        this.position = this.reverse ?
            this.collection.getCount() - 1 :
            0;
    }
 
    public current(): string {
        return this.collection.getItems()[this.position];
    }
 
    public key(): number {
        return this.position;
    }
 
    public next(): string {
        const item = this.collection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    }
 
    public valid(): boolean {
        if (this.reverse) {
            return this.position >= 0;
        }
 
        return this.position < this.collection.getCount();
    }
}
 
/**
 * Concrete Collections provide one or several methods for retrieving fresh
 * iterator instances, compatible with the collection class.
 */
export class WeatherCollection implements Aggregator {
    private APP_ID: string = '919947247447c728e0406c2abce9e8b1';
    private items: string[] = [];
 
    public getItems(): string[] {
        return this.items;
    }
 
    public getCount(): number {
        return this.items.length;
    }
 
    public addItem = async(cityName: string): Promise<void> => {
        let url:string = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.APP_ID}`;
        let res = await loadJSON(url)
        
        let temp = res.main.temp - 273.15;
        let info = cityName + ': ' + temp.toLocaleString();
        this.items.push(info);
        
        console.log(cityName);
        console.log(temp);
        console.log(this.items);
    }
 
    public getIterator(): Iterator<string> {
        //console.log(this.items);
        return new WeatherDataIterator(this);
    }
 
    public getReverseIterator(): Iterator<string> {
        return new WeatherDataIterator(this, true);
    }
}
