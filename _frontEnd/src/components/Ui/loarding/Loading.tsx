import gifLoading from '../../../../public/gif.gif'


function Loading() {
  return (
    <div className="container text-center justify-content-center my-5">
      <img src={gifLoading} alt="loading" />
    </div>
  );
}

export { Loading }