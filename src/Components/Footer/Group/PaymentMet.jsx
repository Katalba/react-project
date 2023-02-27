import React from 'react';

const PaymentMet = () => {
    return (
        <div className="brands">
            <div className="small-container">
                <div className="row">
                    <div className="col-5">
                        <img src="https://firebasestorage.googleapis.com/v0/b/valkiria-react.appspot.com/o/visa.jpg?alt=media&token=9da656fd-6424-47df-a0f6-c38480289daf" alt='visa'/>
                    </div>
                    <div className="col-5">
                        <img src="https://firebasestorage.googleapis.com/v0/b/valkiria-react.appspot.com/o/martercard.png?alt=media&token=51ab7131-c132-45ac-9af6-b325f4bbd65e"  alt='mastercard' />
                    </div>
                    <div className="col-5">
                        <img src="https://firebasestorage.googleapis.com/v0/b/valkiria-react.appspot.com/o/amex.jpg?alt=media&token=9bc069a7-e19b-4106-8c98-2ec528e33947"  alt='amex' />
                    </div>
                    <div className="col-5">
                        <img src="https://firebasestorage.googleapis.com/v0/b/valkiria-react.appspot.com/o/MP.png?alt=media&token=90092d93-3cff-4aaf-8cdd-e443d7959692"  alt='mercadopago' />
                    </div>
                    <div className="col-5">
                        <img src="https://firebasestorage.googleapis.com/v0/b/valkiria-react.appspot.com/o/pay.jpg?alt=media&token=59c626b9-6765-48fc-9dc1-e926b617c0c8"   alt='paypal'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentMet;
