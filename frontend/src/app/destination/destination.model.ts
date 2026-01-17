// frontend/src/app/destination/destination.model.ts
export class Destination {
  _id: string;
  country: string;
  imageUrl: string;
  budget: number;
  isVisited: boolean;
  cities: string[];

  constructor(
    _id: string,
    country: string,
    imageUrl: string,
    budget: number,
    cities: string[] = [],
    isVisited: boolean = false,
  ) {
    this._id = _id;
    this.country = country;
    this.imageUrl = imageUrl;
    this.budget = budget;
    this.cities = cities; //
    this.isVisited = isVisited;
  }
}
