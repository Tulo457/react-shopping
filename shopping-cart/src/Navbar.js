import './Navbar.css';

function Navbar() {
    return(
        <div className='Navbar'>
            
            <nav class="navbar">
                <div class="container-fluid">
                    
                        <form class="d-flex" role="search">
                                <input type='image' src='cz-flag.ico' class='flag'></input>
                                <input type='image' src='en-flag.ico' class='flag'></input>
                        </form>
                                    
                    <form class="d-flex">
    
                    <label class="switch">
                        <input type="checkbox" name='Dark'></input>
                        <span class="slider round"></span>
                    </label>
                
                    </form>
                </div>
            </nav>
        
        </div>
    );
}

export default Navbar;