import React, { useEffect } from 'react'
import Breadcrumbs from '../../components/ui/Breadcrumbs'
import PersonalDetails from '../../components/ui/PersonalDetails'
import TransactionsDatatable from '../../components/ui/TransactionsDatatable'
import BlockConfirmationModal from '../../components/ui/BlockConfirmationModal'
import { getSuppliers } from '../../redux/suppliers/action'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

const SupplierDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const suppliers = useSelector((state) => state.suppliersReducer.getSuppliers?.data);
  let supplier = suppliers?.filter(s => s?.id == id)
  if (supplier?.length > 0) supplier = supplier[0];
  console.log(supplier);
  useEffect(() => {
    if (!suppliers) {
      dispatch(getSuppliers())
    }
  }, [suppliers])
  return (
    <div className="py-1 rounded-lg bg-gray-50">
      <div className='md:mx-10 mx-5 mt-10 mb-8 flex gap-3 justify-between md:flex-row flex-col'>
        <Breadcrumbs home="Suppliers" child="Supplier Details" />
        <div className='flex justify-end sm:mt-0 mt-3 sm:ms-0 ms-auto'>
          {/* <Modal /> */}
          <BlockConfirmationModal id={supplier?.id} person={supplier} type='supplier' />
        </div>
      </div>
      {/* <ProviderPersonalDetails /> */}
      <PersonalDetails person={supplier} type='supplier' />
      {/* <ProvideOtherDetails /> */}
      <TransactionsDatatable />
    </div>
  )
}

export default SupplierDetails