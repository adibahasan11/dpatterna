import loadJSON from "utils/load-json";

export async function getTemperature(cityName: string) {
    const APP_ID = "919947247447c728e0406c2abce9e8b1"
    const response = await loadJSON(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APP_ID}`
    );

    return response.main.temp - 273;
}

export class CityWeather {
    cityName: string;
    temperature: number;

    constructor(cityName: string){
        this.cityName = cityName;
        this.temperature = 0;
    }

    async setTemperature() {
        this.temperature = await getTemperature(this.cityName);
    }

    getWeatherData (){
        return { 
            cityName: this.cityName,
            temperature: this.temperature,
        }
    }
}

/**
 * Iterator Design Pattern
 *
 * Intent: Lets you traverse elements of a collection without exposing its
 * underlying representation (list, stack, tree, etc.).
 */

 interface Iterator<T> {
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

interface Aggregator {
    // Retrieve an external iterator.
    getIterator(): Iterator<CityWeather>;
}

/**
 * Concrete Iterators implement various traversal algorithms. These classes
 * store the current traversal position at all times.
 */

class AlphabeticalOrderIterator implements Iterator<CityWeather> {
    private collection: WordsCollection;

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

    constructor(collection: WordsCollection, reverse: boolean = false) {
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

    public current(): CityWeather {
        return this.collection.getItems()[this.position];
    }

    public key(): number {
        return this.position;
    }

    public next(): CityWeather {
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
export class WordsCollection implements Aggregator {
    private items: CityWeather[] = [];

    public getItems(): CityWeather[] {
        return this.items;
    }

    public getCount(): number {
        return this.items.length;
    }

    public addItem(item: CityWeather): void {
        this.items.push(item);
    }

    public getIterator(): Iterator<CityWeather> {
        return new AlphabeticalOrderIterator(this);
    }

    public getReverseIterator(): Iterator<CityWeather> {
        return new AlphabeticalOrderIterator(this, true);
    }
}