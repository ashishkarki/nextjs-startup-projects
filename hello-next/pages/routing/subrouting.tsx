import Link from 'next/link'

function SubroutingPage() {
  return (
    <div className="subrouting">
      <h3>This is sub-page inside routing</h3>

      <Link href="/routing">
        <a>Up to Routing parent</a>
      </Link>

      <style jsx>{`
        .subrouting {
          background-color: lightblue;
          padding: 20px;
          color: green;
          text-align: center;
          margin: 20px;
        }

        .subrouting a {
          color: red;
        }
      `}</style>
    </div>
  )
}

export default SubroutingPage
