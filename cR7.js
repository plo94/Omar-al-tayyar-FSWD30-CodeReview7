class Persons {


  constructor(Name, Surname, Image, Image2, Age, Gender, inRelation, likes) {
    this.Name = Name;
    this.Surname = Surname;
    this.Image = Image;
    this.Image2 = Image;
    this.Age = Age;
    this.Gender = Gender;
    this.inRelation = inRelation;
    this.likes = likes;
  }

  
  render() {
    let show = `
    <div class="col-sm-6 col-md-3"">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" data-src="" style="height: 400px; width: 100%; display: block;" src="${this.Image}" data-holder-rendered="true">
                <div class="card-body">
                  <p class="card-text"> Name : ${this.Name} ${this.Surname}</p>
                  <p class="card-text"> Age : ${this.Age}</p>
                  <p class="card-text"> Gender : ${this.Gender}</p>
                  <p class="card-text">  Marital Status : ${this.inRelation}</p>
                  <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#exampleModal">More</button>
                  <hr>
                  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">${this.Name} ${this.Surname}e</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                          <div class="card card-cascade wider">
                       <div class="view overlay hm-white-slight">
                            <img src="${this.Image2}" class="img-fluid">
                          <a href="#!">
                            <div class="mask"></div>
                          </a>
                       </div>
                      <div class="card-body text-center">
                        <h4 class="card-title"><strong>${this.Name} ${this.Surname}</strong></h4>
                        <h5 class="indigo-text"><strong>Photographer</strong></h5>
                         <p class="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam. </p>
                          <a class="icons-sm li-ic"><i class="fa fa-linkedin"></i></a>
                          <a class="icons-sm tw-ic"><i class="fa fa-twitter"></i></a>
                          <a class="icons-sm fb-ic"><i class="fa fa-facebook"></i></a>
                      </div>
                      </div> 
                      </div>
                    </div>
                  </div>

                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary" onclick="like()">Like</button>
                    </div>
                    <small  id="like" class="text-muted"> ${this.likes} </small>
                  </div>
                </div>
              </div>
            </div>
           
      `;
    return show;
  }

  
}

class Man extends Persons {
  
  constructor(Name, Surname, Image, Image2, Age, Gender, inRelation, likes) {
    super(Name, Surname, Image, Image2, Age, Gender, inRelation, likes); 
    this.Name = Name;
    this.Surname = Surname;
    this.Image = Image;
    this.Image2 = Image;
    this.Age = Age;
    this.Gender = Gender;
    this.inRelation = inRelation;
    this.likes = likes;
  }


  render() {
    let show = `
          <div class="col-sm-6 col-md-3">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" data-src="" style="height: 400px; width: 100%; display: block;" src="${this.Image}" data-holder-rendered="true">
                <div class="card-body">
                  <p class="card-text"> Name : ${this.Name} ${this.Surname}</p>
                  <p class="card-text"> Age : ${this.Age}</p>
                  <p class="card-text"> Gender : ${this.Gender}</p>
                  <p class="card-text">  Marital Status : ${this.inRelation}</p>
                  <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#exampleModal">More</button>
                  <hr>
                  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">${this.Name} ${this.Surname}e</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                          <div class="card card-cascade wider">
                       <div class="view overlay hm-white-slight">
                            <img src="${this.Image2}" class="img-fluid">
                          <a href="#!">
                            <div class="mask"></div>
                          </a>
                       </div>
                      <div class="card-body text-center">
                        <h4 class="card-title"><strong>${this.Name} ${this.Surname}</strong></h4>
                        <h5 class="indigo-text"><strong>Photographer</strong></h5>
                         <p class="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam. </p>
                          <a class="icons-sm li-ic"><i class="fa fa-linkedin"></i></a>
                          <a class="icons-sm tw-ic"><i class="fa fa-twitter"></i></a>
                          <a class="icons-sm fb-ic"><i class="fa fa-facebook"></i></a>
                      </div>
                      </div> 
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary like-button" onclick="like()"">Like</button>
                    </div>
                    <small  id="like"  class="text-muted count">${this.likes} </small>
                  </div>
                </div>
              </div>
            </div>
           
        `;
    return show;

  }
}

class Women extends Persons {
  
  constructor(Name, Surname, Image, Image2, Age, Gender, inRelation, likes) {
    super(Name, Surname, Image, Image2, Age, Gender, inRelation, likes); 
    this.Name = Name;
    this.Surname = Surname;
    this.Image = Image;
    this.Image2 = Image;
    this.Age = Age;
    this.Gender = Gender;
    this.inRelation = inRelation;
    this.likes = likes;
  }

  
  render() {
    let show = `
         <div class="col-sm-6  col-md-3">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" data-src="" style="height: 400px; width: 100%; display: block;" src=" ${this.Image} " data-holder-rendered="true">
                <div class="card-body">
                  <p class="card-text"> Name : ${this.Name} ${this.Surname}</p>
                  <p class="card-text"> Age : ${this.Age}</p>
                  <p class="card-text"> Gender : ${this.Gender}</p>
                  <p class="card-text">  Marital Status : ${this.inRelation}</p>
                  <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#exampleModal">More</button>
                  <hr>
                  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">${this.Name} ${this.Surname}e</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                          <div class="card card-cascade wider">
                       <div class="view overlay hm-white-slight">
                            <img src="${this.Image2}" class="img-fluid">
                          <a href="#!">
                            <div class="mask"></div>
                          </a>
                       </div>
                      <div class="card-body text-center">
                        <h4 class="card-title"><strong>${this.Name} ${this.Surname}</strong></h4>
                        <h5 class="indigo-text"><strong>Photographer</strong></h5>
                         <p class="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam. </p>
                          <a class="icons-sm li-ic"><i class="fa fa-linkedin"></i></a>
                          <a class="icons-sm tw-ic"><i class="fa fa-twitter"></i></a>
                          <a class="icons-sm fb-ic"><i class="fa fa-facebook"></i></a>
                      </div>
                      </div> 
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary" onclick="like()">Like</button>
                    </div>
                    <small id="like" onclick="Likes()" class="text-muted"> ${this.likes} </small>
                  </div>
                </div>
              </div>
            </div>
          
        `;
    return show;

  }
}

class Not extends Persons {
  
  constructor(Name, Surname, Image, Image2, Age, Gender, inRelation, likes) {
    super(Name, Surname, Image, Image2, Age, Gender, inRelation, likes); 
    this.Name = Name;
    this.Surname = Surname;
    this.Image = Image;
    this.Image2 = Image;
    this.Age = Age;
    this.Gender = Gender;
    this.inRelation = inRelation;
    this.likes = likes;
  }

  
  render() {
    let show = `
         <div class="col-sm-6  col-md-3">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" data-src="" style="height: 400px; width: 100%; display: block;" src="${this.Image}" data-holder-rendered="true">
                <div class="card-body">
                  <p class="card-text"> Name : ${this.Name} ${this.Surname}</p>
                  <p class="card-text"> Age : ${this.Age}</p>
                  <p class="card-text"> Gender : ${this.Gender}</p>
                  <p class="card-text">  Marital Status : ${this.inRelation}</p>
                  <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#exampleModal">More</button>
                  <hr>
                  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">${this.Name} ${this.Surname}e</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                          <div class="card card-cascade wider">
                       <div class="view overlay hm-white-slight">
                            <img src="${this.Image2}" class="img-fluid">
                          <a href="#!">
                            <div class="mask"></div>
                          </a>
                       </div>
                      <div class="card-body text-center">
                        <h4 class="card-title"><strong>${this.Name} ${this.Surname}</strong></h4>
                        <h5 class="indigo-text"><strong>Photographer</strong></h5>
                         <p class="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam. </p>
                          <a class="icons-sm li-ic"><i class="fa fa-linkedin"></i></a>
                          <a class="icons-sm tw-ic"><i class="fa fa-twitter"></i></a>
                          <a class="icons-sm fb-ic"><i class="fa fa-facebook"></i></a>
                      </div>
                      </div> 
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary" onclick="Likes()">Like</button>
                    </div>
                    <small id="like" onclick="Likes()" class="text-muted"> ${this.likes}</small>
                  </div>
                </div>
              </div>
            </div>
        `;
    return show;

  }
}



var media = [
  new Man("Alex", "Mann", "image/11.jpg", "image/11.jpg",22, "Male", "Single", 12),
  new Women("Jasmin", "Mann", "image/1.jpg", "image/1.jpg",27, "Female", "Single", 23),
  new Not("Mario", "Mann", "image/21.jpg", "image/21.jpg", 24, "not", "Single", 13),
  new Man("Stive", "Mann", "image/12.jpg", "image/12.jpg", 23, "Male", "Single", 18),
  new Not("Mria", "Mann", "image/26.jpg", "image/26.jpg", 27, "not", "Single", 28),
  new Women("Nicole", "Mann", "image/2.jpg", "image/2.jpg", 24, "Female", "Single", 24),  
  new Man("Marlon", "Mann", "image/13.jpg", "image/13.jpg", 29, "Male", "Single", 17),
  new Not("Simon", "Mann", "image/22.jpg", "image/22.jpg", 22, "not", "Single", 11),
  new Women("Sandra", "Mann", "image/3.jpg", "image/3.jpg", 21, "Female", "Single", 14), 
  new Man("Sam", "Mann", "image/14.jpg", "image/14.jpg", 20, "Male", "Single", 16), 
  new Not("Sandy", "Mann", "image/27.jpg", "image/27.jpg", 28, "not", "Single", 18),
  new Women("Audrey", "Mann", "image/4.jpg", "image/4.jpg", 20, "Female", "Single", 7),
  new Man("Yaser", "Mann", "image/15.jpg", "image/15.jpg", 27, "Male", "Single", 4),
  new Not("Stive", "Mann", "image/23.jpg", "image/23.jpg", 23, "not", "Single", 9),
  new Women("Alexa", "Mann", "image/5.jpg", "image/5.jpg", 26, "Female", "Single", 13),
  new Man("Jousef", "Mann", "image/16.jpg", "image/16.jpg", 29, "Male", "Single", 21),
  new Not("Simone", "Mann", "image/28.jpg", "image/28.jpg", 21, "not", "Single", 20),
  new Women("Fozia", "Mann", "image/6.jpg", "image/6.jpg", 24, "Female", "Single", 17),  
  new Man("Saeed", "Mann", "image/17.jpg", "image/17.jpg", 25, "Male", "Single", 16),
  new Not("Raeh", "Mann", "image/24.jpg", "image/24.jpg", 24, "not", "Single", 19),
  new Women("Raeha", "Mann", "image/7.jpg", "image/7.jpg", 22, "Female", "Single", 20), 
  new Man("Ronaldo", "Mann", "image/18.jpg", "image/18.jpg", 20, "Male", "Single", 15), 
  new Not("Jasmin", "Mann", "image/29.jpg", "image/29.jpg", 27, "not", "Single", 13),
  new Women("Jasmine", "Mann", "image/8.jpg", "image/8.jpg", 24, "Female", "Single", 15),
  new Man("Ali", "Mann", "image/19.jpg", "image/19.jpg", 29, "Male", "Single", 11),
  new Not("Memo", "Mann", "image/25.jpg", "image/25.jpg", 23, "not", "Single", 12),
  new Women("Sarah", "Mann", "image/9.jpg", "image/9.jpg", 23, "Female", "Single", 14), 
  new Man("Samer", "Mann", "image/20.jpg", "image/20.jpg", 26, "Male", "Single", 16),
  new Not("Soso", "Mann", "image/30.jpg", "image/30.jpg", 27, "not", "Single", 17), 
  new Women("Ezabilla", "Mann", "image/10.jpg", "image/10.jpg", 28, "Female", "Single", 9),
];


function showAll() {
  let me = document.getElementById("person");
  for (let i = 0; i < media.length; i++) {
    me.innerHTML += media[i].render();
  }
}

function showMan() {
  let me = document.getElementById("person");
  for (let i = 0; i < media.length; i++) {

    if (media[i].constructor.name == "Man" && 
      media[i].Gender === 'Male') {

      me.innerHTML += media[i].render();
    }

  }
}
function showWomen() {
  let me = document.getElementById("person");
  for (let i = 0; i < media.length; i++) {

    if (media[i].constructor.name == "Women" && 
      media[i].Gender === 'Female') {

      me.innerHTML += media[i].render();
    }

  }
}
function showNot() {
  let me = document.getElementById("person");
  for (let i = 0; i < media.length; i++) {

    if (media[i].constructor.name == "Not" && 
      media[i].Gender === 'not') {

      me.innerHTML += media[i].render();
    }

  }
}
function like() {
              let me = document.getElementById("like");
              for (let i = 0; i < media.length; i++) {

                if (media[i].constructor.name == "Not" && 
                  media[i].Gender === 'not') {

                  me.innerHTML = media[i].likes + 1;
                }

              }
            }









