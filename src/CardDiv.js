import React from 'react'
import Card from './Card.js'


class CardDiv extends React.Component {

    render() {
        const giftCards = this.props.cards.map(gift => (
            <Card
                giftInfo={gift}
                removeGiftCard = {this.props.removeGiftCard}
            />

        ))

        return (
            <div class="card-div">
                <div class="card-div">{giftCards}</div>

            </div>
        )
    }
}

export default CardDiv