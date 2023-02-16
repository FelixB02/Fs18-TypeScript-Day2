// Defining ParentClass

class vehicle{
    picture: string;
    brand: string;
    model: string;
    numberOfSeats: number;
    kilometers: number;
    ps: number;
    price: number;
    constructor(picture: string, brand: string, model: string, numberOfSeats: number, kilometers: number, ps: number, price: number) {
        this.picture = picture;
        this.brand = brand;
        this.model = model;
        this.numberOfSeats = numberOfSeats;
        this.kilometers = kilometers;
        this.ps = ps;
        this.price = price
    }
}

// Defining Car Class

class car extends vehicle {
    drivingassistent: boolean;
    constructor(picture: string, brand: string, model: string, numberOfSeats: number, kilometers: number, ps: number, price: number, drivingassistent: boolean) {
        super(picture, brand, model, numberOfSeats, kilometers, ps, price);
        this.drivingassistent = drivingassistent;
    }
    displayInfoCar() {
        let assis = "";
        if (this.drivingassistent == true) {
            assis = "Yes";
        } else {
            assis = "No"
        }
        let displayInfo = document.getElementById("Info") as HTMLElement;
        displayInfo.innerHTML += `
        <div class="col-3" style="display: flex; justify-content: center;">
        <div class="card" style="width: 18rem;">
        <img style="height: 18vh" src=${this.picture} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title" style="display:flex; justify-content: center;">${this.brand} ${this.model}</h5>
          <p class="card-text"> Number of seats: ${this.numberOfSeats}</p>
          <p class="card-text"> Kilometers: ${this.kilometers}</p>
          <p class="card-text"> PS: ${this.ps}</p>
          <p class="card-text"> Drivingassistent: ${assis}</p>
          <a href="#" style="display: flex; align-items: center;" class="btn btn-warning carpricebtn">Get Car Price</a>
        </div>
      </div>
      </div>`
    }

    getCarPrice() {
        let priceInfo = document.getElementById("Price") as HTMLElement;
        console.log("Hello")
    }
}



let cars = [
new car("https://hips.hearstapps.com/hmg-prod/images/2022-porsche-taycan-sport-turismo-gts-19-1638148404.jpg?crop=0.702xw:0.527xh;0.173xw,0.359xh&resize=1200:*", "Porsche", "Taycan", 4, 60000, 700, 210000, true),
new car("https://i.auto-bild.de/mdb/extra_large/86/2-517.png", "BMW", "X1", 6, 120000, 560, 80000, false),
new car("https://www.topgear.com/sites/default/files/2022/03/1-Mercedes-S-Class-plug-in.jpg", "Mecedes", "S-Class", 7, 20000, 450, 130000, false),
new car("https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/A6/6426/1571906388003/front-left-side-47.jpg", "Audi", "A6", 6, 200000, 500, 150000, true)]


let carsdisplay = document.getElementById("carbtn") as HTMLElement;
carsdisplay.addEventListener("click",loopCars)

function loopCars() {
    let carbuttonprice = document.getElementsByClassName("carpricebtn");
    console.log(carbuttonprice)
    for (let i = 0; i < carbuttonprice.length; i++) {
        carbuttonprice[i].addEventListener("click", cars[i].getCarPrice)
    }
    let carinner = document.getElementById("Info") as HTMLElement;
    carinner.innerHTML = "";
    for (let i = 0; i < cars.length; i++) {
        cars[i].displayInfoCar()
    }
}




// Defining Motorbikes Class

class motorbike extends vehicle {
    cubicCapacity: number;
    helmincluded: boolean;
    constructor(picture: string, brand: string, model: string, numberOfSeats: number, kilometers: number, ps: number, price: number, cubicCapacity: number, helmincluded: boolean) {
        super(picture, brand, model, numberOfSeats, kilometers, ps, price);
        this.cubicCapacity = cubicCapacity;
        this.helmincluded = helmincluded;
    }
    displayInfoMotorbike() {
        let displayInfo = document.getElementById("Info") as HTMLElement;
        let helm = "";
        if (this.helmincluded == true) {
            helm = "Yes";
        } else {
            helm = "No";
        }
        displayInfo.innerHTML += `
        <div class="col-3" style="display: flex; justify-content: center;">
        <div class="card" style="width: 18rem;">
        <img style="height: 18vh" src=${this.picture} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title" style="display:flex; justify-content: center;">${this.brand} ${this.model}</h5>
          <p class="card-text"> Number of seats: ${this.numberOfSeats}</p>
          <p class="card-text"> Kilometers: ${this.kilometers}</p>
          <p class="card-text"> PS: ${this.ps}</p>
          <p class="card-text"> Cubic Capacity: ${this.cubicCapacity}</p>
          <p class="card-text"> PS: ${helm}</p>
          <a href="#" style="display: flex; align-items: center;" class="btn btn-warning motorbikepricebtn">Get Bike Price</a>
        </div>
      </div>
      </div>`
    }

    getMotorbikePrice() {
        let priceInfo = document.getElementById("Price") as HTMLElement;
    }
}

let motorbikes = [
    new motorbike("https://images5.1000ps.net/images_bikekat/2014/5-Ducati/7527-899-panigale/gr.jpg", "Ducati","899 Panigale", 2, 30000, 300, 20000, 150, true),
    new motorbike("https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/gray%20resized_002.png", "Kawasaki","1400 GTR", 2, 15000, 270, 40000, 200, true),
    new motorbike("https://images5.1000ps.net/g-000276-g_W2767329_4-harley-davidson-fxstb-638029626558348963.jpg", "Harley","Night Train", 1, 8000, 150, 70000, 200, false),
    new motorbike("https://cdn4.louis.de/r/6319c7e4a3de8a9f68b4a6a0b72ae64b89201102/de-bspecial-yamaha-fz6-img-00-2633x1755-1200x800.jpg", "Yamaha","FZ6", 1, 0, 100, 100000, 100, true)]


    let motorbikesdisplay = document.getElementById("motorbikebtn") as HTMLElement;
    motorbikesdisplay.addEventListener("click",loopMotorbikes)
    
    function loopMotorbikes() {
        let bikebuttonprice = document.getElementsByClassName("motorbikepricebtn");
        console.log(bikebuttonprice)
        for (let i = 0; i < bikebuttonprice.length; i++) {
            bikebuttonprice[i].addEventListener("click", motorbikes[i].getMotorbikePrice)
        }
        let bikeinner = document.getElementById("Info") as HTMLElement;
        bikeinner.innerHTML = "";
        for (let i = 0; i < cars.length; i++) {
            motorbikes[i].displayInfoMotorbike()
        }
    }


