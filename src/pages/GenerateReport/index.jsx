import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import ReactToPrint from 'react-to-print';
import TransactionsTable from './TransactionsTable';

const GenerateReport = React.forwardRef(() => {
    const { t } = useTranslation();
    const [title, setTitle] = useState('')
    const componentRef = useRef();  // for print

    return (
        <div className="py-1 rounded-lg bg-gray-50">
            <div className='sm:mx-10 mx-5 mt-10 mb-5 flex justify-between items-center flex-wrap gap-3'>
                <div className="bg-gray-50 text-gray-900 font-semibold text-2xl">{t(`${title} Report`)}</div>
                <ReactToPrint
                    trigger={() => <button setIsPrinting={true} className={`bg-colorPrimary items-center justify-between flex hover:bg-opacity-90 text-white py-2 px-5 rounded ltr:ml-auto rtl:mr-auto`}>{t('Generate Report')}</button>}
                    content={() => componentRef.current}
                />
            </div>
            <TransactionsTable title={title} setTitle={setTitle} ref={componentRef} />
        </div>
    )
})

export default GenerateReport