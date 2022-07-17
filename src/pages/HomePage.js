import logo from "../app/assets/imgs/logo192.png"

const HomePage = () => {
    return(
        <>      
            <h1>Emmie's Plate</h1>
            <img src={logo} />
            <br />
            <button className="btn btn-primary">Click me to get a recipe</button>
        </>
    )
}

export default HomePage;