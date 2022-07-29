const OrderNumber = (props) => {
    return(
        <div className="border-section order-number">
            <span>Your Order Number Is:</span>
            <p>{props.order_number}</p>
        </div>
    )
}

export default OrderNumber;