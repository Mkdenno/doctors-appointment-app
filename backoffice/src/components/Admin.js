import React from 'react'
import AppointmentList from './AppointmentList';

const Admin = ({appointment}) => {


    const appointmentsdata = appointment.map((app) => (
        <AppointmentList id={app.id} app={app} />
      ));
  return (
    <div>
      <h1 className='totalAppointments'>Total number of appointments[<span className='totalcolor'>{appointment.length}</span>]</h1>
        <table>
            <thead>
            <tr>
              <th>Doctor Name</th>
              <th>User Email</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {appointmentsdata}
            </tbody>
          </table>
    </div>
  )
}

export default Admin