import { Spinner } from '@chakra-ui/react'

interface loadingProps {
  loading: boolean
}


function Loading({ loading }: loadingProps) {
  return (
    <>
      {loading &&
        (
          <div className="container text-center justify-content-center">
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='purple.400'
              size='xl'
            />
          </div>
        )
      }
    </>
  );
}

export { Loading }