import React from "react";
import RegisterComponent from "./RegisterComponent";

const ProfileComponent = () =>
    <div>
        <table>
            <thead>
            <tr>
                <th>Username</th>
                <th>Password</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Role</th>
                <th>&nbsp;</th>
            </tr>

            <tr className="wbdv-form">
                <th><input id="usernameFld" className="form-control wbdv-username-fld"
                           placeholder="Username"/></th>
                <th><input id="passwordFld" className="form-control wbdv-password-fld"
                           placeholder="Password"/></th>
                <th><input id="firstNameFld" className="form-control wbdv-first-fld"
                           placeholder="First Name"/></th>
                <th><input id="lastNameFld" className="form-control wbdv-last-fld"
                           placeholder="Last Name"/></th>
                <th><select id="roleFld" className="form-control wbdv-role-fld">
                    <option value="FACULTY">Faculty</option>
                    <option value="STUDENT">Student</option>
                    <option value="ADMIN">Admin</option>
                </select></th>
                <th><span className="float-right" >
            <button className="wbdv-add-btn btn"><i className="fa-2x fa fa-plus wbdv-create"></i></button>
             <button className="wbdv-update-btn btn"><i className="fa-2x fa fa-check wbdv-update"></i></button>
        </span></th>
            </tr>

            </thead>


            <tbody className="wbdv-tbody">
            <tr className="wbdv-user-row-template wbdv-template wbdv-user wbdv-hidden">
                <td className="wbdv-username">alice</td>
                <td className="wbdv-password">****</td>
                <td className="wbdv-first-name">Alice</td>
                <td className="wbdv-last-name">Wonderland</td>
                <td className="wbdv-role">Faculty</td>
                <td className="wbdv-controls">
            <span className="float-right">

            <button className="wbdv-delete btn"><i id="wbdv-remove"
                                                   className="fa-2x fa fa-times wbdv-remove"></i></button>
            <button className="wbdv-edit btn"> <i id="wbdv-edit" className="fa-2x fa fa-pencil wbdv-edit"></i></button>
            </span>
                </td>
            </tr>
            </tbody>
        </table>
    </div>

export default ProfileComponent
