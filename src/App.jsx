import React from "react";

import "./App.scss";

import TopBar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";

const URL = "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myContacts: [],
      searchFild: "",
    };
  }

  async componentDidMount() {
    const response = await fetch(URL);
    const data = await response.json();
    this.setState({ myContacts: data });
  }

  handleSearchContacts = (e) => this.setState({ searchFild: e.target.value });

  handleSortContacts = (filter) => {
    let contactsSorted = [...this.state.myContacts].sort(
      (contactA, contactB) => {
        if (contactA[filter] > contactB[filter]) return 1;
        if (contactA[filter] < contactB[filter]) return -1;
        return 0;
      }
    );

    this.setState({
      myContacts: contactsSorted,
    });

  }

  handleSortContactsAdmissionDate = (filter) => {
    let contactsSorted = [...this.state.myContacts].sort(
      (contactA, contactB) => {
        let dateA = new Date(contactA[filter]).getTime();
        let dateB = new Date(contactB[filter]).getTime();
        return dateA - dateB;
      }
    );

    this.setState({
      myContacts: contactsSorted,
    });
  }

  render() {

    const { myContacts, searchFild } = this.state;
    const filteredContacts = myContacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchFild.toLowerCase())
    );

    return (
      <div className="app" data-testid="app">

        <TopBar />

        <div className="container">
          <Filters 
            contacts={myContacts}
            handleSearchContacts={this.handleSearchContacts} 
            handleSortContacts={this.handleSortContacts}
            handleSortContactsAdmissionDate={this.handleSortContactsAdmissionDate}> 
          </Filters>
        </div>

        <div className="container">
          <Contacts contacts={filteredContacts}/>
        </div>
  
      </div>
    );
  }
}

export default App;