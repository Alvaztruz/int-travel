import City from "./city.ts";

class TripManager {
  #cities: City[];

  constructor() {
    this.#cities = [];
  }

  addCity(city: City): City {
    this.#cities.push(city);
    return city;
  }

  getAllCities(): City[] {
    return this.#cities.slice();
  }

  findCityByName(name: string): City | null {
    return this.#cities.find((c) => c.getName() === name) || null;
  }
}

export default TripManager;
