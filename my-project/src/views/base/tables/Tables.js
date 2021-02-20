import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import MultiPlayer from "../../enregistrements/MultiPlayer";
//import usersData from '../../users/UsersData'
import recordsData from '../../enregistrements/RecordsData'


/*  <CBadge color={getBadge(item.status)}>
                          {item.status}
                        </CBadge>*/

const getBadge = etat => {
  switch (etat) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
//const fields = ['Nom','Genre', 'Pays' , 'Ville', 'Tranche d âge', 'Rôle', 'Langue Maternelle']
const fields = ['Durée', 'Date', 'Audio', 'Etat', 'Action']


const Tables = () => {
  return (
    <>
      <CRow>
        <CCol xs="12" lg="6">
          <CCard>
            <CCardHeader>
              Simple Table
              <DocsLink name="CModal" />
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={recordsData}
                fields={fields}
                itemsPerPage={5}
                pagination
                scopedSlots={{
                  'audio':
                    (item) => (
                      <td>


                        <MultiPlayer
                          urls={[
                            "http://localhost:8080/Uploads/1.mp3"
                          ]}
                        />
                      </td>
                    )

                }}
              />
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12" lg="6">
          <CCard>
            <CCardHeader>
              Striped Table
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={recordsData}
                fields={fields}
                striped
                itemsPerPage={5}
                pagination
                scopedSlots={{
                  'audio':
                    (item) => (
                      <td>


                        <MultiPlayer
                          urls={[
                            "http://localhost:8080/Uploads/1.mp3"
                          ]}
                        />
                      </td>
                    )

                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow>

        <CCol xs="12" lg="6">
          <CCard>
            <CCardHeader>
              Condensed Table
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={recordsData}
                fields={fields}
                size="sm"
                itemsPerPage={5}
                pagination
                scopedSlots={{
                  'audio':
                    (item) => (
                      <td>


                        <MultiPlayer
                          urls={[
                            "http://localhost:8080/Uploads/1.mp3"
                          ]}
                        />
                      </td>
                    )

                }}
              />
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12" lg="6">
          <CCard>
            <CCardHeader>
              Bordered Table
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={recordsData}
                fields={fields}
                bordered
                itemsPerPage={5}
                pagination
                scopedSlots={{
                  'audio':
                    (item) => (
                      <td>


                        <MultiPlayer
                          urls={[
                            "http://localhost:8080/Uploads/1.mp3"
                          ]}
                        />
                      </td>
                    )

                }}
              />
            </CCardBody>
          </CCard>
        </CCol>

      </CRow>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Combined All Table
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={recordsData}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={10}
                pagination
                scopedSlots={{
                  'audio':
                    (item) => (
                      <td>


                        <MultiPlayer
                          urls={[
                            "http://localhost:8080/Uploads/1.mp3"
                          ]}
                        />
                      </td>
                    )
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Combined All dark Table
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={recordsData}
                fields={fields}
                dark
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={10}
                pagination
                scopedSlots={{
                  'status':
                    (item) => (
                      <td>


                        <MultiPlayer
                          urls={[
                            "http://localhost:8080/Uploads/1.mp3"
                          ]}
                        />
                      </td>
                    )
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Tables
