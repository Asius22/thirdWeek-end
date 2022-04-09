import { Car, ElettricCar } from "./classi";

interface CarPrinter<T extends Car>{
    /**
     *metodo che richiama toString
     */
    stampaDettagli(car : T) : string;
}