import React from 'react'

class Form extends React.Component {
    constructor() {
        super()
    
        this.state = {
          person: null,
          gift: null,
          price: null,
          image:null,
        }
      }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('clicked form button!')
        this.props.addNewCard(this.state)
    }

    handleChange = (e) => {

        let {name, value} = e.target
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }


    render() {
        return (
            <form>
                <input type="text" name="gift" placeholder='gift name' onChange={this.handleChange}/>
                <input type="text" name="person" placeholder='who is it for' onChange={this.handleChange}/>
                <input type="text" name="price" placeholder='enter price' onChange={this.handleChange}/>
                <input type="text" name="image" placeholder='imageUrl' onChange={this.handleChange}/>
                <input onClick={this.handleSubmit} type="submit" value='Add Shopping List'></input>
            </form>
        )
    }


}

export default Form
