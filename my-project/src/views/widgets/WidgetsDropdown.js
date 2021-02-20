import React from 'react'
import { Component } from 'react';
import usersData from '../users/UsersData'

import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'


class WidgetsDropdown extends Component {
  constructor() {
    super();
    this.state = {
      countUsers: 0,
      nbLocuteurs: 0,
      nbAnnotateurs: 0,
    }

  }

  componentDidMount() {
    var obj = usersData;
    // var count = {usersData}.length;
    var keys = Object.keys(obj);
    var count = keys.length
    var count = keys.length
    console.log('This is your list 2', usersData);
    console.log('This is your list length2', count);

    this.setState({ countUsers: count });


    /************************************************************************* */
    var filteredAnnotateurs = [];
    var nbAnnotateurs = 0;
    for (var i = 0; i < usersData.length; i++) {
      if (usersData[i].role.startsWith('a')) {
        filteredAnnotateurs.push(usersData[i]);
      }
    }
    nbAnnotateurs = filteredAnnotateurs.length;
    this.setState({ nbAnnotateurs: nbAnnotateurs });
    console.log('Annotateurs', nbAnnotateurs);


    /************************************************************************* */
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
  }

  render() {
    return (
      <CRow>
        <CCol sm="6" lg="3">
          <CWidgetDropdown
            color="gradient-primary"
            header={this.state.nbrLocuteurs}
            text="Locuteurs"

          >
            <CDropdown>
              <CDropdownToggle color="transparent">
                <CIcon name="cil-settings" />
              </CDropdownToggle>

            </CDropdown>
          </CWidgetDropdown>
        </CCol>

        <CCol sm="6" lg="3">
          <CWidgetDropdown
            color="gradient-info"
            header={this.state.nbAnnotateurs}
            text="Annotateurs"

          >
            <CDropdown>
              <CDropdownToggle caret={false} color="transparent">
                <CIcon name="cil-location-pin" />
              </CDropdownToggle>

            </CDropdown>
          </CWidgetDropdown>
        </CCol>

        <CCol sm="6" lg="3">
          <CWidgetDropdown
            color="gradient-warning"
            header="1"
            text="Annotateur/Locuteur"

          >
            <CDropdown>
              <CDropdownToggle color="transparent">
                <CIcon name="cil-settings" />
              </CDropdownToggle>

            </CDropdown>
          </CWidgetDropdown>
        </CCol>

        <CCol sm="6" lg="3">
          <CWidgetDropdown
            color="gradient-danger"
            header="0"
            text="Utilisateurs bloqués"

          >
            <CDropdown>
              <CDropdownToggle caret className="text-white" color="transparent">
                <CIcon name="cil-settings" />
              </CDropdownToggle>

            </CDropdown>
          </CWidgetDropdown>
        </CCol>
      </CRow>
    )
  }
}

export default WidgetsDropdown
