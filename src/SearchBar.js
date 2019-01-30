import React from 'react'
import { Input } from 'semantic-ui-react'

const SearchBar = props =>
<div id="chart-page">
<Input size='big' icon="search" style={{width: 300, margin: 60}} placeholder="Search Stakeholder..." onChange={event => props.updateFilter(event.target.value)}/>
</div>

export default SearchBar
