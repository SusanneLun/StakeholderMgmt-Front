import React from 'react'

const NewStakeholderForm = () => {


  <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Name
              <input id="username" name="username" type="text" value={this.state.value} onChange={this.handleChange}/>
            </label>
              <label>
                Title
                <input id="title" name="title" type="text" value={this.state.value} onChange={this.handleChange}/>
              </label>
                <label>
                  Alias
                  <input id="alias" name="alias" type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                  <label>
                    Power Rating
                    <input id="power" name="power" type="text" value={this.state.value} onChange={this.handleChange}/>
                  </label>
                <label>
              Interest Rating
                </label>
              <input id="password" name="password" type="password" value={this.state.value} onChange={this.handleChange}/>
            </label>
            <button type="submit"> Save Stakeholder </button>
          </div>
        </form>



  // componentDidMount() {
  //   fetch('http://api.open-notify.org/astros.json')
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({
  //         stakeholder: ,
  //         ratings: xxx
  //       })
  //     })
  // }
}
