import { useState } from 'react';
import {Spinner} from '@chakra-ui/react'





function Loading() {

  const [loading, setLoading] = useState<boolean>(true);

  // setLoading(false)
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

export {Loading}