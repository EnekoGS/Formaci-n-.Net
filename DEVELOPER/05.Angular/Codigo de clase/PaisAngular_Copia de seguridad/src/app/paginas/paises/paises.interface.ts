export interface IPaises {
    name:         NameClass;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    cioc?:        string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies:   Currencies;
    idd:          Idd;
    capital:      string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages:    Languages;
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms:     Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   Continent[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
}

export interface CapitalInfo {
    latlng: number[];
}

export interface Car {
    signs: string[];
    side:  Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Europe = "Europe",
    NorthAmerica = "North America",
    SouthAmerica = "South America",
}

export interface Currencies {
    EUR: Eur;
}

export interface Eur {
    name:   NameEnum;
    symbol: Symbol;
}

export enum NameEnum {
    Euro = "Euro",
}

export enum Symbol {
    Empty = "€",
}

export interface Demonyms {
    eng: Eng;
    fra: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Languages {
    deu?: string;
    fra?: Fra;
    ltz?: string;
    de?:  string;
    est?: string;
    ita?: string;
    lat?: string;
    spa?: string;
    cat?: string;
    eus?: string;
    glc?: string;
    ell?: string;
    tur?: string;
    cnr?: string;
    por?: string;
    swe?: string;
    hrv?: string;
    slv?: string;
    lit?: string;
    nld?: string;
    lav?: string;
    sqi?: string;
    srp?: string;
    fin?: string;
    eng?: string;
    gle?: string;
    mlt?: string;
    slk?: string;
}

export enum Fra {
    French = "French",
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface NameClass {
    common:     string;
    official:   string;
    nativeName: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Europe = "Europe",
}

export enum StartOfWeek {
    Monday = "monday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}
