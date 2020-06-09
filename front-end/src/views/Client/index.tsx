import * as React from 'react'

interface Props {

}

interface State {
  itemText: string
}

class Client extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render(){
    return (
      <div>Client</div>
    )
  }
}

export default Client
