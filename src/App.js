import React from 'react';
import './assets/App.css';

// Components
import Header from './common-component/header';
import SubHeader from './common-component/sub-header';
import Body from './body-component/body-component';


// generate class Product
export class Product {
  constructor(id, name, note) {
    this.id = id ? id : 0;
    this.name = name ? name : "";
    this.note = note ? note : "";
  }

  id;
  name;
  note;
}

export default class App extends React.Component {

  constructor() {
    super();

    // initiate properties for state
    this.state = {
      buyItems: [],
      ownerName: ""
    }

    let item1 = new Product(1, "milk", "Provide drinks");
    let item2 = new Product(2, "foods", "Provide something to eat");

    // bind values to state
    this.state.buyItems.push(item1, item2);

    // The only place where you can assign this.state is the constructor.
    // To assign state outside the constructor, must use setState().
    this.state.ownerName = "Tuan";

  }

  render() {
    return (
      <div className="App">
        <Header />
        <SubHeader name={this.state.ownerName} />
        <SubHeader name="Tuan 2" />
        <h1>Shopping Items</h1>
        <Body item={this.state.buyItems} />
      </div>
    );
  }
}
