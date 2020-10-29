import React from 'react'


class Card extends React.Component {


    removeCard = (e) => {
        // console.log(e.target)
        this.props.removeGiftCard(this.props.giftInfo)
    }

    render() {
        return (
            <div class="card">
                <h1 class="card-name">{this.props.giftInfo.gift}</h1>
                <h2 class='item-name'>{this.props.giftInfo.person}</h2>
                <h2 class='price'>{this.props.giftInfo.price}</h2>
                <img class='card-pic' src={this.props.giftInfo.image}></img><br></br>
                <button class='card-button' onClick={this.removeCard}>Gift is Bought</button>

            </div>
        )

    }

}

export default Card