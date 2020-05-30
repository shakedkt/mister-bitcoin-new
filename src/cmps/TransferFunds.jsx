import React from "react";
export const TransferFunds = (props) => {

    const amountInput = React.createRef();

    function handleSubmit(event) {
        const amount = +amountInput.current.value
        event.preventDefault();
        if (amount > props.maxCoins || amount <= 0) {
            amountInput.current.value = ''
            amountInput.current.placeholder = 'Not enugh coins!'
            return
        }
        props.onTransferCoins(amount);
        amountInput.current.value = ''
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={amountInput} type="number" min="0" max={props.maxCoins} placeholder="Amount?" />
                <button>Transfer</button>
            </form>
        </div>
    );
};