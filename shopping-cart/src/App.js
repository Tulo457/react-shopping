import './App.css';

function App() {
  return (
    <div className="App">
      
        <h1 class='header'>Seznamy</h1>
        
        <div class='buttons d-grid gap-3 col-2 mx-auto'>
          <button type="button" class="btn btn-primary">Zobrazit všechny seznamy</button>
          <button type="button" class="btn btn-primary">Přidat nový seznam</button>
        </div>

        <div class='container'>
          
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Potraviny</h3>
                <div class='d-grid gap-3 mx-auto'>
                <button type="button" class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#Potraviny">
                  Zobrazit seznam
                </button>
                  <a href="#" class="btn btn-danger mt-2">Odstranit seznam</a>
                </div> 
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Textil</h3>
                <div class='d-grid gap-3 mx-auto'>
                <button type="button" class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#Textil">
                  Zobrazit seznam
                </button>
                  <a href="#" class="btn btn-danger mt-2">Odstranit seznam</a>
                </div> 
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Nářadí</h3>
                <div class='d-grid gap-3 mx-auto'>
                <button type="button" class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#Nářadí">
                  Zobrazit seznam
                </button>
                  <a href="#" class="btn btn-danger mt-2">Odstranit seznam</a>
                </div> 
            </div>
          </div>
        
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Elektronika</h3>
                <div class='d-grid gap-3 mx-auto'>
                <button type="button" class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#Elektronika">
                  Zobrazit seznam
                </button>
                  <a href="#" class="btn btn-danger mt-2">Odstranit seznam</a>
                </div> 
            </div>
          </div>



          <div class="modal fade" id="Potraviny" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">Potraviny</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                
                <div class='row g-3 align-items-center mt-2 d-flex justify-content-center'>
                  
                  <div class="col-auto">
                    <input type="text" class="form-control" placeholder='Produkt' aria-describedby="basic-addon1"></input>
                  </div>
                  
                  <div class="col-auto">
                    <input type="text" class="num-input form-control" placeholder='0' aria-describedby="basic-addon1"></input>
                  </div>

                  <div class="col-auto">
                    <a type='text'>ks</a>
                  </div>

                  <div class="col-auto">
                  <button type="button" class="btn btn-danger">Odstranit</button>
                  </div>
                
                </div>


                <div class='row g-3 align-items-center mt-3 d-flex justify-content-center'>
                  
                  <div class="col-auto">
                    <input type="text" class="form-control" placeholder='Produkt' aria-describedby="basic-addon1"></input>
                  </div>
                  
                  <div class="col-auto">
                    <input type="text" class="num-input form-control" placeholder='0' aria-describedby="basic-addon1"></input>
                  </div>

                  <div class="col-auto">
                    <a type='text'>ks</a>
                  </div>

                  <div class="col-auto">
                  <button type="button" class="btn btn-danger">Odstranit</button>
                  </div>
                
                </div>


                <div class='row g-3 align-items-center mt-3 d-flex justify-content-center'>
                  
                  <div class="col-auto">
                    <input type="text" class="form-control" placeholder='Produkt' aria-describedby="basic-addon1"></input>
                  </div>
                  
                  <div class="col-auto">
                    <input type="text" class="num-input form-control" placeholder='0' aria-describedby="basic-addon1"></input>
                  </div>

                  <div class="col-auto">
                    <a type='text'>ks</a>
                  </div>

                  <div class="col-auto">
                  <button type="button" class="btn btn-danger">Odstranit</button>
                  </div>
                
                </div>



                <div class='g-3 mt-3 d-flex justify-content-center'>
                <button type="button" class="btn btn-success">Přidat položku</button>
                </div>

                </div>
                <div class="modal-footer d-flex justify-content-center">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Zavřít</button>
                  <button type="button" class="btn btn-primary">Uložit</button>
                  <button type="button" class="btn btn-warning">Archivovat</button>
                  <button type="button" class="btn btn-danger">Smazat vše</button>
                </div>
              </div>
            </div>
          </div>






          <div class="modal fade" id="Textil" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">Textil</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                
                <div class='row g-3 align-items-center mt-2 d-flex justify-content-center'>
                  
                  <div class="col-auto">
                    <input type="text" class="form-control" placeholder='Produkt' aria-describedby="basic-addon1"></input>
                  </div>
                  
                  <div class="col-auto">
                    <input type="text" class="num-input form-control" placeholder='0' aria-describedby="basic-addon1"></input>
                  </div>

                  <div class="col-auto">
                    <a type='text'>ks</a>
                  </div>

                  <div class="col-auto">
                  <button type="button" class="btn btn-danger">Odstranit</button>
                  </div>
                
                </div>


                <div class='row g-3 align-items-center mt-3 d-flex justify-content-center'>
                  
                  <div class="col-auto">
                    <input type="text" class="form-control" placeholder='Produkt' aria-describedby="basic-addon1"></input>
                  </div>
                  
                  <div class="col-auto">
                    <input type="text" class="num-input form-control" placeholder='0' aria-describedby="basic-addon1"></input>
                  </div>

                  <div class="col-auto">
                    <a type='text'>ks</a>
                  </div>

                  <div class="col-auto">
                  <button type="button" class="btn btn-danger">Odstranit</button>
                  </div>
                
                </div>


                <div class='row g-3 align-items-center mt-3 d-flex justify-content-center'>
                  
                  <div class="col-auto">
                    <input type="text" class="form-control" placeholder='Produkt' aria-describedby="basic-addon1"></input>
                  </div>
                  
                  <div class="col-auto">
                    <input type="text" class="num-input form-control" placeholder='0' aria-describedby="basic-addon1"></input>
                  </div>

                  <div class="col-auto">
                    <a type='text'>ks</a>
                  </div>

                  <div class="col-auto">
                  <button type="button" class="btn btn-danger">Odstranit</button>
                  </div>
                
                </div>



                <div class='g-3 mt-3 d-flex justify-content-center'>
                <button type="button" class="btn btn-success">Přidat položku</button>
                </div>

                </div>
                <div class="modal-footer d-flex justify-content-center">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Zavřít</button>
                  <button type="button" class="btn btn-primary">Uložit</button>
                  <button type="button" class="btn btn-warning">Archivovat</button>
                  <button type="button" class="btn btn-danger">Smazat vše</button>
                </div>
              </div>
            </div>
          </div>




          <div class="modal fade" id="Nářadí" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">Nářadí</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                
                <div class='row g-3 align-items-center mt-2 d-flex justify-content-center'>
                  
                  <div class="col-auto">
                    <input type="text" class="form-control" placeholder='Produkt' aria-describedby="basic-addon1"></input>
                  </div>
                  
                  <div class="col-auto">
                    <input type="text" class="num-input form-control" placeholder='0' aria-describedby="basic-addon1"></input>
                  </div>

                  <div class="col-auto">
                    <a type='text'>ks</a>
                  </div>

                  <div class="col-auto">
                  <button type="button" class="btn btn-danger">Odstranit</button>
                  </div>
                
                </div>


                <div class='row g-3 align-items-center mt-3 d-flex justify-content-center'>
                  
                  <div class="col-auto">
                    <input type="text" class="form-control" placeholder='Produkt' aria-describedby="basic-addon1"></input>
                  </div>
                  
                  <div class="col-auto">
                    <input type="text" class="num-input form-control" placeholder='0' aria-describedby="basic-addon1"></input>
                  </div>

                  <div class="col-auto">
                    <a type='text'>ks</a>
                  </div>

                  <div class="col-auto">
                  <button type="button" class="btn btn-danger">Odstranit</button>
                  </div>
                
                </div>


                <div class='row g-3 align-items-center mt-3 d-flex justify-content-center'>
                  
                  <div class="col-auto">
                    <input type="text" class="form-control" placeholder='Produkt' aria-describedby="basic-addon1"></input>
                  </div>
                  
                  <div class="col-auto">
                    <input type="text" class="num-input form-control" placeholder='0' aria-describedby="basic-addon1"></input>
                  </div>

                  <div class="col-auto">
                    <a type='text'>ks</a>
                  </div>

                  <div class="col-auto">
                  <button type="button" class="btn btn-danger">Odstranit</button>
                  </div>
                
                </div>



                <div class='g-3 mt-3 d-flex justify-content-center'>
                <button type="button" class="btn btn-success">Přidat položku</button>
                </div>

                </div>
                <div class="modal-footer d-flex justify-content-center">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Zavřít</button>
                  <button type="button" class="btn btn-primary">Uložit</button>
                  <button type="button" class="btn btn-warning">Archivovat</button>
                  <button type="button" class="btn btn-danger">Smazat vše</button>
                </div>
              </div>
            </div>
          </div>



          <div class="modal fade" id="Elektronika" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">Elektronika</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                
                <div class='row g-3 align-items-center mt-2 d-flex justify-content-center'>
                  
                  <div class="col-auto">
                    <input type="text" class="form-control" placeholder='Produkt' aria-describedby="basic-addon1"></input>
                  </div>
                  
                  <div class="col-auto">
                    <input type="text" class="num-input form-control" placeholder='0' aria-describedby="basic-addon1"></input>
                  </div>

                  <div class="col-auto">
                    <a type='text'>ks</a>
                  </div>

                  <div class="col-auto">
                  <button type="button" class="btn btn-danger">Odstranit</button>
                  </div>
                
                </div>


                <div class='row g-3 align-items-center mt-3 d-flex justify-content-center'>
                  
                  <div class="col-auto">
                    <input type="text" class="form-control" placeholder='Produkt' aria-describedby="basic-addon1"></input>
                  </div>
                  
                  <div class="col-auto">
                    <input type="text" class="num-input form-control" placeholder='0' aria-describedby="basic-addon1"></input>
                  </div>

                  <div class="col-auto">
                    <a type='text'>ks</a>
                  </div>

                  <div class="col-auto">
                  <button type="button" class="btn btn-danger">Odstranit</button>
                  </div>
                
                </div>


                <div class='row g-3 align-items-center mt-3 d-flex justify-content-center'>
                  
                  <div class="col-auto">
                    <input type="text" class="form-control" placeholder='Produkt' aria-describedby="basic-addon1"></input>
                  </div>
                  
                  <div class="col-auto">
                    <input type="text" class="num-input form-control" placeholder='0' aria-describedby="basic-addon1"></input>
                  </div>

                  <div class="col-auto">
                    <a type='text'>ks</a>
                  </div>

                  <div class="col-auto">
                  <button type="button" class="btn btn-danger">Odstranit</button>
                  </div>
                
                </div>



                <div class='g-3 mt-3 d-flex justify-content-center'>
                <button type="button" class="btn btn-success">Přidat položku</button>
                </div>

                </div>
                <div class="modal-footer d-flex justify-content-center">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Zavřít</button>
                  <button type="button" class="btn btn-primary">Uložit</button>
                  <button type="button" class="btn btn-warning">Archivovat</button>
                  <button type="button" class="btn btn-danger">Smazat vše</button>
                </div>
              </div>
            </div>
          </div>





        </div>
    </div>
  );
}

export default App;
