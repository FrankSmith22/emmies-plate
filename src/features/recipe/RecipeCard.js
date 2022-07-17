import { Card, CardHeader, CardBody } from 'reactstrap'
const RecipeCard = ({recipe}) => {
    return(
        <Card>
            <CardHeader>Random Recipe of the day: {recipe.recipes[0].title}</CardHeader>
            <CardBody>
                {recipe.recipes[0].instructions}
            </CardBody>
        </Card>
    )
}

export default RecipeCard;