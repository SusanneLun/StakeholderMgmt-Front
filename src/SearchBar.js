import React from 'react'
import { Input } from 'semantic-ui-react'

const SearchBar = props =>
<div>
<Input size='big' icon="search" style={{width: 150, margin: 40}} placeholder="Search Stakeholder..." onChange={event => props.updateFilter(event.target.value)}/>
</div>

export default SearchBar
