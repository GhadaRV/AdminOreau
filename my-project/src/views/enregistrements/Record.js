//Visusalisation des détails d'un seul enregistrement en cliquant sur sa ligne sur le tableau

import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import MultiPlayer from "./MultiPlayer";
import recordsData from './RecordsData'

const User = ({ match }) => {
  const record = recordsData.find(record => record.id.toString() === match.params.id)
  const recordDetails = record ? Object.entries(record) :
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

  return (
    <CRow>
      <CCol lg={12}>
        <CCard>
          <CCardHeader>
            Id de l'enregistrement: {match.params.id}
          </CCardHeader>
          <CCardBody>
            <table className="table table-striped table-hover">
              <tbody>
                {
                  recordDetails.map(([key, value], index) => {
                    return (
                      <tr key={index.toString()}>
                        <td>{`${key}:`}</td>

                        {key == 'audio' ? <MultiPlayer
                          urls={[
                            `${value}`
                          ]}
                        /> : <td><strong>{value}</strong></td>}

                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default User
