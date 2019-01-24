import React, { Component } from 'react';
import ProjectContainer from './ProjectContainer'
import SearchBar from "./SearchBar"
import Stakeholder from './Stakeholder'
// import AnyChart from "./AnyChart"



// const sData = stakeholderData.map(function(projects) {
//   return projects.name;
// })


class App extends Component {
constructor() {
  super()
    this.state = {
      stakeholders: [],
      filter: '',
      selectedStakeholder: null
    }
}

updateFilter = newFilter => {
  this.setState({
    filter: newFilter
  })
}

deselectStakeholder = () => {
  this.setState({
    selectedStakeholder: null
  })
}

selectStakeholder = (stakeholder) => {
  this.setState({
    selectedStakeholder: stakeholder
  })
}




handleRating = (stakeholder, newRatings) => {

  // let newRating = { // add a new ratings object
  //   ...newRatings, // first take all the new ratings we got passed as arguments
  //   ...stakeholder.ratings[ // fill it with any other ratings we had in the past
  //     stakeholder.ratings.length-1 // the latest rating is at the last index in the array
  //   ]
  // }


 let newRating = {
   power: newRatings.power === "" ? stakeholder.ratings[stakeholder.ratings.length - 1].power : newRatings.power,
   interest: newRatings.interest === "" ? stakeholder.ratings[stakeholder.ratings.length - 1].interest : newRatings.interest,
   positivity: 1,
   stakeholder_id: 1
 }

  // delete newRating.id
  // delete newRating.created_at
  // delete newRating.updated_at


  fetch(`http://localhost:3000/stakeholders/${stakeholder.id}/ratings`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify( newRating ),
}).then(res => res.json())
  .then(stakeholderToUpdate => {
    // clone currrent state
    let newStakeholdersState = [...this.state.stakeholders]
    // find index of stakeholder with stakeholderToUpdate.id
    // console.log(stakeholderToUpdate)
    const indexToUpdate = newStakeholdersState.findIndex(stakeholder => stakeholder.id === stakeholderToUpdate.id)
    // replace that whole stakeholder object with the new stakeholderToUpdate
    newStakeholdersState[indexToUpdate] = stakeholderToUpdate
    this.setState({
      stakeholders: newStakeholdersState
    })
    // set
  })
  // .then(this.setState({
  //   stakeholder: newStakeholdersState
  // }))
}

  // stakeholder.ratings[ratings.length -1].power = newRating
  // this.setState({
  //   stakeholders: newStakeholdersState
  // })
// }


componentDidMount() {
  fetch('http://localhost:3000/stakeholders')
  .then(res => res.json())
  .then(stakeholders => this.setState({ stakeholders: stakeholders}))
}


render() {
return (
      <div className="App">
        <header>
          {!this.state.selectedStakeholder && <SearchBar updateFilter={this.updateFilter}/>}
          {this.state.selectedStakeholder ? <Stakeholder /> :
        <ProjectContainer stakeholders={this.state.stakeholders}
        handleRating={this.handleRating}
        filter={this.state.filter}
        selectStakeholder={this.selectStakeholder}/>}
        </header>
      </div>

    );
  }
}


export default App;



// <img className="App-chart"/>
// <AnyChart
// type="pie"
// data={[1, 2, 3, 4]}
// title="Simple pie chart"/>
