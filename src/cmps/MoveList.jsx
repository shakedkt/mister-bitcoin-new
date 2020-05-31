import React from 'react'
import moment from 'moment';

export const MoveList = (props) => {
    console.log('props.MoveList', props.moveList);
    
    return (

        <div className="moves-list" key={props.moveList}>
        <div className="title">{props.title}</div>
        <hr/>
            {props.moveList.map(move => {
                return (
                    <ul className="move" key={move._id}>
                        {props.isFullList && <li>Name: {move.to}</li>}
                        <li>At: {moment(move.at).format("LLL")}</li>
                        <li>Amount: {move.amount}</li>
                    </ul>
                )
            })}
        </div>
    )
}