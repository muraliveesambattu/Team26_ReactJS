import React, { Component } from 'react'

export default class ImageCom extends Component {
  render() {
    return (
      <div>
        <img src="https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw=" alt="" />
      </div>
    )
  }
  componentWillUnmount(): void {
      console.log("componentWillUnmount will be triggered !!!!")
  }
}
