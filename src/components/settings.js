import { useEffect, useContext } from 'react'
import { AppContext } from '_container/context'
import { getCategories } from 'services/jokes.service'
import { Loading } from 'components/commons/loading'
import {
  Wrapper,
  Label,
  Options,
  Option
} from './settings.styles'

export const Settings = () => {
  const [{ categories, settings }, dispatch] = useContext(AppContext)

  const fetchCategories = async () => {
    dispatch({ action: 'categories_get'})
    const payload = await getCategories()
    dispatch({ action: 'categories_set', payload})
  }

  useEffect(() => {
    if (!categories.isFetched)
      fetchCategories()
  }, [])

  const selectCategory = selectedCategory => {
    if(selectedCategory === settings.category)
      return dispatch({ action: 'category_set', payload: '' })
    dispatch({ action: 'category_set', payload: selectedCategory })
  }

  return (
    <Wrapper>
      {categories.isFetching && <Loading />}
      {categories.isFetched && (
        <>
          <Label>Choose jokes category, none select means random</Label>
          <Options>
            {categories.list.map(categoryItem =>
              <Option key={categoryItem} onClick={() => selectCategory(categoryItem)} selected={settings.category === categoryItem}>{ categoryItem }</Option>
            )}
          </Options>
        </>
      )}
    </Wrapper>
  )
}