let db = require("../models");

class TeriSpot {
  constructor(name = "yaki", image = "", address = "", neighborhood = "", rating = 0.0, specialty = "", sunday = false, price = 0, description = "") {
    this.name = name;
    this.image = image;
    this.address = address;
    this.neighborhood = neighborhood;
    this.rating = rating;
    this.specialty = specialty;
    this.sunday = sunday;
    this.price = price;
    this.description = description;
  }

  toObject() {
    return {
      name: this.name,
      image: this.image,
      address: this.address,
      neighborhood: this.neighborhood,
      rating: this.rating,
      specialty: this.specialty,
      sunday: this.sunday,
      price: this.price,
      description: this.description
    }
  }
}
const okinawaTeri = new TeriSpot("Okinawa Teriyaki", "https://s3-media1.fl.yelpcdn.com/bphoto/S86HdoRZxSS-sTpM9NRTEQ/348s.jpg", "1100 Western Ave, Seattle, WA 98101", "Downtown", 4.5, null, null,2,"Never been there, idk.");
const joyBento = new TeriSpot("Joy Bento", "https://b.zmtcdn.com/data/reviews_photos/87b/5ad3089585df20579136c61b6267e87b.jpg", "214 Madison St, Seattle, WA 98104", "Downtown", 4.6,  null, null,1,"in a parking garage much fun.");

db.spot.create(
  okinawaTeri.toObject()
)
.then((createdSpot) => {
  console.log(`Created ${createdSpot.name}`);
});

db.spot.create(
  joyBento.toObject()
)
.then((createdSpot) => {
  console.log(`Created ${createdSpot.name}`);
  process.exit();
});
