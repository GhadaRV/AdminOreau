//Tableau qui contient la liste de tout les enregistrements

import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CButton
} from '@coreui/react'
import axios from "axios";
import recordsData from './RecordsData'
import MultiPlayer from "./MultiPlayer";


const AllRecords = () => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/records?page=${newPage}`)
  }

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  function accepter(e, item) {
    const enr = {
      id: item.id,
      duree: item.duree,
      date: item.date,
      etat: "Accepté",
      locuteur_id: item.locuteur_id
    }
    const jsonUser = JSON.stringify({ enr })
    axios.put('http://localhost:3001/enregistrement-brut', enr).then(res => {
      console.log(res);
      console.log(res.data);
    }).catch(error => console.log(error));
    e.preventDefault();
    alert("L'enregistrement a été accepté. ");

  }


  function refuser(e, item) {
    const enr = {
      id: item.id,
      duree: item.duree,
      date: item.date,
      etat: "Refusé",
      locuteur_id: item.locuteur_id
    }
    const jsonUser = JSON.stringify({ enr })
    axios.put('http://localhost:3001/enregistrement-brut', enr).then(res => {
      console.log(res);
      console.log(res.data);
    }).catch(error => console.log(error));

    e.preventDefault();
    alert("L'enregistrement a été refusé. ");

  }

  return (
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            Les utilisateurs
            <small className="text-muted"> </small>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={recordsData}
              fields={[
                { key: 'id', _classes: 'font-weight-bold' },
                'duree', 'date', 'audio', 'etat', 'action'
              ]}
              hover
              striped
              itemsPerPage={5}
              activePage={page}
              scopedSlots={{
                'audio':
                  (item) => (
                    <td>
                      <MultiPlayer
                        urls={[
                          `${item.audio}`
                        ]}
                      />
                    </td>
                  ),
                'action':
                  (item) => (
                    item.etat === 'Accepté' || item.etat === 'Refusé' ?
                      <div>


                      </div> : <div>
                        <CButton onClick={e => accepter(e, item)} type="submit" size="sm" color="success">Accepter</CButton>
                     &nbsp;&nbsp;&nbsp;

                     <CButton onClick={e => refuser(e, item)} type="submit" size="sm" color="danger">Refuser</CButton>
                      </div>

                  )

              }}
            />
            <CPagination
              activePage={page}
              onActivePageChange={pageChange}
              pages={5}
              doubleArrows={false}
              align="center"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AllRecords
