import PaymentMethods from './PaymentMethods'

export default function Content() {
    return (
        <div className='flex flex-col-reverse md:flex-row'>
            <div className="col flex-1">
                <h1 className='pb-6 font-medium text-[22px]'>Your trip</h1>
                <div className='payment-details'>
                    <div className='pb-6 flex justify-between'>
                        <div className="col">
                            <h2 className='font-medium text-base'>Date</h2>
                            <span className='month mt-2'>Apr</span> <span className="from">1</span> - <span className='to'>2</span>
                        </div>
                        <div className="col">
                            <button className='font-medium text-base underline'>Edit</button>
                        </div>
                    </div>

                    <div className='pb-6 flex justify-between'>
                        <div className="col">
                            <h2 className='font-medium text-base'>Guest</h2>
                            <span className='to'>2</span> guest
                        </div>
                        <div className="col">
                            <button className='font-medium text-base underline'>Edit</button>
                        </div>
                    </div>
                </div>

                <div className='py-8 border-t border-[rgba(34,34,34,.15)]'>
                    <h1 className='pb-8 font-medium text-[22px]'>Pay with</h1>
                    <div className="payment-methods">
                        <PaymentMethods />
                    </div>
                    <div className='pt-8 mt-8 border-t border-[rgba(34,34,34,.15)]'></div>

                    <div className='py-8 border-t border-[rgba(34,34,34,.15)]'>
                        <h1 className='font-medium text-[22px]'>Message The Host</h1>
                        <p className='text-[14px] font-light'>Share why you're traveling, who's coming with you, and what you love about the space.</p>
                    </div>
                </div>


            </div>
            <div className="col flex-1"></div>
        </div>
    )
}
