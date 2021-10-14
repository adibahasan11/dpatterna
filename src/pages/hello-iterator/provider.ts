import {
    CityWeather,
    WordsCollection,
}
from "patterns/iterator/iterator"

export async function getData() {
    const collection = new WordsCollection();

    await collection.addItem(new CityWeather('dhaka'));
    await collection.addItem(new CityWeather('chittagong'));

    return collection.getItems();
}