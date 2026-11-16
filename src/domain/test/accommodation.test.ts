import { describe, beforeEach, test } from "vitest";
import Accommodation from "../accommodation.ts";

describe("Accommodation", () => {
  let accommodation: Accommodation;
  beforeEach(() => {
    accommodation = new Accommodation();
    void accommodation;
  });

  describe("Accommodation name", () => {
    test("should set name correctly", () => {});
    // TODO: agregar más tests para el nombre
  });

  describe("Accommodation cost", () => {
    test.todo("agregar tests para el costo");
  });
});
