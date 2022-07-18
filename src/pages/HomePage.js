import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from "../app/assets/imgs/logo192.png"
import RecipeCard from '../features/recipe/RecipeCard';
import { Col, Row, Container } from 'reactstrap';
import { fetchRandomRecipe, selectRandomRecipe } from '../features/recipe/recipesSlice';
import Error from '../components/Error';
import Loading from '../components/Loading';

const HomePage = () => {

    const [isSending, setIsSending] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if(isSending){
            dispatch(fetchRandomRecipe());
            setIsSending(false)
        }
    }, [dispatch, isSending]);

    const recipe = useSelector(selectRandomRecipe);
    const isLoading = useSelector((state) => state.recipes.isLoading);
    const errMsg = useSelector((state) => state.recipes.errMsg);

    // conditionally render nothing/data, loading bar, or error message
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Emmie's Plate</h1>
                    <img src={logo} />
                    <br />
                    <button className="btn btn-primary" onClick={ () => setIsSending(true) }>Click me to get a recipe</button>
                </Col>
                {
                    isLoading ? (
                        <Col>
                            <Loading />
                        </Col>
                    ) : errMsg ? (
                        <Col>
                            <Error errMsg={errMsg} />
                        </Col>
                    
                    ) : recipe !== null ? (
                        <Col>
                            <RecipeCard recipe={recipe}/>
                        </Col>
                    ) : ""
                }
            </Row>
        </Container>
    )
}

export default HomePage;