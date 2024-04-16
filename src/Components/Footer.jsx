import './footer.css'

function Footer() {
  return (
    <>
      <div className="footer mt-40 flex justify-center flex-wrap gap-10 py-10 pb-20">
        <div>
          <h1 className="text-xl px-7 py-5 tracking-widest">OFFLINE STORE</h1>
          <a href="#" className="px-7">Find Store Near Me</a>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-xl px-7 py-5 tracking-widest ">GET TO KNOW US</h1>
          <a href="#" className="px-7">Contact us</a>
          <a href="#" className="px-7">FAQ's</a>
          <a href="#" className="px-7">Blogs</a>
          <a href="#" className="px-7">Terms and Conditions</a>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl px-7 py-5 tracking-widest">TRACK OR RETURN/EXCHANGE ORDER</h1>
          <a href="#" className="px-7">Track Order</a>
          <a href="#" className="px-7">Place Return/Exchange Request</a>
          <a href="#" className="px-7">Return Exchange Policy</a>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl px-7 py-5 tracking-widest">CUSTOMER CARE</h1>
          <a href="#" className="px-7">Timing 10am-7pm(Mon-Sat) </a>
          <a href="#" className="px-7">Instagram - @snitch.co.in </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
