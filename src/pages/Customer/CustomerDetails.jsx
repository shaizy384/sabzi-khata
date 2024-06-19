import React, { useEffect, useState } from 'react'
import TransactionsDatatable from '../../components/ui/TransactionsDatatable'
import Breadcrumbs from '../../components/ui/Breadcrumbs'
import PersonalDetails from '../../components/ui/PersonalDetails'
import BlockConfirmationModal from '../../components/ui/BlockConfirmationModal'
import { useDispatch, useSelector } from 'react-redux'
import { getCustomerDetails } from '../../redux/customers/action'
import { useNavigate, useParams } from 'react-router'
import { useTranslation } from 'react-i18next'

const CustomerDetails = () => {
  const { id } = useParams()
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [personId, setPersonId] = useState(null)
  const customer = useSelector((state) => state.customersReducer.getCustomerDetails?.data);

  useEffect(() => {
    if (id !== personId) {
      setPersonId(id)
    }
  }, [id])

  useEffect(() => {
    if (id && personId !== id) {
      dispatch(getCustomerDetails(id))
    }
  }, [id])

  return (
    <div className="py-1 rounded-lg bg-gray-50">
      <div className='md:mx-10 mx-5 mt-10 mb-8 flex gap-3 justify-between flex-wrap md:flex-row flex-col'>
        <Breadcrumbs home="Customers" child="Customer Details" />
        <div className='flex justify-end gap-2 ml-auto'>
          <BlockConfirmationModal id={customer?._id} person={customer} type='customer' />
          {customer?.status === 1 && <button onClick={() => navigate(`/customers/addsale/${customer?._id}`)} className={`bg-colorPrimary items-center justify-between flex hover:bg-opacity-90 text-white py-2 px-5 rounded ml-auto`}>
            {t('Add Sale')}
          </button>}
        </div>
      </div>
      <PersonalDetails person={customer} type='customer' />
      <TransactionsDatatable id={customer?._id} orders={customer?.orders} />
    </div >
  )
}

export default CustomerDetails