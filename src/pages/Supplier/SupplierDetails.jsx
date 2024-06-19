import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../components/ui/Breadcrumbs'
import PersonalDetails from '../../components/ui/PersonalDetails'
import TransactionsDatatable from '../../components/ui/TransactionsDatatable'
import BlockConfirmationModal from '../../components/ui/BlockConfirmationModal'
import { getSupplierDetails } from '../../redux/suppliers/action'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { useTranslation } from 'react-i18next'

const SupplierDetails = () => {
  const { id } = useParams()
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [personId, setPersonId] = useState(null)
  const supplier = useSelector((state) => state.suppliersReducer.getSupplierDetails?.data);

  useEffect(() => {
    if (id !== personId) {
      setPersonId(id)
    }
  }, [id])

  useEffect(() => {
    if (id && personId !== id) {
      dispatch(getSupplierDetails(id))
    }
  }, [id])

  return (
    <div className="py-1 rounded-lg bg-gray-50">
      <div className='md:mx-10 mx-5 mt-10 mb-8 flex gap-3 justify-between flex-wrap md:flex-row flex-col'>
        <Breadcrumbs home="Suppliers" child="Supplier Details" />
        <div className='flex justify-end  gap-2 ml-auto'>
          <BlockConfirmationModal id={supplier?._id} person={supplier} type='supplier' />
          {supplier?.status === 1 && <button onClick={() => navigate(`/suppliers/addpurchase/${supplier?._id}`)} className={`bg-colorPrimary items-center justify-between flex hover:bg-opacity-90 text-white py-2 px-5 rounded ml-auto`}>
            {t('Add Purchase')}
          </button>}
        </div>
      </div>
      <PersonalDetails person={supplier} type='supplier' />
      <TransactionsDatatable id={supplier?._id} orders={supplier?.orders} />
    </div>
  )
}

export default SupplierDetails