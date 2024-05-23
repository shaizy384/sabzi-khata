import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/products/action';

const ViewTransactionModal = ({ sales, date, title }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const filterSales = sales?.filter(sale => sale.created_at.slice(0, 10) === date)
  console.log("filterSales filterSales: ", filterSales);
  const productsData = useSelector((state) => state.productsReducer.getProducts?.data);
  useEffect(() => {
    if (!productsData) {
      dispatch(getProducts())
    }
  }, [productsData])
  const filterProduct = (id) => {
    const product = productsData?.filter(p => p.id == id);
    console.log("product product: ", product, productsData);
    if (product?.length > 0) { return product[0]?.name; };
  }
  const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
      },
    },
    headCells: {
      style: {
        fontWeight: 'bold',
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };
  const columns = [
    {
      name: t('Date'),
      selector: row => row.created_at.slice(0, 10),
    },
    {
      name: t('Product'),
      selector: row => filterProduct(row.product_id),
    },
    {
      name: t('Quantity'),
      selector: row => row.quantity,
    },
    {
      name: t('Amount'),
      selector: row => row.price,
    },
  ];

  const data = [
    {
      id: 1,
      date: "2023-09-05",
      product: "Mango",
      amount: 1500,
      quantity: 3
    },
    {
      id: 2,
      date: "2023-09-05",
      price: "$12.00",
      product: "Onion",
      amount: 1500,
      quantity: 3
    },
    {
      id: 3,
      date: "2023-09-05",
      price: "$12.00",
      product: "Apple",
      amount: 1500,
      quantity: 3
    },
  ]


  const handleCancel = () => {
    setShowModal(false);
    // setSearch("")
  }
  return (
    <>
      <button onClick={() => setShowModal(true)} className='bg-colorPrimary items-center justify-between flex hover:bg-opacity-90 text-white hover:ring-2 hover:ring-colorPrimary ring-inset hover:bg-white hover:text-colorPrimary py-2 px-5 rounded ml-auto'>{t('Details')}</button>
      {showModal ? (
        <>
          <div
            className="justify-center rounded-3xl items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative md:w-2/3 w-[90%] max-h- my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none px-8 pb-4 max-h-[92vh] overflow-hidden">
                {/*header*/}
                <div className="flex items-start rounded-t-3xl justify-center md:px-5 pt-5 pb-5 border-b-2">
                  <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse pt-1.5">
                    <li className="cursor-pointer flex items-center space-x-3 rtl:space-x-reverse text-colorPrimary">
                      <h3 className="font-semibold text-xl leading-tight">{t(`${title} list`)}</h3>
                    </li>
                  </ol>
                  <button className="p- ml-auto bg-transparent -mr[17px] border-0 text-colorPrimary float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={handleCancel}
                  >×</button>
                </div>

                {/*body*/}
                <div className="relative my-6 mx-3 flex-auto overflow-auto">
                  <div className="mt-2 bg-white">
                    <DataTable
                      columns={columns}
                      data={filterSales}
                      pagination
                      selectableRowsHighlight
                      customStyles={customStyles}
                    />
                  </div>
                  {/*footer*/}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null
      }
    </>
  )
}

export default ViewTransactionModal