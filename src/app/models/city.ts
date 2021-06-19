import { Photo } from "./photo";

export class City {
  // this is a model for city
  id: number;
  name: string;
  description: string;
  userid: number;
  photos: Photo[];
}
