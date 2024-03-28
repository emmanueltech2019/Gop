
export default function YourTrip() {
  return (
    <>
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
    </>
  )
}
