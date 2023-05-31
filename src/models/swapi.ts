/*https://app.quicktype.io/ */

export interface PeopleData {
  count: number;
  next: string;
  previous: null | string;
  results: Person[];
}

export interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: Gender;
  homeworld: string | Planet;
  films: string[];
  species: string[];
  vehicles: string[] | Vehicle[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}

export enum Gender {
  Female = "female",
  Male = "male",
  NA = "n/a",
}

export interface Vehicle {
  name:                   string;
  model:                  string;
  manufacturer:           string;
  cost_in_credits:        string;
  length:                 string;
  max_atmosphering_speed: string;
  crew:                   string;
  passengers:             string;
  cargo_capacity:         string;
  consumables:            string;
  vehicle_class:          string;
  pilots:                 string[];
  films:                  string[];
  created:                Date;
  edited:                 Date;
  url:                    string;
}

export interface Planet {
  name:            string;
  rotation_period: string;
  orbital_period:  string;
  diameter:        string;
  climate:         string;
  gravity:         string;
  terrain:         string;
  surface_water:   string;
  population:      string;
  residents:       string[];
  films:           string[];
  created:         Date;
  edited:          Date;
  url:             string;
}
