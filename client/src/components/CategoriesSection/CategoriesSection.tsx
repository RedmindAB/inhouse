import React, { FunctionComponent, useContext } from 'react'
import { AboutPageContext, AboutPageDataCategory } from '../../pages/about'
import { parseContentfulFileUrl } from '../../util/helpers'
import CategoryCard from '../CategoryCard'
import * as S from './styled'

type Props = {}

const CategoriesSection: FunctionComponent<Props> = () => {
  const { categories } = useContext(AboutPageContext)

  const renderCategory = ({
    description,
    name,
    picture,
  }: AboutPageDataCategory) => (
    <CategoryCard
      key={name}
      name={name}
      description={description.description}
      imageUrl={parseContentfulFileUrl(picture.fixed.srcWebp)}
    />
  )

  return <S.Container>{categories.map(renderCategory)}</S.Container>
}

export default CategoriesSection
