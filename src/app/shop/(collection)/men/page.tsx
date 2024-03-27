import { shopData } from '@/_lib/shop-data-lib';

import ProductCard from '../../components/product-card';

export default function Men() {
  return shopData
    .filter((category) => category.title === 'Mens')
    .map(({ items }) => (
      <section
        className='flex flex-col bg-white padding-x padding-y'
        key='mens'>
        <h3 className='mb-4 text-heading-mobile-3 lg:text-heading-mobile-3'>
          Mens
        </h3>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {items.map(({ id, imageUrl, name, price }) => (
            <ProductCard
              key={id}
              id={id}
              imageUrl={imageUrl}
              name={name}
              price={price}
            />
          ))}
        </div>
      </section>
    ));
}