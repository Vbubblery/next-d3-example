import React from 'react';
import Link from 'next/link'
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
        <Link href="/about"><a>About</a></Link>
      </>
    )
  }
}

export default Index
