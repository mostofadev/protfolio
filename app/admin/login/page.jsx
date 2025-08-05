"use client"
import LoginFrom from '@/app/component/admin/login/LoginFrom'
import NoProtectedRouteUser from '@/app/component/route/NoProtectedRouteUser'
import React, { Component } from 'react'

export class page extends Component {
  render() {
    return (
      <NoProtectedRouteUser>
      <LoginFrom />
      </NoProtectedRouteUser>
    )
  }
}

export default page