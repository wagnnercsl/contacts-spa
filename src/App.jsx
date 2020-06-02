import React from 'react';

import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import Contact from './components/Contact';
import sortArray from './utils/sortArray';

import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      initialContacts: []
    };
    this.updateContacts = this.updateContacts.bind(this);
  }

  updateContacts = (event) => {
      let inputtedName = event.target.value;

      let newContacts = this.state.initialContacts.filter((contact) => {
        return contact.name.toLowerCase().indexOf(inputtedName) !== -1;
      });

      this.setState({
        contacts: newContacts.length > 0 ? newContacts : this.state.initialContacts
      })
  }
  
  sortBy = (field) => { 
    const initialContacts = this.state.initialContacts;
    let sorted = sortArray([...initialContacts], field);
    
    this.setState({contacts: sorted});
  }

  componentDidMount() {
      fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
    .then(res =>  res.json())
    .then(data => {
      this.setState({
        initialContacts: data
      })
    })
    .catch(err => {
      throw(err);
    });
  }

  render() {
    return (
      <div className="app" data-testid="app">
        <Topbar/>

        <Filters updateFilter={this.updateContacts} sortBy={this.sortBy} />

          <Contacts>
            {
              (this.state.contacts ? this.state.contacts : this.state.initialContacts)
              .map((contact, index) => {
                return <Contact
                  key={contact.id}
                  data={contact}
                />
              })
            }
          </Contacts>
      </div>
    )
  }
}

export default App;
