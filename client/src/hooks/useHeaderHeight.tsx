import { useMediaQuery } from 'react-responsive'
import { mediaQueries } from '../theme/mediaBreakpoints'

const useHeaderHeight = () => {
  const isMobile = useMediaQuery({
    query: mediaQueries.mobile,
  })

  return isMobile ? 60 : 80
}
export default useHeaderHeight
