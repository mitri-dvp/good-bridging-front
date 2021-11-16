function _error({ statusCode }: any) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server D`
        : 'An error occurred on client D'}
    </p>
  )
}

_error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  console.log(statusCode)
  return { statusCode }
}

export default _error
