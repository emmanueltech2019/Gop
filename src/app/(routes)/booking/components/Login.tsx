
import YourTrip from './shared/YourTrip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import Card from './shared/Card'

export default function Login() {
   return (
      <div className='flex flex-col-reverse md:flex-row pb-8'>
         <div className="col flex-1">
            <>
               <YourTrip />
            </>

            <div className='py-8 p border-t border-[rgba(34,34,34,.15)]'>
               <h1 className='font-medium text-[22px] mb-4'>Log in or sign up to book</h1>
               <div className="row border-2 border-[rgb(221,221,221)] rounded-xl">
                  <div className="row relative border-b border-[rgb(221,221,221)]">
                     <label htmlFor='country-code' className='text-sm text-[#717171] leading-none absolute left-[14px] top-[10px]'>country code</label>
                     <select name="country-code" id="country-code" className='w-full pt-[26px] pr-9 pb-[10px] pl-3 rounded-xl focus:outline-[rgb(34,34,34)] bg-white'>
                        <option value="+234">Nigeria (+234)</option>
                        <option value="+235">South (+234)</option>
                        <option value="+236">Africa (+234)</option>
                     </select>
                  </div>
                  <div className="row relative border-t border-[rgb(221,221,221) flex pb-[10px] px-3 pt-[26px]">
                     <label htmlFor='phone' className='text-sm text-[#717171] leading-none absolute left-[14px] top-[10px]'>Phone Number</label>
                     <label htmlFor='phone' className='code'>+234</label>
                     <input type="phone" id='phone' className='w-full outline-none' />
                  </div>
               </div>
               <p className='text-xs pt-2'>We&apos;ll call or text you to confirm your number. Standard message and data rates apply. <button className='font-medium underline'>privacy policy</button></p>
               <button className='w-full my-4 leading-none justify-center items-center flex py-4 px-4 bg-[#DF1462] rounded-lg text-white text-base'>Continue</button>
               <div className='my-4 relative flex justify-center items-center'>
                  <div className='w-full h-[1px] bg-[rgb(221,221,221)] absolute left-0 top-1/2 -z-10'></div>
                  <div className='w-10 bg-white text-center text-sm'>or</div>
               </div>

               <div className='flex gap-4 pb-4'>
                  <div className="col flex-1"><button className='px-[23px] py-[13px] border text-base border-[rgba(31,31,31,.5)] w-full h-full rounded-lg'>G</button></div>
                  <div className="col flex-1"><button className='px-[23px] py-[13px] border text-base border-[rgba(31,31,31,.5)] w-full h-full rounded-lg'>G</button></div>
                  <div className="col flex-1"><button className='px-[23px] py-[13px] border text-base border-[rgba(31,31,31,.5)] w-full h-full rounded-lg'>G</button></div>
               </div>
               <div>
                  <button className='px-[23px] py-[13px] border flex items-center text-base border-[rgba(31,31,31,.5)] w-full h-full rounded-lg leading-none'>
                     <FontAwesomeIcon icon={faEnvelope} className='w-4' />
                     <span className='justify-self-center w-full text-center'>Continue with email</span>
                  </button>
               </div>
            </div>


         </div>
         <div className="col flex-1 relative">
            <Card />
         </div>
      </div>
   )
}
