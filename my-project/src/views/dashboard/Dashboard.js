//Page pour visualiser le dashboard : Tableau de bord

import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Component } from 'react';
import MainChartExample from '../charts/MainChartExample.js'
import acceptedRecords from './CorpusData'
import usersData from '../users/UsersData'
const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      countUsers: 0,
      countAcceptedRecords: 0,
      nbFemales: 0,
      perFemales: 0,
      nbMales: 0,
      perMales: 0,
      nbLocuteurs: 0,
      nbAnnotatuers: 0,
      nbrAnnoté: 0,
      perCorpusAnnoté: 0,
      nbrNonAnnoté: 0,
      perCorpusNonAnnoté: 0,
      newUsers: 0,
      lazyUsers: 0
    }

  }

  componentDidMount() {

    //Récupération de la liste des utilisateurs
    var obj = usersData;


    // var count = {usersData}.length;
    var keys = Object.keys(obj);
    var count = keys.length


    var count = keys.length
    console.log('This is your list 2', usersData);
    console.log('This is your list length2', count);

    this.setState({ countUsers: count });
    /************************************************************************* */

    //Récupération de la liste des utilisateurs féminins

    var filteredFemale = [];
    var nbrFemale = 0;
    var perFemales = 0;
    for (var i = 0; i < usersData.length; i++) {
      if (usersData[i].genre.startsWith('F')) {
        filteredFemale.push(usersData[i]);
      }
    }
    nbrFemale = filteredFemale.length;
    this.setState({ nbrFemale: nbrFemale });
    perFemales = (nbrFemale / count) * 100;
    this.setState({ perFemales: perFemales });
    console.log('females', nbrFemale);

    /************************************************************************* */
    //Récupération de la liste des utilisateurs masculins

    var filteredMale = [];
    var nbrMale = 0;
    var perMales = 0;
    for (var i = 0; i < usersData.length; i++) {
      if (usersData[i].genre.startsWith('H')) {
        filteredMale.push(usersData[i]);
      }
    }
    nbrMale = filteredMale.length;
    this.setState({ nbrMale: nbrMale });
    perMales = (nbrMale / count) * 100;
    this.setState({ perMales: perMales });
    console.log('Males', nbrMale);

    /************************************************************************* */

    //Récupération de la liste des annotateurs

    var filteredAnnotateurs = [];
    var nbrAnnotateurs = 0;
    for (var i = 0; i < usersData.length; i++) {
      if (usersData[i].role.startsWith('a')) {
        filteredAnnotateurs.push(usersData[i]);
      }
    }
    nbrAnnotateurs = filteredAnnotateurs.length;
    this.setState({ nbrAnnotateurs: nbrAnnotateurs });
    console.log('Annotateurs', nbrAnnotateurs);


    /************************************************************************* */
    //Récupération de la liste des locuteurs

    var filteredLocuteurs = [];
    var nbrLocuteurs = 0;
    for (var i = 0; i < usersData.length; i++) {
      if (usersData[i].role.startsWith('l')) {
        filteredLocuteurs.push(usersData[i]);
      }
    }
    nbrLocuteurs = filteredLocuteurs.length;
    this.setState({ nbrLocuteurs: nbrLocuteurs });
    console.log('Locuteurs', nbrLocuteurs);

    /************************************************************************* */
    //Récupération de la liste des enregistrements acceptés
    var obj = acceptedRecords;


    var key = Object.keys(obj);
    var countacceptedRecords = key.length;

    this.setState({ countAcceptedRecords: countacceptedRecords });
    /********************************************************************/
    //Récupération de la pourcentage du corpus annoté

    var x = [];
    var nbrAnnoté = 0;
    var perCorpusAnnoté = 0;
    for (var i = 0; i < acceptedRecords.length; i++) {
      if (acceptedRecords[i].etat.startsWith('A')) {
        x.push(acceptedRecords[i]);
      }
    }
    nbrAnnoté = x.length;
    this.setState({ nbrAnnoté: nbrAnnoté });
    console.log('nbrAnnoté', nbrAnnoté);
    perCorpusAnnoté = Math.round((nbrAnnoté / countacceptedRecords) * 100);
    this.setState({ perCorpusAnnoté: perCorpusAnnoté });
    console.log('perAnnoté', perCorpusAnnoté);

    /********************************************************************/

    //Récupération de la pourcentage du corpus non annoté
    var y = [];
    var nbrNonAnnoté = 0;
    var perCorpusNonAnnoté = 0;
    for (var i = 0; i < acceptedRecords.length; i++) {
      if (acceptedRecords[i].etat.startsWith('N')) {
        y.push(acceptedRecords[i]);
      }
    }
    nbrNonAnnoté = y.length;
    this.setState({ nbrNonAnnoté: nbrNonAnnoté });
    console.log('nbrNonAnnoté', nbrNonAnnoté);
    perCorpusNonAnnoté = Math.round((nbrNonAnnoté / countacceptedRecords) * 100);
    this.setState({ perCorpusNonAnnoté: perCorpusNonAnnoté });
    console.log('perNonAnnoté', perCorpusNonAnnoté);

    /********************************************************************/

    //Récupération de la liste des nouveaux utilisateurs
    var newUsersList = [];
    var t = new Date()
    var today = t.getFullYear() + '-' + (t.getMonth() + 1) + '-' + t.getDate();


    for (var i = 0; i < usersData.length; i++) {
      var t = new Date()
      var today = t.getFullYear() + '-' + (t.getMonth() + 1) + '-' + t.getDate();
      var mysqlDate = new Date(usersData[i].date_inscription);
      var now = mysqlDate.getFullYear() + '-' + (mysqlDate.getMonth() + 1) + '-' + mysqlDate.getDate();
      if (now === today) {
        newUsersList.push(usersData[i]);
      }
    }
    console.log('usersData', usersData);
    console.log('newUsersList1', newUsersList);

    var keys2 = Object.keys(newUsersList);
    var count2 = keys2.length;

    var count2 = keys2.length
    console.log('This is your new users list length', count2);

    this.setState({ newUsers: count2 });



    /********************************************************************/
    //Récupération de la liste des utilisateurs qui n'ont pas participé ni dans l'enregistrement ni dans l'annotation
    var noParticipation = [];

    for (var i = 0; i < usersData.length; i++) {
      if (now === today) {
        noParticipation.push(usersData[i]);
      }
    }

    console.log('lazyUsersList', noParticipation);

    var keys3 = Object.keys(newUsersList);
    var count3 = keys3.length
    console.log('This is your lazy users list length', count3);

    this.setState({ lazyUsers: count3 });

  }

  render() {
    return (
      <>

        <CCard>

          <CCardHeader>
            <CRow className="text-center">
              <CCol xs="12" md="6" xl="6">

                <CRow>
                  <CCol sm="6">
                    <CCallout color="info">
                      <small className="text-muted">Corpus annoté</small>
                      <br />
                      <strong className="h4">{this.state.perCorpusAnnoté}%</strong>
                    </CCallout>
                  </CCol>
                  <CCol sm="6">
                    <CCallout color="danger">
                      <small className="text-muted">Corpus non annoté</small>
                      <br />
                      <strong className="h4">{this.state.perCorpusNonAnnoté}%</strong>
                    </CCallout>
                  </CCol>
                </CRow>




              </CCol>


            </CRow>

          </CCardHeader>
        </CCard>

        <CCard>
          <CCardFooter>
            <CRow>
              <CCol md sm="12" className="mb-sm-2 mb-0">
                <div className="text-muted">Nombre Total</div>
                <strong> {this.state.countUsers} Utilisateurs</strong>
                <CProgress
                  className="progress-xs mt-2"
                  precision={1}
                  color="success"
                  value={100}
                />
              </CCol>

              <CCol md sm="12" className="mb-sm-2 mb-0">
                <div className="text-muted">Sans Participation</div>
                <strong>2 Utilisateurs </strong>
                <CProgress
                  className="progress-xs mt-2"
                  precision={1}
                  color="warning"
                  value={20}
                />
              </CCol>
              <CCol md sm="12" className="mb-sm-2 mb-0">
                <div className="text-muted">Nouveaux Utilisateurs</div>
                <strong>{this.state.newUsers} Utilisateurs </strong>
                <CProgress
                  className="progress-xs mt-2"
                  precision={1}
                  color="danger"
                  value={10}
                />
              </CCol>

            </CRow>
          </CCardFooter>
        </CCard>
        <WidgetsDropdown />

        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>
                Corpus
            </CCardHeader>
              <CCardBody>
                <CRow>


                  <CCol xs="12" md="6" xl="6">

                    <CRow>
                      <CCol sm="6">
                        <CCallout color="warning">
                          <small className="text-muted">Utilisateurs</small>
                          <br />
                          <strong className="h4">{this.state.countUsers}  </strong>
                        </CCallout>
                      </CCol>

                    </CRow>

                    <hr className="mt-0" />

                    <div className="progress-group mb-4">
                      <div className="progress-group-header">
                        <CIcon className="progress-group-icon" name="cil-user" />
                        <span className="title">Homme</span>
                        <span className="ml-auto font-weight-bold">{this.state.perMales}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress className="progress-xs" color="warning" value={this.state.perMales} />
                      </div>
                    </div>
                    <div className="progress-group mb-5">
                      <div className="progress-group-header">
                        <CIcon className="progress-group-icon" name="cil-user-female" />
                        <span className="title">Femme</span>
                        <span className="ml-auto font-weight-bold">{this.state.perFemales}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress className="progress-xs" color="warning" value={this.state.perFemales} />
                      </div>
                    </div>




                  </CCol>
                </CRow>

                <br />



              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    )
  }
}
export default Dashboard
