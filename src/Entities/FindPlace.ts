export default interface FindPlaceResponse {
  findPlace: FindPlace[]
}

export interface FindPlace {
  name: string;
  place_id: string;
  adm_area1: string;
  country: string
}