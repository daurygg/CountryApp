import { Country } from "./country";
import { Region } from "./Region.type";

export interface CacheStore {
  byCapital: TermCountries;
  byCountries: TermCountries;
  byRegion: RegionCountries;
}

export interface TermCountries {
  term: string;
  Countries: Country[];
}


export interface RegionCountries {
  region: Region;
  Countries: Country[];
}
