import { describe, beforeEach, test, expect } from "vitest";
import City from "../city.ts";
import TripManager from "../tripManager.ts";

describe("TripManager", () => {
  let manager: TripManager;
  beforeEach(() => {
    manager = new TripManager();
  });

  test("add a city", () => {
    const c = new City(
      "Madrid",
      "Spain",
      new Date("2023-04-01"),
      new Date("2023-04-02"),
    );
    manager.addCity(c);
    expect(manager.getAllCities().length).toBe(1);
    expect(manager.getAllCities()[0].getName()).toBe("Madrid");
  });

  test("find city by name", () => {
    manager.addCity(
      new City(
        "Lisbon",
        "Portugal",
        new Date("2023-06-01"),
        new Date("2023-06-03"),
      ),
    );
    const city = manager.findCityByName("Lisbon");
    expect(city?.getName()).toBe("Lisbon");
    expect(manager.findCityByName("Unknown")).toBeNull();
  });
});
