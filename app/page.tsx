import Link from "next/link"

  function page() {
    return (
      <div>
        <h1>Landing Page</h1>
        <p>Our community Home page</p>
        <Link href='/about'>About</Link>
      </div>
    )
  }

  export default page