class Pacijent {
  constructor(ime, prezime, jmbg, broj_zdravstvenog_kartona) {
    this.ime = ime;
    this.prezime = prezime;
    this.jmbg = jmbg;
    this.broj_zdravstvenog_kartona = broj_zdravstvenog_kartona;
    this.pregledi = [];
    this.izabraniDoktor = null;
    loguj("Kreiran pacijent", this.ime);
  }

  izborDoktora(doktor) {
    if (!this.izabraniDoktor) {
      this.izabraniDoktor = doktor;
      doktor.pacijenti.push(this);
      loguj("Izabrao doktora", this.ime);
    }
  }

  obavljanjePregleda(tip) {
    let preostaliPregledi = this.pregledi.filter(pregled => pregled.tip != tip);
    let zakazanPregled = this.pregledi.find((pregled) => pregled.tip == tip);
    this.pregledi = preostaliPregledi;
    //console.log(zakazanPregled);
    zakazanPregled.pregled();
      loguj("Obavljen pregled", this.ime);
   // console.log(zakazanPregled);
  }
}

class Doktor {
  constructor(ime, prezime, specijalnost) {
    this.ime = ime;
    this.prezime = prezime;
    this.specijalnost = specijalnost;
    this.pacijenti = [];
     loguj("Kreiran doktor", this.ime);
  }

  zakazivanjePregleda(pacijent, tip, datum, vreme) {
    loguj("Zakazao pregled doktor", this.ime);
    if (tip == "krvni pritisak") {
      let pregled = new KrvniPritisak(tip, datum, vreme);
      pacijent.pregledi.push(pregled);
    }

    if (tip == "nivo secera u krvi") {
      let pregled = new NivoSecera(tip, datum, vreme);
      pacijent.pregledi.push(pregled);
    }

    if (tip == "nivo holesterola u krvi") {
      let pregled = new NivoHolesterola(tip, datum, vreme);
      pacijent.pregledi.push(pregled);
    }
  }
}

class TipPregleda {
  constructor(tip, datum, vreme) {
    this.tip = tip;
    this.datum = datum;
    this.vreme = vreme;
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

}

class KrvniPritisak extends TipPregleda {
  constructor(tip, datum, vreme) {
    super(tip, datum, vreme);
    this.gornjaVrednost = null;
    this.donjaVrednost = null;
    this.puls = null;
  }

  pregled() {
    this.gornjaVrednost = super.getRandomInt(105, 170);
    this.donjaVrednost = super.getRandomInt(50, 100);
    this.puls = super.getRandomInt(50, 110);
  }
}

class NivoSecera extends TipPregleda {
  constructor(tip, datum, vreme) {
    super(tip, datum, vreme);
    this.vrednost = null;
    this.vremePoslednjegObroka = null;
  }

randomTime = () => {
  let hrs = Math.round(Math.random()*12);
 let mins = Math.round(Math.random()*60);    
 let hFormat = (hrs<10 ? "0" : "");
  let mFormat = (mins<10 ? "0" : "");
  let amPm = (hrs<12 ? "AM" : "PM");
  return String(hFormat+hrs+ ":" +mFormat+mins+ " " +amPm);
}

  pregled() {
    this.vrednost = super.getRandomInt(5, 10);
    this.vremePoslednjegObroka = this.randomTime();
  }
}

class NivoHolesterola extends TipPregleda {
  constructor(tip, datum, vreme) {
    super(tip, datum, vreme);
    this.vrednost = null;
    this.vremePoslednjegObroka = null;
  }

  randomTime = () => {
  let hrs = Math.round(Math.random()*12);
 let mins = Math.round(Math.random()*60);    
 let hFormat = (hrs<10 ? "0" : "");
  let mFormat = (mins<10 ? "0" : "");
  let amPm = (hrs<12 ? "AM" : "PM");
  return String(hFormat+hrs+ ":" +mFormat+mins+ " " +amPm);
}

  pregled() {
    this.vrednost = super.getRandomInt(5, 10);
    this.vremePoslednjegObroka = this.randomTime();
  }

}

let akcije = [];
function loguj(akcija, korisinik){
  const fs = require('fs');//filestream
  const data =  `[${new Date().toLocaleDateString() +" "+ new Date().toLocaleTimeString()}] ${akcija}  ${korisinik}`
  akcije.push(data);

 var logger = fs.createWriteStream('akcije.txt', {
  // flags: 'a' // 'a' means appending (old data will be preserved)
})

akcije.forEach((a)=> {
logger.write(a+'\n') 
});

}

let pacijent1 = new Pacijent("Marko", "Markovic", 11111111111111, 275);
let doktor1 = new Doktor("Ivan", "Ivanovic", "pedijatar");
pacijent1.izborDoktora(doktor1);
//console.log(pacijent2);
doktor1.zakazivanjePregleda(pacijent1, "krvni pritisak", "10/10/2021", "17:00");
doktor1.zakazivanjePregleda(pacijent1,"nivo secera u krvi","10/10/2021","18:00");
//console.log(pacijent1);
pacijent1.obavljanjePregleda("nivo secera u krvi");
//console.log(pacijent1);
