import React from 'react'
import Breadcrumbs from '../../components/ui/Breadcrumbs'
// import deUser from "../../assets/svgs/deactivate-user.svg"
import UserCard from '../../components/ui/UserCard'
import Modal from './Modal'
import PersonalDetails from '../../components/ui/PersonalDetails'
import TransactionsDatatable from '../../components/ui/TransactionsDatatable'
import BlockConfirmationModal from '../../components/ui/BlockConfirmationModal'

const SupplierDetails = () => {
  return (
    <div className="py-1 rounded-lg bg-gray-50">
      <div className='sm:mx-10 mx-5 mt-10 mb-8 flex justify-between sm:flex-row flex-col'>
        <Breadcrumbs home="Suppliers" child="Supplier Details" />
        <div className='flex sm:mt-0 mt-3 sm:ms-0 ms-auto'>
          {/* <Modal /> */}
          <BlockConfirmationModal />
        </div>
      </div>
      {/* <ProviderPersonalDetails /> */}
      <PersonalDetails />
      {/* <ProvideOtherDetails /> */}
      <TransactionsDatatable />
    </div>
  )
}

export default SupplierDetails