import React, { Component } from 'react';

class Users extends Component{
	render(){
		return (
			<div>
				<h2>Users</h2>
				<ul>
				{
					this.props.users.map((user, index)=>{
						return (
							<li key={index}>{user.firstName}</li>
						);
					})
				}
				</ul>
			</div>
		);
	}
}

export default Users;