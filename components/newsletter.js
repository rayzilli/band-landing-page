function Contact(){
    return(
<div className="flex flex-col">
  <form
    className="flex flex-col gap-2 p-2 items-center mt-8 mb-12 "
    action="https://averysmallspace.us10.list-manage.com/subscribe/post?u=74c461129153bdccd66c6ccf0&amp;id=47505269d4&amp;f_id=00a4dfe5f0"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    target="_self"
  >
    <h2>Email Updates</h2>
    <input type="email" placeholder="Email address" required />
    <button type="submit">Subscribe</button>
  </form>
</div>


)
}


export default Contact;