import React from 'react';
import Link from 'next/link'
import Test from '../components/Test'
class Index extends React.Component {
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
        <Test />
      </>
    )
  }
}

export default Index
