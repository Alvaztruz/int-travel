class Accommodation {
  #name!: string;
  #cost!: number;

constructor(
    name: unknown,
    cost: unknown,
  ) {
    this.setName(name);
    this.setCost(cost);
  }

setName(name:unknown): void{
  if (typeof name !== "string") {
    throw new Error("name must be a string");
    }
  if(name.trim()===""){
    throw new Error("name must not be void")
  }
  this.#name = name.trim();
}
getName(){
  return this.#name;
}
setCost(cost: unknown): void{
  
  if (typeof cost !== "number") {
    throw new Error("cost must be a number");
    }//creo que esta solo number pero no recuerdo si hay otro tipo que tambien sea un nro en ts
  if(cost < 0){
    throw new Error("cost must not be less than 0")
  }
  this.#cost = cost;
}

getCost(){
  return this.#cost;
}


}
export default Accommodation;

