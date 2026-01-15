export class Destination {
  _id: string;
  country: string;
  imageUrl: string;
  budget: number;
  isVisited: boolean;

  constructor(
    _id: string,
    country: string,
    imageUrl: string,
    budget: number,
    isVisited: boolean = false
  ) {
    this._id = _id;
    this.country = country;
    this.imageUrl = imageUrl;
    this.budget = budget;
    this.isVisited = isVisited;
  }
}
