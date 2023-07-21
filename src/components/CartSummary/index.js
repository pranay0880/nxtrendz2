// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalPriceList = cartList.map(each => each.price * each.quantity)
      const totalPrice = totalPriceList.reduce(
        (result, number) => result + number,
      )
      console.log(totalPrice)
      return (
        <div className="summaryContainer">
          <h1>
            Order Total: <span className="totalCost">RS {totalPrice}/-</span>
          </h1>
          <p>{cartList.length} items in cart</p>
          <button type="button" className="checkout">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
