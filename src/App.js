import React from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items";
import Item from "./components/Item";



class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            items: [
                {
                    id:1,
                    title:'Kebab de pui',
                    img: 'pui.jpg',
                    desc:'Tasty kebab',
                    category:'fast-food',
                    price:'70 MDL'
                },
                {
                    id:2,
                    title:'Kebab de vita',
                    img: 'vita.png',
                    desc:'Tasty kebab',
                    category:'fast-food',
                    price:'75 MDL'
                },
                {
                    id:3,
                    title: 'Pita de pui',
                    img:'pita.jpg',
                    desc:'Pita de pui',
                    category:'fast-food',
                    price:'65 MDL'
                }




            ]
        }
        this.addToOrder = this.addToOrder.bind(this)
    }
    render() {

        return (
      <div className="wrapper">
       <Header orders={this.state.orders} />
          <Items items={this.state.items} onAdd={this.addToOrder}/>
          <Footer />
      </div>
  )
}
 addToOrder(item) {
        let isInArray = false
        this.state.orders.forEach(el => {
            if (el.id === item.id)
                isInArray = true
        })
        if (!isInArray)
        this.setState({orders: [...this.state.orders, item]})

 }
}
export default App;
