import Link from 'next/link'

export default function Error() {
  return (
    <h1 className='m-16 text-center text-cool-dark'>
      404 - No Birds here!
      <br />
      <br />
      <Link href='/'>
        <a>{`C 🦩 L 🦜 I 🦢 C K`}</a>
      </Link>
    </h1>
  )
}
