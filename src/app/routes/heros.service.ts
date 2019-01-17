import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HerosService {

  constructor(){}

  heros = [
    {
"id": 620,
"name": "Spider-Man",
"slug": "620-spider-man",
"powerstats": {
"intelligence": 90,
"strength": 55,
"speed": 67,
"durability": 75,
"power": 74,
"combat": 85
},
"appearance": {
"gender": "Male",
"race": "Human",
"height": [
"5'10",
"178 cm"
],
"weight": [
"165 lb",
"74 kg"
],
"eyeColor": "Hazel",
"hairColor": "Brown"
},
"biography": {
"fullName": "Peter Parker",
"alterEgos": "No alter egos found.",
"aliases": [
"Spiderman",
"Bag-Man",
"Black Marvel",
"Captain Universe",
"Dusk",
"Green Hood",
"Hornet",
"Mad Dog 336",
"Peter Palmer",
"Prodigy",
"Ricochet",
"Scarlet Spider",
"Spider-Boy",
"Spider-Hulk",
"Spider-Morphosis"
],
"placeOfBirth": "New York, New York",
"firstAppearance": "Amazing Fantasy #15",
"publisher": "Marvel Comics",
"alignment": "good"
},
"work": {
"occupation": "Freelance photographer, teacher",
"base": "New York, New York"
},
"connections": {
"groupAffiliation": "Member of the Avengers, formerly member of Outlaws, alternate Fantastic Four",
"relatives": "Richard Parker (father, deceased), Mary Parker(mother, deceased), Benjamin Parker (uncle, deceased), May Parker (aunt), Mary Jane Watson-Parker (wife), May Parker (daughter, allegedly deceased)"
},
"images": {
"xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/620-spider-man.jpg",
"sm": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/620-spider-man.jpg",
"md": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/620-spider-man.jpg",
"lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/620-spider-man.jpg"
}
},
    {
"id": 659,
"name": "Thor",
"slug": "659-thor",
"powerstats": {
"intelligence": 69,
"strength": 100,
"speed": 83,
"durability": 100,
"power": 100,
"combat": 100
},
"appearance": {
"gender": "Male",
"race": "Asgardian",
"height": [
"6'6",
"198 cm"
],
"weight": [
"640 lb",
"288 kg"
],
"eyeColor": "Blue",
"hairColor": "Blond"
},
"biography": {
"fullName": "Thor Odinson",
"alterEgos": "Rune King Thor",
"aliases": [
"Donald Blake",
"Sigurd Jarlson",
"Jake Olsen",
"Donar the Mighty"
],
"placeOfBirth": "Asgard",
"firstAppearance": "Journey into Mystery #83 (August, 1962)",
"publisher": "Rune King Thor",
"alignment": "good"
},
"work": {
"occupation": "King of Asgard; formerly EMS Technician; Physician",
"base": "New York, New York"
},
"connections": {
"groupAffiliation": "Avengers",
"relatives": "Odin (father), Gaea (mother), Frigga (step-mother), Loki (step-brother), Vidar (half-brother), Buri (paternal great-grandfather), Bolthorn (maternal great grandfather), Bor (grandfather), Bestla (grandmother), Vili (uncle), Ve (uncle), Sigyn (former sister-in-law), Hela (alleged niece), Jormungand (alleged nephew), Fernis Wolf (alleged nephew)"
},
"images": {
"xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/659-thor.jpg",
"sm": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/659-thor.jpg",
"md": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/659-thor.jpg",
"lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/659-thor.jpg"
}
},
    {
"id": 517,
"name": "Phoenix",
"slug": "517-phoenix",
"powerstats": {
"intelligence": 100,
"strength": 100,
"speed": 83,
"durability": 100,
"power": 100,
"combat": 80
},
"appearance": {
"gender": "Female",
"race": "Mutant",
"height": [
"5'6",
"168 cm"
],
"weight": [
"115 lb",
"52 kg"
],
"eyeColor": "Green",
"hairColor": "Red"
},
"biography": {
"fullName": "Jean Grey",
"alterEgos": "Jean Grey, White Phoenix of The Crown",
"aliases": [
"Redd Dayspring",
"Marvel Girl"
],
"placeOfBirth": "-",
"firstAppearance": "X-Men #1 (September, 1963)",
"publisher": "Jean Grey",
"alignment": "good"
},
"work": {
"occupation": "Adventurer",
"base": "Xavier Institute of Higher Learning, Westchester County, New York"
},
"connections": {
"groupAffiliation": "Formerly X-Men (founding member); Clan Rebellion, Muir Island X-Men; X-Factor/X-Terminators (founding member); Brides of Set",
"relatives": "Rachel Summers (daughter from an alternate universe), X-Man (son from an alternate universe), Cyclops (ex-husband), Havok (former brother-in-law), Corsair (former father-in-law), Madelyne Pryor (clone), Cable (adoptive/biological son), Stryfe (cloned biological son), Genesis (grandson)"
},
"images": {
"xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/517-phoenix.jpg",
"sm": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/517-phoenix.jpg",
"md": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/517-phoenix.jpg",
"lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/517-phoenix.jpg"
}
},
    {
"id": 332,
"name": "Hulk",
"slug": "332-hulk",
"powerstats": {
"intelligence": 88,
"strength": 100,
"speed": 63,
"durability": 100,
"power": 98,
"combat": 85
},
"appearance": {
"gender": "Male",
"race": "Human / Radiation",
"height": [
"8'0",
"244 cm"
],
"weight": [
"1400 lb",
"630 kg"
],
"eyeColor": "Green",
"hairColor": "Green"
},
"biography": {
"fullName": "Bruce Banner",
"alterEgos": "No alter egos found.",
"aliases": [
"Annihilator",
"Captain Universe",
"Joe Fixit",
"Mr. Fixit",
"Mechano",
"Professor",
"Jade Jaws",
"Golly Green Giant"
],
"placeOfBirth": "Dayton, Ohio",
"firstAppearance": "Incredible Hulk #1 (May, 1962)",
"publisher": "Marvel Comics",
"alignment": "good"
},
"work": {
"occupation": "Nuclear physicist, Agent of S.H.I.E.L.D.",
"base": "(Banner) Hulkbuster Base, New Mexico, (Hulk) mobile, but prefers New Mexico"
},
"connections": {
"groupAffiliation": "Defenders, former leader of the new Hulkbusters, member of the Avengers, Pantheon, Titans Three, the Order, Hulkbusters of Counter-Earth-Franklin, alternate Fantastic Four",
"relatives": "Betty Ross Talbot Banner (wife), Brian Banner (father, apparently deceased), Rebecca Banner (mother, deceased), Morris Walters (uncle), Elaine Banner Walters (aunt, deceased), Jennifer Walters (She-Hulk, cousin), Thaddeus E. 'Thunderbolt' Ross (father"
},
"images": {
"xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/332-hulk.jpg",
"sm": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/332-hulk.jpg",
"md": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/332-hulk.jpg",
"lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/332-hulk.jpg"
}
},
    {
"id": 70,
"name": "Batman",
"slug": "70-batman",
"powerstats": {
"intelligence": 100,
"strength": 26,
"speed": 27,
"durability": 50,
"power": 47,
"combat": 100
},
"appearance": {
"gender": "Male",
"race": "Human",
"height": [
"6'2",
"188 cm"
],
"weight": [
"210 lb",
"95 kg"
],
"eyeColor": "blue",
"hairColor": "black"
},
"biography": {
"fullName": "Bruce Wayne",
"alterEgos": "No alter egos found.",
"aliases": [
"Insider",
"Matches Malone"
],
"placeOfBirth": "Crest Hill, Bristol Township; Gotham County",
"firstAppearance": "Detective Comics #27",
"publisher": "DC Comics",
"alignment": "good"
},
"work": {
"occupation": "Businessman",
"base": "Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower"
},
"connections": {
"groupAffiliation": "Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps",
"relatives": "Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family"
},
"images": {
"xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/70-batman.jpg",
"sm": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/70-batman.jpg",
"md": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/70-batman.jpg",
"lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/70-batman.jpg"
}
},
    {
"id": 623,
"name": "Spider-Woman",
"slug": "623-spider-woman",
"powerstats": {
"intelligence": 56,
"strength": 42,
"speed": 42,
"durability": 60,
"power": 68,
"combat": 70
},
"appearance": {
"gender": "Female",
"race": "Human",
"height": [
"5'10",
"178 cm"
],
"weight": [
"130 lb",
"59 kg"
],
"eyeColor": "Green",
"hairColor": "Black"
},
"biography": {
"fullName": "Jessica Drew",
"alterEgos": "No alter egos found.",
"aliases": [
"Arachne",
"Ariadne Hyde",
"Dark Angel",
"Dark Angel of San Francisco"
],
"placeOfBirth": "London, England",
"firstAppearance": "Marvel Spotlight #32 (February, 1977)",
"publisher": "Marvel Comics",
"alignment": "good"
},
"work": {
"occupation": "Form agent of HYDRA, former bounty hunter, private investigator, adventurer",
"base": "-"
},
"connections": {
"groupAffiliation": "Former agent of HYDRA",
"relatives": "Jonathan (father, deceased), Merriem (mother, deceased)"
},
"images": {
"xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/623-spider-woman.jpg",
"sm": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/623-spider-woman.jpg",
"md": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/623-spider-woman.jpg",
"lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/623-spider-woman.jpg"
}
},
    {
"id": 687,
"name": "Venom",
"slug": "687-venom",
"powerstats": {
"intelligence": 75,
"strength": 57,
"speed": 65,
"durability": 84,
"power": 86,
"combat": 84
},
"appearance": {
"gender": "Male",
"race": "Symbiote",
"height": [
"6'3",
"191 cm"
],
"weight": [
"260 lb",
"117 kg"
],
"eyeColor": "Blue",
"hairColor": "Strawberry Blond"
},
"biography": {
"fullName": "Eddie Brock",
"alterEgos": "Anti-Venom, Toxin",
"aliases": [
"-"
],
"placeOfBirth": "New York, New York",
"firstAppearance": "(as alien costume) Secret Wars #8, (behind the scenes) Web of Spider-Man #18, (actual appearance) Amazing Spider-Man #300",
"publisher": "Anti-Venom",
"alignment": "bad"
},
"work": {
"occupation": "Vigilante; former journalist for the Daily Globe, government operative",
"base": "New York, New York"
},
"connections": {
"groupAffiliation": "Sinister Six (formerly)",
"relatives": "Eddie Brock: Carl Brock (father), Jamie Brock (mother), Anne Weying (She-Venom, ex wife, deceased); Venom symbiote: Carnage (bonded to Cletus Kasidy, 1st generation offspring), five forced offspring - one independant (bonded to Donna, last name unrevealed, 1st generation offspring), four forming a composite symbiote (Hybrid (bonded to Scott Washington, 1st generation offspring), Toxin (bonded to Patrick Mulligan, 2nd generation offspring)"
},
"images": {
"xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/687-venom.jpg",
"sm": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/687-venom.jpg",
"md": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/687-venom.jpg",
"lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/687-venom.jpg"
}
},
    {
"id": 717,
"name": "Wolverine",
"slug": "717-wolverine",
"powerstats": {
"intelligence": 63,
"strength": 32,
"speed": 50,
"durability": 100,
"power": 89,
"combat": 100
},
"appearance": {
"gender": "Male",
"race": "Mutant",
"height": [
"5'3",
"160 cm"
],
"weight": [
"300 lb",
"135 kg"
],
"eyeColor": "Blue",
"hairColor": "Black"
},
"biography": {
"fullName": "Logan",
"alterEgos": "No alter egos found.",
"aliases": [
"Weapon X",
"Weapon Ten",
"Death",
"Mutate 9601",
"Jim Logan",
"Emilio Garra",
"Weapon Chi",
"Experiment X",
"Agent Ten",
"Peter Richards",
"Mai kethLogan",
"Mr. Patch"
],
"placeOfBirth": "Alberta, Canada",
"firstAppearance": "Incredible Hulk Vol. 2 #180",
"publisher": "Marvel Comics",
"alignment": "good"
},
"work": {
"occupation": "Adventurer, instructor, former bartender, bouncer, spy, government operative, mercenary, soldier, sailor, miner",
"base": "Xavier Institute, Salem Center, Westchester County, New York; Avengers Tower, New York City"
},
"connections": {
"groupAffiliation": "X-Men, formerly Horsemen of Apocalypse, Fantastic Four, Secret Defenders, Clan Yashida, Department H, Alpha Flight, Department K, Team X, Team_Weapon_X, Devil's Brigade, Canadian Army",
"relatives": "John Howlett Sr. (father, deceased), Elizabeth Howlett (mother, deceased), John Howlett Jr. (brother, allegedly deceased), Viper (ex-wife), Amiko (foster daughter), Erista (son), X-23 (clone)"
},
"images": {
"xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/717-wolverine.jpg",
"sm": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/717-wolverine.jpg",
"md": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/717-wolverine.jpg",
"lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/717-wolverine.jpg"
}
},
    {
"id": 423,
"name": "Magneto",
"slug": "423-magneto",
"powerstats": {
"intelligence": 88,
"strength": 80,
"speed": 27,
"durability": 84,
"power": 91,
"combat": 80
},
"appearance": {
"gender": "Male",
"race": "Mutant",
"height": [
"6'2",
"188 cm"
],
"weight": [
"190 lb",
"86 kg"
],
"eyeColor": "Grey",
"hairColor": "White"
},
"biography": {
"fullName": "Erik Magnus Lensherr",
"alterEgos": "No alter egos found.",
"aliases": [
"The Creator",
"Erik Magnus Lehnsherr",
"Michael Xavier",
"White Pilgrim",
"Erik the RedThe Master of Magnetism"
],
"placeOfBirth": "Unrevealed, probably somewhere in Northern Europe",
"firstAppearance": "X-MEN Vol. 1 #1",
"publisher": "Marvel Comics",
"alignment": "bad"
},
"work": {
"occupation": "Currently Revolutionary and Conqueror, formerly Volunteer Orderly, Secret Agent",
"base": "Currently unrevealed, formerly Asteroid M; various hidden bases on Earth including one in Antarctica; an island in the Bermuda Triangle; Professor Xavier's School for Gifted Youngsters, Salem Center, Westchester County, New York"
},
"connections": {
"groupAffiliation": "Currently None, formerly Brotherhood of Evil Mutants I and II, X-Men, teacher of the New Mutants, Lords Cardinal of the Hellfire Club, leader of the Acolytes",
"relatives": "Magda (wife, deceased), Anya (daughter, deceased), Pietro Maximoff (Quicksilver, son), Wanda Maximoff (Scarlet Witch, daughter), Lorna Dane (Polaris, daughter), Joseph (clone, deceased), Luna (granddaughter)"
},
"images": {
"xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/423-magneto.jpg",
"sm": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/423-magneto.jpg",
"md": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/423-magneto.jpg",
"lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/423-magneto.jpg"
}
},
    {
"id": 333,
"name": "Human Torch",
"slug": "333-human-torch",
"powerstats": {
"intelligence": 63,
"strength": 11,
"speed": 63,
"durability": 70,
"power": 87,
"combat": 42
},
"appearance": {
"gender": "Male",
"race": "Human / Radiation",
"height": [
"5'10",
"178 cm"
],
"weight": [
"170 lb",
"77 kg"
],
"eyeColor": "Blue",
"hairColor": "Blond"
},
"biography": {
"fullName": "Johnny Storm",
"alterEgos": "No alter egos found.",
"aliases": [
"Matchstick Johnny",
"Doug Brown"
],
"placeOfBirth": "Glenville, Long Island, New York",
"firstAppearance": "Fantastic Four #1 (1961)",
"publisher": "Marvel Comics",
"alignment": "good"
},
"work": {
"occupation": "Adventurer",
"base": "Pier Four, New York City"
},
"connections": {
"groupAffiliation": "Fantastic Four",
"relatives": "Susan Richards - Invisible Woman (sister), Franklin Richards (nephew), Reed Richards - Mister Fantastic (brother-in-law) Lyja (ex-wife)"
},
"images": {
"xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/333-human-torch.jpg",
"sm": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/333-human-torch.jpg",
"md": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/333-human-torch.jpg",
"lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/333-human-torch.jpg"
}
}

];

}
