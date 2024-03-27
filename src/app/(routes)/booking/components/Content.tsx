import PaymentMethods from './PaymentMethods'
import jamesImg from '@/assets/james-img.jpg'
import Image from 'next/image'

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
                        <h1 className='font-medium text-[22px] mb-4'>Message The Host</h1>
                        <p className='text-[14px] font-light mb-3'>Share why you're traveling, who's coming with you, and what you love about the space.</p>
                        <div className='flex pb-6'>
                            <div className="col flex items-center">
                                <div className="image w-10 h-10 overflow-hidden rounded-full">
                                    <Image src={jamesImg} alt="James Image" className='w-full h-full object-cover' />
                                </div>
                            </div>
                            <div className="col ml-4">
                                <h3 className='text-base font-semibold'>James</h3>
                                <div className='font-light'>Joined in 2016</div>
                            </div>
                        </div>
                        <div className="message">
                            <textarea name="Message-box" rows={5} className='w-full h-full p-2 resize text-base border hover:border-2 border-[rgb(34,34,34)] rounded-lg outline-none bg-white'></textarea>
                        </div>
                    </div>

                    <div className='py-8 border-t border-[rgba(34,34,34,.15)]'>
                        <h1 className='pb-6 font-medium text-[22px]'>Cancellation Policy</h1>
                        <p>This reservation is non-refundable. <button className='font-medium text-base underline'>Learn More</button></p>
                    </div>

                    <div className='py-8 border-t border-[rgba(34,34,34,.15)]'>
                        <h1 className='pb-6 font-medium text-[22px]'>Ground rules</h1>
                        <p>We ask every guest to remember a few simple things about what makes a great guest.</p>
                        <ul>
                            <li>Follow the House rules</li>
                            <li>Treat your Host&apos;s home like your own</li>
                        </ul>
                    </div>
                </div>


            </div>
            <div className="col flex-1"></div>
        </div>
    )
}
