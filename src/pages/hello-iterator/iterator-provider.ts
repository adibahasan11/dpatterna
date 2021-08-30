import{
    WeatherCollection,

}from "../../patterns/iterator/weather-iterator"

const collection = new WeatherCollection();

export async function getData() {
   collection.addItem("dhaka");
   collection.addItem("rajshahi");
   collection.addItem("sylhet");
   collection.addItem("chittagong");
   collection.addItem("khulna");
   collection.addItem("rangpur");

   return collection.getIterator();
  }

