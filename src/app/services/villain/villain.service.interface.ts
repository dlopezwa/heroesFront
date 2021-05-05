export interface VillainsETO {
    _embedded: VillainsETOEmbedded;
    _links:    VillainsETOLinks;
}

export interface VillainsETOEmbedded {
    villains: VillainETO[];
}

export interface VillainETO {
    villainName:  string;
    villainPower: string;
    id?:        number;
    _embedded?: VillainEmbedded;
    _links?:    VillainLinks;
}

export interface VillainEmbedded {
    missions: Mission[];
}

export interface Mission {
    instructions: string;
    id:           number;
}

export interface VillainLinks {
    self:     Profile;
    Villain:   MissionsClass;
    missions: MissionsClass;
}

export interface MissionsClass {
    href:      string;
    templated: boolean;
}

export interface Profile {
    href: string;
}

export interface VillainsETOLinks {
    self:    Profile;
    profile: Profile;
    search:  Profile;
}