function CheckoutPage(props){
    let datastoCheckout = props.datastoCheckout;
    console.log(props.cart);
    return(
        <div>
          {datastoCheckout?.map(post => <CheckoutPage details={post} />)}
        </div>
    )
}

export default CheckoutPage;