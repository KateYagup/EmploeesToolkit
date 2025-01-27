import React, { Component } from "react";
import { fetchUsersList } from "../usersGateway";
import { connect } from "react-redux";
import { getUsersList } from '../users/users.actions';
import { usersListSelector } from '../users/users.selectors';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'


const baseUrl = 'https://66a0f8b17053166bcabd894e.mockapi.io/api/workers';

export function Data() {
    const users = useSelector((state) => this.state.users);
    const dispatch = useDispatch();

    return (
        <div>
            {users.map(user => (
                <div>{user.name}</div>
            ))}
        </div>
    )
}

export default Data;