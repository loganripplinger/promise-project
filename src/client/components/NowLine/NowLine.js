import React from 'react';
import { Line, NowLine, NowBlock } from './style'

export default class Event extends React.Component {
  render() {
    const now = this.props.now
    const LineBlock = now ? NowLine : Line

    return (
      <div>
        <LineBlock>
          {
            now ? 
            <NowBlock>NOW</NowBlock> : null
          }
        </LineBlock>
      </div>
    )
  }
}