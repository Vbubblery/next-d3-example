import React from 'react';
import Link from 'next/link'
import Chart from '../components/Chart'

class ChartPage extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  render () {
    return (
      <>
        <Chart />
      </>
    )
  }
}

export default ChartPage
