import React, {Component} from 'react'

class Bands extends Component {
  constructor () {
    super()
  }

  constructList() {
    this.props.bands.map((band,index)=><li>{band.name}</li>)
  }

  render() {
    return (
      <ul>

      </ul>
    )
  }
}

export default Bands
