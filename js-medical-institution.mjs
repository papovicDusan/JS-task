import { randomTime, getRandomInt } from "./add-function.mjs";
import fs from "fs";

class Osoba {
  constructor(ime, prezime, jmbg) {
    this.ime = ime;

    this.prezime = prezime;
    this.jmbg = jmbg;
  }
}

class Pacijent extends Osoba {
  constructor(ime, prezime, jmbg, broj_zdravstvenog_kartona) {
    super(ime, prezime, jmbg);
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
    let preostaliPregledi = this.pregledi.filter(
      (pregled) => pregled.tip != tip
    );
    let zakazanPregled = this.pregledi.find((pregled) => pregled.tip == tip);
    this.pregledi = preostaliPregledi;
    zakazanPregled.pregled();
    loguj("Obavljen pregled", this.ime);
  }
}

class Doktor extends Osoba {
  constructor(ime, prezime, jmbg, specijalnost) {
    super(ime, prezime, jmbg);
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
}

class KrvniPritisak extends TipPregleda {
  constructor(tip, datum, vreme) {
    super(tip, datum, vreme);
    this.gornjaVrednost = null;
    this.donjaVrednost = null;
    this.puls = null;
  }

  pregled() {
    this.gornjaVrednost = getRandomInt(105, 170);
    this.donjaVrednost = getRandomInt(50, 100);
    this.puls = getRandomInt(50, 110);
  }
}

class NivoSecera extends TipPregleda {
  constructor(tip, datum, vreme) {
    super(tip, datum, vreme);
    this.vrednost = null;
    this.vremePoslednjegObroka = null;
  }

  pregled() {
    this.vrednost = getRandomInt(5, 10);
    this.vremePoslednjegObroka = randomTime();
  }
}

class NivoHolesterola extends TipPregleda {
  constructor(tip, datum, vreme) {
    super(tip, datum, vreme);
    this.vrednost = null;
    this.vremePoslednjegObroka = null;
  }

  pregled() {
    this.vrednost = getRandomInt(5, 10);
    this.vremePoslednjegObroka = randomTime();
  }
}

let akcije = [];
function loguj(akcija, korisinik) {
  const data = `[${
    new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()
  }] ${akcija}  ${korisinik}`;
  akcije.push(data);

  var logger = fs.createWriteStream("akcije.txt", {
    // flags: 'a' // 'a' means appending (old data will be preserved)
  });

  akcije.forEach((a) => {
    logger.write(a + "\n");
  });
}

let pacijent1 = new Pacijent("Marko", "Markovic", 11111111111111, 275);
let doktor1 = new Doktor("Ivan", "Ivanovic", "pedijatar");
pacijent1.izborDoktora(doktor1);
doktor1.zakazivanjePregleda(pacijent1, "krvni pritisak", "10/10/2021", "17:00");
doktor1.zakazivanjePregleda(pacijent1,"nivo secera u krvi","10/10/2021","18:00");
pacijent1.obavljanjePregleda("nivo secera u krvi");
