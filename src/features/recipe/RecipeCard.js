import { Card, CardHeader, CardBody } from 'reactstrap'
import { randomId } from '../../app/shared/randomId'
const RecipeCard = ({recipe}) => {
    return(
        <Card>
            <CardHeader>Random Recipe of the day: {recipe.recipes[randomId].title}</CardHeader>
            <CardBody>
                {recipe.recipes[randomId].instructions}
            </CardBody>
        </Card>
    )
}

export default RecipeCard;