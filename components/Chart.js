import React from 'react';

class Chart extends React.Component {
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
        <div className="theChart" id="theChart" ref="theChart"></div>
      </>
    )
  }
}

export default Chart;
