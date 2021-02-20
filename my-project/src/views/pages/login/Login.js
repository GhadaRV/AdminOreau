//accessible sur : http://localhost:3000/#/login

import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import adminData from './AdminData'
import { Component } from 'react';

import { withRouter } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };


    this.handleInputChange = this.handleInputChange.bind(this);
    this.test = this.test.bind(this);
    this.handleInputChange2 = this.handleInputChange2.bind(this);
  }

  handleInputChange(e) {
    // this.setState({ username: e.target.username });
    var value1 = e.target.value;
    var username = this.state.username;
    this.setState({ username: value1 });
    console.log(this.state.username);

  }

  handleInputChange2(e) {
    var value2 = e.target.value;
    var password = this.state.password;
    this.setState({ password: value2 });
    console.log(this.state.password);
  }


  test() {

    var Admin = adminData;

    console.log('Admin', Admin);
    var username = this.state.username;
    var password = this.state.password;
    for (var i = 0; i < adminData.length; i++) {
      if (adminData[i].nomUtilisateur === username && adminData[i].motDePasse === password) {
        console.log('true');
        console.log(this.state.username);
        console.log(this.state.password);
        let path = `/dashboard`;
        this.props.history.push(path);

      } else {
        console.log('false');
        console.log(this.state.username);
        console.log(this.state.password);
        alert('Veuillez vérifier vos paramètres de connexion.');
      }
    }
  }
  render() {
    return (
      <>
        <div className="c-app c-default-layout flex-row align-items-center">
          <CContainer>
            <CRow className="justify-content-center">
              <CCol md="8">
                <CCardGroup>
                  <CCard className="p-4">
                    <CCardBody>
                      <CForm>
                        <h1>Admin Login</h1>
                        <p className="text-muted">Connectez-vous à votre compte OREAU</p>
                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-user" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput type="text" required onChange={this.handleInputChange} placeholder="Nom d'utilisateur" autoComplete="username" />
                        </CInputGroup>
                        <CInputGroup className="mb-4">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-lock-locked" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput type="password" required onChange={this.handleInputChange2} placeholder="Mot de passe" autoComplete="current-password" />
                        </CInputGroup>
                        <CRow>
                          <CCol xs="6">

                            <CButton color="primary" className="px-4" onClick={this.test}> Login</CButton>

                          </CCol>
                          <CCol xs="6" className="text-right">
                            <CButton color="link" className="px-0">Mot de passe perdue?</CButton>
                          </CCol>
                        </CRow>
                      </CForm>
                    </CCardBody>
                  </CCard>

                </CCardGroup>
              </CCol>
            </CRow>
          </CContainer>
        </div>
      </>
    )
  }
}
export default Login
