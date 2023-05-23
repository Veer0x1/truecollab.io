export default function user({ params }: { params: { username: string } }) {
  return (
    <div>
      <h1>hello {params.username}</h1>
    </div>
  )
}
