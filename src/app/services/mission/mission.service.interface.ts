export interface HeroesETO {
    _embedded: HeroesETOEmbedded;
    _links:    HeroesETOLinks;
}

export interface HeroesETOEmbedded {
    missions: Mission[];
}

export interface Mission {
    instructions: string;
    id:           number;
    _embedded:    MissionEmbedded;
    _links:       MissionLinks;
}

export interface MissionEmbedded {
    heroes: Hero[];
}

export interface Hero {
    firstName: string;
    lastName:  string;
    heroName:  string;
    heroPower: string;
    id:        number;
}

export interface MissionLinks {
    self:    Profile;
    mission: Heroes;
    heroes:  Heroes;
}

export interface Heroes {
    href:      string;
    templated: boolean;
}

export interface Profile {
    href: string;
}

export interface HeroesETOLinks {
    self:    Profile;
    profile: Profile;
}
