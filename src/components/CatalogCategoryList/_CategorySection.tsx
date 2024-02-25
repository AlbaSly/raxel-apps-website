import React from 'react'

import { IAppCatalogCategory } from '../../interfaces'

import CategoryAccountItem from './CategoryAccountItem';


const CategorySection: React.FC<{category: IAppCatalogCategory}> = ({category}) => {
  return (
    <_SectionContainer>
      <_SectionTitle title={category.name}/>
      <_ItemsContainer>
        {
          category.accounts.map((account, i) => <CategoryAccountItem key={i} account={account}/>)
        }
      </_ItemsContainer>
    </_SectionContainer>
  )
}

function _SectionContainer({children}: React.PropsWithChildren<{}>) {
  return (
    <section className='my-16'>{children}</section>
  )
}

function _SectionTitle({title}: React.PropsWithChildren<{title: string}>) {
  return (
    <h3 className='text-4xl underline underline-offset-2 my-6 text-white font-semibold text-center'>{title}</h3>
  )
}

function _ItemsContainer({children}: React.PropsWithChildren<{}>) {
  return (
    <div className='w-11/12 mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {children}
    </div>
  )
}


export default CategorySection;