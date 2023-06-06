import { useEffect,useState } from "react";
import { Card,Button } from "react-bootstrap";
const Product = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then(data=>data.json()).then(result=>setData(result))
    }, [])
    
    const cards = data.map((product) => (
        <div className="col-md-3" style={{marginBottom:'10px'}}>
            <Card key={product.id} className="h-100">
                <Card.Img variant="top" src={product.image} style={{width:'100px' ,height:'130px'}} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                      <Card.Text>
                          INR: {product.price}
                     </Card.Text>
       
                </Card.Body>
                <Card.Footer>
                     <Button variant="primary">Add to Cart</Button>
                </Card.Footer>
    </Card>
        </div>
    ))
    return (
        <>
            <h1> Product Details</h1>
            <div className="row">
                {cards}
            </div>
         
       </> 
    )
}

export default Product;