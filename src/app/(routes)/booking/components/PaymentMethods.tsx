import { faCreditCard } from "@fortawesome/free-regular-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function PaymentMethods() {
  return (
    <div><div className="row border border-[rgb(221,221,221)] rounded-xl">
    <div className="row-1 flex justify-between px-6 items-center border-b border-[rgb(221,221,221)]">
        <div className="col flex items-center gap-4">
            <div className="icon">
                <FontAwesomeIcon icon={faCreditCard} className='w-8 text-[rgb(176,176,176)]' />
            </div>
            <h2 className='py-4 leading-none'>Credit or debit card</h2>
        </div>
        <div className="col leading-none">
            <button><FontAwesomeIcon icon={faPlus} className='w-4 text-[rgb(113,113,113)]' /></button>
        </div>
    </div>

    <div className="row-2 flex justify-between px-6 items-center border-b border-[rgb(221,221,221)]">
        <div className="col flex items-center gap-4">
            <div className="icon">
                <FontAwesomeIcon icon={faCreditCard} className='w-8 text-[rgb(176,176,176)]' />
            </div>
            <h2 className='py-4 leading-none'>PayPal</h2>
        </div>
        <div className="col leading-none">
            <button><FontAwesomeIcon icon={faPlus} className='w-4 text-[rgb(113,113,113)]' /></button>
        </div>
    </div>

    <div className="row-3 flex justify-between px-6 items-center">
        <div className="col flex items-center gap-4">
            <div className="icon">
                <FontAwesomeIcon icon={faCreditCard} className='w-8 text-[rgb(176,176,176)]' />
            </div>
            <h2 className='py-4 leading-none'>Google Pay</h2>
        </div>
        <div className="col leading-none">
            <button><FontAwesomeIcon icon={faPlus} className='w-4 text-[rgb(113,113,113)]' /></button>
        </div>
    </div>
</div></div>
  )
}
